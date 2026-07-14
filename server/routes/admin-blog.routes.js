import { Router } from 'express';
import { db } from '../db/connection.js';
import { requireAdminAuth } from '../middleware/requireAdminAuth.js';

const router = Router();
router.use(requireAdminAuth);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function parseRow(row) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    coverImageUrl: row.cover_image_url,
    isPublished: Boolean(row.is_published),
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM posts ORDER BY created_at DESC').all();
  res.json(rows.map(parseRow));
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!row) {
    res.status(404).json({ error: 'Yazı bulunamadı.' });
    return;
  }
  res.json(parseRow(row));
});

router.post('/', (req, res) => {
  const body = req.body ?? {};
  if (!body.title?.trim() || !body.content?.trim()) {
    res.status(400).json({ error: 'Başlık ve içerik zorunludur.' });
    return;
  }

  const slug = body.slug?.trim() || slugify(body.title);
  const existing = db.prepare('SELECT id FROM posts WHERE slug = ?').get(slug);
  if (existing) {
    res.status(409).json({ error: 'Bu slug zaten kullanılıyor. Farklı bir slug deneyin.' });
    return;
  }

  const isPublished = body.isPublished ? 1 : 0;
  const publishedAt = isPublished ? (body.publishedAt || new Date().toISOString()) : null;

  const result = db.prepare(`
    INSERT INTO posts (slug, title, excerpt, content, cover_image_url, is_published, published_at, updated_at)
    VALUES (@slug, @title, @excerpt, @content, @coverImageUrl, @isPublished, @publishedAt, datetime('now'))
  `).run({
    slug,
    title: body.title.trim(),
    excerpt: body.excerpt?.trim() || null,
    content: body.content.trim(),
    coverImageUrl: body.coverImageUrl?.trim() || null,
    isPublished,
    publishedAt,
  });

  res.status(201).json({ ok: true, id: result.lastInsertRowid });
});

router.put('/:id', (req, res) => {
  const body = req.body ?? {};
  const current = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!current) {
    res.status(404).json({ error: 'Yazı bulunamadı.' });
    return;
  }

  const slug = body.slug?.trim() || slugify(body.title || current.title);
  const slugOwner = db.prepare('SELECT id FROM posts WHERE slug = ? AND id != ?').get(slug, req.params.id);
  if (slugOwner) {
    res.status(409).json({ error: 'Bu slug başka bir yazı tarafından kullanılıyor.' });
    return;
  }

  const isPublished = body.isPublished ? 1 : 0;
  const publishedAt = isPublished ? (current.published_at || new Date().toISOString()) : current.published_at;

  db.prepare(`
    UPDATE posts SET slug = @slug, title = @title, excerpt = @excerpt, content = @content,
      cover_image_url = @coverImageUrl, is_published = @isPublished, published_at = @publishedAt,
      updated_at = datetime('now')
    WHERE id = @id
  `).run({
    id: req.params.id,
    slug,
    title: body.title?.trim() || current.title,
    excerpt: body.excerpt?.trim() || null,
    content: body.content?.trim() || current.content,
    coverImageUrl: body.coverImageUrl?.trim() || null,
    isPublished,
    publishedAt,
  });

  res.json({ ok: true });
});

router.delete('/:id', (req, res) => {
  const result = db.prepare('DELETE FROM posts WHERE id = ?').run(req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'Yazı bulunamadı.' });
    return;
  }
  res.json({ ok: true });
});

export default router;
