import { Router } from 'express';
import { marked } from 'marked';
import { db } from '../db/connection.js';

const router = Router();
const SUPPORTED_LANGS = new Set(['en', 'ar']);

function pick(row, field, lang) {
  if (SUPPORTED_LANGS.has(lang)) {
    const localized = row[`${field}_${lang}`];
    if (localized) return localized;
  }
  return row[field];
}

// Blog içeriğindeki markdown linkleri ("/ulkeler/almanya" gibi) her zaman
// Türkçe (önek yok) yola işaret eder. EN/AR içerikte bu linkler render
// edilirken doğru dil önekini almazsa kullanıcı dil değiştirmiş olur.
function localizeContentLinks(html, lang) {
  if (!SUPPORTED_LANGS.has(lang)) return html;
  return html.replace(/href="\/(?!\/)/g, `href="/${lang}/`);
}

function parseListRow(row, lang) {
  return {
    id: row.id,
    slug: row.slug,
    title: pick(row, 'title', lang),
    excerpt: pick(row, 'excerpt', lang),
    coverImageUrl: row.cover_image_url,
    publishedAt: row.published_at,
    category: row.category,
  };
}

router.get('/blog', (req, res) => {
  const lang = req.query.lang;
  const rows = db.prepare('SELECT * FROM posts WHERE is_published = 1 ORDER BY published_at DESC').all();
  res.json(rows.map((row) => parseListRow(row, lang)));
});

router.get('/blog/:slug', (req, res) => {
  const lang = req.query.lang;
  const row = db.prepare('SELECT * FROM posts WHERE slug = ? AND is_published = 1').get(req.params.slug);
  if (!row) {
    res.status(404).json({ error: 'Yazı bulunamadı.' });
    return;
  }
  res.json({
    ...parseListRow(row, lang),
    contentHtml: localizeContentLinks(marked.parse(pick(row, 'content', lang)), lang),
  });
});

export default router;
