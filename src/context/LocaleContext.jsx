import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import tr from '../i18n/tr.js';
import en from '../i18n/en.js';
import ar from '../i18n/ar.js';

const DICTS = { tr, en, ar };
const RTL_LOCALES = new Set(['ar']);
export const SUPPORTED_LOCALES = ['tr', 'en', 'ar'];

const LocaleContext = createContext(null);

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

// URL'nin başındaki /en veya /ar önekinden geçerli dili çıkarır. Önek yoksa
// (veya tanınmayan bir önekse) Türkçe varsayılan olarak kullanılır — sitenin
// tüm rotaları hâlâ önek olmadan (Türkçe) çalışır, bu App.jsx'teki <Routes>'un
// eşleştirdiği "soyulmuş" location ile birebir tutarlıdır.
export function extractLocale(pathname) {
  const match = pathname.match(/^\/(en|ar)(\/.*)?$/);
  if (!match) return { locale: 'tr', strippedPathname: pathname };
  return { locale: match[1], strippedPathname: match[2] || '/' };
}

export function LocaleProvider({ children }) {
  const location = useLocation();
  const { locale } = extractLocale(location.pathname);
  const dir = RTL_LOCALES.has(locale) ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  // `vars` opsiyoneldir: sözlükteki "{isim}" gibi yer tutucuları değiştirir
  // (ör. t('contact.metaDescriptionTemplate', { phone, email })).
  const t = useMemo(() => (key, vars) => {
    const value = getByPath(DICTS[locale], key);
    const resolved = value !== undefined ? value : (getByPath(DICTS.tr, key) ?? key);
    if (typeof resolved !== 'string' || !vars) return resolved;
    return resolved.replace(/\{(\w+)\}/g, (match, name) => (vars[name] !== undefined ? vars[name] : match));
  }, [locale]);

  const prefix = locale === 'tr' ? '' : `/${locale}`;

  const value = useMemo(() => ({ locale, dir, t, prefix }), [locale, dir, t, prefix]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
