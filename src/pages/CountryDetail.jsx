import { useParams, Navigate } from 'react-router-dom';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData, getDocsKey } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import { CheckIcon } from '../components/icons.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

// TR verisi Faz 3'e kadar her dilde aynı kalıyor (bkz. plan); bu yüzden "vize"
// kelimesi tekrarını önleyen kontrol Türkçe'ye özel kalıyor. Arapça'da "vize"
// tipi soyadları henüz çevrilmediği için doğal sıralama önek (تأشيرة X) yerine
// aynı sonek deseni kullanılır — Faz 3'te visa_type_labels çevrilince bu
// mantık gözden geçirilebilir.
function visaTypeHeading(label, typeKey, locale, t) {
  const text = label || typeKey;
  if (text.toLowerCase().includes('vize')) return text;
  if (locale === 'ar') return `${t('countryDetail.visaTypePrefixAr')}${text}`;
  return `${text}${t('countryDetail.visaTypeSuffix')}`;
}

export default function CountryDetail() {
  const { countryId } = useParams();
  const { countries, visaTypeLabels, visaDocuments } = useSiteData();
  const { t, locale } = useLocale();

  const country = countries.find((c) => c.id === countryId);
  const docsByType = country ? visaDocuments[getDocsKey(country)] : null;

  useDocumentMeta(
    country ? t('countryDetail.metaTitleTemplate', { country: country.title }) : t('countryDetail.metaNotFoundTitle'),
    country ? (country.overview || country.intro || t('countryDetail.metaDescriptionTemplate', { country: country.title })) : undefined,
    { image: photos.passportBoardingPass, path: country ? `/ulkeler/${country.id}` : undefined },
  );

  if (countries.length > 0 && !country) {
    return <Navigate to="/hizmetler" replace />;
  }

  if (!country) {
    return null;
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: t('common.breadcrumbHome'), to: '/' },
        { label: t('countryDetail.breadcrumbCountries'), to: '/hizmetler' },
        { label: t('countryDetail.visaPageTitle', { country: country.title }) },
      ]}
      />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">{t('countryDetail.pageKicker')}</span>
        <h1><CountryFlag country={country} className="country-detail-flag" />{t('countryDetail.visaPageTitle', { country: country.title })}</h1>
        <p>{country.intro}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="grid grid-4" style={{ marginBottom: country.overview ? '3rem' : '4rem' }}>
            {country.quickFacts.map((fact, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={fact.label}>
                <h3 style={{ fontSize: '1rem' }}>{fact.label}</h3>
                <p>{fact.value}</p>
              </Reveal>
            ))}
          </div>

          {country.overview && (
            <div className="faq-group" style={{ marginBottom: '2rem' }}>
              <details className="faq-item">
                <summary>{t('countryDetail.aboutTemplate', { country: country.title })}</summary>
                <div className="faq-answer">{country.overview}</div>
              </details>
            </div>
          )}

          <div className="section-head">
            <span className="kicker">{t('countryDetail.sectionKicker')}</span>
            <h2>{t('countryDetail.docsTitleTemplate', { country: country.title })}</h2>
            <p>{t('countryDetail.docsSubtitle')}</p>
          </div>

          <div className="faq-group" style={{ marginBottom: 0 }}>
            {country.types.map((typeKey, i) => {
              const entry = docsByType?.[typeKey] ?? { items: [], note: null };
              return (
                <details className="faq-item" open={i === 0} key={typeKey}>
                  <summary>{visaTypeHeading(visaTypeLabels[typeKey], typeKey, locale, t)}</summary>
                  <div className="faq-answer checklist-output" style={{ border: 'none', paddingTop: 0 }}>
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
                      <p>{t('countryDetail.noDocsYet')}</p>
                    )}
                    {entry.note && (
                      <div className="doc-note">
                        <span><strong>{t('countryDetail.noteLabel')}</strong> {entry.note}</span>
                      </div>
                    )}
                    <p style={{ marginTop: '1rem' }}>
                      <Link to={`/ulkeler/${country.id}/${typeKey}`} style={{ color: 'var(--accent-color)' }}>
                        {t('countryDetail.detailLinkTemplate', { country: country.title, visaType: visaTypeLabels[typeKey] })}
                      </Link>
                    </p>
                  </div>
                </details>
              );
            })}
          </div>

          <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '2rem auto 0' }}>
            {t('countryDetail.disclaimer')}
          </p>

          <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/surec" className="btn btn-secondary">{t('countryDetail.ctaProcess')}</Link>
            <Link to="/iletisim" className="btn btn-gold">{t('countryDetail.ctaConsult')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
