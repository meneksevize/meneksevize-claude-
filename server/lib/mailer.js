import nodemailer from 'nodemailer';
import { db } from '../db/connection.js';

let transporter;

function getTransporter() {
  if (transporter !== undefined) return transporter;

  const { SMTP_USER, SMTP_APP_PASSWORD } = process.env;
  if (!SMTP_USER || !SMTP_APP_PASSWORD) {
    transporter = null;
    return transporter;
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: SMTP_USER, pass: SMTP_APP_PASSWORD },
  });
  return transporter;
}

function getSetting(key) {
  return db.prepare('SELECT value FROM site_settings WHERE key = ?').get(key)?.value;
}

// Ateşle-ve-unut: e-posta gönderimi asla çağıran isteği (örn. iletişim formu
// yanıtını) bloklamaz veya bozmaz — her hata burada yutulur.
export async function sendNotificationEmail(subject, text) {
  if (getSetting('email_notifications_enabled') !== 'true') return;

  const client = getTransporter();
  if (!client) {
    console.warn('[mailer] SMTP_USER / SMTP_APP_PASSWORD tanımlı değil, e-posta gönderilmedi.');
    return;
  }

  const to = getSetting('email') || process.env.SMTP_USER;

  try {
    await client.sendMail({
      from: `Menekşe Vize Site <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
    });
  } catch (err) {
    console.error('[mailer] E-posta gönderilemedi:', err.message);
  }
}
