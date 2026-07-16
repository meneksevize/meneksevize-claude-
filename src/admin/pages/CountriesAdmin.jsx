import { useEffect, useMemo, useState } from 'react';
import { regionLabels } from '../../data/countries.js';
import CountryFlag from '../../components/CountryFlag.jsx';

const REGION_OPTIONS = Object.entries(regionLabels).filter(([key]) => key !== 'all');

const emptyForm = {
  id: '',
  flag: '',
  title: '',
  region: 'diger',
  docsKey: '',
  homeDescription: '',
  servicesDescription: '',
  intro: '',
  overview: '',
  tagsText: '',
  types: [],
  quickFacts: [{ label: '', value: '' }],
  documents: {},
};

function formFromCountry(data) {
  const types = data.types || [];
  const documents = {};
  types.forEach((typeKey) => {
    const entry = data.documents?.[typeKey] ?? { items: [], note: null };
    documents[typeKey] = {
      itemsText: (entry.items || []).join('\n'),
      note: entry.note || '',
    };
  });

  return {
    id: data.id,
    flag: data.flag || '',
    title: data.title || '',
    region: data.region || 'diger',
    docsKey: data.docsKey || '',
    homeDescription: data.homeDescription || '',
    servicesDescription: data.servicesDescription || '',
    intro: data.intro || '',
    overview: data.overview || '',
    tagsText: (data.tags || []).join(', '),
    types,
    quickFacts: data.quickFacts?.length ? data.quickFacts : [{ label: '', value: '' }],
    documents,
  };
}

