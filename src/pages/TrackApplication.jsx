import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { STAGES, getStageIndex } from '../data/stages.js';
import { photos } from '../data/photos.js';
import { CheckIcon } from '../components/icons.jsx';

export default function TrackApplication() {
  const { countries } = useSiteData();
  const [trackingCode, setTrackingCode] = useState('');
  const [surname, setSurname] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  useDocumentMeta(
    'Başvuru Takip | Menekşe Vize',
    'Vize başvurunuzun hangi aşamada olduğunu takip kodunuzla anında görüntüleyin.',
  );

  const currentStageIndex = result ? getStageIndex(result.currentStage) : -1;
  const country = result ? countries.find((c) => c.id === result.countryId) : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    setResult(null);
    try {
      const res = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingCode, surname }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Başvuru bulunamadı.');
      }
      setResult(json);
      setStatus('success');
    } catch (err) {
      setStatus('idle');
      setError(err.message);
    }
  };

  return (
    <>
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.cameraPassportFlatlay})` }}>
        <span className="kicker">Kişiye Özel Araç</span>
        <h1>Başvuru Takip</h1>
        <p>Size verdiğimiz takip kodu ve soyisminizle başvurunuzun hangi aşamada olduğunu anında görün.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="checklist-tool" style={{ marginBottom: result ? '3rem' : 0 }}>
            <form onSubmit={handleSubmit}>
              {error && <div className="admin-login-error">{error}</div>}
              <div className="select-row">
                <div className="select-group">
                  <label htmlFor="trackingCode">Takip Kodu</label>
                  <input
                    id="trackingCode"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    placeholder="MV-7F3K9Q"
                    required
                  />
                </div>
                <div className="select-group">
                  <label htmlFor="surname">Soyisim</label>
                  <input
                    id="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: '100%' }} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sorgulanıyor…' : 'Sorgula'}
              </button>
            </form>
          </div>

          {result && (
            <>
              <div className="section-head">
                <span className="kicker">{result.clientName}</span>
                <h2>
                  {country ? `${country.flag} ${country.title}` : 'Başvuru'} {result.visaType ? `— ${result.visaType}` : ''}
                </h2>
                <p>Son güncelleme: {new Date(result.updatedAt).toLocaleString('tr-TR')}</p>
              </div>

              <div className="timeline">
                {STAGES.map((stage, i) => {
                  const isDone = i <= currentStageIndex;
                  const isCurrent = i === currentStageIndex;
                  const update = result.updates.slice().reverse().find((u) => u.stage === stage.key);
                  return (
                    <div className={`timeline-step open ${isDone ? '' : ''}`} key={stage.key}>
                      <div className="timeline-marker" style={isDone ? { backgroundColor: 'var(--accent-color)', color: '#fff' } : undefined}>
                        {isDone ? <CheckIcon /> : i + 1}
                      </div>
                      <div className="timeline-header" style={{ cursor: 'default' }}>
                        <h3 style={{ color: isCurrent ? 'var(--gold)' : undefined }}>{stage.label}</h3>
                      </div>
                      {update?.note && (
                        <div className="timeline-body" style={{ maxHeight: 300 }}>
                          <div className="timeline-body-inner">{update.note}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '2rem auto 0' }}>
                Sorularınız için <Link to="/iletisim" style={{ color: 'var(--accent-color)' }}>bize ulaşabilirsiniz</Link>.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
