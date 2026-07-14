import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData, getDocsKey } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import { CheckIcon } from '../components/icons.jsx';

export default function DocumentGuide() {
  const {
    countries, visaTypeLabels, visaDocuments,
  } = useSiteData();

  useDocumentMeta(
    'Evrak Rehberi | Menekşe Vize',
    "Ülke ve vize tipinizi seçin, size özel evrak checklist'ini anında görüntüleyin ve yazdırın. Menekşe Vize'nin kişiselleştirilmiş evrak rehberi.",
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
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.cameraPassportFlatlay})` }}>
        <span className="kicker">Kişiye Özel Araç</span>
        <h1>Evrak Rehberi</h1>
        <p>Ülkenizi ve vize tipinizi seçin, gerekli evrak listesi anında karşınızda — isterseniz yazdırıp yanınıza alın.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="checklist-tool">
            <div className="select-row">
              <div className="select-group">
                <label htmlFor="countrySelect">Ülke</label>
                <select
                  id="countrySelect"
                  value={countryKey}
                  onChange={(e) => {
                    setCountryKey(e.target.value);
                    setTypeKey('');
                  }}
                >
                  <option value="">Seçiniz</option>
                  {countries.map((c) => (
                    <option value={c.id} key={c.id}>{c.flag} {c.title}</option>
                  ))}
                </select>
              </div>
              <div className="select-group">
                <label htmlFor="typeSelect">Vize Tipi</label>
                <select
                  id="typeSelect"
                  value={typeKey}
                  disabled={!country}
                  onChange={(e) => setTypeKey(e.target.value)}
                >
                  <option value="">{country ? 'Vize tipi seçin' : 'Önce ülke seçin'}</option>
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
                    {country.title} — {visaTypeLabels[typeKey] || typeKey} Evrak Listesi
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
                      <span><strong>Önemli:</strong> {note}</span>
                    </div>
                  )}
                </>
              ) : (
                <p className="checklist-placeholder">Evrak listesini görmek için yukarıdan ülke ve vize tipi seçin.</p>
              )}
            </div>

            <div className="checklist-actions">
              {docs.length > 0 && (
                <button type="button" className="btn btn-secondary" onClick={() => window.print()}>
                  Yazdır / PDF Kaydet
                </button>
              )}
            </div>
          </div>

          <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            Bu liste genel bir rehber niteliğindedir; başvurunuza özel ek belge gerekip gerekmediğini ön görüşmemizde birlikte netleştiririz.
          </p>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/iletisim" className="btn btn-gold">Evraklarımı Birlikte Hazırlayalım</Link>
          </div>
        </div>
      </section>
    </>
  );
}
