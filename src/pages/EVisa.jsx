import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function EVisa() {
  const { countries } = useSiteData();
  const { t } = useLocale();
  const eVisaCountries = countries.filter((c) => c.tags?.includes('E-Vize'));

  useDocumentMeta(
    t('eVisa.metaTitle'),
    t('eVisa.metaDescription'),
    { image: photos.passportBoardingPass, path: '/e-vize' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('eVisa.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">{t('eVisa.pageKicker')}</span>
        <h1>{t('eVisa.pageTitle')}</h1>
        <p>{t('eVisa.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('eVisa.whyKicker')}</span>
            <h2>{t('eVisa.whyTitle')}</h2>
            <p>{t('eVisa.whyText')}</p>
          </div>

          <div className="country-tile-grid">
            {eVisaCountries.map((country, i) => (
              <Reveal
                as={Link}
                to={`/ulkeler/${country.id}`}
                className="country-tile"
                delay={Math.min(i * 15, 300)}
                key={country.id}
              >
                <CountryFlag country={country} className="country-tile-flag" />
                <span className="country-tile-name">{country.title}</span>
              </Reveal>
            ))}
          </div>

          <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '2rem auto 0' }}>
            {t('eVisa.notFoundPre')}<Link to="/hizmetler" style={{ color: 'var(--link-color)' }}>{t('eVisa.notFoundLink1')}</Link>{t('eVisa.notFoundMid')}<Link to="/iletisim" style={{ color: 'var(--link-color)' }}>{t('eVisa.notFoundLink2')}</Link>{t('eVisa.notFoundPost')}
          </p>
        </div>
      </section>
    </>
  );
}
