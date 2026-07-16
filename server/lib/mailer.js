import { db } from '../db/connection.js';

const RESEND_API_URL = 'https://api.resend.com/emails';
// Resend hesabı doğrulanmış bir domain olmadan bu adresle gönderim yapar;
// alıcı Resend hesabınıza kayıtlı e-posta olduğu sürece (bu sitede admin
// bildirimleri için geçerli durum) sorunsuz çalışır. İleride meneksevize.com
// domain'i Resend'de doğrulanırsa buradan kendi adresinize geçebilirsiniz.
const DEFAULT_FROM = 'Menekşe Vize Site <onboarding@resend.dev>';

function getSetting(key) {
  return db.prepare('SELECT value FROM site_settings WHERE key = ?').get(key)?.value;
}

// Ateşle-ve-unut: e-posta gönderimi asla çağıran isteği (örn. iletişim formu
// yanıtını) bloklamaz veya bozmaz — her hata burada yutulur.
export async function sendNotificationEmail(subject, text) {
  if (getSetting('email_notifications_enabled') !== 'true') return;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[mailer] RESEND_API_KEY tanımlı değil, e-posta gönderilmedi.');
    return;
  }

  const to = getSetting('email') || process.env.NOTIFICATION_EMAIL;
  if (!to) {
    console.warn('[mailer] Bildirim gönderilecek e-posta adresi (site_settings.email) tanımlı değil.');
    return;
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || DEFAULT_FROM,
        to,
        subject,
        text,
      }),
    });
    if (!res.ok) {
      console.error('[mailer] E-posta gönderilemedi:', res.status, await res.text());
    }
  } catch (err) {
    console.error('[mailer] E-posta gönderilemedi:', err.message);
  }
}
