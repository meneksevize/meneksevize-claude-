import { Router } from 'express';
import { db } from '../db/connection.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';
import { sendNotificationEmail } from '../lib/mailer.js';

const router = Router();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/contact', (req, res) => {
  const {
    name, email, phone, targetCountry, message,
  } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ error: 'Ad Soyad, e-posta ve mesaj alanları zorunludur.' });
    return;
  }
  if (!EMAIL_RE.test(email.trim())) {
    res.status(400).json({ error: 'Geçerli bir e-posta adresi girin.' });
    return;
  }

  db.prepare(`
    INSERT INTO contact_submissions (name, email, phone, target_country, message)
    VALUES (?, ?, ?, ?, ?)
  `).run(name.trim(), email.trim(), phone?.trim() || null, targetCountry?.trim() || null, message.trim());

  res.json({ ok: true });

  // Ateşle-ve-unut: yanıt zaten gönderildi, e-posta gecikse/başarısız olsa da
  // public forma hiçbir şekilde yansımaz (bkz. server/lib/mailer.js).
  sendNotificationEmail(
    `Yeni İletişim Formu Başvurusu — ${name.trim()}`,
    [
      `Ad Soyad: ${name.trim()}`,
      `E-posta: ${email.trim()}`,
      phone?.trim() ? `Telefon: ${phone.trim()}` : null,
      targetCountry?.trim() ? `Hedef Ülke: ${targetCountry.trim()}` : null,
      '',
      'Mesaj:',
      message.trim(),
    ].filter(Boolean).join('\n'),
  );
});

router.get('/admin/contacts', requireAdminAuth, (req, res) => {
  const rows = db.prepare('SELECT * FROM contact_submissions ORDER BY created_at DESC').all();
  res.json(rows.map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    targetCountry: row.target_country,
    message: row.message,
    isRead: Boolean(row.is_read),
    createdAt: row.created_at,
  })));
});

router.patch('/admin/contacts/:id', requireAdminAuth, (req, res) => {
  const { isRead } = req.body ?? {};
  const result = db.prepare('UPDATE contact_submissions SET is_read = ? WHERE id = ?')
    .run(isRead ? 1 : 0, req.params.id);

  if (result.changes === 0) {
    res.status(404).json({ error: 'Kayıt bulunamadı.' });
    return;
  }
  res.json({ ok: true });
});

export default router;
