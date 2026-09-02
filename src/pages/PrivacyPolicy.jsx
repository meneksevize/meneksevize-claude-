import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function PrivacyPolicy() {
  const { settings } = useSiteData();
  const { t } = useLocale();
  const email = settings.email || 'meneksevize@gmail.com';

  useDocumentMeta(
    t('privacyPolicy.metaTitle'),
    t('privacyPolicy.metaDescription'),
    { path: '/gizlilik-politikasi' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('privacyPolicy.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">{t('privacyPolicy.pageKicker')}</span>
        <h1>{t('privacyPolicy.pageTitle')}</h1>
        <p>{t('privacyPolicy.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal as="div" className="card" style={{ lineHeight: 1.8 }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              {t('privacyPolicy.intro')}
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('privacyPolicy.s1Title')}</h2>
            <p>
              {t('privacyPolicy.s1BodyPre')}
              <a href={`mailto:${email}`} style={{ color: 'var(--link-color)' }}>{email}</a>
              {t('privacyPolicy.s1BodyPost')}
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('privacyPolicy.s2Title')}</h2>
            <p>{t('privacyPolicy.s2Intro')}</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {t('privacyPolicy.s2List').map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              {t('privacyPolicy.s2Note')}
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('privacyPolicy.s3Title')}</h2>
            <p>{t('privacyPolicy.s3Intro')}</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {t('privacyPolicy.s3List').map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('privacyPolicy.s4Title')}</h2>
            <p>{t('privacyPolicy.s4Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('privacyPolicy.s5Title')}</h2>
            <p>{t('privacyPolicy.s5Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('privacyPolicy.s6Title')}</h2>
            <p>{t('privacyPolicy.s6Body')}</p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('privacyPolicy.s7Title')}</h2>
            <p>{t('privacyPolicy.s7Intro')}</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {t('privacyPolicy.s7List').map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>{t('privacyPolicy.s8Title')}</h2>
            <p>
              {t('privacyPolicy.s8BodyPre')}
              <a href={`mailto:${email}`} style={{ color: 'var(--link-color)' }}>{email}</a>
              {t('privacyPolicy.s8BodyPost')}
            </p>

            <p style={{ color: 'var(--text-muted)', marginTop: '2rem', fontSize: '0.9rem' }}>
              {t('privacyPolicy.lastUpdated')}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
