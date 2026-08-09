import { useLocation, useNavigate } from 'react-router-dom';
import { useLocale, extractLocale, SUPPORTED_LOCALES } from '../context/LocaleContext.jsx';

const LABELS = { tr: 'TR', en: 'EN', ar: 'AR' };

// Mevcut sayfanın yolunu koruyarak sadece dil önekini değiştirir — İngilizce
// bir ülke sayfasındayken Arapça'ya geçince aynı ülke sayfasının Arapça
// hâline gider, anasayfaya atmaz.
export default function LanguageSwitcher({ onNavigate }) {
  const { locale: activeLocale } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();

  const switchTo = (nextLocale) => {
    const { strippedPathname } = extractLocale(location.pathname);
    const nextPrefix = nextLocale === 'tr' ? '' : `/${nextLocale}`;
    navigate(`${nextPrefix}${strippedPathname}${location.search}`);
    onNavigate?.();
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {SUPPORTED_LOCALES.map((loc) => (
        <button
          key={loc}
          type="button"
          className={`lang-switcher-btn ${loc === activeLocale ? 'active' : ''}`}
          onClick={() => switchTo(loc)}
        >
          {LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
