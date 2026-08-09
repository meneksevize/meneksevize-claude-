import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, Link } from './LocaleLink.jsx';
import { useSiteData, getDocsKey } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { ChevronDownIcon, PhoneIcon } from './icons.jsx';
import CountryFlag from './CountryFlag.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navbar() {
  const { countries, settings } = useSiteData();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const countriesRef = useRef(null);

  const links = [
    { to: '/hakkimizda', label: t('nav.about') },
    { to: '/hizmetler', label: t('nav.services') },
    { to: '/surec', label: t('nav.process') },
    { to: '/evrak-rehberi', label: t('nav.documentGuide') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/sss', label: t('nav.faq') },
  ];

  const schengenCountries = useMemo(() => countries.filter((c) => getDocsKey(c) === 'schengen'), [countries]);
  const otherCountries = useMemo(() => countries.filter((c) => getDocsKey(c) !== 'schengen'), [countries]);

  const phone = settings.phone || '';
  const phoneHref = `tel:+${(settings.whatsapp || phone).replace(/\D/g, '')}`;

  useEffect(() => {
    function handleClickOutside(e) {
      if (countriesRef.current && !countriesRef.current.contains(e.target)) {
        setCountriesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setCountriesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="disclaimer-bar">
        {t('disclaimerBar')}
      </div>
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={closeAll}>
          Menekşe<span>Vize</span>
        </NavLink>

        <button
          type="button"
          className={`hamburger ${open ? 'active' : ''}`}
          aria-label={t('nav.menuToggle')}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <div className={`nav-countries ${countriesOpen ? 'open' : ''}`} ref={countriesRef}>
            <button
              type="button"
              className="nav-countries-trigger"
              aria-expanded={countriesOpen}
              onClick={() => setCountriesOpen((v) => !v)}
            >
              {t('nav.countries')}
              <ChevronDownIcon width={14} height={14} />
            </button>
            {countriesOpen && (
              <div className="nav-countries-panel">
                <div className="nav-countries-scroll">
                  <div className="nav-countries-group-title">{t('nav.schengenGroup')}</div>
                  <div className="nav-countries-list">
                    {schengenCountries.map((country) => (
                      <NavLink key={country.id} to={`/ulkeler/${country.id}`} onClick={closeAll}>
                        <CountryFlag country={country} className="flag-emoji" />
                        {country.title}
                      </NavLink>
                    ))}
                  </div>
                  <div className="nav-countries-group-title">{t('nav.otherGroup')}</div>
                  <div className="nav-countries-list">
                    {otherCountries.map((country) => (
                      <NavLink key={country.id} to={`/ulkeler/${country.id}`} onClick={closeAll}>
                        <CountryFlag country={country} className="flag-emoji" />
                        {country.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <Link to="/hizmetler" className="nav-countries-all" onClick={closeAll}>
                  {t('nav.seeAllCountries')}
                </Link>
              </div>
            )}
          </div>

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeAll}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/iletisim"
            onClick={closeAll}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {t('nav.contact')}
          </NavLink>

          <LanguageSwitcher onNavigate={closeAll} />

          {phone && (
            <a href={phoneHref} className="nav-cta nav-phone-cta" onClick={closeAll}>
              <PhoneIcon width={16} height={16} />
              {phone}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
