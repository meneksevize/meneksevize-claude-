import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from './LocaleLink.jsx';
import { useLocale } from '../context/LocaleContext.jsx';

const STORAGE_KEY = 'exitOfferLastShown';
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // Aynı ziyaretçiye günde en fazla 1 kez
const ARM_DELAY_MS = 5000; // İlk 5sn içinde hiç tetiklenmesin — anında açılan
// bloklayıcı popup'lar Google'ın mobil "intrusive interstitial" cezasına
// girer; gerçek bir çıkış niyeti sinyaline (fare/scroll) kadar beklemek bu
// riski taşımaz çünkü ziyaretçi zaten içeriğe erişmiş oluyor.
const SCROLL_ARM_PERCENT = 40; // Mobilde tetiklenmeden önce sayfanın en az bu kadarı görülmüş olmalı
const SCROLL_UP_DELTA = 80; // ...ve ardından bu kadar hızlı yukarı kaydırma "ayrılıyor" sinyali sayılır

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

    let armed = false;
    let shown = false;
    const armTimer = setTimeout(() => { armed = true; }, ARM_DELAY_MS);

    function trigger() {
      if (shown || !armed) return;
      shown = true;
      setVisible(true);
      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {
        // yoksay
      }
    }

    function handleMouseLeave(e) {
      if (e.clientY <= 0) trigger();
    }

    let maxScrollPercent = 0;
    let lastY = window.scrollY;
    function handleScroll() {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      maxScrollPercent = Math.max(maxScrollPercent, percent);
      const upwardDelta = lastY - window.scrollY;
      if (maxScrollPercent > SCROLL_ARM_PERCENT && upwardDelta > SCROLL_UP_DELTA) trigger();
      lastY = window.scrollY;
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(armTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
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
