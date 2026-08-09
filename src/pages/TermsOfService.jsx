import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function TermsOfService() {
  const { settings } = useSiteData();
  const { t } = useLocale();
  const email = settings.email || 'meneksevize@gmail.com';

  useDocumentMeta(
    t('termsOfService.metaTitle'),
    t('termsOfService.metaDescription'),
    { path: '/kullanim-kosullari' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('termsOfService.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">{t('termsOfService.pageKicker')}</span>
        <h1>{t('termsOfService.pageTitle')}</h1>
        <p>{t('termsOfService.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal as="div" className="card" style={{ lineHeight: 1.8 }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              {t('termsOfService.intro')}
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('termsOfService.s1Title')}</h2>
            <p>
              {t('termsOfService.s1Pre')}
              <strong>{t('termsOfService.s1Bold1')}</strong>
              {t('termsOfService.s1Mid')}
              <strong>{t('termsOfService.s1Bold2')}</strong>
              {t('termsOfService.s1Post')}
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('termsOfService.s2Title')}</h2>
            <p>{t('termsOfService.s2Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('termsOfService.s3Title')}</h2>
            <p>{t('termsOfService.s3Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('termsOfService.s4Title')}</h2>
            <p>{t('termsOfService.s4Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('termsOfService.s5Title')}</h2>
            <p>{t('termsOfService.s5Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('termsOfService.s6Title')}</h2>
            <p>{t('termsOfService.s6Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('termsOfService.s7Title')}</h2>
            <p>{t('termsOfService.s7Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('termsOfService.s8Title')}</h2>
            <p>
              {t('termsOfService.s8BodyPre')}
              <a href={`mailto:${email}`} style={{ color: 'var(--accent-color)' }}>{email}</a>
              {t('termsOfService.s8BodyPost')}
            </p>

            <p style={{ color: 'var(--text-muted)', marginTop: '2rem', fontSize: '0.9rem' }}>
              {t('termsOfService.lastUpdated')}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
