import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { photos } from '../data/photos.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const CITIES = [
  'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin', 'Aydın',
  'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum',
  'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun',
  'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri',
  'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin',
  'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas',
  'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Diğer',
];

function formatAmount(amount, currency) {
  const symbol = { TRY: '₺', USD: '$', EUR: '€', GBP: '£' }[currency] || currency;
  return `${Number(amount).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${symbol}`;
}

export default function Payment() {
  const { code } = useParams();
  const [request, setRequest] = useState(null);
  const [loadError, setLoadError] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');
  const [isForeigner, setIsForeigner] = useState(false);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const [checkoutFormContent, setCheckoutFormContent] = useState('');
  const formContainerRef = useRef(null);

  useDocumentMeta('Ödeme | Menekşe Vize', 'Menekşe Vize hizmet bedelinizi güvenle ödeyin.');

  useEffect(() => {
    fetch(`/api/payments/public/${code}`)
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || 'Ödeme talebi bulunamadı.');
        setRequest(json);
      })
      .catch((err) => setLoadError(err.message));
  }, [code]);

  useEffect(() => {
    if (!checkoutFormContent || !formContainerRef.current) return;
    const container = formContainerRef.current;
    container.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.innerHTML = checkoutFormContent;
    Array.from(wrapper.childNodes).forEach((node) => {
      if (node.tagName === 'SCRIPT') {
        const script = document.createElement('script');
        if (node.src) script.src = node.src;
        else script.textContent = node.textContent;
        container.appendChild(script);
      } else {
        container.appendChild(node);
      }
    });
  }, [checkoutFormContent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitStatus('submitting');
    try {
      const res = await fetch(`/api/payments/public/${code}/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identityNumber: isForeigner ? '11111111111' : identityNumber,
          address,
          city,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Ödeme formu başlatılamadı.');
      setCheckoutFormContent(json.checkoutFormContent);
      setSubmitStatus('form-ready');
    } catch (err) {
      setSubmitStatus('idle');
      setSubmitError(err.message);
    }
  };

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'Ödeme' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">Güvenli Ödeme</span>
        <h1>Hizmet Bedeli Ödemesi</h1>
        <p>Size özel oluşturulan ödeme talebini aşağıda görebilir, kart bilgilerinizi güvenle girebilirsiniz.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          {loadError && <div className="admin-login-error">{loadError}</div>}

          {request && (
            <div className="checklist-tool">
              <div className="section-head" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <span className="kicker">{request.clientName}</span>
                <h2>{request.description}</h2>
                <p style={{ fontSize: '1.4rem', color: 'var(--gold)', fontWeight: 600 }}>
                  {formatAmount(request.amount, request.currency)}
                </p>
              </div>

              {request.status === 'paid' && (
                <p className="form-note" style={{ color: 'var(--accent-color)' }}>
                  Bu ödeme başarıyla alınmıştır. Teşekkür ederiz.
                </p>
              )}

              {request.status !== 'paid' && !request.iyzicoConfigured && (
                <p className="form-note">
                  Online ödeme sistemi şu anda aktif değil. Lütfen ödemenizi tamamlamak için{' '}
                  <Link to="/iletisim" style={{ color: 'var(--accent-color)' }}>bizimle iletişime geçin</Link>.
                </p>
              )}

              {request.status !== 'paid' && request.iyzicoConfigured && submitStatus !== 'form-ready' && (
                <form onSubmit={handleSubmit}>
                  {submitError && <div className="admin-login-error">{submitError}</div>}
                  <div className="select-group" style={{ marginBottom: '1rem' }}>
                    <label>
                      <input type="checkbox" checked={isForeigner} onChange={(e) => setIsForeigner(e.target.checked)} style={{ width: 'auto', marginRight: '0.5rem' }} />
                      Yabancı uyrukluyum (T.C. kimlik numaram yok)
                    </label>
                  </div>
                  {!isForeigner && (
                    <div className="select-group" style={{ marginBottom: '1rem' }}>
                      <label htmlFor="identityNumber">T.C. Kimlik Numarası</label>
                      <input
                        id="identityNumber"
                        value={identityNumber}
                        onChange={(e) => setIdentityNumber(e.target.value)}
                        maxLength={11}
                        required={!isForeigner}
                      />
                    </div>
                  )}
                  <div className="select-group" style={{ marginBottom: '1rem' }}>
                    <label htmlFor="address">Adres</label>
                    <input id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                  </div>
                  <div className="select-group" style={{ marginBottom: '1rem' }}>
                    <label htmlFor="city">Şehir</label>
                    <select id="city" value={city} onChange={(e) => setCity(e.target.value)} required>
                      <option value="" disabled>Seçiniz</option>
                      {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }} disabled={submitStatus === 'submitting'}>
                    {submitStatus === 'submitting' ? 'Yönlendiriliyor…' : 'Ödemeye Geç'}
                  </button>
                </form>
              )}

              {submitStatus === 'form-ready' && (
                <div ref={formContainerRef} />
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
