import { useEffect, useState } from 'react';
import { StarIcon } from '../../components/icons.jsx';

const emptyForm = {
  name: '', location: '', rating: 5, quote: '', isPublished: true,
};

export default function TestimonialsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('list');
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    fetch('/api/admin/testimonials')
      .then((res) => res.json())
      .then(setItems)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setForm(emptyForm);
    setEditingId(null);
    setError('');
    setMode('form');
  };

  const openEdit = (item) => {
    setForm({
      name: item.name,
      location: item.location || '',
      rating: item.rating,
      quote: item.quote,
      isPublished: item.isPublished,
    });
    setEditingId(item.id);
    setError('');
    setMode('form');
  };

  const closeForm = () => {
    setMode('list');
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bu yorumu silmek istediğinize emin misiniz?')) return;
    await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
    load();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.quote.trim()) {
      setError('İsim ve yorum metni zorunludur.');
      return;
    }

    setSaving(true);
    try {
      const url = editingId ? `/api/admin/testimonials/${editingId}` : '/api/admin/testimonials';
      const method = editingId ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
          <h1>Müşteri Yorumları</h1>
          <p>Ana sayfada gösterilen referansları yönetin.</p>
        </div>

        <div className="admin-toolbar">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{items.length} yorum</span>
          <button type="button" className="btn btn-gold" onClick={openCreate}>+ Yeni Yorum Ekle</button>
        </div>

        {loading ? (
          <p className="admin-empty-state">Yükleniyor…</p>
        ) : items.length === 0 ? (
          <p className="admin-empty-state">Henüz bir yorum eklenmedi.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>İsim</th>
                  <th>Konum / Vize</th>
                  <th>Puan</th>
                  <th>Durum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} onClick={() => openEdit(item)}>
                    <td>{item.name}</td>
                    <td>{item.location || '—'}</td>
                    <td>{'★'.repeat(item.rating)}</td>
                    <td>
                      <span className={`admin-pill ${item.isPublished ? 'read' : 'unread'}`}>
                        {item.isPublished ? 'Yayında' : 'Gizli'}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                        onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                      >
                        Sil
                      </button>
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
        <h1>{editingId ? 'Yorumu Düzenle' : 'Yeni Yorum Ekle'}</h1>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        {error && <div className="admin-login-error">{error}</div>}

        <div className="admin-form-grid">
          <div className="admin-form-field">
            <label htmlFor="name">İsim</label>
            <input id="name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} required />
          </div>
          <div className="admin-form-field">
            <label htmlFor="location">Konum / Vize Tipi</label>
            <input id="location" value={form.location} onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))} placeholder="örn: Schengen Vizesi" />
          </div>
          <div className="admin-form-field">
            <label htmlFor="rating">Puan</label>
            <select id="rating" value={form.rating} onChange={(e) => setForm((p) => ({ ...p, rating: Number(e.target.value) }))}>
              {[5, 4, 3, 2, 1].map((n) => (
                <option value={n} key={n}>{'★'.repeat(n)} ({n})</option>
              ))}
            </select>
          </div>
          <div className="admin-form-field">
            <label htmlFor="isPublished">Durum</label>
            <select
              id="isPublished"
              value={form.isPublished ? '1' : '0'}
              onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.value === '1' }))}
            >
              <option value="1">Yayında</option>
              <option value="0">Gizli</option>
            </select>
          </div>
          <div className="admin-form-field full">
            <label htmlFor="quote">Yorum Metni</label>
            <textarea id="quote" value={form.quote} onChange={(e) => setForm((p) => ({ ...p, quote: e.target.value }))} required style={{ minHeight: 120 }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.2rem', marginTop: '0.5rem' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} style={{ color: i < form.rating ? 'var(--gold)' : 'var(--border-color)' }} />
          ))}
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="btn btn-gold" disabled={saving}>
            {saving ? 'Kaydediliyor…' : 'Kaydet'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={closeForm}>Vazgeç</button>
        </div>
      </form>
    </>
  );
}
