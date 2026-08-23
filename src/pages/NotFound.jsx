import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import ConsultCta from '../components/ConsultCta.jsx';
import { CompassIcon, SearchIcon } from '../components/icons.jsx';

// Anasayfadaki hero ile aynı 5 destinasyon (bkz. Home.jsx FEATURED_DESTINATIONS) —
// kayıp bir ziyaretçiye de işletmenin asıl itmek istediği ülkeler gösterilir.
const POPULAR_DESTINATIONS = [
  { id: 'abd', title: 'ABD', to: '/ulkeler/abd' },
  { id: 'ingiltere', title: 'İngiltere', to: '/ulkeler/ingiltere' },
  { id: 'kanada', title: 'Kanada', to: '/ulkeler/kanada' },
  { id: 'dubai', title: 'Dubai', to: '/ulkeler/dubai' },
  { id: 'schengen', title: 'Schengen', flag: '🇪🇺', to: '/blog/schengen-ulkelerinden-hangisine-basvurmaliyim' },
];

export default function NotFound() {
  const { t, locale, prefix } = useLocale();
  const { countries } = useSiteData();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  useDocumentMeta(
    t('notFound.metaTitle'),
    t('notFound.metaDescription'),
  );

  // Site genelinde tekrarlanan arama-kutusu-dışına-tıklama deseni (bkz.
  // Navbar.jsx nav-countries) — sonuç panelini yalnızca odak varken açık tutar.
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Footer'daki hazır ve zaten üç dilde çevrilmiş sayfa etiketleri yeniden
  // kullanılır (bkz. Footer.jsx) — arama için ayrı bir çeviri seti gerekmez.
  const staticPages = useMemo(() => [
    { label: t('footer.about'), to: '/hakkimizda' },
    { label: t('footer.services'), to: '/hizmetler' },
    { label: t('footer.eVisa'), to: '/e-vize' },
    { label: t('footer.process'), to: '/surec' },
    { label: t('footer.visaRejection'), to: '/vize-reddi' },
    { label: t('footer.preAssessment'), to: '/on-degerlendirme' },
    { label: t('footer.documentGuide'), to: '/evrak-rehberi' },
    { label: t('footer.blog'), to: '/blog' },
    { label: t('footer.faq'), to: '/sss' },
    { label: t('footer.track'), to: '/takip' },
    { label: t('nav.contact'), to: '/iletisim' },
  ], [t]);

  // Türkçe'nin noktasız/noktalı i harfi (İ/I → i/ı) doğru küçültülsün diye
  // 'tr-TR' locale'i özellikle belirtilir — sade .toLowerCase() bunu bozar.
  const normalize = (str) => (str || '').toLocaleLowerCase(locale === 'tr' ? 'tr-TR' : locale);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return [];
    const countryMatches = countries
      .filter((c) => normalize(c.title).includes(q))
      .slice(0, 5)
      .map((c) => ({ key: `c-${c.id}`, label: c.title, to: `/ulkeler/${c.id}`, country: c }));
    const pageMatches = staticPages
      .filter((p) => normalize(p.label).includes(q))
      .slice(0, 5)
      .map((p) => ({ key: `p-${p.to}`, label: p.label, to: p.to }));
    return [...countryMatches, ...pageMatches].slice(0, 7);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, countries, staticPages, locale]);

  const showResults = focused && query.trim().length > 0;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (results[0]) navigate(`${prefix}${results[0].to}`);
  };

  return (
    <>
      <section className="hero hero-aurora notfound-hero">
        <div className="hero-aurora-bg" aria-hidden="true">
          <span className="aurora aurora-1"></span>
          <span className="aurora aurora-2"></span>
          <span className="aurora aurora-3"></span>
          <div className="hero-grid-overlay"></div>
        </div>
        <div className="hero-content hero-aurora-content">
          <div className="notfound-medallion" aria-hidden="true">
            <CompassIcon width={40} height={40} />
          </div>
          <span className="notfound-code">404</span>
          <h1>{t('notFound.title')}</h1>
          <p>{t('notFound.text')}</p>

          <form className="notfound-search" ref={searchRef} onSubmit={handleSearchSubmit} role="search">
            <div className="notfound-search-input-wrap">
              <SearchIcon width={18} height={18} className="notfound-search-icon" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                placeholder={t('notFound.searchPlaceholder')}
                aria-label={t('notFound.searchPlaceholder')}
              />
            </div>
            {showResults && (
              <div className="notfound-search-results" role="listbox">
                {results.length > 0 ? results.map((r) => (
                  <Link key={r.key} to={r.to} className="notfound-search-result">
                    {r.country
                      ? <CountryFlag country={r.country} className="notfound-search-flag" />
                      : <SearchIcon width={15} height={15} />}
                    {r.label}
                  </Link>
                )) : (
                  <p className="notfound-search-empty">{t('notFound.searchNoResults')}</p>
                )}
              </div>
            )}
          </form>

          <div className="hero-buttons">
            <Link to="/" className="btn btn-gold">{t('notFound.ctaHome')}</Link>
            <Link to="/iletisim" className="btn btn-secondary">{t('notFound.ctaContact')}</Link>
          </div>

          <div className="hero-destinations">
            <span className="hero-destinations-label">{t('home.featuredDestinationsLabel')}</span>
            <div className="hero-destinations-row">
              {POPULAR_DESTINATIONS.map((dest) => (
                <Link to={dest.to} className="hero-destination-card" key={dest.id}>
                  <CountryFlag country={dest} className="hero-destination-flag" />
                  <span>{dest.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <ConsultCta />
        </div>
      </section>
    </>
  );
}
