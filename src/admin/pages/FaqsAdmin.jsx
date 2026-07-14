import { useEffect, useState } from 'react';

const emptyForm = {
  group: '', question: '', answer: '', openDefault: false,
};

export default function FaqsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('list');
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    fetch('/api/admin/faqs')
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
      group: item.group,
      question: item.question,
      answer: item.answer,
      openDefault: item.openDefault,
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
    if (!window.confirm('Bu SSS maddesini silmek istediğinize emin misiniz?')) return;
    await fetch(`/api/admin/faqs/${id}`, { method: 'DELETE' });
    load();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.group.trim() || !form.question.trim() || !form.answer.trim()) {
      setError('Grup, soru ve cevap zorunludur.');
      return;
    }

    setSaving(true);
    try {
      const url = editingId ? `/api/admin/faqs/${editingId}` : '/api/admin/faqs';
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
          <h1>Sıkça Sorulan Sorular</h1>
          <p>SSS sayfasında ve ana sayfa özetinde gösterilen soru-cevapları yönetin.</p>
        </div>

        <div className="admin-toolbar">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{items.length} madde</span>
          <button type="button" className="btn btn-gold" onClick={openCreate}>+ Yeni Soru Ekle</button>
        </div>

        {loading ? (
          <p className="admin-empty-state">Yükleniyor…</p>
        ) : items.length === 0 ? (
          <p className="admin-empty-state">Henüz bir SSS maddesi eklenmedi.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Grup</th>
                  <th>Soru</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} onClick={() => openEdit(item)}>
                    <td>{item.group}</td>
                    <td>{item.question}</td>
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
        <h1>{editingId ? 'Soruyu Düzenle' : 'Yeni Soru Ekle'}</h1>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        {error && <div className="admin-login-error">{error}</div>}

        <div className="admin-form-field">
          <label htmlFor="group">Grup Başlığı</label>
          <input id="group" value={form.group} onChange={(e) => setForm((p) => ({ ...p, group: e.target.value }))} placeholder="örn: Ücretlendirme" required />
        </div>
        <div className="admin-form-field">
          <label htmlFor="question">Soru</label>
          <input id="question" value={form.question} onChange={(e) => setForm((p) => ({ ...p, question: e.target.value }))} required />
        </div>
        <div className="admin-form-field">
          <label htmlFor="answer">Cevap</label>
          <textarea id="answer" value={form.answer} onChange={(e) => setForm((p) => ({ ...p, answer: e.target.value }))} required style={{ minHeight: 140 }} />
          <p className="admin-form-hint">
            Bağlantı eklemek için markdown kullanabilirsiniz: <code>[Metin](/hedef-sayfa)</code>
          </p>
        </div>
        <div className="admin-form-field">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              style={{ width: 'auto' }}
              checked={form.openDefault}
              onChange={(e) => setForm((p) => ({ ...p, openDefault: e.target.checked }))}
            />
            SSS sayfasında varsayılan olarak açık göster
          </label>
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
