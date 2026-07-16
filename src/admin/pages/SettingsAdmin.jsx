import { useEffect, useState } from 'react';

const FIELDS = [
  { key: 'phone', label: 'Telefon Numarası', placeholder: '0541 650 06 21' },
  { key: 'whatsapp', label: 'WhatsApp Numarası (+90 ile)', placeholder: '+905416500621' },
  { key: 'email', label: 'E-posta Adresi', placeholder: 'meneksevize@gmail.com' },
  { key: 'address', label: 'Adres', placeholder: 'İsteğe bağlı' },
  { key: 'working_hours', label: 'Çalışma Saatleri', placeholder: 'Hafta içi 09:00 - 18:00' },
  {
    key: 'footer_note', label: 'Footer Açıklama Metni', placeholder: '', textarea: true,
  },
];

const TOGGLES = [
  {
    key: 'whatsapp_button_enabled',
    label: 'Sitede WhatsApp yüzen butonunu göster',
    hint: 'Yukarıdaki WhatsApp numarası dolu olmalıdır.',
  },
  {
    key: 'email_notifications_enabled',
    label: 'Yeni başvuru geldiğinde e-posta ile bildir',
    hint: 'Sunucudaki .env dosyasına RESEND_API_KEY girilmiş olmalıdır.',
  },
];

export default function SettingsAdmin() {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((res) => res.json())
      .then(setValues)
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="admin-empty-state">Yükleniyor…</p>;
  }

  return (
    <>
      <div className="admin-page-head">
        <h1>Genel Ayarlar</h1>
        <p>Sitede görünen telefon, e-posta, adres ve çalışma saatleri gibi bilgiler.</p>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        {saved && <div className="admin-success-banner">Ayarlar kaydedildi.</div>}

        {FIELDS.map((field) => (
          <div className="admin-form-field" key={field.key}>
            <label htmlFor={field.key}>{field.label}</label>
            {field.textarea ? (
              <textarea
                id={field.key}
                value={values[field.key] || ''}
                placeholder={field.placeholder}
                onChange={(e) => handleChange(field.key, e.target.value)}
              />
            ) : (
              <input
                id={field.key}
                value={values[field.key] || ''}
                placeholder={field.placeholder}
                onChange={(e) => handleChange(field.key, e.target.value)}
              />
            )}
          </div>
        ))}

        <div className="admin-form-field full" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          {TOGGLES.map((toggle) => (
            <div key={toggle.key} style={{ marginBottom: '1.1rem' }}>
              <label style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', marginBottom: 0,
              }}
              >
                <input
                  type="checkbox"
                  style={{ width: 'auto' }}
                  checked={values[toggle.key] === 'true'}
                  onChange={(e) => handleChange(toggle.key, e.target.checked ? 'true' : 'false')}
                />
                {toggle.label}
              </label>
              <p className="admin-form-hint" style={{ marginLeft: '1.9rem' }}>{toggle.hint}</p>
            </div>
          ))}
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="btn btn-gold" disabled={saving}>
            {saving ? 'Kaydediliyor…' : 'Kaydet'}
          </button>
        </div>
      </form>
    </>
  );
}
