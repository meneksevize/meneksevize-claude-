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
import { db } from '../db/connection.js';
import tr from '../../src/i18n/tr.js';
import en from '../../src/i18n/en.js';
import ar from '../../src/i18n/ar.js';
import { photos } from '../../src/data/photos.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://meneksevize.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
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
  'SELECT id, title, title_en, title_ar, intro, intro_en, intro_ar, overview, types FROM countries WHERE id = ?',
);
const stmtVisaLabel = db.prepare('SELECT label, label_en, label_ar FROM visa_type_labels WHERE key = ?');
const stmtPost = db.prepare(
  `SELECT title, title_en, title_ar, excerpt, excerpt_en, excerpt_ar, cover_image_url, published_at, updated_at
   FROM posts WHERE slug = ? AND is_published = 1`,
);
const stmtSetting = db.prepare('SELECT value FROM site_settings WHERE key = ?');

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

// Açıklamalar (özellikle ülke overview metinleri) yüzlerce karakter olabilir;
// meta description için kelime sınırında kısaltıyoruz.
function truncate(text, max = 200) {
  if (!text || text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : max).trimEnd()}…`;
}

// Statik sayfalar: basePath → i18n namespace + (varsa) sayfaya özel og görseli.
// Anahtar isimleri sayfa bileşenlerindeki useDocumentMeta çağrılarıyla birebir.
const STATIC_ROUTES = {
  '/': { ns: 'home', image: photos.heroPlaneWindow },
  '/hakkimizda': { ns: 'about', image: photos.mapWithPins },
  '/hizmetler': { ns: 'services' },
  '/surec': { ns: 'process' },
  '/evrak-rehberi': { ns: 'documentGuide' },
  '/sss': { ns: 'faqPage' },
  '/iletisim': { ns: 'contact' },
  '/blog': { ns: 'blogPage' },
  '/takip': { ns: 'trackApplication' },
  '/e-vize': { ns: 'eVisa', image: photos.passportBoardingPass },
  '/vize-reddi': { ns: 'visaRejection' },
  '/on-degerlendirme': { ns: 'preAssessment' },
  '/gizlilik-politikasi': { ns: 'privacyPolicy' },
  '/kullanim-kosullari': { ns: 'termsOfService' },
  '/iptal-iade-politikasi': { ns: 'refundPolicy' },
};

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
      : t(locale, `${staticRoute.ns}.metaDescription`);
    return {
      status: 200,
      locale,
      basePath,
      title: t(locale, `${staticRoute.ns}.metaTitle`),
      description,
      image: staticRoute.image,
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
    const typeLabel = pick(labelRow, 'label', locale);
    return {
      status: 200,
      locale,
      basePath,
      title: t(locale, 'countryVisaType.metaTitleTemplate', { country: countryTitle, type: typeLabel }),
      description: t(locale, 'countryVisaType.metaDescriptionTemplate', { country: countryTitle, typeLower: typeLabel.toLocaleLowerCase(locale === 'tr' ? 'tr-TR' : locale) }),
      image: photos.passportBoardingPass,
    };
  }

  // Blog yazısı: /blog/:slug
  const postMatch = basePath.match(/^\/blog\/([^/]+)$/);
  if (postMatch) {
    const row = stmtPost.get(postMatch[1]);
    if (!row) return notFoundSeo(locale, basePath);
    return {
      status: 200,
      locale,
      basePath,
      title: `${pick(row, 'title', locale)}${t(locale, 'blogPost.titleSuffix')}`,
      description: pick(row, 'excerpt', locale) || t(locale, 'blogPost.fallbackExcerpt'),
      image: row.cover_image_url,
      ogType: 'article',
      article: {
        published: row.published_at,
        modified: row.updated_at ? `${row.updated_at.replace(' ', 'T')}Z` : null,
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
    const image = absoluteImage(seo.image);

    html = html.replace('<html lang="tr">', `<html lang="${seo.locale}" dir="${dir}">`);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(seo.title)}</title>`);
    html = replaceMeta(html, 'name', 'description', seo.description);
    html = replaceMeta(html, 'property', 'og:title', seo.title);
    html = replaceMeta(html, 'property', 'og:description', seo.description);
    html = replaceMeta(html, 'property', 'og:type', seo.ogType || 'website');
    html = replaceMeta(html, 'property', 'og:url', canonical);
    html = replaceMeta(html, 'property', 'og:image', image);
    html = replaceMeta(html, 'property', 'og:locale', OG_LOCALES[seo.locale]);
    html = replaceMeta(html, 'name', 'twitter:title', seo.title);
    html = replaceMeta(html, 'name', 'twitter:description', seo.description);
    html = replaceMeta(html, 'name', 'twitter:image', image);
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
    html = html.replace('</head>', `${injected.join('\n')}\n</head>`);
  } else if (seo.noindex) {
    html = html.replace('</head>', '  <meta name="robots" content="noindex">\n</head>');
  }

  return html;
}
