import { useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import {
  PhoneIcon, MailIcon, WhatsappIcon, MapPinIcon, ClockIcon, StarIcon,
} from '../components/icons.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function Contact() {
  const { settings } = useSiteData();
  const { t } = useLocale();
  const countryOptions = t('contact.countryOptions');
  const emptyForm = {
    name: '', email: '', phone: '', targetCountry: countryOptions[0], message: '',
  };
  const phone = settings.phone || '';
  const phoneHref = `tel:+${(settings.whatsapp || phone).replace(/\D/g, '')}`;
  const whatsappHref = settings.whatsapp ? `https://wa.me/${settings.whatsapp.replace(/\D/g, '')}` : null;

  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useDocumentMeta(
    t('contact.metaTitle'),
    t('contact.metaDescriptionTemplate', { phone: phone || '—', email: settings.email || '—' }),
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
        throw new Error(json.error || t('contact.genericError'));
      }
      window.gtag?.('event', 'conversion', { send_to: 'AW-18327360593/zUw7CJzvhdQcENGolaNE' });
      setStatus('success');
      setForm(emptyForm);
    } catch (err) {
      setStatus('idle');
      setError(err.message);
    }
  };

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('contact.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.mapWithPins})` }}>
        <span className="kicker">{t('contact.pageKicker')}</span>
        <h1>{t('contact.pageTitle')}</h1>
        <p>{t('contact.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              {phone && (
                <div className="contact-info-item">
                  <div className="card-icon"><PhoneIcon /></div>
                  <div>
                    <h3>{t('contact.phoneLabel')}</h3>
                    <a href={phoneHref}>{phone}</a>
                  </div>
                </div>
              )}

              {settings.email && (
                <div className="contact-info-item">
                  <div className="card-icon"><MailIcon /></div>
                  <div>
                    <h3>{t('contact.emailLabel')}</h3>
                    <a href={`mailto:${settings.email}`}>{settings.email}</a>
                  </div>
                </div>
              )}

              {whatsappHref && (
                <div className="contact-info-item">
                  <div className="card-icon"><WhatsappIcon /></div>
                  <div>
                    <h3>{t('contact.whatsappLabel')}</h3>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">{t('contact.whatsappCta')}</a>
                  </div>
                </div>
              )}

              {settings.working_hours && (
                <div className="contact-info-item">
                  <div className="card-icon"><ClockIcon /></div>
                  <div>
                    <h3>{t('contact.hoursLabel')}</h3>
                    <p style={{ color: 'var(--text-color)' }}>{settings.working_hours}</p>
                  </div>
                </div>
              )}

              {settings.address && (
                <div className="contact-info-item">
                  <div className="card-icon"><MapPinIcon /></div>
                  <div>
                    <h3>{t('contact.addressLabel')}</h3>
                    <p style={{ color: 'var(--text-color)' }}>{settings.address}</p>
                  </div>
                </div>
              )}

              {settings.google_review_link && (
                <div className="contact-info-item">
                  <div className="card-icon"><StarIcon /></div>
                  <div>
                    <h3>{t('footer.leaveReview')}</h3>
                    <a href={settings.google_review_link} target="_blank" rel="noopener noreferrer">{t('contact.reviewCta')}</a>
                  </div>
                </div>
              )}

              <p className="form-note">{t('contact.infoNote')}</p>
            </Reveal>

            <Reveal as="div" className="card" delay={100}>
              <h3 style={{ marginBottom: '1.5rem' }}>{t('contact.formTitle')}</h3>

              {status === 'success' ? (
                <div className="admin-success-banner">
                  {t('contact.successMessage')}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && <div className="admin-login-error">{error}</div>}

                  <div className="form-group">
                    <label htmlFor="name">{t('contact.nameLabel')}</label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('contact.emailFieldLabel')}</label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t('contact.phoneFieldLabel')}</label>
                    <input
                      type="tel"
                      id="phone"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">{t('contact.countryLabel')}</label>
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
                    <label htmlFor="message">{t('contact.messageLabel')}</label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>
                  <p className="form-note" style={{ marginBottom: '1rem' }}>
                    {t('contact.consentPre')}
                    <Link to="/gizlilik-politikasi" style={{ color: 'var(--accent-color)' }}>{t('contact.consentLink')}</Link>
                    {t('contact.consentPost')}
                  </p>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }} disabled={status === 'submitting'}>
                    {status === 'submitting' ? t('contact.submitting') : t('contact.submit')}
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          {settings.address && (
            <Reveal as="div" className="contact-map" style={{ marginTop: '2.5rem' }}>
              <iframe
                title={t('contact.mapTitle')}
                src={`https://www.google.com/maps?q=${encodeURIComponent(settings.address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
