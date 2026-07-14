import { useEffect, useState } from 'react';

const emptyForm = {
  title: '', slug: '', excerpt: '', content: '', coverImageUrl: '', isPublished: false,
};

export default function BlogAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('list');
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    fetch('/api/admin/blog')
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

  const openEdit = async (id) => {
    setError('');
    const res = await fetch(`/api/admin/blog/${id}`);
    const data = await res.json();
    setForm({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt || '',
      content: data.content,
      coverImageUrl: data.coverImageUrl || '',
      isPublished: data.isPublished,
    });
    setEditingId(id);
    setMode('form');
  };

  const closeForm = () => {
    setMode('list');
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return;
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' });
    load();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.title.trim() || !form.content.trim()) {
      setError('Başlık ve içerik zorunludur.');
      return;
    }

    setSaving(true);
    try {
      const url = editingId ? `/api/admin/blog/${editingId}` : '/api/admin/blog';
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
          <h1>Blog</h1>
          <p>Yazılarınızı oluşturun, düzenleyin ve yayınlayın.</p>
        </div>

        <div className="admin-toolbar">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{items.length} yazı</span>
          <button type="button" className="btn btn-gold" onClick={openCreate}>+ Yeni Yazı Ekle</button>
        </div>

        {loading ? (
          <p className="admin-empty-state">Yükleniyor…</p>
        ) : items.length === 0 ? (
          <p className="admin-empty-state">Henüz bir yazı eklenmedi.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Başlık</th>
                  <th>Slug</th>
                  <th>Durum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} onClick={() => openEdit(item.id)}>
                    <td>{item.title}</td>
                    <td>/blog/{item.slug}</td>
                    <td>
                      <span className={`admin-pill ${item.isPublished ? 'read' : 'unread'}`}>
                        {item.isPublished ? 'Yayında' : 'Taslak'}
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
        <h1>{editingId ? 'Yazıyı Düzenle' : 'Yeni Yazı Ekle'}</h1>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        {error && <div className="admin-login-error">{error}</div>}

        <div className="admin-form-field">
          <label htmlFor="title">Başlık</label>
          <input id="title" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} required />
        </div>
        <div className="admin-form-field">
          <label htmlFor="slug">Slug (URL)</label>
          <input id="slug" value={form.slug} onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))} placeholder="boş bırakılırsa başlıktan otomatik üretilir" />
        </div>
        <div className="admin-form-field">
          <label htmlFor="coverImageUrl">Kapak Görseli (URL)</label>
          <input id="coverImageUrl" value={form.coverImageUrl} onChange={(e) => setForm((p) => ({ ...p, coverImageUrl: e.target.value }))} placeholder="https://..." />
        </div>
        <div className="admin-form-field">
          <label htmlFor="excerpt">Kısa Özet</label>
          <textarea id="excerpt" value={form.excerpt} onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))} placeholder="Liste sayfasında görünecek kısa açıklama" />
        </div>
        <div className="admin-form-field">
          <label htmlFor="content">İçerik (Markdown desteklenir)</label>
          <textarea id="content" value={form.content} onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))} required style={{ minHeight: 260 }} />
          <p className="admin-form-hint">
            Başlık için <code>## Alt Başlık</code>, kalın için <code>**metin**</code>, link için <code>[metin](/sayfa)</code> kullanabilirsiniz.
          </p>
        </div>
        <div className="admin-form-field">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              style={{ width: 'auto' }}
              checked={form.isPublished}
              onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))}
            />
            Yayınla
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
