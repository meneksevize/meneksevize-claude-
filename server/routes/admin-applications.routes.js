import { Router } from 'express';
import crypto from 'node:crypto';
import { db } from '../db/connection.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();
router.use(requireAdminAuth);

// 0/O ve 1/I gibi karışabilecek karakterler çıkarıldı.
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function generateTrackingCode() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    let code = 'MV-';
    for (let i = 0; i < 6; i += 1) {
      code += CODE_CHARS[crypto.randomInt(CODE_CHARS.length)];
    }
    const existing = db.prepare('SELECT id FROM applications WHERE tracking_code = ?').get(code);
    if (!existing) return code;
  }
  throw new Error('Benzersiz takip kodu üretilemedi.');
}

function parseRow(row) {
  return {
    id: row.id,
    trackingCode: row.tracking_code,
    clientName: row.client_name,
    surname: row.surname,
    email: row.email,
    phone: row.phone,
    countryId: row.country_id,
    visaType: row.visa_type,
    currentStage: row.current_stage,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM applications ORDER BY updated_at DESC').all();
  res.json(rows.map(parseRow));
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM applications WHERE id = ?').get(req.params.id);
  if (!row) {
    res.status(404).json({ error: 'Başvuru bulunamadı.' });
    return;
  }
  const updates = db.prepare('SELECT * FROM application_updates WHERE application_id = ? ORDER BY created_at DESC').all(row.id);
  res.json({
    ...parseRow(row),
    updates: updates.map((u) => ({
      id: u.id, stage: u.stage, note: u.note, createdAt: u.created_at,
    })),
  });
});

router.post('/', (req, res) => {
  const body = req.body ?? {};
  if (!body.clientName?.trim() || !body.surname?.trim()) {
    res.status(400).json({ error: 'Ad ve soyisim zorunludur.' });
    return;
  }

  const trackingCode = generateTrackingCode();
  const stage = body.currentStage || 'on-gorusme';

  const result = db.prepare(`
    INSERT INTO applications (tracking_code, client_name, surname, email, phone, country_id, visa_type, current_stage, updated_at)
    VALUES (@trackingCode, @clientName, @surname, @email, @phone, @countryId, @visaType, @stage, datetime('now'))
  `).run({
    trackingCode,
    clientName: body.clientName.trim(),
    surname: body.surname.trim(),
    email: body.email?.trim() || null,
    phone: body.phone?.trim() || null,
    countryId: body.countryId || null,
    visaType: body.visaType || null,
    stage,
  });

  db.prepare('INSERT INTO application_updates (application_id, stage, note) VALUES (?, ?, ?)')
    .run(result.lastInsertRowid, stage, 'Başvuru oluşturuldu.');

  res.status(201).json({ ok: true, id: result.lastInsertRowid, trackingCode });
});

router.put('/:id', (req, res) => {
  const body = req.body ?? {};
  const current = db.prepare('SELECT * FROM applications WHERE id = ?').get(req.params.id);
  if (!current) {
    res.status(404).json({ error: 'Başvuru bulunamadı.' });
    return;
  }

  db.prepare(`
    UPDATE applications SET client_name = @clientName, surname = @surname, email = @email,
      phone = @phone, country_id = @countryId, visa_type = @visaType, updated_at = datetime('now')
    WHERE id = @id
  `).run({
    id: req.params.id,
    clientName: body.clientName?.trim() || current.client_name,
    surname: body.surname?.trim() || current.surname,
    email: body.email?.trim() || null,
    phone: body.phone?.trim() || null,
    countryId: body.countryId || null,
    visaType: body.visaType || null,
  });

  res.json({ ok: true });
});

router.post('/:id/updates', (req, res) => {
  const body = req.body ?? {};
  const application = db.prepare('SELECT id FROM applications WHERE id = ?').get(req.params.id);
  if (!application) {
    res.status(404).json({ error: 'Başvuru bulunamadı.' });
    return;
  }
  if (!body.stage?.trim()) {
    res.status(400).json({ error: 'Aşama zorunludur.' });
    return;
  }

  db.prepare('INSERT INTO application_updates (application_id, stage, note) VALUES (?, ?, ?)')
    .run(req.params.id, body.stage, body.note?.trim() || null);

  db.prepare("UPDATE applications SET current_stage = ?, updated_at = datetime('now') WHERE id = ?")
    .run(body.stage, req.params.id);

  res.status(201).json({ ok: true });
});

router.delete('/:id', (req, res) => {
  const result = db.prepare('DELETE FROM applications WHERE id = ?').run(req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'Başvuru bulunamadı.' });
    return;
  }
  res.json({ ok: true });
});

export default router;
