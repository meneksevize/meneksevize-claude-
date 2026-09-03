// Sunucu tarafı SEO meta enjeksiyonu.
//
// Site client-side render edilen bir SPA olduğundan, ham HTML'de tüm sayfalar
// aynı (index.html'deki statik) başlık/açıklama/og etiketleriyle dönüyordu.
// Googlebot JS render edebildiği için başlıkları eninde sonunda görüyor ama:
//   1) JS çalıştırmayan botlar ve link önizlemeleri (WhatsApp, Telegram,
//      Facebook, Twitter) her sayfa için aynı genel kartı gösteriyordu,
//   2) hreflang etiketleri ham HTML'de hiç yoktu (yalnızca JS ile eklenir),
//   3) bilinmeyen yollar 200 dönüyordu (soft-404).
// Bu modül, istek yoluna göre doğru <title>/<meta>/hreflang setini index.html
// şablonuna enjekte eder; frontend'in kullandığı i18n sözlüklerini (saf veri
// oldukları için) doğrudan import ederek sunucu ve istemci çıktısının birebir
// aynı olmasını garanti eder. useDocumentMeta client'ta aynı etiketleri
// querySelector ile bulup güncellediği için çift etiket oluşmaz.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { db } from '../db/connection.js';
import tr from '../../src/i18n/tr.js';
import en from '../../src/i18n/en.js';
import ar from '../../src/i18n/ar.js';
import { photos, photoDimensions } from '../../src/data/photos.js';
import { visaTypePhrase } from '../../src/utils/visaTypePhrase.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://meneksevize.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_IMAGE_DIMENSIONS = { width: 1200, height: 630 };
const DICTS = { tr, en, ar };
const OG_LOCALES = { tr: 'tr_TR', en: 'en_US', ar: 'ar_AR' };
const SUPPORTED_LANGS = new Set(['en', 'ar']);

