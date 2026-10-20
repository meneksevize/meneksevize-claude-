// Tek seferlik düzeltme: kapsamlı bir link taramasında 2 blog yazısının
// içeriğinde (markdown kaynağında, TR/EN/AR) var olmayan sayfalara işaret
// eden kırık linkler bulundu:
//   1. "rusya-e-vizesi-turk-vatandaslari-hizli-basvuru" ->
//      /ulkeler/rusya/e-vize (404 — Rusya'nın 'types' listesinde ayrı bir
//      e-vize rotası yok, turistik/ticari var; e-vize aynı sistem üzerinden
//      turistik vize kapsamında işliyor) -> /ulkeler/rusya/turistik
//   2. "schengen-vizesi-ne-kadar-surede-cikar" -> /ulkeler/schengen (404 —
//      "Schengen" tek bir ülke sayfası değil, 29 ülkeyi kapsayan bir sistem)
//      -> /vize-rejim-tablosu (Schengen/kendi sistemine göre karşılaştırma
//      yapan, bu bağlama en uygun gerçek sayfamız)
// İçerikteki linkler her zaman önek'siz TR yoluna işaret eder (bkz.
// blog.routes.js localizeContentLinks) — bu yüzden TR/EN/AR'de aynı eski
// path aranıp aynı yeni path'le değiştiriliyor.
import { db } from './connection.js';

const FIXES = [
  { slug: 'rusya-e-vizesi-turk-vatandaslari-hizli-basvuru', from: '/ulkeler/rusya/e-vize', to: '/ulkeler/rusya/turistik' },
  { slug: 'schengen-vizesi-ne-kadar-surede-cikar', from: '/ulkeler/schengen', to: '/vize-rejim-tablosu' },
];

function run() {
  const select = db.prepare('SELECT content, content_en, content_ar FROM posts WHERE slug = ?');
  const update = db.prepare('UPDATE posts SET content = @content, content_en = @contentEn, content_ar = @contentAr, updated_at = @updatedAt WHERE slug = @slug');
  const updatedAt = new Date().toISOString();

  let fixed = 0;
  FIXES.forEach(({ slug, from, to }) => {
    const row = select.get(slug);
    if (!row) {
      console.log(`Yazı bulunamadı, atlandı: ${slug}`);
      return;
    }
    const replaceAll = (text) => (text ? text.split(`(${from})`).join(`(${to})`).split(`"${from}"`).join(`"${to}"`) : text);
    const content = replaceAll(row.content);
    const contentEn = replaceAll(row.content_en);
    const contentAr = replaceAll(row.content_ar);
    if (content === row.content && contentEn === row.content_en && contentAr === row.content_ar) {
      console.log(`Değişiklik gerekmedi (link zaten yok): ${slug}`);
      return;
    }
    update.run({
      content, contentEn, contentAr, updatedAt, slug,
    });
    fixed += 1;
    console.log(`Düzeltildi: ${slug} — ${from} -> ${to}`);
  });
  console.log(`${fixed} yazı düzeltildi.`);
}

run();
