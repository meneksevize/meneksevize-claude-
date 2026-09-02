import { useMemo, useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import {
  CompassIcon, BuildingIcon, BookIcon, GearIcon, HouseIcon, GlobeIcon, CreditCardIcon, MapleIcon,
} from '../components/icons.jsx';

const typeFilters = ['all', 'turistik', 'ticari', 'ogrenci', 'calisma', 'aile-birlesimi', 'transit', 'e-vize', 'dogum'];

export default function Services() {
  const { countries, visaTypeLabels } = useSiteData();
  const { t } = useLocale();

  // Sırayla typeFilters'ın (all hariç) aynı 8 vize tipiyle eşleşir — her
  // birine sitenin geri kalanındaki kart-ikon dilinde (bkz. Home.jsx whyUs)
  // temaya uygun bir ikon: Doğum Vizesi için Kanada'nın akçaağaç yaprağı gibi.
  const visaTypeInfo = [
    { icon: CompassIcon, title: t('services.visaType1Title'), text: t('services.visaType1Text') },
    { icon: BuildingIcon, title: t('services.visaType2Title'), text: t('services.visaType2Text') },
    { icon: BookIcon, title: t('services.visaType3Title'), text: t('services.visaType3Text') },
    { icon: GearIcon, title: t('services.visaType4Title'), text: t('services.visaType4Text') },
    { icon: HouseIcon, title: t('services.visaType5Title'), text: t('services.visaType5Text') },
    { icon: GlobeIcon, title: t('services.visaType6Title'), text: t('services.visaType6Text') },
    { icon: CreditCardIcon, title: t('services.visaType7Title'), text: t('services.visaType7Text') },
    { icon: MapleIcon, title: t('services.visaType8Title'), text: t('services.visaType8Text') },
  ];

  const regionLabels = {
    all: t('services.regionAll'),
    avrupa: t('services.regionEurope'),
    amerika: t('services.regionAmerica'),
    'orta-dogu': t('services.regionMiddleEast'),
    diger: t('services.regionOther'),
  };
  const regionFilters = ['all', 'avrupa', 'amerika', 'orta-dogu', 'diger'];

  useDocumentMeta(
    t('services.metaTitle'),
    t('services.metaDescription'),
  );

  const [region, setRegion] = useState('all');
  const [type, setType] = useState('all');

  const filteredCountries = useMemo(() => countries.filter((c) => {
    const regionMatch = region === 'all' || c.region === region;
    const typeMatch = type === 'all' || c.types.includes(type);
    return regionMatch && typeMatch;
  }), [region, type, countries]);

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('services.breadcrumbServices') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.worldMap})` }}>
        <span className="kicker">{t('services.pageKicker')}</span>
        <h1>{t('services.pageTitle')}</h1>
        <p>{t('services.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('services.infoKicker')}</span>
            <h2>{t('services.infoTitle')}</h2>
          </div>
          <div className="grid grid-4" style={{ marginBottom: '4rem' }}>
            {visaTypeInfo.map(({
              icon: Icon, title, text,
            }, i) => (
              <Reveal as="div" className="card" delay={i * 50} key={title}>
                <div className="card-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>

          <div className="section-head">
            <span className="kicker">{t('services.countriesKicker')}</span>
            <h2>{t('services.countriesTitle')}</h2>
            <p>
              {t('services.countriesSubtitlePre')}<Link to="/e-vize" style={{ color: 'var(--link-color)' }}>{t('services.countriesSubtitleLink')}</Link>{t('services.countriesSubtitlePost')}
            </p>
          </div>

          <div className="filter-bar">
            {regionFilters.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-btn ${region === value ? 'active' : ''}`}
                onClick={() => setRegion(value)}
              >
                {regionLabels[value]}
              </button>
            ))}
          </div>

          <div className="filter-bar">
            <button
              type="button"
              className={`filter-btn ${type === 'all' ? 'active' : ''}`}
              onClick={() => setType('all')}
            >
              {t('services.allVisaTypes')}
            </button>
            {typeFilters.filter((v) => v !== 'all').map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-btn ${type === value ? 'active' : ''}`}
                onClick={() => setType(value)}
              >
                {visaTypeLabels[value]}
              </button>
            ))}
          </div>

          <div className="country-tile-grid">
            {filteredCountries.map((country, i) => (
              <Reveal
                as={Link}
                to={`/ulkeler/${country.id}`}
                className="country-tile"
                delay={Math.min(i * 15, 300)}
                id={country.id}
                key={country.id}
              >
                <CountryFlag country={country} className="country-tile-flag" />
                <span className="country-tile-name">{country.title}</span>
              </Reveal>
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <p className="checklist-placeholder">{t('services.noResults')}</p>
          )}

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/evrak-rehberi" className="btn btn-secondary">{t('services.ctaDocGuide')}</Link>{' '}
            <Link to="/iletisim" className="btn btn-gold">{t('services.ctaFreeConsult')}</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="kicker">{t('services.pricingKicker')}</span>
            <h2>{t('services.pricingTitle')}</h2>
          </div>
          <Reveal as="div" className="card">
            <p>
              {t('services.pricingP1Pre')}
              <strong>{t('services.pricingP1Bold')}</strong>
              {t('services.pricingP1Post')}
            </p>
            <p style={{ marginTop: '1rem' }}>
              {t('services.pricingP2Pre')}
              <Link to="/iptal-iade-politikasi" style={{ color: 'var(--link-color)' }}>{t('services.pricingP2Link')}</Link>
              {t('services.pricingP2Post')}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
