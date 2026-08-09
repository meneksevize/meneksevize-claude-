import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { useLocale } from './LocaleContext.jsx';

const SiteDataContext = createContext(null);

async function fetchSiteData(locale) {
  const res = await fetch(`/api/site-data?lang=${locale}`);
  if (!res.ok) throw new Error('Site verisi alınamadı.');
  return res.json();
}

export function SiteDataProvider({ children }) {
  const { locale } = useLocale();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const reload = useCallback(() => {
    fetchSiteData(locale)
      .then(setData)
      .catch((err) => setError(err.message));
  }, [locale]);

  useEffect(() => {
    reload();
  }, [reload]);

  const value = useMemo(() => ({
    countries: data?.countries ?? [],
    visaTypeLabels: data?.visaTypeLabels ?? {},
    visaDocuments: data?.visaDocuments ?? {},
    settings: data?.settings ?? {},
    testimonials: data?.testimonials ?? [],
    faqs: data?.faqs ?? [],
    loading: !data && !error,
    error,
    reload,
  }), [data, error, reload]);

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error('useSiteData, SiteDataProvider içinde kullanılmalıdır.');
  return ctx;
}

export function getDocsKey(country) {
  return country.docsKey || country.id;
}
