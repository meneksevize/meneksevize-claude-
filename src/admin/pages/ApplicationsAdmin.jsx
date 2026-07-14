import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { STAGES, getStageLabel } from '../../data/stages.js';

const emptyForm = {
  clientName: '', surname: '', email: '', phone: '', countryId: '', visaType: '', currentStage: STAGES[0].key,
};

export default function ApplicationsAdmin() {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('list');
  const [form, setForm] = useState(emptyForm);
  const [detail, setDetail] = useState(null);
  const [newStage, setNewStage] = useState(STAGES[0].key);
  const [newNote, setNewNote] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [createdCode, setCreatedCode] = useState('');

  const load = () => {
    setLoading(true);
    fetch('/api/admin/applications')
      .then((res) => res.json())
      .then(setItems)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    fetch('/api/admin/countries').then((res) => res.json()).then(setCountries);
  }, []);

  useEffect(() => {
    const prefill = location.state?.prefill;
    if (prefill) {
      setForm((p) => ({
        ...p,
        clientName: prefill.clientName || '',
        email: prefill.email || '',
        phone: prefill.phone || '',
      }));
      setMode('create');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openCreate = () => {
    setForm(emptyForm);
    setError('');
    setCreatedCode('');
    setMode('create');
  };

  const openDetail = async (id) => {
    setError('');
    const res = await fetch(`/api/admin/applications/${id}`);
    const data = await res.json();
    setDetail(data);
    setNewStage(data.currentStage);
    setNewNote('');
    setMode('detail');
  };

  const closeToList = () => {
    setMode('list');
    setDetail(null);
    setForm(emptyForm);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.clientName.trim() || !form.surname.trim()) {
      setError('Ad ve soyisim zorunludur.');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/admin/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Kaydedilemedi.');
        return;
      }
      setCreatedCode(json.trackingCode);
      load();
    } finally {
      setSaving(false);
    }
  };

  const handleAddUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch(`/api/admin/applications/${detail.id}/updates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage: newStage, note: newNote }),
      });
      await openDetail(detail.id);
      setNewNote('');
      load();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bu başvuruyu silmek istediğinize emin misiniz?')) return;
    await fetch(`/api/admin/applications/${id}`, { method: 'DELETE' });
    closeToList();
    load();
  };

  if (mode === 'detail' && detail) {
    return (
      <>
        <div className="admin-page-head">
          <h1>{detail.clientName} {detail.surname}</h1>
          <p>
            Takip Kodu: <strong>{detail.trackingCode}</strong> · {detail.email || '—'} · {detail.phone || '—'}
          </p>
        </div>

        <div className="admin-form" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Yeni Aşama Ekle</h3>
          <form onSubmit={handleAddUpdate}>
            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="newStage">Aşama</label>
                <select id="newStage" value={newStage} onChange={(e) => setNewStage(e.target.value)}>
                  {STAGES.map((s) => (
                    <option value={s.key} key={s.key}>{s.label}</option>
                  ))}
                </select>
              </div>
              <div className="admin-form-field full">
                <label htmlFor="newNote">Not (opsiyonel, müşteri görecek)</label>
                <textarea id="newNote" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
              </div>
            </div>
            <div className="admin-form-actions">
              <button type="submit" className="btn btn-gold" disabled={saving}>Aşamayı Kaydet</button>
              <button type="button" className="btn btn-secondary" onClick={() => handleDelete(detail.id)}>Başvuruyu Sil</button>
              <button type="button" className="btn btn-secondary" onClick={closeToList}>Listeye Dön</button>
            </div>
          </form>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Aşama</th>
                <th>Not</th>
                <th>Tarih</th>
              </tr>
            </thead>
            <tbody>
              {detail.updates.map((u) => (
                <tr key={u.id} style={{ cursor: 'default' }}>
                  <td>{getStageLabel(u.stage)}</td>
                  <td>{u.note || '—'}</td>
                  <td>{new Date(u.createdAt).toLocaleString('tr-TR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  if (mode === 'create') {
    return (
      <>
        <div className="admin-page-head">
          <h1>Yeni Başvuru</h1>
          <p>Oluşturulduktan sonra müşteriye vereceğiniz takip kodu burada görünecek.</p>
        </div>

        {createdCode ? (
          <div className="admin-form">
            <div className="admin-success-banner">
              Başvuru oluşturuldu! Takip kodu: <strong>{createdCode}</strong> — bu kodu müşteriye iletin.
            </div>
            <div className="admin-form-actions">
              <button type="button" className="btn btn-gold" onClick={closeToList}>Listeye Dön</button>
            </div>
          </div>
        ) : (
          <form className="admin-form" onSubmit={handleCreate}>
            {error && <div className="admin-login-error">{error}</div>}
            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="clientName">Ad</label>
                <input id="clientName" value={form.clientName} onChange={(e) => setForm((p) => ({ ...p, clientName: e.target.value }))} required />
              </div>
              <div className="admin-form-field">
                <label htmlFor="surname">Soyisim</label>
                <input id="surname" value={form.surname} onChange={(e) => setForm((p) => ({ ...p, surname: e.target.value }))} required />
              </div>
              <div className="admin-form-field">
                <label htmlFor="email">E-posta</label>
                <input id="email" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
              </div>
              <div className="admin-form-field">
                <label htmlFor="phone">Telefon</label>
                <input id="phone" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} />
              </div>
              <div className="admin-form-field">
                <label htmlFor="countryId">Ülke</label>
                <select id="countryId" value={form.countryId} onChange={(e) => setForm((p) => ({ ...p, countryId: e.target.value }))}>
                  <option value="">Seçiniz</option>
                  {countries.map((c) => (
                    <option value={c.id} key={c.id}>{c.flag} {c.title}</option>
                  ))}
                </select>
              </div>
              <div className="admin-form-field">
                <label htmlFor="visaType">Vize Tipi</label>
                <input id="visaType" value={form.visaType} onChange={(e) => setForm((p) => ({ ...p, visaType: e.target.value }))} placeholder="örn: Turistik" />
              </div>
              <div className="admin-form-field">
                <label htmlFor="currentStage">Başlangıç Aşaması</label>
                <select id="currentStage" value={form.currentStage} onChange={(e) => setForm((p) => ({ ...p, currentStage: e.target.value }))}>
                  {STAGES.map((s) => (
                    <option value={s.key} key={s.key}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="admin-form-actions">
              <button type="submit" className="btn btn-gold" disabled={saving}>
                {saving ? 'Kaydediliyor…' : 'Başvuruyu Oluştur'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={closeToList}>Vazgeç</button>
            </div>
          </form>
        )}
      </>
    );
  }

  return (
    <>
      <div className="admin-page-head">
        <h1>Başvuru Takip</h1>
        <p>Müşterilerinizin başvuru durumunu buradan güncelleyin — değişiklikler /takip sayfasında anında görünür.</p>
      </div>

      <div className="admin-toolbar">
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{items.length} başvuru</span>
        <button type="button" className="btn btn-gold" onClick={openCreate}>+ Yeni Başvuru</button>
      </div>

      {loading ? (
        <p className="admin-empty-state">Yükleniyor…</p>
      ) : items.length === 0 ? (
        <p className="admin-empty-state">Henüz bir başvuru oluşturulmadı.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Takip Kodu</th>
                <th>Müşteri</th>
                <th>Aşama</th>
                <th>Son Güncelleme</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} onClick={() => openDetail(item.id)}>
                  <td>{item.trackingCode}</td>
                  <td>{item.clientName} {item.surname}</td>
                  <td><span className="admin-pill unread">{getStageLabel(item.currentStage)}</span></td>
                  <td>{new Date(item.updatedAt).toLocaleString('tr-TR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
