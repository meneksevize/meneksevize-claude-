import { Router } from 'express';
import { db } from '../db/connection.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();
router.use(requireAdminAuth);

function parseRow(row) {
  return {
    id: row.id,
    group: row.group_title,
    question: row.question,
    answer: row.answer,
    sortOrder: row.sort_order,
    openDefault: Boolean(row.is_open_default),
  };
}

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM faqs ORDER BY sort_order ASC').all();
  res.json(rows.map(parseRow));
});

router.post('/', (req, res) => {
  const body = req.body ?? {};
  if (!body.group?.trim() || !body.question?.trim() || !body.answer?.trim()) {
    res.status(400).json({ error: 'Grup, soru ve cevap zorunludur.' });
    return;
  }

  const { maxOrder } = db.prepare('SELECT MAX(sort_order) AS maxOrder FROM faqs').get();

  const result = db.prepare(`
    INSERT INTO faqs (group_title, question, answer, sort_order, is_open_default)
    VALUES (@group, @question, @answer, @sortOrder, @openDefault)
  `).run({
    group: body.group.trim(),
    question: body.question.trim(),
    answer: body.answer.trim(),
    sortOrder: (maxOrder ?? -1) + 1,
    openDefault: body.openDefault ? 1 : 0,
  });

  res.status(201).json({ ok: true, id: result.lastInsertRowid });
});

router.put('/:id', (req, res) => {
  const body = req.body ?? {};
  const result = db.prepare(`
    UPDATE faqs SET group_title = @group, question = @question, answer = @answer,
      sort_order = @sortOrder, is_open_default = @openDefault
    WHERE id = @id
  `).run({
    id: req.params.id,
    group: body.group?.trim() || '',
    question: body.question?.trim() || '',
    answer: body.answer?.trim() || '',
    sortOrder: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
    openDefault: body.openDefault ? 1 : 0,
  });

  if (result.changes === 0) {
    res.status(404).json({ error: 'SSS maddesi bulunamadı.' });
    return;
  }
  res.json({ ok: true });
});

router.delete('/:id', (req, res) => {
  const result = db.prepare('DELETE FROM faqs WHERE id = ?').run(req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'SSS maddesi bulunamadı.' });
    return;
  }
  res.json({ ok: true });
});

export default router;
