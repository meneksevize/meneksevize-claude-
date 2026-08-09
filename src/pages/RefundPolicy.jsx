import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function RefundPolicy() {
  const { settings } = useSiteData();
  const { t } = useLocale();
  const email = settings.email || 'meneksevize@gmail.com';
  const phone = settings.phone || '';

  useDocumentMeta(
    t('refundPolicy.metaTitle'),
    t('refundPolicy.metaDescription'),
    { path: '/iptal-iade-politikasi' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('refundPolicy.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">{t('refundPolicy.pageKicker')}</span>
        <h1>{t('refundPolicy.pageTitle')}</h1>
        <p>{t('refundPolicy.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal as="div" className="card" style={{ lineHeight: 1.8 }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              {t('refundPolicy.introPre')}
              <strong>{t('refundPolicy.introBold')}</strong>
              {t('refundPolicy.introPost')}
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('refundPolicy.s1Title')}</h2>
            <p>
              {t('refundPolicy.s1Pre')}
              <strong>{t('refundPolicy.s1Bold')}</strong>
              {t('refundPolicy.s1Post')}
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('refundPolicy.s2Title')}</h2>
            <p>{t('refundPolicy.s2Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('refundPolicy.s3Title')}</h2>
            <p>{t('refundPolicy.s3Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('refundPolicy.s4Title')}</h2>
            <p>
              {t('refundPolicy.s4Pre')}
              <a href={`mailto:${email}`} style={{ color: 'var(--accent-color)' }}>{email}</a>
              {phone && <>{t('refundPolicy.s4PhoneClausePre')}{phone}{t('refundPolicy.s4PhoneClausePost')}</>}
              {t('refundPolicy.s4Post')}
            </p>

            <p style={{ color: 'var(--text-muted)', marginTop: '2rem', fontSize: '0.9rem' }}>
              {t('refundPolicy.lastUpdated')}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
