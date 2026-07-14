import { Router } from 'express';
import { db } from '../db/connection.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();
router.use(requireAdminAuth);

function parseCountryRow(row) {
  return {
    id: row.id,
    flag: row.flag,
    title: row.title,
    homeDescription: row.home_description,
    servicesDescription: row.services_description,
    intro: row.intro,
    region: row.region,
    docsKey: row.docs_key,
    tags: JSON.parse(row.tags),
    types: JSON.parse(row.types),
    quickFacts: JSON.parse(row.quick_facts),
    sortOrder: row.sort_order,
  };
}

function getDocuments(docsKey, types) {
  const rows = db.prepare('SELECT * FROM visa_documents WHERE docs_key = ?').all(docsKey);
  const byType = {};
  rows.forEach((row) => {
    byType[row.type_key] = { items: JSON.parse(row.items), note: row.note };
  });
  const documents = {};
  types.forEach((typeKey) => {
    documents[typeKey] = byType[typeKey] ?? { items: [], note: null };
  });
  return documents;
}

function upsertDocuments(docsKey, documents) {
  if (!documents) return;
  const upsert = db.prepare(`
    INSERT INTO visa_documents (docs_key, type_key, items, note)
    VALUES (@docsKey, @typeKey, @items, @note)
    ON CONFLICT (docs_key, type_key) DO UPDATE SET items = excluded.items, note = excluded.note
  `);
  Object.entries(documents).forEach(([typeKey, entry]) => {
    upsert.run({
      docsKey, typeKey, items: JSON.stringify(entry.items ?? []), note: entry.note || null,
    });
  });
}

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM countries ORDER BY sort_order ASC').all();
  res.json(rows.map(parseCountryRow));
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM countries WHERE id = ?').get(req.params.id);
  if (!row) {
    res.status(404).json({ error: 'Ülke bulunamadı.' });
    return;
  }
  const country = parseCountryRow(row);
  res.json({ ...country, documents: getDocuments(country.docsKey || country.id, country.types) });
});

router.post('/', (req, res) => {
  const body = req.body ?? {};
  const id = body.id?.trim();

  if (!id || !body.title?.trim()) {
    res.status(400).json({ error: 'Ülke id ve başlık zorunludur.' });
    return;
  }

  const existing = db.prepare('SELECT id FROM countries WHERE id = ?').get(id);
  if (existing) {
    res.status(409).json({ error: 'Bu id ile bir ülke zaten var.' });
    return;
  }

  const { maxOrder } = db.prepare('SELECT MAX(sort_order) AS maxOrder FROM countries').get();

  db.prepare(`
    INSERT INTO countries (id, flag, title, home_description, services_description, intro, region, docs_key, tags, types, quick_facts, sort_order)
    VALUES (@id, @flag, @title, @homeDescription, @servicesDescription, @intro, @region, @docsKey, @tags, @types, @quickFacts, @sortOrder)
  `).run({
    id,
    flag: body.flag || '🏳️',
    title: body.title.trim(),
    homeDescription: body.homeDescription || null,
    servicesDescription: body.servicesDescription || null,
    intro: body.intro || null,
    region: body.region || 'diger',
    docsKey: body.docsKey || null,
    tags: JSON.stringify(body.tags ?? []),
    types: JSON.stringify(body.types ?? []),
    quickFacts: JSON.stringify(body.quickFacts ?? []),
    sortOrder: (maxOrder ?? -1) + 1,
  });

  upsertDocuments(body.docsKey || id, body.documents);

  res.status(201).json({ ok: true, id });
});

router.put('/:id', (req, res) => {
  const body = req.body ?? {};
  const existing = db.prepare('SELECT id FROM countries WHERE id = ?').get(req.params.id);
  if (!existing) {
    res.status(404).json({ error: 'Ülke bulunamadı.' });
    return;
  }

  db.prepare(`
    UPDATE countries SET
      flag = @flag, title = @title, home_description = @homeDescription,
      services_description = @servicesDescription, intro = @intro, region = @region,
      docs_key = @docsKey, tags = @tags, types = @types, quick_facts = @quickFacts
    WHERE id = @id
  `).run({
    id: req.params.id,
    flag: body.flag || '🏳️',
    title: body.title?.trim() || '',
    homeDescription: body.homeDescription || null,
    servicesDescription: body.servicesDescription || null,
    intro: body.intro || null,
    region: body.region || 'diger',
    docsKey: body.docsKey || null,
    tags: JSON.stringify(body.tags ?? []),
    types: JSON.stringify(body.types ?? []),
    quickFacts: JSON.stringify(body.quickFacts ?? []),
  });

  upsertDocuments(body.docsKey || req.params.id, body.documents);

  res.json({ ok: true });
});

router.delete('/:id', (req, res) => {
  const result = db.prepare('DELETE FROM countries WHERE id = ?').run(req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'Ülke bulunamadı.' });
    return;
  }
  res.json({ ok: true });
});

export default router;
