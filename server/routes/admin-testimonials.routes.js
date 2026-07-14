import { Router } from 'express';
import { db } from '../db/connection.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();
router.use(requireAdminAuth);

function parseRow(row) {
  return {
    id: row.id,
    name: row.name,
    location: row.location,
    rating: row.rating,
    quote: row.quote,
    isPublished: Boolean(row.is_published),
    sortOrder: row.sort_order,
  };
}

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM testimonials ORDER BY sort_order ASC').all();
  res.json(rows.map(parseRow));
});

router.post('/', (req, res) => {
  const body = req.body ?? {};
  if (!body.name?.trim() || !body.quote?.trim()) {
    res.status(400).json({ error: 'İsim ve yorum metni zorunludur.' });
    return;
  }

  const { maxOrder } = db.prepare('SELECT MAX(sort_order) AS maxOrder FROM testimonials').get();

  const result = db.prepare(`
    INSERT INTO testimonials (name, location, rating, quote, is_published, sort_order)
    VALUES (@name, @location, @rating, @quote, @isPublished, @sortOrder)
  `).run({
    name: body.name.trim(),
    location: body.location?.trim() || null,
    rating: Number(body.rating) || 5,
    quote: body.quote.trim(),
    isPublished: body.isPublished === false ? 0 : 1,
    sortOrder: (maxOrder ?? -1) + 1,
  });

  res.status(201).json({ ok: true, id: result.lastInsertRowid });
});

router.put('/:id', (req, res) => {
  const body = req.body ?? {};
  const result = db.prepare(`
    UPDATE testimonials SET name = @name, location = @location, rating = @rating,
      quote = @quote, is_published = @isPublished
    WHERE id = @id
  `).run({
    id: req.params.id,
    name: body.name?.trim() || '',
    location: body.location?.trim() || null,
    rating: Number(body.rating) || 5,
    quote: body.quote?.trim() || '',
    isPublished: body.isPublished === false ? 0 : 1,
  });

  if (result.changes === 0) {
    res.status(404).json({ error: 'Yorum bulunamadı.' });
    return;
  }
  res.json({ ok: true });
});

router.delete('/:id', (req, res) => {
  const result = db.prepare('DELETE FROM testimonials WHERE id = ?').run(req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'Yorum bulunamadı.' });
    return;
  }
  res.json({ ok: true });
});

export default router;
