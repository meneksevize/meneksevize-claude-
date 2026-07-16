import { Link, useParams, Navigate } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData, getDocsKey } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import { CheckIcon } from '../components/icons.jsx';
import CountryFlag from '../components/CountryFlag.jsx';

function visaTypeHeading(label, typeKey) {
  const text = label || typeKey;
  return text.toLowerCase().includes('vize') ? text : `${text} Vizesi`;
}

export default function CountryDetail() {
  const { countryId } = useParams();
  const { countries, visaTypeLabels, visaDocuments } = useSiteData();

  const country = countries.find((c) => c.id === countryId);
  const docsByType = country ? visaDocuments[getDocsKey(country)] : null;

  useDocumentMeta(
    country ? `${country.title} Vizesi | Menekşe Vize` : 'Ülke Bulunamadı | Menekşe Vize',
    country ? (country.overview || country.intro || `${country.title} için gerekli vize türleri, evraklar ve süreç bilgisi.`) : undefined,
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
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">Ülkeler</span>
        <h1><CountryFlag country={country} className="country-detail-flag" />{country.title} Vizesi</h1>
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
            <Reveal as="div" className="card country-overview">
              <span className="kicker">{country.title} Hakkında</span>
              <p>{country.overview}</p>
            </Reveal>
          )}

          <div className="section-head">
            <span className="kicker">Vize Türleri &amp; Evraklar</span>
            <h2>{country.title} İçin Gerekli Evraklar</h2>
            <p>Başvurmak istediğiniz vize türünü açarak gerekli evrak listesini görüntüleyin.</p>
          </div>

          <div className="faq-group" style={{ marginBottom: 0 }}>
            {country.types.map((typeKey, i) => {
              const entry = docsByType?.[typeKey] ?? { items: [], note: null };
              return (
                <details className="faq-item" open={i === 0} key={typeKey}>
                  <summary>{visaTypeHeading(visaTypeLabels[typeKey], typeKey)}</summary>
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
                      <p>Bu vize türü için evrak listesi ön görüşmede birlikte netleştirilir.</p>
                    )}
                    {entry.note && (
                      <div className="doc-note">
                        <span><strong>Önemli:</strong> {entry.note}</span>
                      </div>
                    )}
                  </div>
                </details>
              );
            })}
          </div>

          <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '2rem auto 0' }}>
            Bu liste genel bir rehber niteliğindedir; başvurunuza özel ek belge gerekip gerekmediğini ön görüşmemizde birlikte netleştiririz. Nihai vize kararı ilgili konsolosluğa aittir.
          </p>

          <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/surec" className="btn btn-secondary">Başvuru Sürecini İncele</Link>
            <Link to="/iletisim" className="btn btn-gold">Ücretsiz Ön Görüşme Alın</Link>
          </div>
        </div>
      </section>
    </>
  );
}
