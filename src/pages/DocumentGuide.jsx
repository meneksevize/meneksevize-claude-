import { useMemo, useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData, getDocsKey } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import { CheckIcon } from '../components/icons.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function DocumentGuide() {
  const {
    countries, visaTypeLabels, visaDocuments,
  } = useSiteData();
  const { t } = useLocale();

  useDocumentMeta(
    t('documentGuide.metaTitle'),
    t('documentGuide.metaDescription'),
  );

  const [countryKey, setCountryKey] = useState('');
  const [typeKey, setTypeKey] = useState('');

  const country = countries.find((c) => c.id === countryKey);
  const docTypes = country ? visaDocuments[getDocsKey(country)] : null;
  const entry = (docTypes && typeKey) ? docTypes[typeKey] : null;
  const docs = entry?.items ?? [];
  const note = entry?.note;

  const typeOptions = useMemo(() => country?.types ?? [], [country]);

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('documentGuide.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.cameraPassportFlatlay})` }}>
        <span className="kicker">{t('documentGuide.pageKicker')}</span>
        <h1>{t('documentGuide.pageTitle')}</h1>
        <p>{t('documentGuide.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="checklist-tool">
            <div className="select-row">
              <div className="select-group">
                <label htmlFor="countrySelect">{t('documentGuide.countryLabel')}</label>
                <select
                  id="countrySelect"
                  value={countryKey}
                  onChange={(e) => {
                    setCountryKey(e.target.value);
                    setTypeKey('');
                  }}
                >
                  <option value="">{t('documentGuide.selectPlaceholder')}</option>
                  {countries.map((c) => (
                    <option value={c.id} key={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>
              <div className="select-group">
                <label htmlFor="typeSelect">{t('documentGuide.visaTypeLabel')}</label>
                <select
                  id="typeSelect"
                  value={typeKey}
                  disabled={!country}
                  onChange={(e) => setTypeKey(e.target.value)}
                >
                  <option value="">{country ? t('documentGuide.selectVisaType') : t('documentGuide.selectCountryFirst')}</option>
                  {typeOptions.map((key) => (
                    <option value={key} key={key}>{visaTypeLabels[key] || key}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="checklist-output">
              {docs.length > 0 ? (
                <>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                    {country.title}{t('documentGuide.checklistTitleSeparator')}{visaTypeLabels[typeKey] || typeKey}{t('documentGuide.checklistTitleSuffix')}
                  </h3>
                  <ul>
                    {docs.map((doc, i) => (
                      <li key={`${countryKey}-${typeKey}-${doc}`} style={{ '--item-delay': `${i * 45}ms` }}>
                        <span className="checklist-check"><CheckIcon /></span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  {note && (
                    <div className="doc-note">
                      <span><strong>{t('documentGuide.noteLabel')}</strong> {note}</span>
                    </div>
                  )}
                </>
              ) : (
                <p className="checklist-placeholder">{t('documentGuide.placeholder')}</p>
              )}
            </div>

            <div className="checklist-actions">
              {docs.length > 0 && (
                <button type="button" className="btn btn-secondary" onClick={() => window.print()}>
                  {t('documentGuide.printButton')}
                </button>
              )}
            </div>
          </div>

          <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            {t('documentGuide.disclaimer')}
          </p>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/iletisim" className="btn btn-gold">{t('documentGuide.ctaPrepare')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
