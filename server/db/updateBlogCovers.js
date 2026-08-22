// Kapak görseli olmayan 5 blog yazısına tematik kapak atar. Yazı listesi
// kartlarında ve og:image link önizlemelerinde (WhatsApp vb.) görselsiz
// kalan tek yazı grubuydu. ABD/İngiltere yazıları için Unsplash'ten
// doğrulanmış ülke görselleri, ülkesiz konular için sitenin kendi fotoğraf
// setinden (public/photos) tutarlı seçimler kullanıldı.
import { db } from './connection.js';

const covers = {
  'abd-vizesi-b1-b2-mulakatina-nasil-hazirlanilir':
    'https://images.unsplash.com/photo-1524099163253-32b7f0256868?auto=format&fit=crop&w=1600&q=70',
  'ingiltere-vizesi-gerekli-belgeler-sik-hatalar':
    'https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1600&q=70',
  'vize-reddi-sonrasi-itiraz-mi-yeniden-basvuru-mu': '/photos/planning-notebook.webp',
  'yurt-disinda-ogrenci-olarak-ilk-ay': '/photos/hero-plane-window.webp',
  'aile-birlesimi-sonrasi-yurt-disinda-uyum': '/photos/map-with-pins.webp',
};

const update = db.prepare('UPDATE posts SET cover_image_url = @cover WHERE slug = @slug AND cover_image_url IS NULL');

let count = 0;
Object.entries(covers).forEach(([slug, cover]) => {
  const result = update.run({ slug, cover });
  count += result.changes;
});

console.log(`${count} yazıya kapak görseli atandı.`);
