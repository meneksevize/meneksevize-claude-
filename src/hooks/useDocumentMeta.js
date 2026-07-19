import { useEffect } from 'react';

const SITE_URL = 'https://meneksevize.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

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

// title/description: sayfa başlığı ve <meta name="description">.
// options.image: paylaşım kartında (og:image) gösterilecek görsel; verilmezse
// site geneli varsayılan görsel kullanılır.
// options.path: canonical/og:url için yol (ör. "/ulkeler/almanya"); verilmezse
// mevcut sayfa yolu kullanılır.
export default function useDocumentMeta(title, description, options = {}) {
  useEffect(() => {
    const { image, path } = options;
    const url = `${SITE_URL}${path ?? window.location.pathname}`;

    document.title = title;
    setMetaByName('description', description);
    setCanonical(url);

    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', url);
    setMetaByProperty('og:image', absoluteImage(image));
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:locale', 'tr_TR');

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', absoluteImage(image));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, options.image, options.path]);
}
