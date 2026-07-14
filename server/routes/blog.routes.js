import { Router } from 'express';
import { marked } from 'marked';
import { db } from '../db/connection.js';

const router = Router();

function parseListRow(row) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    coverImageUrl: row.cover_image_url,
    publishedAt: row.published_at,
  };
}

router.get('/blog', (req, res) => {
  const rows = db.prepare('SELECT * FROM posts WHERE is_published = 1 ORDER BY published_at DESC').all();
  res.json(rows.map(parseListRow));
});

router.get('/blog/:slug', (req, res) => {
  const row = db.prepare('SELECT * FROM posts WHERE slug = ? AND is_published = 1').get(req.params.slug);
  if (!row) {
    res.status(404).json({ error: 'Yazı bulunamadı.' });
    return;
  }
  res.json({
    ...parseListRow(row),
    contentHtml: marked.parse(row.content),
  });
});

export default router;
