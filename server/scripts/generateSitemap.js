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
  { loc: '/vize-reddi', priority: '0.7' },
  { loc: '/on-degerlendirme', priority: '0.6' },
  { loc: '/surec', priority: '0.5' },
  { loc: '/evrak-rehberi', priority: '0.6' },
  { loc: '/sss', priority: '0.5' },
  { loc: '/iletisim', priority: '0.6' },
  { loc: '/blog', priority: '0.6' },
  { loc: '/takip', priority: '0.3' },
  { loc: '/gizlilik-politikasi', priority: '0.3' },
  { loc: '/kullanim-kosullari', priority: '0.3' },
  { loc: '/iptal-iade-politikasi', priority: '0.3' },
];

// Anasayfada "Öne Çıkan Destinasyonlar" olarak vurgulanan, en yoğun başvuru
// alınan ülkeler — sitemap önceliği de bu gerçek iş odağını yansıtsın diye
// diğer ülkelerden daha yüksek tutulur.
const FEATURED_COUNTRY_IDS = ['abd', 'ingiltere', 'kanada', 'dubai'];

// Site üç dilde yayında (bkz. LocaleContext.jsx) — Türkçe önek almaz, EN/AR
// /en ve /ar önekiyle aynı yolu paylaşır. Her temel yol için üç dilin de
// <url> girdisi üretilir; her girdi diğer ikisine ve kendisine xhtml:link
// rel="alternate" ile işaret eder, böylece Google hangi sayfaların birbirinin
// dil karşılığı olduğunu anlar (x-default Türkçe sürüme işaret eder).
const LOCALES = [
  { code: 'tr', prefix: '' },
  { code: 'en', prefix: '/en' },
  { code: 'ar', prefix: '/ar' },
];

function urlEntry(basePath, priority) {
  const alternateLinks = LOCALES
    .map(({ code, prefix }) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}${prefix}${basePath}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${basePath}" />`)
    .join('\n');

  return LOCALES
    .map(({ prefix }) => `  <url>\n    <loc>${SITE_URL}${prefix}${basePath}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n${alternateLinks}\n  </url>`)
    .join('\n');
}

async function main() {
  const entries = staticPages.map((p) => urlEntry(p.loc, p.priority));

  countries.forEach((country) => {
    const isFeatured = FEATURED_COUNTRY_IDS.includes(country.id);
    entries.push(urlEntry(`/ulkeler/${country.id}`, isFeatured ? '0.9' : '0.7'));
    country.types.forEach((type) => {
      entries.push(urlEntry(`/ulkeler/${country.id}/${type}`, isFeatured ? '0.75' : '0.6'));
    });
  });

  let blogCount = 0;
  try {
    const res = await fetch(`${SITE_URL}/api/blog`);
    const posts = await res.json();
    posts.forEach((post) => {
      entries.push(urlEntry(`/blog/${post.slug}`, '0.6'));
    });
    blogCount = posts.length;
    console.log(`${posts.length} blog yazısı sitemap'e eklendi (x3 dil).`);
  } catch (err) {
    console.warn('Blog yazıları alınamadı, sitemap blog olmadan üretiliyor:', err.message);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  const outPath = path.join(__dirname, '..', '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outPath, xml);
  const urlCount = staticPages.length + countries.length + countries.reduce((sum, c) => sum + c.types.length, 0) + blogCount;
  console.log(`Sitemap oluşturuldu: ${urlCount} sayfa × 3 dil = ${urlCount * 3} URL — ${outPath}`);
}

main();
