import { useMemo, useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

// ---- 90/180 gün kuralı hesaplama mantığı ----
// AB'nin resmi kısa süreli kalış kuralı: herhangi bir 180 günlük dönemde
// Schengen bölgesinde toplam en fazla 90 gün kalınabilir; pencere her gün
// kayar (sabit takvim dönemleri değil). Giriş ve çıkış günlerinin ikisi de
// "kalınan gün" sayılır (AB Komisyonu'nun resmi hesaplayıcısıyla aynı kural).
function toDate(value) {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function isoDay(date) {
  return date.toISOString().slice(0, 10);
}

// referenceDate dahil, geriye doğru 180 günlük pencerede (referenceDate - 179
// .. referenceDate) stays listesindeki aralıklarla kaç farklı günün
// kullanıldığını sayar.
function daysUsedInWindow(stays, referenceDate) {
  const windowStart = addDays(referenceDate, -179);
  const used = new Set();
  stays.forEach(({ entry, exit }) => {
    if (!entry || !exit || exit < entry) return;
    const from = entry > windowStart ? entry : windowStart;
    const to = exit < referenceDate ? exit : referenceDate;
    if (from > to) return;
    let d = new Date(from);
    while (d <= to) {
      used.add(isoDay(d));
      d = addDays(d, 1);
    }
  });
  return used.size;
}

export default function SchengenCalculator() {
  const { t, locale } = useLocale();
  const todayIso = isoDay(new Date());

  useDocumentMeta(
    t('schengenCalculator.metaTitle'),
    t('schengenCalculator.metaDescription'),
    { path: '/schengen-gun-hesaplayici' },
  );

  const [stays, setStays] = useState([{ entry: '', exit: '' }]);
  const [referenceDate, setReferenceDate] = useState(todayIso);

  const addStay = () => setStays((prev) => [...prev, { entry: '', exit: '' }]);
  const removeStay = (index) => setStays((prev) => prev.filter((_, i) => i !== index));
  const updateStay = (index, field, value) => {
    setStays((prev) => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
  };

  const result = useMemo(() => {
    const ref = toDate(referenceDate);
    if (!ref) return null;
    const parsed = stays
      .map((s) => ({ entry: toDate(s.entry), exit: toDate(s.exit) }))
      .filter((s) => s.entry && s.exit && s.exit >= s.entry);
    const used = daysUsedInWindow(parsed, ref);
    const remaining = Math.max(0, 90 - used);
    const lastDay = remaining > 0 ? addDays(ref, remaining - 1) : null;
    return { used, remaining, lastDay };
  }, [stays, referenceDate]);

  const dateLocale = locale === 'en' ? 'en-US' : 'tr-TR';

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('schengenCalculator.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">{t('schengenCalculator.pageKicker')}</span>
        <h1>{t('schengenCalculator.pageTitle')}</h1>
        <p>{t('schengenCalculator.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="section-head">
            <span className="kicker">{t('schengenCalculator.formKicker')}</span>
            <h2>{t('schengenCalculator.formTitle')}</h2>
            <p>{t('schengenCalculator.formSubtitle')}</p>
          </div>

          {stays.map((stay, index) => (
            <div className="schengen-stay-row" key={index}>
              <div className="form-group">
                <label htmlFor={`stay-entry-${index}`}>{t('schengenCalculator.entryLabel')}</label>
                <input
                  type="date"
                  id={`stay-entry-${index}`}
                  value={stay.entry}
                  max={todayIso}
                  onChange={(e) => updateStay(index, 'entry', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`stay-exit-${index}`}>{t('schengenCalculator.exitLabel')}</label>
                <input
                  type="date"
                  id={`stay-exit-${index}`}
                  value={stay.exit}
                  max={todayIso}
                  onChange={(e) => updateStay(index, 'exit', e.target.value)}
                />
              </div>
              {stays.length > 1 && (
                <button
                  type="button"
                  className="schengen-stay-remove"
                  onClick={() => removeStay(index)}
                  aria-label={t('schengenCalculator.removeStay')}
                >
                  ×
                </button>
              )}
            </div>
          ))}

          <button type="button" className="btn btn-secondary" onClick={addStay} style={{ marginBottom: '2rem' }}>
            {t('schengenCalculator.addStay')}
          </button>

          <div className="form-group" style={{ maxWidth: '280px' }}>
            <label htmlFor="reference-date">{t('schengenCalculator.referenceLabel')}</label>
            <input
              type="date"
              id="reference-date"
              value={referenceDate}
              onChange={(e) => setReferenceDate(e.target.value)}
            />
          </div>

          {result && (
            <div className={`schengen-result ${result.remaining === 0 ? 'schengen-result-full' : ''}`}>
              <div className="schengen-result-item">
                <span className="schengen-result-value">{result.used}</span>
                <span className="schengen-result-label">{t('schengenCalculator.usedLabel')}</span>
              </div>
              <div className="schengen-result-item">
                <span className="schengen-result-value">{result.remaining}</span>
                <span className="schengen-result-label">{t('schengenCalculator.remainingLabel')}</span>
              </div>
              {result.lastDay && (
                <p className="schengen-result-note">
                  {t('schengenCalculator.untilPre')}
                  <strong>{result.lastDay.toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' })}</strong>
                  {t('schengenCalculator.untilPost')}
                </p>
              )}
              {result.remaining === 0 && (
                <p className="schengen-result-note">{t('schengenCalculator.noDaysLeft')}</p>
              )}
            </div>
          )}

          <p className="form-note" style={{ marginTop: '2rem' }}>{t('schengenCalculator.disclaimer')}</p>

          <p className="form-note" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            {t('schengenCalculator.ctaPre')}<Link to="/on-degerlendirme" style={{ color: 'var(--link-color)' }}>{t('schengenCalculator.ctaLink')}</Link>{t('schengenCalculator.ctaPost')}
          </p>
        </div>
      </section>
    </>
  );
}
