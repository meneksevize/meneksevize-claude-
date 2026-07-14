import { Router } from 'express';
import { db } from '../db/connection.js';

const router = Router();

const MAX_ATTEMPTS = 15;
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

router.post('/track', (req, res) => {
  if (isRateLimited(req.ip)) {
    res.status(429).json({ error: 'Çok fazla deneme yapıldı. Lütfen daha sonra tekrar deneyin.' });
    return;
  }

  const { trackingCode, surname } = req.body ?? {};
  if (!trackingCode?.trim() || !surname?.trim()) {
    res.status(400).json({ error: 'Takip kodu ve soyisim zorunludur.' });
    return;
  }

  const application = db.prepare('SELECT * FROM applications WHERE tracking_code = ? COLLATE NOCASE')
    .get(trackingCode.trim());

  if (!application || application.surname.trim().toLowerCase() !== surname.trim().toLowerCase()) {
    recordAttempt(req.ip);
    res.status(404).json({ error: 'Takip kodu veya soyisim hatalı. Lütfen kontrol edip tekrar deneyin.' });
    return;
  }

  const updates = db.prepare('SELECT * FROM application_updates WHERE application_id = ? ORDER BY created_at ASC')
    .all(application.id);

  res.json({
    clientName: application.client_name,
    countryId: application.country_id,
    visaType: application.visa_type,
    currentStage: application.current_stage,
    updatedAt: application.updated_at,
    updates: updates.map((u) => ({ stage: u.stage, note: u.note, createdAt: u.created_at })),
  });
});

export default router;
