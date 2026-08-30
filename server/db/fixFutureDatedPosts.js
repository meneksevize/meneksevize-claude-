// Tek seferlik düzeltme: seedBlog14.js paketindeki 5 yazı yanlışlıkla
// 2026-09-06 (gelecek bir tarih) olarak yayınlanmıştı — bu, hem Google'a hem
// ziyaretçilere "henüz yayınlanmamış/şüpheli" bir izlenim veriyor. Gerçek
// yayın anına (script'in çalıştığı gün) çekiyoruz.
import { db } from './connection.js';

const SLUGS = [
  'misir-vizesi-basvuru-sureci',
  'guney-afrika-vizesi-basvuru-sureci',
  'tayland-vizesi-basvuru-sureci',
  'vietnam-vizesi-basvuru-sureci',
  'sri-lanka-vizesi-basvuru-sureci',
];

const NOW = new Date().toISOString();

const update = db.prepare(`
  UPDATE posts SET published_at = @publishedAt, updated_at = @publishedAt WHERE slug = @slug
`);

const updateMany = db.transaction((slugs) => {
  let changed = 0;
  slugs.forEach((slug, i) => {
    // Aralarında birer dakika fark olsun ki sıralama bozulmasın.
    const publishedAt = new Date(Date.parse(NOW) - i * 60000).toISOString();
    const result = update.run({ slug, publishedAt });
    if (result.changes > 0) changed += 1;
  });
  return changed;
});

const changed = updateMany(SLUGS);
console.log(`${changed} yazının yayın tarihi bugüne çekildi.`);
