import { useParams, Navigate } from 'react-router-dom';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData, getDocsKey } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import {
  CheckIcon, ClockIcon, ChecklistIcon, GlobeIcon, StarIcon, CreditCardIcon,
} from '../components/icons.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import RelatedPosts from '../components/RelatedPosts.jsx';
import ConsultCta from '../components/ConsultCta.jsx';
import { visaTypePhrase } from '../utils/visaTypePhrase.js';

// Hızlı bilgi kartlarının dekoratif ikonları — quick_facts etiketleri sabit bir
// sözlükten gelir (bkz. server/db/translateOverviews.js), üç dildeki anahtar
// kelimelere göre eşleştirilir; eşleşme yoksa sıra döngüsüne düşülür.
const QUICK_FACT_ICON_RULES = [
  { pattern: /süre|geçerli|processing|validity|stay|مدة|صلاح/i, Icon: ClockIcon },
  { pattern: /başkent|dil|capital|language|عاصمة|لغة/i, Icon: GlobeIcon },
  { pattern: /para|currency|عملة/i, Icon: CreditCardIcon },
  { pattern: /öne çıkan|highlight|أبرز|مميز/i, Icon: StarIcon },
];
const QUICK_FACT_ICON_FALLBACK = [ClockIcon, ChecklistIcon, GlobeIcon, StarIcon];

function quickFactIcon(label, index) {
  const rule = QUICK_FACT_ICON_RULES.find((r) => r.pattern.test(label || ''));
  return rule ? rule.Icon : QUICK_FACT_ICON_FALLBACK[index % QUICK_FACT_ICON_FALLBACK.length];
}

export default function CountryDetail() {
  const { countryId } = useParams();
  const { countries, visaTypeLabels, visaDocuments } = useSiteData();
  const { t, locale } = useLocale();

  const country = countries.find((c) => c.id === countryId);
  const docsByType = country ? visaDocuments[getDocsKey(country)] : null;

  // overview artık üç dilde de dolu (bkz. translateOverviews.js) — API pick()
  // ile doğru dili döner, sunucu tarafı enjeksiyon (server/lib/seo.js) da aynı
  // metni kullanır.
  const metaDescription = country
    ? (country.overview || country.intro
      || t('countryDetail.metaDescriptionTemplate', { country: country.title }))
    : undefined;

  useDocumentMeta(
    country ? t('countryDetail.metaTitleTemplate', { country: country.title }) : t('countryDetail.metaNotFoundTitle'),
    metaDescription,
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
          <div className="quick-facts-grid" style={{ marginBottom: country.overview ? '3rem' : '4rem' }}>
            {country.quickFacts.map((fact, i) => {
              const FactIcon = quickFactIcon(fact.label, i);
              return (
                <Reveal as="div" className="quick-fact-card" delay={i * 70} key={fact.label}>
                  <span className="quick-fact-icon" aria-hidden="true"><FactIcon width={18} height={18} /></span>
                  <span className="quick-fact-label">{fact.label}</span>
                  <span className="quick-fact-value">{fact.value}</span>
                </Reveal>
              );
            })}
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
              const typePhrase = visaTypePhrase(visaTypeLabels[typeKey] || typeKey, locale);
              return (
                <details className="faq-item" open={i === 0} key={typeKey}>
                  <summary>{typePhrase}</summary>
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
                      <Link to={`/ulkeler/${country.id}/${typeKey}`} style={{ color: 'var(--link-color)' }}>
                        {t('countryDetail.detailLinkTemplate', { country: country.title, visaType: typePhrase })}
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

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/surec" className="btn btn-secondary">{t('countryDetail.ctaProcess')}</Link>
          </div>

          <ConsultCta countryTitle={country.title} />
        </div>
      </section>

      <RelatedPosts countryId={country.id} />
    </>
  );
}
