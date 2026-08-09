import { useEffect } from 'react';
import { useLocale, extractLocale } from '../context/LocaleContext.jsx';

const SITE_URL = 'https://meneksevize.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const LOCALE_PREFIXES = { tr: '', en: '/en', ar: '/ar' };
const OG_LOCALES = { tr: 'tr_TR', en: 'en_US', ar: 'ar_AR' };

// og:image mutlak URL olmak zorundadır; yerel yollar ("/photos/x.webp") site
// adresiyle tamamlanır.
function absoluteImage(image) {
  if (!image) return DEFAULT_IMAGE;
  return image.startsWith('/') ? `${SITE_URL}${image}` : image;
}

function setMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function setAlternate(hreflang, href) {
  let tag = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'alternate');
    tag.setAttribute('hreflang', hreflang);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

// title/description: sayfa başlığı ve <meta name="description">.
// options.image: paylaşım kartında (og:image) gösterilecek görsel; verilmezse
// site geneli varsayılan görsel kullanılır.
// options.path: canonical/og:url için yol (ör. "/ulkeler/almanya") — HER ZAMAN
// önek olmadan Türkçe/temel yol olarak verilir; verilmezse mevcut sayfanın
// önek soyulmuş hâli kullanılır. Aktif dile göre önek (LOCALE_PREFIXES) bu
// hook içinde eklenir, böylece her çağıran yerde tekrar edilmez.
export default function useDocumentMeta(title, description, options = {}) {
  const { locale } = useLocale();
  useEffect(() => {
    const { image, path } = options;
    const basePath = path ?? extractLocale(window.location.pathname).strippedPathname;
    const url = `${SITE_URL}${LOCALE_PREFIXES[locale]}${basePath}`;

    document.title = title;
    setMetaByName('description', description);
    setCanonical(url);

    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', url);
    setMetaByProperty('og:image', absoluteImage(image));
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:locale', OG_LOCALES[locale] ?? 'tr_TR');

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', absoluteImage(image));

    // hreflang: Google'a aynı sayfanın üç dildeki karşılığını bildirir.
    // x-default, dil/bölge algılanamayan ziyaretçiler için varsayılan olan
    // Türkçe sürümü işaret eder (bkz. plan — Türkçe ana dil).
    setAlternate('tr', `${SITE_URL}${basePath}`);
    setAlternate('en', `${SITE_URL}/en${basePath}`);
    setAlternate('ar', `${SITE_URL}/ar${basePath}`);
    setAlternate('x-default', `${SITE_URL}${basePath}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, options.image, options.path, locale]);
}
