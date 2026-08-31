import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from './LocaleLink.jsx';
import { useLocale } from '../context/LocaleContext.jsx';

// Not: bileşen adı "ExitIntentOffer" olarak kaldı ama artık gerçek çıkış
// niyeti sinyali (fare/scroll) beklemiyor — sahibinin isteğiyle sayfaya
// girdikten 7sn sonra doğrudan gösteriliyor. Dosya adını değiştirmek
// gereksiz risk taşıdığı için sadece davranış güncellendi.
const STORAGE_KEY = 'exitOfferLastShown';
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // Aynı ziyaretçiye günde en fazla 1 kez
const SHOW_DELAY_MS = 7000; // Sayfaya girdikten 7sn sonra doğrudan gösterilir.

export default function ExitIntentOffer() {
  const { t } = useLocale();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const eligible = !location.pathname.startsWith('/odeme');

  useEffect(() => {
    if (!eligible) return undefined;

    let lastShown = null;
    try {
      lastShown = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Gizli sekme / depolama engelliyse sessizce devam et, her seferinde gösterilsin.
    }
    if (lastShown && Date.now() - Number(lastShown) < COOLDOWN_MS) return undefined;

    const timer = setTimeout(() => {
      setVisible(true);
      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {
        // yoksay
      }
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [eligible]);

  useEffect(() => {
    if (!visible) return undefined;

    function handleKeyDown(e) {
      if (e.key === 'Escape') setVisible(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="exit-offer-backdrop" onClick={() => setVisible(false)}>
      <div
        className="exit-offer-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-offer-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="exit-offer-close"
          aria-label={t('exitOffer.dismiss')}
          onClick={() => setVisible(false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="exit-offer-aurora" aria-hidden="true">
          <span className="exit-offer-aurora-1"></span>
          <span className="exit-offer-aurora-2"></span>
        </div>

        <div className="exit-offer-content">
          <span className="kicker">{t('exitOffer.kicker')}</span>
          <h2 id="exit-offer-title">{t('exitOffer.title')}</h2>
          <p>{t('exitOffer.text', { price: '299 €' })}</p>
          <Link to="/on-degerlendirme" className="btn btn-gold" onClick={() => setVisible(false)}>
            {t('exitOffer.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
