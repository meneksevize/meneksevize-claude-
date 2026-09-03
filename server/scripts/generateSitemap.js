import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countries } from '../../src/data/countries.js';
import { photos } from '../../src/data/photos.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://meneksevize.com';

// image: server/lib/seo.js'teki STATIC_ROUTES ile birebir aynı fotoğraflar —
// Google Görseller'de keşfedilme şansı için sitemap'e <image:image> olarak
// eklenir. Aynı fotoğrafı 47 ülke sayfasının hepsinde tekrarlamak (hepsi
// passportBoardingPass kullanıyor) değer katmadığı için ülke sayfaları
// bilinçli olarak resimsiz bırakıldı; blog yazıları ise her biri gerçek,
// kendine özgü bir kapak fotoğrafı taşıdığından oradan geliyor.
const staticPages = [
  { loc: '/', priority: '1.0', image: photos.heroPlaneWindow },
  { loc: '/hakkimizda', priority: '0.6', image: photos.mapWithPins },
  { loc: '/hizmetler', priority: '0.8', image: photos.worldMap },
  { loc: '/e-vize', priority: '0.7', image: photos.passportBoardingPass },
  { loc: '/vize-reddi', priority: '0.7', image: photos.planningNotebook },
  { loc: '/on-degerlendirme', priority: '0.6' },
  { loc: '/surec', priority: '0.5', image: photos.planningNotebook },
  { loc: '/evrak-rehberi', priority: '0.6', image: photos.cameraPassportFlatlay },
  { loc: '/sss', priority: '0.5' },
  { loc: '/iletisim', priority: '0.6', image: photos.mapWithPins },
  { loc: '/blog', priority: '0.6', image: photos.planningNotebook },
  { loc: '/takip', priority: '0.3', image: photos.cameraPassportFlatlay },
  { loc: '/gizlilik-politikasi', priority: '0.3', image: photos.planningNotebook },
  { loc: '/kullanim-kosullari', priority: '0.3', image: photos.planningNotebook },
  { loc: '/iptal-iade-politikasi', priority: '0.3', image: photos.planningNotebook },
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

function absoluteImage(image) {
  if (!image) return null;
  return image.startsWith('/') ? `${SITE_URL}${image}` : image;
}

// Unsplash kapak URL'leri "?auto=format&fit=crop&..." gibi ham "&" karakterleri
// taşıyor — bunlar XML'de kaçırılmazsa (&amp;) belge geçersiz hale gelir
// (Google'ın sitemap ayrıştırıcısı satırı kesip atabilir). Statik sayfa
// fotoğrafları hiç "&" içermiyor ama tutarlılık için hepsine uygulanıyor.
function escapeXml(value) {
  return value.replace(/&/g, '&amp;');
}

// lastmod yalnızca gerçekten bilindiğinde (blog yazılarının updated_at
// değeri) yazılır. Önceden her URL'e "bugün" yazılıyordu — her deploy'da tüm
// sitenin değiştiğini iddia etmek, Google'ın lastmod'a duyduğu güveni azaltır;
// sahte tarih yerine tarihsiz bırakmak daha doğrudur.
// allUrls: sitemap XML'inin yanı sıra, aynı URL kümesini IndexNow'a (Bing +
// Yandex) toplu göndermek için düz bir liste olarak da biriktiriyoruz.
const allUrls = [];

function urlEntry(basePath, priority, lastmod = null, image = null) {
  const alternateLinks = LOCALES
    .map(({ code, prefix }) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}${prefix}${basePath}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${basePath}" />`)
    .join('\n');
  const lastmodLine = lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : '';
  const absImage = absoluteImage(image);
  const imageLine = absImage ? `    <image:image>\n      <image:loc>${escapeXml(absImage)}</image:loc>\n    </image:image>\n` : '';

  return LOCALES
    .map(({ prefix }) => {
      allUrls.push(`${SITE_URL}${prefix}${basePath}`);
      return `  <url>\n    <loc>${SITE_URL}${prefix}${basePath}</loc>\n${lastmodLine}    <priority>${priority}</priority>\n${imageLine}${alternateLinks}\n  </url>`;
    })
    .join('\n');
}

// IndexNow: Bing ve Yandex'e (Google desteklemiyor) içerik değiştiğinde
// taramalarını beklemeden anında haber verir. Anahtar dosyası public/'te
// (aynı ada sahip .txt) barındırılıyor — protokol bunu doğrulama için
// kontrol eder. Başarısızlık sitemap üretimini asla engellemesin diye
// hatalar yutuluyor, sadece loglanıyor.
const INDEXNOW_KEY = '85262f51bdbe314b652198960365dc19';

async function submitIndexNow(urls) {
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'meneksevize.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });
    console.log(`IndexNow (Bing/Yandex): ${urls.length} URL gönderildi, yanıt ${res.status}.`);
  } catch (err) {
    console.warn('IndexNow gönderimi başarısız (sitemap yine de üretildi):', err.message);
  }
}

async function main() {
  const entries = staticPages.map((p) => urlEntry(p.loc, p.priority, null, p.image));

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
      const lastmod = (post.updatedAt || post.publishedAt || '').slice(0, 10) || null;
      entries.push(urlEntry(`/blog/${post.slug}`, '0.6', lastmod, post.coverImageUrl));
    });
    blogCount = posts.length;
    console.log(`${posts.length} blog yazısı sitemap'e eklendi (x3 dil).`);
  } catch (err) {
    console.warn('Blog yazıları alınamadı, sitemap blog olmadan üretiliyor:', err.message);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries.join('\n')}\n</urlset>\n`;
  const outPath = path.join(__dirname, '..', '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outPath, xml);
  const urlCount = staticPages.length + countries.length + countries.reduce((sum, c) => sum + c.types.length, 0) + blogCount;
  console.log(`Sitemap oluşturuldu: ${urlCount} sayfa × 3 dil = ${urlCount * 3} URL — ${outPath}`);

  await submitIndexNow(allUrls);
}

main();