export default function CountriesAdmin() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('list');
  const [form, setForm] = useState(emptyForm);
  const [typeLabels, setTypeLabels] = useState({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const loadCountries = () => {
    setLoading(true);
    fetch('/api/admin/countries')
      .then((res) => res.json())
      .then(setCountries)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCountries();
    fetch('/api/site-data')
      .then((res) => res.json())
      .then((data) => setTypeLabels(data.visaTypeLabels || {}));
  }, []);

  const availableTypeKeys = useMemo(() => Object.keys(typeLabels), [typeLabels]);

  const openCreate = () => {
    setForm(emptyForm);
    setError('');
    setMode('create');
  };

  const openEdit = async (id) => {
    setError('');
    const res = await fetch(`/api/admin/countries/${id}`);
    const data = await res.json();
    setForm(formFromCountry(data));
    setMode('edit');
  };

  const closeForm = () => {
    setMode('list');
    setForm(emptyForm);
  };

  const toggleType = (typeKey) => {
    setForm((prev) => {
      const isSelected = prev.types.includes(typeKey);
      const types = isSelected
        ? prev.types.filter((t) => t !== typeKey)
        : [...prev.types, typeKey];
      const documents = { ...prev.documents };
      if (!isSelected && !documents[typeKey]) {
        documents[typeKey] = { itemsText: '', note: '' };
      }
      return { ...prev, types, documents };
    });
  };

  const updateDocument = (typeKey, field, value) => {
    setForm((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [typeKey]: { ...prev.documents[typeKey], [field]: value },
      },
    }));
  };

  const updateQuickFact = (index, field, value) => {
    setForm((prev) => {
      const quickFacts = [...prev.quickFacts];
      quickFacts[index] = { ...quickFacts[index], [field]: value };
      return { ...prev, quickFacts };
    });
  };

  const addQuickFact = () => {
    setForm((prev) => ({ ...prev, quickFacts: [...prev.quickFacts, { label: '', value: '' }] }));
  };

  const removeQuickFact = (index) => {
    setForm((prev) => ({ ...prev, quickFacts: prev.quickFacts.filter((_, i) => i !== index) }));
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`"${id}" ülkesini silmek istediğinize emin misiniz?`)) return;
    await fetch(`/api/admin/countries/${id}`, { method: 'DELETE' });
    loadCountries();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'create' && !/^[a-z0-9-]+$/.test(form.id.trim())) {
      setError('Ülke id\'si sadece küçük harf, rakam ve tire (-) içerebilir, örn: almanya');
      return;
    }

    const payload = {
      id: form.id.trim(),
      flag: form.flag.trim(),
      title: form.title.trim(),
      region: form.region,
      docsKey: form.docsKey.trim() || null,
      homeDescription: form.homeDescription.trim(),
      servicesDescription: form.servicesDescription.trim(),
      intro: form.intro.trim(),
      overview: form.overview.trim(),
      tags: form.tagsText.split(',').map((t) => t.trim()).filter(Boolean),
      types: form.types,
      quickFacts: form.quickFacts.filter((f) => f.label.trim() || f.value.trim()),
      documents: Object.fromEntries(form.types.map((typeKey) => {
        const entry = form.documents[typeKey] || { itemsText: '', note: '' };
        return [typeKey, {
          items: entry.itemsText.split('\n').map((line) => line.trim()).filter(Boolean),
          note: entry.note?.trim() || null,
        }];
      })),
    };

    setSaving(true);
    try {
      const url = mode === 'create' ? '/api/admin/countries' : `/api/admin/countries/${form.id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Kaydedilemedi.');
        return;
      }
      closeForm();
      loadCountries();
    } finally {
      setSaving(false);
    }
  };

  if (mode === 'list') {
    return (
      <>
        <div className="admin-page-head">
          <h1>Ülkeler &amp; Vizeler</h1>
          <p>Sitede gösterilen ülkeleri, vize türlerini ve evrak listelerini yönetin.</p>
        </div>

        <div className="admin-toolbar">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{countries.length} ülke</span>
          <button type="button" className="btn btn-gold" onClick={openCreate}>+ Yeni Ülke Ekle</button>
        </div>

        {loading ? (
          <p className="admin-empty-state">Yükleniyor…</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Bayrak</th>
                  <th>Ülke</th>
                  <th>Bölge</th>
                  <th>Evrak Kaynağı</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c) => (
                  <tr key={c.id} onClick={() => openEdit(c.id)}>
                    <td style={{ fontSize: '1.2rem' }}><CountryFlag country={c} /></td>
                    <td>{c.title}</td>
                    <td>{regionLabels[c.region] || c.region}</td>
                    <td>{c.docsKey || c.id}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                        onClick={(e) => { e.stopPropagation(); handleDelete(c.id); }}
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
        <h1>{mode === 'create' ? 'Yeni Ülke Ekle' : `${form.title} Düzenle`}</h1>
        <p>Ülke bilgilerini ve evrak listelerini güncelleyin.</p>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        {error && <div className="admin-login-error">{error}</div>}

        <div className="admin-form-grid">
          <div className="admin-form-field">
            <label htmlFor="id">Ülke ID (URL'de kullanılır)</label>
            <input
              id="id"
              value={form.id}
              disabled={mode === 'edit'}
              onChange={(e) => setForm((p) => ({ ...p, id: e.target.value }))}
              placeholder="örn: almanya"
              required
            />
          </div>
          <div className="admin-form-field">
            <label htmlFor="flag">Bayrak (emoji)</label>
            <input
              id="flag"
              value={form.flag}
              onChange={(e) => setForm((p) => ({ ...p, flag: e.target.value }))}
              placeholder="🇩🇪"
              required
            />
          </div>
          <div className="admin-form-field full">
            <label htmlFor="title">Ülke Adı</label>
            <input
              id="title"
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              required
            />
          </div>
          <div className="admin-form-field">
            <label htmlFor="region">Bölge</label>
            <select id="region" value={form.region} onChange={(e) => setForm((p) => ({ ...p, region: e.target.value }))}>
              {REGION_OPTIONS.map(([key, label]) => (
                <option value={key} key={key}>{label}</option>
              ))}
            </select>
          </div>
          <div className="admin-form-field">
            <label htmlFor="docsKey">Evrak Kaynağı (docsKey)</label>
            <input
              id="docsKey"
              value={form.docsKey}
              onChange={(e) => setForm((p) => ({ ...p, docsKey: e.target.value }))}
              placeholder="boş = kendi evrakları, örn: schengen"
            />
            <p className="admin-form-hint">
              Schengen üyesi bir ülkeyse buraya <code>schengen</code> yazın — evrak listesi tüm Schengen ülkeleriyle paylaşılır.
            </p>
          </div>
          <div className="admin-form-field full">
            <label htmlFor="homeDescription">Ana Sayfa Açıklaması</label>
            <input
              id="homeDescription"
              value={form.homeDescription}
              onChange={(e) => setForm((p) => ({ ...p, homeDescription: e.target.value }))}
            />
          </div>
          <div className="admin-form-field full">
            <label htmlFor="servicesDescription">Hizmetler Sayfası Açıklaması</label>
            <input
              id="servicesDescription"
              value={form.servicesDescription}
              onChange={(e) => setForm((p) => ({ ...p, servicesDescription: e.target.value }))}
            />
          </div>
          <div className="admin-form-field full">
            <label htmlFor="intro">Ülke Sayfası Giriş Metni</label>
            <textarea
              id="intro"
              value={form.intro}
              onChange={(e) => setForm((p) => ({ ...p, intro: e.target.value }))}
            />
          </div>
          <div className="admin-form-field full">
            <label htmlFor="overview">Ülke Hakkında (detaylı bilgi paragrafı)</label>
            <textarea
              id="overview"
              value={form.overview}
              onChange={(e) => setForm((p) => ({ ...p, overview: e.target.value }))}
              style={{ minHeight: 120 }}
              placeholder="Ülke sayfasında 'Ülke Hakkında' bölümünde gösterilecek daha uzun, bilgilendirici metin."
            />
          </div>
          <div className="admin-form-field full">
            <label htmlFor="tags">Etiketler (virgülle ayırın)</label>
            <input
              id="tags"
              value={form.tagsText}
              onChange={(e) => setForm((p) => ({ ...p, tagsText: e.target.value }))}
              placeholder="Turistik, Ticari, Aile Birleşimi"
            />
          </div>
        </div>

        <div className="admin-form-field full" style={{ marginTop: '0.5rem' }}>
          <label>Vize Türleri</label>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.4rem',
          }}
          >
            {availableTypeKeys.map((typeKey) => (
              <label
                key={typeKey}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'var(--bg-color)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 999,
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  checked={form.types.includes(typeKey)}
                  onChange={() => toggleType(typeKey)}
                  style={{ width: 'auto' }}
                />
                {typeLabels[typeKey] || typeKey}
              </label>
            ))}
          </div>
        </div>

        <div className="admin-form-field full">
          <label>Hızlı Bilgi Kutuları</label>
          {form.quickFacts.map((fact, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input
                value={fact.label}
                onChange={(e) => updateQuickFact(i, 'label', e.target.value)}
                placeholder="Kalış Süresi"
              />
              <input
                value={fact.value}
                onChange={(e) => updateQuickFact(i, 'value', e.target.value)}
                placeholder="90 gün"
              />
              <button type="button" className="btn btn-secondary" onClick={() => removeQuickFact(i)}>Sil</button>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addQuickFact}>+ Bilgi Kutusu Ekle</button>
        </div>

        {form.types.length > 0 && (
          <div className="admin-form-field full">
            <label>Evrak Listeleri</label>
            {form.types.map((typeKey) => (
              <div className="admin-doc-type-block" key={typeKey}>
                <h4>{typeLabels[typeKey] || typeKey}</h4>
                <div className="admin-form-field">
                  <label htmlFor={`items-${typeKey}`}>Gerekli Evraklar (her satıra bir madde)</label>
                  <textarea
                    id={`items-${typeKey}`}
                    value={form.documents[typeKey]?.itemsText || ''}
                    onChange={(e) => updateDocument(typeKey, 'itemsText', e.target.value)}
                    style={{ minHeight: 140 }}
                  />
                </div>
                <div className="admin-form-field">
                  <label htmlFor={`note-${typeKey}`}>Önemli Not (opsiyonel)</label>
                  <textarea
                    id={`note-${typeKey}`}
                    value={form.documents[typeKey]?.note || ''}
                    onChange={(e) => updateDocument(typeKey, 'note', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

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
