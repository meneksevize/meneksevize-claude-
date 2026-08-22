import { Link } from './LocaleLink.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { useSiteData } from '../context/SiteDataContext.jsx';
import Reveal from './Reveal.jsx';
import { PhoneIcon, WhatsappIcon } from './icons.jsx';

// Ülke ve vize tipi sayfalarının sonundaki dönüşüm paneli — reklam trafiğinin
// indiği bu sayfalarda ziyaretçiyi tek dokunuşla arama/WhatsApp'a taşır.
// Telefon/WhatsApp değerleri MobileTabBar ile aynı kaynaktan (site_settings)
// gelir; numara asla hardcode edilmez.
export default function ConsultCta({ countryTitle }) {
  const { t } = useLocale();
  const { settings } = useSiteData();

  const phone = settings.phone || '';
  const whatsappDigits = (settings.whatsapp || phone).replace(/\D/g, '');
  const phoneHref = `tel:+${whatsappDigits}`;
  const waMessage = countryTitle
    ? t('consult.waMessageTemplate', { country: countryTitle })
    : t('consult.waMessageGeneric');
  const waHref = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(waMessage)}`;

  return (
    <Reveal as="div" className="consult-cta">
      <div className="consult-cta-glow" aria-hidden="true"></div>
      <span className="kicker">{t('consult.kicker')}</span>
      <h2 className="consult-cta-title">
        {countryTitle
          ? t('consult.titleTemplate', { country: countryTitle })
          : t('consult.titleGeneric')}
      </h2>
      <p className="consult-cta-text">{t('consult.text')}</p>
      <div className="consult-cta-actions">
        {whatsappDigits && (
          <a href={phoneHref} className="btn btn-gold btn-icon">
            <PhoneIcon width={18} height={18} />
            {t('consult.call')}
          </a>
        )}
        {whatsappDigits && (
          <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-icon">
            <WhatsappIcon width={18} height={18} />
            {t('consult.whatsapp')}
          </a>
        )}
        <Link to="/on-degerlendirme" className="btn btn-secondary">
          {t('consult.form')}
        </Link>
      </div>
      <p className="consult-cta-note">{t('consult.note')}</p>
    </Reveal>
  );
}
