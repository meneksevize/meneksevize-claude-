import { Router } from 'express';
import { db } from '../db/connection.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();
router.use(requireAdminAuth);

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM site_settings').all();
  const settings = {};
  rows.forEach((row) => { settings[row.key] = row.value; });
  res.json(settings);
});

router.put('/', (req, res) => {
  const body = req.body ?? {};
  const upsert = db.prepare(`
    INSERT INTO site_settings (key, value) VALUES (@key, @value)
    ON CONFLICT (key) DO UPDATE SET value = excluded.value
  `);
  const updateMany = db.transaction((entries) => {
    entries.forEach(([key, value]) => upsert.run({ key, value: String(value ?? '') }));
  });
  updateMany(Object.entries(body));
  res.json({ ok: true });
});

export default router;
