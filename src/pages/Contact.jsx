import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import { PhoneIcon, MailIcon, WhatsappIcon } from '../components/icons.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const countryOptions = [
  'Schengen Bölgesi', 'Amerika Birleşik Devletleri', 'İngiltere', 'Kanada', 'Dubai / BAE', 'Rusya', 'Avustralya', 'Diğer',
];

const emptyForm = {
  name: '', email: '', phone: '', targetCountry: countryOptions[0], message: '',
};

export default function Contact() {
  const { settings } = useSiteData();
  const phone = settings.phone || '';
  const phoneHref = `tel:+${(settings.whatsapp || phone).replace(/\D/g, '')}`;
  const whatsappHref = settings.whatsapp ? `https://wa.me/${settings.whatsapp.replace(/\D/g, '')}` : null;

  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useDocumentMeta(
    'İletişim | Menekşe Vize',
    `Menekşe Vize ile ücretsiz ön görüşme için hemen iletişime geçin. Telefon: ${phone || '—'}, E-posta: ${settings.email || '—'}`,
  );

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Gönderilemedi, lütfen tekrar deneyin.');
      }
      setStatus('success');
      setForm(emptyForm);
    } catch (err) {
      setStatus('idle');
      setError(err.message);
    }
  };

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'İletişim' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.mapWithPins})` }}>
        <span className="kicker">İletişim</span>
        <h1>Ücretsiz Ön Görüşme İçin Bize Ulaşın</h1>
        <p>Sorularınızı yanıtlamaktan ve size en uygun vize planını birlikte oluşturmaktan memnuniyet duyarız.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              {phone && (
                <div className="contact-info-item">
                  <div className="card-icon"><PhoneIcon /></div>
                  <div>
                    <h3>Telefon</h3>
                    <a href={phoneHref}>{phone}</a>
                  </div>
                </div>
              )}

              {settings.email && (
                <div className="contact-info-item">
                  <div className="card-icon"><MailIcon /></div>
                  <div>
                    <h3>E-posta</h3>
                    <a href={`mailto:${settings.email}`}>{settings.email}</a>
                  </div>
                </div>
              )}

              {whatsappHref && (
                <div className="contact-info-item">
                  <div className="card-icon"><WhatsappIcon /></div>
                  <div>
                    <h3>WhatsApp</h3>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">Hızlı mesaj gönderin</a>
                  </div>
                </div>
              )}

              <p className="form-note">Ücretsiz ön görüşme talebiniz için telefon, e-posta veya WhatsApp üzerinden bize ulaşabilirsiniz.</p>
            </Reveal>

            <Reveal as="div" className="card" delay={100}>
              <h3 style={{ marginBottom: '1.5rem' }}>İletişim Formu</h3>

              {status === 'success' ? (
                <div className="admin-success-banner">
                  Mesajınız alındı, en kısa sürede size dönüş yapacağız.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && <div className="admin-login-error">{error}</div>}

                  <div className="form-group">
                    <label htmlFor="name">Ad Soyad</label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Hedef Ülke</label>
                    <select
                      id="country"
                      value={form.targetCountry}
                      onChange={(e) => handleChange('targetCountry', e.target.value)}
                    >
                      {countryOptions.map((option) => (
                        <option value={option} key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mesajınız</label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      placeholder="Seyahat amacınızı ve tahmini tarihinizi kısaca belirtebilirsiniz."
                    />
                  </div>
                  <p className="form-note" style={{ marginBottom: '1rem' }}>
                    Formu göndererek{' '}
                    <Link to="/gizlilik-politikasi" style={{ color: 'var(--accent-color)' }}>Gizlilik Politikası ve KVKK Aydınlatma Metni</Link>
                    {' '}kapsamında kişisel verilerinizin işlenmesini kabul etmiş olursunuz.
                  </p>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }} disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Gönderiliyor…' : 'Gönder'}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
