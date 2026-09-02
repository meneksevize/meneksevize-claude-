import { Link } from './LocaleLink.jsx';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { InstagramIcon, StarIcon } from './icons.jsx';

export default function Footer() {
  const { settings } = useSiteData();
  const { t, locale } = useLocale();
  const phone = settings.phone || '';
  // settings.footer_note admin panelden Türkçe girildiği için sadece Türkçe
  // görünümde kullanılır; en/ar'da (henüz ayrı bir çeviri alanı olmadığından)
  // sözlükteki çeviri gösterilir. Faz 3'te settings'e footer_note_en/ar
  // eklenince bu ayrım API tarafına taşınabilir.
  const footerNote = locale === 'tr' ? (settings.footer_note || t('footer.defaultNote')) : t('footer.defaultNote');
  const phoneHref = `tel:+${(settings.whatsapp || phone).replace(/\D/g, '')}`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">Menekşe<span>Vize</span></Link>
            <p>{footerNote}</p>
          </div>
          <div className="footer-col">
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><Link to="/hakkimizda">{t('footer.about')}</Link></li>
              <li><Link to="/hizmetler">{t('footer.services')}</Link></li>
              <li><Link to="/e-vize">{t('footer.eVisa')}</Link></li>
              <li><Link to="/surec">{t('footer.process')}</Link></li>
              <li><Link to="/vize-reddi">{t('footer.visaRejection')}</Link></li>
              <li><Link to="/on-degerlendirme">{t('footer.preAssessment')}</Link></li>
              <li><Link to="/evrak-rehberi">{t('footer.documentGuide')}</Link></li>
              <li><Link to="/blog">{t('footer.blog')}</Link></li>
              <li><Link to="/sss">{t('footer.faq')}</Link></li>
              <li><Link to="/takip">{t('footer.track')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>{t('footer.contactTitle')}</h3>
            <ul>
              {phone && <li><a href={phoneHref}>{phone}</a></li>}
              {settings.email && <li><a href={`mailto:${settings.email}`}>{settings.email}</a></li>}
              <li><Link to="/iletisim">{t('footer.contactForm')}</Link></li>
              <li>
                <a
                  href="https://www.instagram.com/meneksevize"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <InstagramIcon width={16} height={16} />
                  {t('footer.instagram')}
                </a>
              </li>
              {/* Google Business Profile açılıp admin panelden link girilene kadar
                  bu satır hiç render olmaz — henüz olmayan bir yorum sayfasına
                  götürmez. */}
              {settings.google_review_link && (
                <li>
                  <a
                    href={settings.google_review_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <StarIcon width={14} height={14} style={{ color: 'var(--gold)' }} />
                    {t('footer.leaveReview')}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="footer-disclaimer">
          {t('footer.disclaimer')}
        </div>

        <div className="footer-bottom">
          <span>{t('footer.copyright')}</span>
          <Link to="/gizlilik-politikasi">{t('footer.privacyPolicy')}</Link>
          <Link to="/kullanim-kosullari">{t('footer.termsOfService')}</Link>
          <Link to="/iptal-iade-politikasi">{t('footer.refundPolicy')}</Link>
          <span>{t('footer.finalDecisionNote')}</span>
        </div>
      </div>
    </footer>
  );
}
