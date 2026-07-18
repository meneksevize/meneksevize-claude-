import { Router } from 'express';
import express from 'express';
import { db } from '../db/connection.js';
import {
  isIyzicoConfigured, initializeCheckoutForm, retrieveCheckoutForm, Iyzipay,
} from '../lib/iyzico.js';

const router = Router();

const MAX_ATTEMPTS = 30;
const WINDOW_MS = 15 * 60 * 1000;
const attempts = new Map();

function isRateLimited(ip) {
  const entry = attempts.get(ip);
  if (!entry) return false;
  if (Date.now() > entry.resetAt) {
    attempts.delete(ip);
    return false;
  }
  return entry.count >= MAX_ATTEMPTS;
}

function recordAttempt(ip) {
  const entry = attempts.get(ip) ?? { count: 0, resetAt: Date.now() + WINDOW_MS };
  entry.count += 1;
  attempts.set(ip, entry);
}

function getRequestByCode(code) {
  return db.prepare('SELECT * FROM payment_requests WHERE code = ? COLLATE NOCASE').get(code);
}

function publicView(row) {
  return {
    code: row.code,
    clientName: row.client_name,
    description: row.description,
    amount: row.amount,
    currency: row.currency,
    status: row.status,
  };
}

router.get('/public/:code', (req, res) => {
  const row = getRequestByCode(req.params.code);
  if (!row) {
    res.status(404).json({ error: 'Ödeme talebi bulunamadı.' });
    return;
  }
  res.json({ ...publicView(row), iyzicoConfigured: isIyzicoConfigured() });
});

router.post('/public/:code/initialize', async (req, res) => {
  if (isRateLimited(req.ip)) {
    res.status(429).json({ error: 'Çok fazla deneme yapıldı. Lütfen daha sonra tekrar deneyin.' });
    return;
  }
  recordAttempt(req.ip);

  if (!isIyzicoConfigured()) {
    res.status(503).json({ error: 'Ödeme sistemi henüz aktif değil. Lütfen bizimle iletişime geçin.' });
    return;
  }

  const row = getRequestByCode(req.params.code);
  if (!row) {
    res.status(404).json({ error: 'Ödeme talebi bulunamadı.' });
    return;
  }
  if (row.status === 'paid') {
    res.status(400).json({ error: 'Bu ödeme zaten tamamlanmış.' });
    return;
  }

  const body = req.body ?? {};
  const identityNumber = body.identityNumber?.trim() || '11111111111';
  const address = body.address?.trim();
  const city = body.city?.trim();
  if (!address || !city) {
    res.status(400).json({ error: 'Adres ve şehir zorunludur.' });
    return;
  }

  db.prepare(`
    UPDATE payment_requests
    SET buyer_identity_number = @identityNumber, buyer_address = @address, buyer_city = @city, updated_at = datetime('now')
    WHERE id = @id
  `).run({
    id: row.id, identityNumber, address, city,
  });

  const siteUrl = process.env.SITE_URL || `${req.protocol}://${req.get('host')}`;
  const [firstName, ...rest] = row.client_name.trim().split(' ');
  const lastName = rest.join(' ') || firstName;

  try {
    const result = await initializeCheckoutForm({
      locale: Iyzipay.LOCALE.TR,
      conversationId: String(row.id),
      price: row.amount.toFixed(2),
      paidPrice: row.amount.toFixed(2),
      currency: Iyzipay.CURRENCY[row.currency] || Iyzipay.CURRENCY.TRY,
      basketId: row.code,
      paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
      callbackUrl: `${siteUrl}/api/payments/public/${row.code}/callback`,
      buyer: {
        id: `buyer-${row.id}`,
        name: firstName,
        surname: lastName,
        gsmNumber: row.phone || undefined,
        email: row.email || 'bilgi@meneksevize.com',
        identityNumber,
        registrationAddress: address,
        ip: req.ip,
        city,
        country: 'Turkey',
      },
      shippingAddress: {
        contactName: row.client_name,
        city,
        country: 'Turkey',
        address,
      },
      billingAddress: {
        contactName: row.client_name,
        city,
        country: 'Turkey',
        address,
      },
      basketItems: [{
        id: row.code,
        name: row.description.slice(0, 100),
        category1: 'Danışmanlık Hizmeti',
        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
        price: row.amount.toFixed(2),
      }],
    });

    db.prepare("UPDATE payment_requests SET iyzico_token = ?, updated_at = datetime('now') WHERE id = ?")
      .run(result.token, row.id);

    res.json({ checkoutFormContent: result.checkoutFormContent, paymentPageUrl: result.paymentPageUrl });
  } catch (err) {
    console.error('[payments] iyzico initialize hatası:', err.message);
    res.status(502).json({ error: 'Ödeme formu başlatılamadı. Lütfen daha sonra tekrar deneyin.' });
  }
});

// iyzico bu adrese müşterinin tarayıcısından, ödeme sonucunu içeren bir
// x-www-form-urlencoded POST ile geri döner (server-to-server değil).
router.post('/public/:code/callback', express.urlencoded({ extended: true }), async (req, res) => {
  const row = getRequestByCode(req.params.code);
  const token = req.body?.token;

  if (!row || !token) {
    res.redirect(`/odeme/${req.params.code}/sonuc?durum=hata`);
    return;
  }

  try {
    const result = await retrieveCheckoutForm(token);
    if (result?.paymentStatus === 'SUCCESS') {
      db.prepare(`
        UPDATE payment_requests
        SET status = 'paid', iyzico_payment_id = ?, paid_at = datetime('now'), updated_at = datetime('now')
        WHERE id = ?
      `).run(result.paymentId, row.id);
      res.redirect(`/odeme/${row.code}/sonuc?durum=basarili`);
    } else {
      db.prepare("UPDATE payment_requests SET status = 'failed', updated_at = datetime('now') WHERE id = ?")
        .run(row.id);
      res.redirect(`/odeme/${row.code}/sonuc?durum=basarisiz`);
    }
  } catch (err) {
    console.error('[payments] iyzico callback doğrulama hatası:', err.message);
    res.redirect(`/odeme/${row.code}/sonuc?durum=hata`);
  }
});

export default router;
