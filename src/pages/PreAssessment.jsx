import { useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

// Admin panele giden özet mesaj her zaman Türkçe kalır (işletme sahibi
// Türkçe okuyor) — ziyaretçinin arayüz dili ne olursa olsun bu eşleme sabittir.
const PURPOSE_TR_LABELS = {
  turistik: 'Turistik Gezi', ticari: 'Ticari / İş Görüşmesi', ziyaret: 'Aile / Arkadaş Ziyareti', egitim: 'Eğitim / Öğrenci', diger: 'Diğer',
};
const TIMING_TR_LABELS = {
  '1ay': '1 ay içinde', '1-3ay': '1-3 ay içinde', '3ay+': '3 aydan sonra', belirsiz: 'Henüz belirsiz',
};
const REFUSAL_TR_LABELS = { hayir: 'Hayır, ilk başvurum', evet: 'Evet, daha önce red aldım' };

const TOTAL_STEPS = 4;

export default function PreAssessment() {
  const { countries } = useSiteData();
  const { t } = useLocale();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    country: '', purpose: '', refusal: '', timing: '', name: '', email: '', phone: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const PURPOSES = [
    { key: 'turistik', label: t('preAssessment.purposeTouristic') },
    { key: 'ticari', label: t('preAssessment.purposeBusiness') },
    { key: 'ziyaret', label: t('preAssessment.purposeVisit') },
    { key: 'egitim', label: t('preAssessment.purposeEducation') },
    { key: 'diger', label: t('preAssessment.purposeOther') },
  ];
  const TIMINGS = [
    { key: '1ay', label: t('preAssessment.timing1Month') },
    { key: '1-3ay', label: t('preAssessment.timing1to3Months') },
    { key: '3ay+', label: t('preAssessment.timing3PlusMonths') },
    { key: 'belirsiz', label: t('preAssessment.timingUnsure') },
  ];
  const REFUSAL = [
    { key: 'hayir', label: t('preAssessment.refusalNo') },
    { key: 'evet', label: t('preAssessment.refusalYes') },
  ];

  useDocumentMeta(
    t('preAssessment.metaTitle'),
    t('preAssessment.metaDescription'),
    { path: '/on-degerlendirme' },
  );

  const set = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    const message = [
      '[Ön Değerlendirme Formu]',
      `Hedef ülke: ${form.country}`,
      `Seyahat amacı: ${PURPOSE_TR_LABELS[form.purpose] || ''}`,
      `Daha önce vize reddi: ${REFUSAL_TR_LABELS[form.refusal] || ''}`,
      `Planlanan seyahat: ${TIMING_TR_LABELS[form.timing] || ''}`,
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
      if (!res.ok) throw new Error(json.error || t('preAssessment.genericError'));
      window.gtag?.('event', 'conversion', { send_to: 'AW-18327360593/zUw7CJzvhdQcENGolaNE' });
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
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('preAssessment.breadcrumb') }]} />
      <section className="page-header">
        <span className="kicker">{t('preAssessment.pageKicker')}</span>
        <h1>{t('preAssessment.pageTitle')}</h1>
        <p>{t('preAssessment.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <Reveal as="div" className="card">
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div className="admin-success-banner">
                  {t('preAssessment.successMessage')}
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  <Link to="/surec" className="btn btn-secondary">{t('preAssessment.successCtaProcess')}</Link>
                  <Link to="/" className="btn btn-gold">{t('preAssessment.successCtaHome')}</Link>
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
                <p className="form-note" style={{ marginBottom: '1.5rem' }}>{t('preAssessment.stepLabel')} {step} {t('preAssessment.stepOf')} {TOTAL_STEPS}</p>

                {step === 1 && (
                  <div className="form-group">
                    <label htmlFor="wizard-country">{t('preAssessment.step1Question')}</label>
                    <select
                      id="wizard-country"
                      value={form.country}
                      onChange={(e) => set('country', e.target.value)}
                    >
                      <option value="" disabled>{t('preAssessment.countryPlaceholder')}</option>
                      {countries.map((c) => (
                        <option value={c.title} key={c.id}>{c.title}</option>
                      ))}
                      <option value="Diğer / Emin değilim">{t('preAssessment.otherCountry')}</option>
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <fieldset className="wizard-options">
                    <legend>{t('preAssessment.step2Question')}</legend>
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
                      <legend>{t('preAssessment.step3RefusalQuestion')}</legend>
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
                      <legend>{t('preAssessment.step3TimingQuestion')}</legend>
                      {TIMINGS.map((tm) => (
                        <label className={`wizard-option ${form.timing === tm.key ? 'selected' : ''}`} key={tm.key}>
                          <input
                            type="radio"
                            name="timing"
                            value={tm.key}
                            checked={form.timing === tm.key}
                            onChange={() => set('timing', tm.key)}
                          />
                          {tm.label}
                        </label>
                      ))}
                    </fieldset>
                  </>
                )}

                {step === 4 && (
                  <form onSubmit={handleSubmit}>
                    {error && <div className="admin-login-error">{error}</div>}
                    <div className="form-group">
                      <label htmlFor="wizard-name">{t('preAssessment.nameLabel')}</label>
                      <input
                        type="text"
                        id="wizard-name"
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="wizard-phone">{t('preAssessment.phoneLabel')}</label>
                      <input
                        type="tel"
                        id="wizard-phone"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="wizard-email">{t('preAssessment.emailLabel')}</label>
                      <input
                        type="email"
                        id="wizard-email"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        required
                      />
                    </div>
                    <p className="form-note" style={{ marginBottom: '1rem' }}>
                      {t('preAssessment.consentPre')}
                      <Link to="/gizlilik-politikasi" style={{ color: 'var(--accent-color)' }}>{t('preAssessment.consentLink')}</Link>
                      {t('preAssessment.consentPost')}
                    </p>
                    <div className="wizard-nav">
                      <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>{t('preAssessment.back')}</button>
                      <button type="submit" className="btn btn-gold" disabled={status === 'submitting'}>
                        {status === 'submitting' ? t('preAssessment.submitting') : t('preAssessment.submit')}
                      </button>
                    </div>
                  </form>
                )}

                {step < 4 && (
                  <div className="wizard-nav">
                    {step > 1 ? (
                      <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>{t('preAssessment.back')}</button>
                    ) : <span />}
                    <button
                      type="button"
                      className="btn btn-gold"
                      disabled={!stepValid}
                      onClick={() => setStep(step + 1)}
                    >
                      {t('preAssessment.continue')}
                    </button>
                  </div>
                )}
              </>
            )}
          </Reveal>
          <p className="form-note" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            {t('preAssessment.footerNotePre')}<Link to="/iletisim" style={{ color: 'var(--accent-color)' }}>{t('preAssessment.footerNoteLink')}</Link>{t('preAssessment.footerNotePost')}
          </p>
        </div>
      </section>
    </>
  );
}
