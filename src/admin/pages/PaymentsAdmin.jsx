import { useEffect, useState } from 'react';

const emptyForm = {
  clientName: '', email: '', phone: '', description: '', amount: '', currency: 'TRY',
};

const STATUS_LABELS = {
  pending: 'Bekliyor', paid: 'Ödendi', failed: 'Başarısız',
};

function formatAmount(amount, currency) {
  const symbol = { TRY: '₺', USD: '$', EUR: '€', GBP: '£' }[currency] || currency;
  return `${Number(amount).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${symbol}`;
}

export default function PaymentsAdmin() {
  const [items, setItems] = useState([]);
  const [iyzicoConfigured, setIyzicoConfigured] = useState(true);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('list');
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [copiedCode, setCopiedCode] = useState('');

  const load = () => {
    setLoading(true);
    fetch('/api/admin/payments')
      .then((res) => res.json())
      .then((json) => {
        setItems(json.requests || []);
        setIyzicoConfigured(json.iyzicoConfigured);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setForm(emptyForm);
    setError('');
    setMode('form');
  };

  const closeForm = () => {
    setMode('list');
    setForm(emptyForm);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bu ödeme talebini silmek istediğinize emin misiniz?')) return;
    const res = await fetch(`/api/admin/payments/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const json = await res.json();
      window.alert(json.error || 'Silinemedi.');
      return;
    }
    load();
  };

  const handleCopy = (code) => {
    const url = `${window.location.origin}/odeme/${code}`;
    navigator.clipboard.writeText(url);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.clientName.trim() || !form.description.trim() || !form.amount) {
      setError('Müşteri adı, açıklama ve tutar zorunludur.');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/admin/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, amount: Number(form.amount) }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Kaydedilemedi.');
        return;
      }
      closeForm();
      load();
    } finally {
      setSaving(false);
    }
  };

  if (mode === 'list') {
    return (
      <>
        <div className="admin-page-head">
          <h1>Ödeme Talepleri</h1>
          <p>Müşterilere göndereceğiniz ödeme linklerini oluşturun ve takip edin.</p>
        </div>

        {!iyzicoConfigured && (
          <div className="admin-login-error" style={{ marginBottom: '1.5rem' }}>
            iyzico hesabı henüz bağlanmadı — oluşturduğunuz linkler müşteriye açılır ama ödeme alma
            aktif olana kadar &quot;henüz aktif değil&quot; mesajı gösterir. Hesabınızı açtıktan sonra
            IYZICO_API_KEY / IYZICO_SECRET_KEY değerlerini sunucudaki .env dosyasına ekleyin.
          </div>
        )}

        <div className="admin-toolbar">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{items.length} talep</span>
          <button type="button" className="btn btn-gold" onClick={openCreate}>+ Yeni Ödeme Talebi</button>
        </div>

        {loading ? (
          <p className="admin-empty-state">Yükleniyor…</p>
        ) : items.length === 0 ? (
          <p className="admin-empty-state">Henüz bir ödeme talebi oluşturulmadı.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Müşteri</th>
                  <th>Açıklama</th>
                  <th>Tutar</th>
                  <th>Durum</th>
                  <th>Link</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.clientName}</td>
                    <td>{item.description}</td>
                    <td>{formatAmount(item.amount, item.currency)}</td>
                    <td>
                      <span className={`admin-pill ${item.status === 'paid' ? 'read' : 'unread'}`}>
                        {STATUS_LABELS[item.status] || item.status}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                        onClick={() => handleCopy(item.code)}
                      >
                        {copiedCode === item.code ? 'Kopyalandı ✓' : 'Linki Kopyala'}
                      </button>
                    </td>
                    <td>
                      {item.status !== 'paid' && (
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                          onClick={() => handleDelete(item.id)}
                        >
                          Sil
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="admin-page-head">
        <h1>Yeni Ödeme Talebi</h1>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        {error && <div className="admin-login-error">{error}</div>}

        <div className="admin-form-grid">
          <div className="admin-form-field">
            <label htmlFor="clientName">Müşteri Adı Soyadı</label>
            <input id="clientName" value={form.clientName} onChange={(e) => setForm((p) => ({ ...p, clientName: e.target.value }))} required />
          </div>
          <div className="admin-form-field">
            <label htmlFor="email">E-posta (opsiyonel)</label>
            <input id="email" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
          </div>
          <div className="admin-form-field">
            <label htmlFor="phone">Telefon (opsiyonel)</label>
            <input id="phone" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} />
          </div>
          <div className="admin-form-field">
            <label htmlFor="amount">Tutar</label>
            <input id="amount" type="number" min="0" step="0.01" value={form.amount} onChange={(e) => setForm((p) => ({ ...p, amount: e.target.value }))} required />
          </div>
          <div className="admin-form-field">
            <label htmlFor="currency">Para Birimi</label>
            <select id="currency" value={form.currency} onChange={(e) => setForm((p) => ({ ...p, currency: e.target.value }))}>
              <option value="TRY">TRY (₺)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
          <div className="admin-form-field full">
            <label htmlFor="description">Açıklama</label>
            <input id="description" value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} placeholder="örn: Almanya vizesi danışmanlık hizmet bedeli" required />
          </div>
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="btn btn-gold" disabled={saving}>
            {saving ? 'Kaydediliyor…' : 'Oluştur'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={closeForm}>Vazgeç</button>
        </div>
      </form>
    </>
  );
}
