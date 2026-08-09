import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useLocale } from '../context/LocaleContext.jsx';

export default function NotFound() {
  const { t } = useLocale();

  useDocumentMeta(
    t('notFound.metaTitle'),
    t('notFound.metaDescription'),
  );

  return (
    <section className="section" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="kicker">{t('notFound.kicker')}</span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '1rem' }}>{t('notFound.title')}</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 2rem' }}>
          {t('notFound.text')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-gold">{t('notFound.ctaHome')}</Link>
          <Link to="/hizmetler" className="btn btn-secondary">{t('notFound.ctaCountries')}</Link>
          <Link to="/iletisim" className="btn btn-secondary">{t('notFound.ctaContact')}</Link>
        </div>
      </div>
    </section>
  );
}
