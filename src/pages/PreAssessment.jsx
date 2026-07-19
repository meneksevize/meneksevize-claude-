import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const PURPOSES = [
  { key: 'turistik', label: 'Turistik Gezi' },
  { key: 'ticari', label: 'Ticari / İş Görüşmesi' },
  { key: 'ziyaret', label: 'Aile / Arkadaş Ziyareti' },
  { key: 'egitim', label: 'Eğitim / Öğrenci' },
  { key: 'diger', label: 'Diğer' },
];

const TIMINGS = [
  { key: '1ay', label: '1 ay içinde' },
  { key: '1-3ay', label: '1-3 ay içinde' },
  { key: '3ay+', label: '3 aydan sonra' },
  { key: 'belirsiz', label: 'Henüz belirsiz' },
];

const REFUSAL = [
  { key: 'hayir', label: 'Hayır, ilk başvurum' },
  { key: 'evet', label: 'Evet, daha önce red aldım' },
];

const TOTAL_STEPS = 4;

export default function PreAssessment() {
  const { countries } = useSiteData();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    country: '', purpose: '', refusal: '', timing: '', name: '', email: '', phone: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useDocumentMeta(
    'Ücretsiz Vize Ön Değerlendirme | Menekşe Vize',
    'Hedef ülkenizi ve seyahat amacınızı seçin, başvurunuz için ücretsiz ön değerlendirme alın. Size özel vize planınızı birlikte oluşturalım.',
    { path: '/on-degerlendirme' },
  );

  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const purposeLabel = PURPOSES.find((p) => p.key === form.purpose)?.label || '';
  const timingLabel = TIMINGS.find((t) => t.key === form.timing)?.label || '';
  const refusalLabel = REFUSAL.find((r) => r.key === form.refusal)?.label || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    const message = [
      '[Ön Değerlendirme Formu]',
      `Hedef ülke: ${form.country}`,
      `Seyahat amacı: ${purposeLabel}`,
      `Daha önce vize reddi: ${refusalLabel}`,
      `Planlanan seyahat: ${timingLabel}`,
    ].join('\n');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          targetCountry: form.country,
          message,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Gönderilemedi, lütfen tekrar deneyin.');
      setStatus('success');
    } catch (err) {
      setStatus('idle');
      setError(err.message);
    }
  };

  const stepValid = (
    (step === 1 && form.country)
    || (step === 2 && form.purpose)
    || (step === 3 && form.refusal && form.timing)
  );

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'Ön Değerlendirme' }]} />
      <section className="page-header">
        <span className="kicker">Ücretsiz Ön Değerlendirme</span>
        <h1>3 Adımda Başvurunuzu Değerlendirelim</h1>
        <p>Birkaç kısa soruyla durumunuzu bize aktarın; size en uygun vize planı için ücretsiz dönüş yapalım.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <Reveal as="div" className="card">
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div className="admin-success-banner">
                  Ön değerlendirme talebiniz alındı. En kısa sürede sizi arayarak değerlendirmemizi paylaşacağız.
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  <Link to="/surec" className="btn btn-secondary">Süreci İnceleyin</Link>
                  <Link to="/" className="btn btn-gold">Ana Sayfaya Dön</Link>
                </div>
              </div>
            ) : (
              <>
                <div className="wizard-progress" aria-hidden="true">
                  {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={i} className={`wizard-progress-dot ${i + 1 <= step ? 'active' : ''}`} />
                  ))}
                </div>
                <p className="form-note" style={{ marginBottom: '1.5rem' }}>Adım {step} / {TOTAL_STEPS}</p>

                {step === 1 && (
                  <div className="form-group">
                    <label htmlFor="wizard-country">Hangi ülkeye başvurmak istiyorsunuz?</label>
                    <select
                      id="wizard-country"
                      value={form.country}
                      onChange={(e) => set('country', e.target.value)}
                    >
                      <option value="" disabled>Ülke seçin…</option>
                      {countries.map((c) => (
                        <option value={c.title} key={c.id}>{c.title}</option>
                      ))}
                      <option value="Diğer / Emin değilim">Diğer / Emin değilim</option>
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <fieldset className="wizard-options">
                    <legend>Seyahat amacınız nedir?</legend>
                    {PURPOSES.map((p) => (
                      <label className={`wizard-option ${form.purpose === p.key ? 'selected' : ''}`} key={p.key}>
                        <input
                          type="radio"
                          name="purpose"
                          value={p.key}
                          checked={form.purpose === p.key}
                          onChange={() => set('purpose', p.key)}
                        />
                        {p.label}
                      </label>
                    ))}
                  </fieldset>
                )}

                {step === 3 && (
                  <>
                    <fieldset className="wizard-options">
                      <legend>Daha önce vize reddi aldınız mı?</legend>
                      {REFUSAL.map((r) => (
                        <label className={`wizard-option ${form.refusal === r.key ? 'selected' : ''}`} key={r.key}>
                          <input
                            type="radio"
                            name="refusal"
                            value={r.key}
                            checked={form.refusal === r.key}
                            onChange={() => set('refusal', r.key)}
                          />
                          {r.label}
                        </label>
                      ))}
                    </fieldset>
                    <fieldset className="wizard-options" style={{ marginTop: '1.25rem' }}>
                      <legend>Seyahatinizi ne zaman planlıyorsunuz?</legend>
                      {TIMINGS.map((t) => (
                        <label className={`wizard-option ${form.timing === t.key ? 'selected' : ''}`} key={t.key}>
                          <input
                            type="radio"
                            name="timing"
                            value={t.key}
                            checked={form.timing === t.key}
                            onChange={() => set('timing', t.key)}
                          />
                          {t.label}
                        </label>
                      ))}
                    </fieldset>
                  </>
                )}

                {step === 4 && (
                  <form onSubmit={handleSubmit}>
                    {error && <div className="admin-login-error">{error}</div>}
                    <div className="form-group">
                      <label htmlFor="wizard-name">Ad Soyad</label>
                      <input
                        type="text"
                        id="wizard-name"
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="wizard-phone">Telefon</label>
                      <input
                        type="tel"
                        id="wizard-phone"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="wizard-email">E-posta</label>
                      <input
                        type="email"
                        id="wizard-email"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        required
                      />
                    </div>
                    <p className="form-note" style={{ marginBottom: '1rem' }}>
                      Formu göndererek{' '}
                      <Link to="/gizlilik-politikasi" style={{ color: 'var(--accent-color)' }}>Gizlilik Politikası ve KVKK Aydınlatma Metni</Link>
                      {' '}kapsamında kişisel verilerinizin işlenmesini kabul etmiş olursunuz.
                    </p>
                    <div className="wizard-nav">
                      <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Geri</button>
                      <button type="submit" className="btn btn-gold" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Gönderiliyor…' : 'Değerlendirme Talep Et'}
                      </button>
                    </div>
                  </form>
                )}

                {step < 4 && (
                  <div className="wizard-nav">
                    {step > 1 ? (
                      <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Geri</button>
                    ) : <span />}
                    <button
                      type="button"
                      className="btn btn-gold"
                      disabled={!stepValid}
                      onClick={() => setStep(step + 1)}
                    >
                      Devam Et
                    </button>
                  </div>
                )}
              </>
            )}
          </Reveal>
          <p className="form-note" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            Formu doldurmak yerine doğrudan konuşmayı tercih ederseniz <Link to="/iletisim" style={{ color: 'var(--accent-color)' }}>iletişim sayfamızdan</Link> bize ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
