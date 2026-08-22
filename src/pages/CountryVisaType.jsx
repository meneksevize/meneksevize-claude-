import { useParams, Navigate } from 'react-router-dom';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData, getDocsKey } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import RelatedPosts from '../components/RelatedPosts.jsx';
import { CheckIcon } from '../components/icons.jsx';

function buildTypeGuide(country, visaType, t) {
  const base = t(`countryVisaType.guideBase.${visaType}`);
  if (base === `countryVisaType.guideBase.${visaType}`) return null;
  const countryContext = country.servicesDescription || country.homeDescription || '';
  return t('countryVisaType.guideWrapperTemplate', { country: country.title, base, context: countryContext }).trim();
}

export default function CountryVisaType() {
  const { countryId, visaType } = useParams();
  const { countries, visaTypeLabels, visaDocuments } = useSiteData();
  const { t } = useLocale();

  const country = countries.find((c) => c.id === countryId);
  const docsByType = country ? visaDocuments[getDocsKey(country)] : null;
  const typeLabel = visaTypeLabels[visaType] || visaType;
  const entry = docsByType?.[visaType] ?? { items: [], note: null };
  const introKey = `countryVisaType.intro.${visaType}`;
  const introResolved = t(introKey);
  const intro = introResolved === introKey ? t('countryVisaType.introFallback') : introResolved;
  const typeGuide = country ? buildTypeGuide(country, visaType, t) : null;

  useDocumentMeta(
    country ? t('countryVisaType.metaTitleTemplate', { country: country.title, type: typeLabel }) : t('countryVisaType.metaNotFoundTitle'),
    country ? t('countryVisaType.metaDescriptionTemplate', { country: country.title, typeLower: typeLabel.toLowerCase() }) : undefined,
    { image: photos.passportBoardingPass, path: country ? `/ulkeler/${country.id}/${visaType}` : undefined },
  );

  if (countries.length > 0 && (!country || !country.types.includes(visaType))) {
    return <Navigate to={country ? `/ulkeler/${country.id}` : '/hizmetler'} replace />;
  }

  if (!country) {
    return null;
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: t('common.breadcrumbHome'), to: '/' },
        { label: t('countryVisaType.breadcrumbCountries'), to: '/hizmetler' },
        { label: t('countryVisaType.breadcrumbCountryVisaTemplate', { country: country.title }), to: `/ulkeler/${country.id}` },
        { label: t('countryVisaType.breadcrumbTypeVisaTemplate', { type: typeLabel }) },
      ]}
      />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">{t('countryVisaType.pageKicker')}</span>
        <h1><CountryFlag country={country} className="country-detail-flag" />{t('countryVisaType.titleTemplate', { country: country.title, type: typeLabel })}</h1>
        <p>
          {t('countryVisaType.introWrapperTemplate', { country: country.title, intro })}
        </p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
            {country.quickFacts.map((fact, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={fact.label}>
                <h3 style={{ fontSize: '1rem' }}>{fact.label}</h3>
                <p>{fact.value}</p>
              </Reveal>
            ))}
          </div>

          {(country.overview || typeGuide) && (
            <div className="faq-group" style={{ marginBottom: '2rem' }}>
              {country.overview && (
                <details className="faq-item">
                  <summary>{t('countryVisaType.aboutCountryTemplate', { country: country.title })}</summary>
                  <div className="faq-answer">{country.overview}</div>
                </details>
              )}
              {typeGuide && (
                <details className="faq-item">
                  <summary>{t('countryVisaType.aboutTypeTemplate', { type: typeLabel })}</summary>
                  <div className="faq-answer">{typeGuide}</div>
                </details>
              )}
            </div>
          )}

          <div className="section-head" style={{ marginTop: '2rem' }}>
            <span className="kicker">{t('countryVisaType.docsKicker')}</span>
            <h2>{t('countryVisaType.docsTitleTemplate', { country: country.title, type: typeLabel })}</h2>
          </div>

          <Reveal as="div" className="card faq-answer checklist-output" style={{ border: '1px solid var(--border-color)' }}>
            {entry.items.length > 0 ? (
              <ul>
                {entry.items.map((doc, di) => (
                  <li key={doc} style={{ '--item-delay': `${di * 45}ms` }}>
                    <span className="checklist-check"><CheckIcon /></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{t('countryVisaType.noDocsYet')}</p>
            )}
            {entry.note && (
              <div className="doc-note">
                <span><strong>{t('countryVisaType.noteLabel')}</strong> {entry.note}</span>
              </div>
            )}
          </Reveal>

          <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '2rem auto 0' }}>
            {t('countryVisaType.disclaimer')}
          </p>

          <div style={{
            textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
          }}
          >
            <Link to={`/ulkeler/${country.id}`} className="btn btn-secondary">{t('countryVisaType.ctaOtherTypesTemplate', { country: country.title })}</Link>
            <Link to="/iletisim" className="btn btn-gold">{t('countryVisaType.ctaConsult')}</Link>
          </div>
        </div>
      </section>

      <RelatedPosts countryId={country.id} />
    </>
  );
}
