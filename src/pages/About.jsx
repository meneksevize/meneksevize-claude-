import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import {
  ShieldIcon, ChecklistIcon, ClockIcon, RefreshIcon, GlobeIcon,
} from '../components/icons.jsx';

export default function About() {
  const { countries } = useSiteData();
  const { t } = useLocale();

  const values = [
    { icon: ShieldIcon, title: t('about.value1Title'), text: t('about.value1Text') },
    { icon: ChecklistIcon, title: t('about.value2Title'), text: t('about.value2Text') },
    { icon: ClockIcon, title: t('about.value3Title'), text: t('about.value3Text') },
    { icon: RefreshIcon, title: t('about.value4Title'), text: t('about.value4Text') },
  ];

  useDocumentMeta(
    t('about.metaTitle'),
    t('about.metaDescription'),
    { image: photos.mapWithPins, path: '/hakkimizda' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('about.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.mapWithPins})` }}>
        <span className="kicker">{t('about.pageKicker')}</span>
        <h1>{t('about.pageTitle')}</h1>
        <p>{t('about.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('about.whatWeDoKicker')}</span>
            <h2>{t('about.whatWeDoTitle')}</h2>
            <p>
              {countries.length > 0 ? `${countries.length} ${t('about.countryUnitSuffix')}` : t('about.fallbackScope')}
              {t('about.whatWeDoSuffix')}
            </p>
          </div>

          <div className="grid grid-4" style={{ marginBottom: '3rem' }}>
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={title}>
                <div className="card-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="card country-overview">
            <span className="kicker">{t('about.whyApproachKicker')}</span>
            <p>{t('about.whyApproachText')}</p>
          </Reveal>

          <Reveal as="div" className="card country-overview" style={{ marginTop: '1.5rem' }}>
            <span className="kicker">{t('about.statusKicker')}</span>
            <p>{t('about.statusText')}</p>
          </Reveal>

          <div className="section-head" style={{ marginTop: '4rem' }}>
            <span className="kicker">{t('about.scopeKicker')}</span>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center' }}>
              <GlobeIcon /> {t('about.scopeTitle')}
            </h2>
            <p>{t('about.scopeText')}</p>
          </div>

          <div style={{
            textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
          }}
          >
            <Link to="/hizmetler" className="btn btn-secondary">{t('about.ctaServices')}</Link>
            <Link to="/iletisim" className="btn btn-gold">{t('about.ctaConsult')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
