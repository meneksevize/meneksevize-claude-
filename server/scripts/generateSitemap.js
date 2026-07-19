import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countries } from '../../src/data/countries.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://meneksevize.com';
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  { loc: '/', priority: '1.0' },
  { loc: '/hakkimizda', priority: '0.6' },
  { loc: '/hizmetler', priority: '0.8' },
  { loc: '/e-vize', priority: '0.7' },
  { loc: '/surec', priority: '0.5' },
  { loc: '/evrak-rehberi', priority: '0.6' },
  { loc: '/sss', priority: '0.5' },
  { loc: '/iletisim', priority: '0.6' },
  { loc: '/blog', priority: '0.6' },
  { loc: '/takip', priority: '0.3' },
  { loc: '/gizlilik-politikasi', priority: '0.3' },
];

function urlEntry(loc, priority) {
  return `  <url>\n    <loc>${SITE_URL}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
}

async function main() {
  const entries = staticPages.map((p) => urlEntry(p.loc, p.priority));

  countries.forEach((country) => {
    entries.push(urlEntry(`/ulkeler/${country.id}`, '0.8'));
    country.types.forEach((type) => {
      entries.push(urlEntry(`/ulkeler/${country.id}/${type}`, '0.65'));
    });
  });

  try {
    const res = await fetch(`${SITE_URL}/api/blog`);
    const posts = await res.json();
    posts.forEach((post) => {
      entries.push(urlEntry(`/blog/${post.slug}`, '0.6'));
    });
    console.log(`${posts.length} blog yazısı sitemap'e eklendi.`);
  } catch (err) {
    console.warn('Blog yazıları alınamadı, sitemap blog olmadan üretiliyor:', err.message);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
  const outPath = path.join(__dirname, '..', '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outPath, xml);
  console.log(`Sitemap oluşturuldu: ${entries.length} URL — ${outPath}`);
}

main();