// ---- i18n (LocaleContext.t() ile aynı mantık: nokta-yol + TR fallback + {var}) ----
function getByPath(obj, dotPath) {
  return dotPath.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function t(locale, key, vars) {
  const value = getByPath(DICTS[locale], key);
  const resolved = value !== undefined ? value : (getByPath(DICTS.tr, key) ?? key);
  if (typeof resolved !== 'string' || !vars) return resolved;
  return resolved.replace(/\{(\w+)\}/g, (match, name) => (vars[name] !== undefined ? vars[name] : match));
}

// ---- DB erişimi (site-data.routes.js'teki pick() ile aynı fallback kuralı) ----
function pick(row, field, lang) {
  if (SUPPORTED_LANGS.has(lang)) {
    const localized = row[`${field}_${lang}`];
    if (localized) return localized;
  }
  return row[field];
}

const stmtCountry = db.prepare(
  'SELECT id, title, title_en, title_ar, intro, intro_en, intro_ar, overview, overview_en, overview_ar, types FROM countries WHERE id = ?',
);
const stmtVisaLabel = db.prepare('SELECT label, label_en, label_ar FROM visa_type_labels WHERE key = ?');
const stmtPost = db.prepare(
  `SELECT title, title_en, title_ar, excerpt, excerpt_en, excerpt_ar, cover_image_url, published_at, updated_at
   FROM posts WHERE slug = ? AND is_published = 1`,
);
const stmtSetting = db.prepare('SELECT value FROM site_settings WHERE key = ?');
const stmtTestimonials = db.prepare('SELECT name, rating, quote FROM testimonials WHERE is_published = 1 ORDER BY sort_order ASC');
const stmtFaqs = db.prepare('SELECT * FROM faqs ORDER BY sort_order ASC');

function setting(key) {
  return stmtSetting.get(key)?.value || '';
}

// ---- Yol çözümleme ----
function extractLocale(pathname) {
  const match = pathname.match(/^\/(en|ar)(\/.*)?$/);
  if (!match) return { locale: 'tr', basePath: pathname };
  return { locale: match[1], basePath: match[2] || '/' };
}

function absoluteImage(image) {
  if (!image) return DEFAULT_IMAGE;
  return image.startsWith('/') ? `${SITE_URL}${image}` : image;
}

// posts.updated_at farklı script'lerden farklı biçimlerde geliyor: SQLite'ın
// kendi `datetime('now')` varsayılanı boşluklu ve "Z" olmadan ("2026-08-30
// 21:12:18"), bazı düzeltme script'lerimiz ise `new Date().toISOString()`
// ile ("2026-08-30T21:12:18.622Z", zaten "Z" ile bitiyor). Eskiden ikisine de
// körlemesine "T" + sonuna "Z" ekleniyordu — ikincisinde bu "...622ZZ" gibi
// geçersiz, çift "Z"'li bir sonuç üretiyordu (BlogPosting şeması eklenirken
// yakalandı). Bu fonksiyon her iki biçimi de tanıyıp tek bir geçerli ISO
// 8601 dizesine normalize eder.
function toIsoUtc(value) {
  if (!value) return null;
  const normalized = value.includes('T') ? value : value.replace(' ', 'T');
  const withZ = normalized.endsWith('Z') ? normalized : `${normalized}Z`;
  return new Date(withZ).toISOString();
}

// Açıklamalar (özellikle ülke overview metinleri) yüzlerce karakter olabilir;
// meta description için kelime sınırında kısaltıyoruz. Google SERP'te açıklama
// genelde ~155-160 karakterden sonra "…" ile kesiliyor — max bunun biraz altı.
function truncate(text, max = 155) {
  if (!text || text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : max).trimEnd()}…`;
}

// Statik sayfalar: basePath → i18n namespace + (varsa) sayfaya özel og görseli.
// Anahtar isimleri sayfa bileşenlerindeki useDocumentMeta çağrılarıyla birebir.
// breadcrumbKey verilmezse varsayılan `${ns}.breadcrumb` kullanılır — sadece
// "services" bundan sapıyor (breadcrumbServices). `ogImage` yalnızca ana
// sayfada var: gerçek hero fotoğrafı (heroPlaneWindow) dikey (1600×2508),
// WhatsApp/Facebook'un beklediği ~1.91:1 yatay orana hiç uymuyor — `image`
// (LCP preload + varsayılan og:image) hâlâ gerçek hero'ya işaret ediyor,
// ama paylaşım kartı özelinde zaten sitede kullanılan yatay/jenerik
// passportBoardingPass görseli tercih ediliyor.
const STATIC_ROUTES = {
  '/': { ns: 'home', image: photos.heroPlaneWindow, ogImage: photos.passportBoardingPass },
  '/hakkimizda': { ns: 'about', image: photos.mapWithPins },
  '/hizmetler': { ns: 'services', breadcrumbKey: 'services.breadcrumbServices', image: photos.worldMap },
  '/surec': { ns: 'process', image: photos.planningNotebook },
  '/evrak-rehberi': { ns: 'documentGuide', image: photos.cameraPassportFlatlay },
  '/sss': { ns: 'faqPage' },
  '/iletisim': { ns: 'contact', image: photos.mapWithPins },
  '/blog': { ns: 'blogPage', image: photos.planningNotebook },
  '/takip': { ns: 'trackApplication', image: photos.cameraPassportFlatlay },
  '/e-vize': { ns: 'eVisa', image: photos.passportBoardingPass },
  '/vize-reddi': { ns: 'visaRejection', image: photos.planningNotebook },
  '/on-degerlendirme': { ns: 'preAssessment' },
  '/gizlilik-politikasi': { ns: 'privacyPolicy', image: photos.planningNotebook },
  '/kullanim-kosullari': { ns: 'termsOfService', image: photos.planningNotebook },
  '/iptal-iade-politikasi': { ns: 'refundPolicy', image: photos.planningNotebook },
};

// GERİ ALINDI (2026-09-03): burada daha önce testimonials'tan bir
// AggregateRating/Review JSON-LD (TravelAgency şemasına gömülü) üretilip
// statik HTML'e enjekte ediliyordu. Google'ın kendi kuralları bunu açıkça
// yasaklıyor: "bir işletme kendi hakkındaki yorumları kendi sitesinde
// işaretlerse, o sayfa yıldızlı yorum özelliği için uygun değildir" (self-
// serving review). Yani bu hem hiçbir zaman yıldız göstermeyecekti hem de
// yapısal veri spam tespiti riskini taşıyordu — kaldırıldı. Gerçek/meşru
// yol Google Business Profile'ın kendi yorum sistemi (GBP doğrulaması
// tamamlanınca). Ortalama puan yine de düz metin (meta açıklama) için
// hesaplanmaya devam ediyor — bu politika yalnızca yapısal veriyi
// yasaklıyor, sayfa metninde puandan bahsetmeyi değil.
function getAverageRating() {
  const rows = stmtTestimonials.all();
  if (rows.length === 0) return null;
  return (rows.reduce((sum, row) => sum + row.rating, 0) / rows.length).toFixed(1);
}

// Breadcrumbs.jsx ile aynı şema şekli — items: [{ label, to? }, ...], son
// öğe `to` almaz (mevcut sayfa). Client tarafındaki bileşen bunu şimdiden
// tüm sayfalarda üretiyordu ama yalnızca JS ile; sunucu tarafında da aynısını
// üreterek Google'ın gezinme yolunu (breadcrumb rich result) her sayfa için
// güvenilir şekilde görmesini sağlıyoruz.
function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.to ? { item: `${SITE_URL}${item.to}` } : {}),
    })),
  };
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

// FAQ.jsx ile aynı şema — yalnızca /sss sayfasında kullanılıyor, bu yüzden
// buildBreadcrumbSchema gibi genel değil.
function buildFaqSchema(locale) {
  const rows = stmtFaqs.all();
  if (rows.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: rows.map((row) => ({
      '@type': 'Question',
      name: pick(row, 'question', locale),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(marked.parse(pick(row, 'answer', locale))),
      },
    })),
  };
}

function notFoundSeo(locale, basePath) {
  return {
    status: 404,
    noindex: true,
    locale,
    basePath,
    title: t(locale, 'notFound.metaTitle'),
    description: t(locale, 'notFound.metaDescription'),
  };
}

// req.path alır; { redirect } veya render için gereken meta setini döner.
export function resolveSeo(reqPath) {
  const { locale, basePath: rawBase } = extractLocale(reqPath);
  const basePath = rawBase.length > 1 ? rawBase.replace(/\/+$/, '') : rawBase;
  const prefix = locale === 'tr' ? '' : `/${locale}`;

  // Admin ve ödeme sayfaları: indexlenmemeli, varsayılan meta yeterli.
  if (basePath.startsWith('/admin') || basePath.startsWith('/odeme')) {
    return { status: 200, noindex: true, locale, basePath: null };
  }

  // Eski /ulke/... URL'leri: client-side redirect yerine gerçek 301 —
  // arama motorlarına kalıcı taşınma sinyali verir, link değeri aktarılır.
  const legacy = basePath.match(/^\/ulke(\/.+)$/);
  if (legacy) {
    return { redirect: `${prefix}/ulkeler${legacy[1]}` };
  }

  // Statik sayfalar
  const staticRoute = STATIC_ROUTES[basePath];
  if (staticRoute) {
    const description = basePath === '/iletisim'
      ? t(locale, 'contact.metaDescriptionTemplate', { phone: setting('phone') || '—', email: setting('email') || '—' })
      : basePath === '/'
        ? t(locale, `${staticRoute.ns}.metaDescription`, { rating: getAverageRating() || '5.0' })
        : t(locale, `${staticRoute.ns}.metaDescription`);
    // Ana sayfada breadcrumb yok (Home.jsx de render etmiyor); diğer tüm
    // statik sayfalar "Ana Sayfa > <Sayfa>" iki seviyeli bir yol kullanıyor.
    const breadcrumbSchema = basePath === '/' ? null : buildBreadcrumbSchema([
      { label: t(locale, 'common.breadcrumbHome'), to: '/' },
      { label: t(locale, staticRoute.breadcrumbKey || `${staticRoute.ns}.breadcrumb`) },
    ]);
    const faqSchema = basePath === '/sss' ? buildFaqSchema(locale) : null;
    return {
      status: 200,
      locale,
      basePath,
      title: t(locale, `${staticRoute.ns}.metaTitle`),
      description,
      image: staticRoute.image,
      ogImage: staticRoute.ogImage || staticRoute.image,
      breadcrumbSchema,
      faqSchema,
    };
  }

  // Ülke detay: /ulkeler/:id
  const countryMatch = basePath.match(/^\/ulkeler\/([^/]+)$/);
  if (countryMatch) {
    const row = stmtCountry.get(countryMatch[1]);
    if (!row) return notFoundSeo(locale, basePath);
    const title = pick(row, 'title', locale);
    // Zengin overview metni tercih edilir; EN/AR'de yalnızca çevrilmiş alanlar
    // kullanılır (Türkçe'ye düşülmez — yanlış dilde açıklama olmasın).
    const description = (locale === 'tr'
      ? (row.overview || row.intro)
      : (row[`overview_${locale}`] || row[`intro_${locale}`] || null))
      || t(locale, 'countryDetail.metaDescriptionTemplate', { country: title });
    return {
      status: 200,
      locale,
      basePath,
      title: t(locale, 'countryDetail.metaTitleTemplate', { country: title }),
      description: truncate(description),
      image: photos.passportBoardingPass,
      breadcrumbSchema: buildBreadcrumbSchema([
        { label: t(locale, 'common.breadcrumbHome'), to: '/' },
        { label: t(locale, 'countryDetail.breadcrumbCountries'), to: '/hizmetler' },
        { label: t(locale, 'countryDetail.visaPageTitle', { country: title }) },
      ]),
    };
  }

  // Vize tipi: /ulkeler/:id/:type
  const typeMatch = basePath.match(/^\/ulkeler\/([^/]+)\/([^/]+)$/);
  if (typeMatch) {
    const row = stmtCountry.get(typeMatch[1]);
    const labelRow = stmtVisaLabel.get(typeMatch[2]);
    let types = [];
    try { types = JSON.parse(row?.types || '[]'); } catch { /* bozuk veri → 404 */ }
    if (!row || !labelRow || !types.includes(typeMatch[2])) return notFoundSeo(locale, basePath);
    const countryTitle = pick(row, 'title', locale);
    // "E-Vize"/"Doğum Vizesi" gibi etiketler "vize" kelimesini zaten içeriyor;
    // visaTypePhrase bunu tekrar etmeden tam ifadeyi üretir (bkz. src/utils).
    const typePhrase = visaTypePhrase(pick(labelRow, 'label', locale), locale);
    return {
      status: 200,
      locale,
      basePath,
      title: t(locale, 'countryVisaType.metaTitleTemplate', { country: countryTitle, type: typePhrase }),
      // AR şablonu {type} kullanır (Arapça'da küçük/büyük harf ayrımı yok);
      // TR/EN {typeLower} kullanır — ikisi de geçirilir, hangisi gerekiyorsa o dolar.
      description: t(locale, 'countryVisaType.metaDescriptionTemplate', {
        country: countryTitle,
        type: typePhrase,
        typeLower: typePhrase.toLocaleLowerCase(locale === 'tr' ? 'tr-TR' : locale),
      }),
      image: photos.passportBoardingPass,
      breadcrumbSchema: buildBreadcrumbSchema([
        { label: t(locale, 'common.breadcrumbHome'), to: '/' },
        { label: t(locale, 'countryVisaType.breadcrumbCountries'), to: '/hizmetler' },
        { label: t(locale, 'countryVisaType.breadcrumbCountryVisaTemplate', { country: countryTitle }), to: `/ulkeler/${typeMatch[1]}` },
        { label: t(locale, 'countryVisaType.breadcrumbTypeVisaTemplate', { type: typePhrase }) },
      ]),
    };
  }

  // Blog yazısı: /blog/:slug
  const postMatch = basePath.match(/^\/blog\/([^/]+)$/);
  if (postMatch) {
    const row = stmtPost.get(postMatch[1]);
    if (!row) return notFoundSeo(locale, basePath);
    const modified = toIsoUtc(row.updated_at);
    const published = toIsoUtc(row.published_at);
    const postTitle = pick(row, 'title', locale);
    return {
      status: 200,
      locale,
      basePath,
      title: `${postTitle}${t(locale, 'blogPost.titleSuffix')}`,
      description: pick(row, 'excerpt', locale) || t(locale, 'blogPost.fallbackExcerpt'),
      image: row.cover_image_url,
      ogType: 'article',
      article: {
        published,
        modified,
      },
      breadcrumbSchema: buildBreadcrumbSchema([
        { label: t(locale, 'common.breadcrumbHome'), to: '/' },
        { label: t(locale, 'blogPage.breadcrumb'), to: '/blog' },
        { label: postTitle },
      ]),
      // BlogPost.jsx ile aynı şema — aynı client-only sorun (Google'ın
      // dinamik yapısal veriyi güvenilir indexlemesi garanti değil).
      blogPostingSchema: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: postTitle,
        description: pick(row, 'excerpt', locale) || t(locale, 'blogPost.fallbackExcerpt'),
        datePublished: published,
        ...(modified ? { dateModified: modified } : {}),
        image: absoluteImage(row.cover_image_url),
        author: { '@type': 'Organization', name: 'Menekşe Vize' },
        publisher: { '@type': 'Organization', name: 'Menekşe Vize' },
        mainEntityOfPage: `${SITE_URL}${prefix}/blog/${postMatch[1]}`,
      },
    };
  }

  return notFoundSeo(locale, basePath);
}

// ---- HTML şablon enjeksiyonu ----
function escapeAttr(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// JSON-LD script etiketi üretir; içerikte olası "</script>" dizisi (ör. bir
// yorum/SSS metninde) HTML'i erken kapatmasın diye "<" karakterleri kaçırılır.
function jsonLdTag(id, schema) {
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  return `  <script type="application/ld+json" id="${id}">${json}</script>`;
}

// Şablon önbelleğe alınır ama dosyanın mtime'ı değişirse yeniden okunur —
// böylece build sonrası (asset hash'leri değişir) restart edilmemiş bir süreç
// asla eski asset'lere işaret eden bir index.html servis etmez.
const TEMPLATE_PATH = path.join(__dirname, '..', '..', 'dist', 'index.html');
let cachedTemplate = null;
let cachedMtimeMs = 0;
function template() {
  const { mtimeMs } = fs.statSync(TEMPLATE_PATH);
  if (cachedTemplate === null || mtimeMs !== cachedMtimeMs) {
    cachedTemplate = fs.readFileSync(TEMPLATE_PATH, 'utf8');
    cachedMtimeMs = mtimeMs;
  }
  return cachedTemplate;
}

function replaceMeta(html, attrType, name, content) {
  const pattern = new RegExp(`(<meta ${attrType}="${name}" content=")[^"]*(")`);
  return html.replace(pattern, `$1${escapeAttr(content)}$2`);
}

export function renderIndexHtml(seo) {
  let html = template();

  // basePath null ise (admin/ödeme) şablon olduğu gibi kalır, sadece noindex eklenir.
  if (seo.basePath !== null && seo.basePath !== undefined) {
    const prefix = seo.locale === 'tr' ? '' : `/${seo.locale}`;
    const canonical = seo.basePath === '/' ? `${SITE_URL}${prefix}/` : `${SITE_URL}${prefix}${seo.basePath}`;
    const dir = seo.locale === 'ar' ? 'rtl' : 'ltr';
    // seo.image sayfanın gerçek LCP hero'su (preload için, aşağıda) —
    // seo.ogImage varsa (şu an yalnızca ana sayfa) paylaşım kartları için
    // ondan farklı, o oranına daha uygun bir görsel kullanılır.
    const rawOgImage = seo.ogImage || seo.image;
    const ogImage = absoluteImage(rawOgImage);
    // WhatsApp/Facebook önizleme kartını oluşturmadan önce görseli indirip
    // ölçmek zorunda kalmasın diye bilinen boyutları meta etiketi olarak
    // ekliyoruz. Blog yazılarının Unsplash URL'leri için bilinen bir boyut
    // yok (fotoğraftan fotoğrafa değişiyor) — o durumda hiç eklenmiyor,
    // yanlış bir boyut beyan etmektense hiç beyan etmemek daha doğru.
    const imageDimensions = rawOgImage ? photoDimensions[rawOgImage] : DEFAULT_IMAGE_DIMENSIONS;

    html = html.replace('<html lang="tr">', `<html lang="${seo.locale}" dir="${dir}">`);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(seo.title)}</title>`);
    html = replaceMeta(html, 'name', 'description', seo.description);
    html = replaceMeta(html, 'property', 'og:title', seo.title);
    html = replaceMeta(html, 'property', 'og:description', seo.description);
    html = replaceMeta(html, 'property', 'og:type', seo.ogType || 'website');
    html = replaceMeta(html, 'property', 'og:url', canonical);
    html = replaceMeta(html, 'property', 'og:image', ogImage);
    html = replaceMeta(html, 'property', 'og:locale', OG_LOCALES[seo.locale]);
    html = replaceMeta(html, 'name', 'twitter:title', seo.title);
    html = replaceMeta(html, 'name', 'twitter:description', seo.description);
    html = replaceMeta(html, 'name', 'twitter:image', ogImage);
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`);

    // hreflang: sayfanın üç dildeki karşılığı + x-default (TR varsayılan).
    const injected = [
      `  <link rel="alternate" hreflang="tr" href="${SITE_URL}${seo.basePath === '/' ? '/' : seo.basePath}">`,
      `  <link rel="alternate" hreflang="en" href="${SITE_URL}/en${seo.basePath === '/' ? '/' : seo.basePath}">`,
      `  <link rel="alternate" hreflang="ar" href="${SITE_URL}/ar${seo.basePath === '/' ? '/' : seo.basePath}">`,
      `  <link rel="alternate" hreflang="x-default" href="${SITE_URL}${seo.basePath === '/' ? '/' : seo.basePath}">`,
    ];
    if (seo.article?.published) {
      injected.push(`  <meta property="article:published_time" content="${escapeAttr(seo.article.published)}">`);
      if (seo.article.modified) {
        injected.push(`  <meta property="article:modified_time" content="${escapeAttr(seo.article.modified)}">`);
      }
    }
    if (seo.noindex) injected.push('  <meta name="robots" content="noindex">');
    if (imageDimensions) {
      injected.push(`  <meta property="og:image:width" content="${imageDimensions.width}">`);
      injected.push(`  <meta property="og:image:height" content="${imageDimensions.height}">`);
    }
    // Sayfanın LCP öğesi olan hero/page-header arka plan fotoğrafı — bu bir
    // <img> değil CSS background-image olduğu için tarayıcının preload
    // scanner'ı onu ancak CSS uygulandıktan sonra keşfediyor (Lighthouse'ta
    // ~3.8sn "resource load delay" olarak ölçüldü). seo.image zaten her
    // gerçek görünür hero'yu taşıyor (ana sayfa, statik sayfalar, ülke
    // detayı/vize tipi, blog yazısı) — og:image için kullanılan alanın
    // aynısı, sadece burada da preload ipucuna dönüştürülüyor. Kapak
    // fotoğrafı olmayan blog yazıları / sadece-metin sayfaları (SSS, ön
    // değerlendirme) için seo.image tanımsız kalır, preload eklenmez.
    if (seo.image) {
      injected.push(`  <link rel="preload" as="image" fetchpriority="high" href="${escapeAttr(seo.image)}">`);
    }
    // Zengin sonuç şemaları (BreadcrumbList/FAQPage/BlogPosting) — id'ler
    // her birinin client tarafındaki temizleme/yeniden-ekleme mantığıyla
    // eşleşiyor (bkz. Breadcrumbs.jsx, FAQ.jsx, BlogPost.jsx).
    if (seo.breadcrumbSchema) injected.push(jsonLdTag('breadcrumb-jsonld', seo.breadcrumbSchema));
    if (seo.faqSchema) injected.push(jsonLdTag('faq-jsonld', seo.faqSchema));
    if (seo.blogPostingSchema) injected.push(jsonLdTag('blogpost-jsonld', seo.blogPostingSchema));
    html = html.replace('</head>', `${injected.join('\n')}\n</head>`);
  } else if (seo.noindex) {
    html = html.replace('</head>', '  <meta name="robots" content="noindex">\n</head>');
  }

  return html;
}
