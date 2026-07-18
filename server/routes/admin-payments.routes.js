import { Router } from 'express';
import crypto from 'node:crypto';
import { db } from '../db/connection.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';
import { isIyzicoConfigured } from '../lib/iyzico.js';

const router = Router();
router.use(requireAdminAuth);

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function generatePaymentCode() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    let code = 'ODM-';
    for (let i = 0; i < 6; i += 1) {
      code += CODE_CHARS[crypto.randomInt(CODE_CHARS.length)];
    }
    const existing = db.prepare('SELECT id FROM payment_requests WHERE code = ?').get(code);
    if (!existing) return code;
  }
  throw new Error('Benzersiz ödeme kodu üretilemedi.');
}

function parseRow(row) {
  return {
    id: row.id,
    code: row.code,
    clientName: row.client_name,
    email: row.email,
    phone: row.phone,
    description: row.description,
    amount: row.amount,
    currency: row.currency,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    paidAt: row.paid_at,
  };
}

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM payment_requests ORDER BY created_at DESC').all();
  res.json({ iyzicoConfigured: isIyzicoConfigured(), requests: rows.map(parseRow) });
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM payment_requests WHERE id = ?').get(req.params.id);
  if (!row) {
    res.status(404).json({ error: 'Ödeme talebi bulunamadı.' });
    return;
  }
  res.json(parseRow(row));
});

router.post('/', (req, res) => {
  const body = req.body ?? {};
  const amount = Number(body.amount);
  if (!body.clientName?.trim() || !body.description?.trim() || !amount || amount <= 0) {
    res.status(400).json({ error: 'Müşteri adı, açıklama ve geçerli bir tutar zorunludur.' });
    return;
  }

  const code = generatePaymentCode();
  db.prepare(`
    INSERT INTO payment_requests (code, client_name, email, phone, description, amount, currency)
    VALUES (@code, @clientName, @email, @phone, @description, @amount, @currency)
  `).run({
    code,
    clientName: body.clientName.trim(),
    email: body.email?.trim() || null,
    phone: body.phone?.trim() || null,
    description: body.description.trim(),
    amount,
    currency: body.currency?.trim() || 'TRY',
  });

  res.status(201).json({ ok: true, code });
});

router.delete('/:id', (req, res) => {
  const row = db.prepare('SELECT status FROM payment_requests WHERE id = ?').get(req.params.id);
  if (!row) {
    res.status(404).json({ error: 'Ödeme talebi bulunamadı.' });
    return;
  }
  if (row.status === 'paid') {
    res.status(400).json({ error: 'Ödemesi tamamlanmış bir talep silinemez.' });
    return;
  }
  db.prepare('DELETE FROM payment_requests WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

export default router;
