import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function ContactsAdmin() {
  const { refreshUnreadCount } = useOutletContext();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  const load = () => {
    setLoading(true);
    fetch('/api/admin/contacts')
      .then((res) => res.json())
      .then(setContacts)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const toggleRead = async (contact) => {
    await fetch(`/api/admin/contacts/${contact.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isRead: !contact.isRead }),
    });
    load();
    refreshUnreadCount();
  };

  const selected = contacts.find((c) => c.id === selectedId);

  const convertToApplication = (contact) => {
    navigate('/admin/applications', {
      state: {
        prefill: {
          clientName: contact.name,
          email: contact.email,
          phone: contact.phone,
        },
      },
    });
  };

  return (
    <>
      <div className="admin-page-head">
        <h1>Gelen Başvurular</h1>
        <p>İletişim formundan gelen tüm mesajlar burada listelenir.</p>
      </div>

      {loading && <p className="admin-empty-state">Yükleniyor…</p>}
      {!loading && contacts.length === 0 && (
        <p className="admin-empty-state">Henüz bir başvuru yok.</p>
      )}

      {!loading && contacts.length > 0 && (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Durum</th>
                <th>Ad Soyad</th>
                <th>E-posta</th>
                <th>Hedef Ülke</th>
                <th>Tarih</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr
                  key={c.id}
                  className={!c.isRead ? 'is-unread' : ''}
                  onClick={() => setSelectedId(c.id === selectedId ? null : c.id)}
                >
                  <td>
                    <span className={`admin-pill ${c.isRead ? 'read' : 'unread'}`}>
                      {c.isRead ? 'Okundu' : 'Yeni'}
                    </span>
                  </td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.targetCountry || '—'}</td>
                  <td>{new Date(c.createdAt).toLocaleString('tr-TR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <div className="admin-form" style={{ marginTop: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>{selected.name}</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            <strong>E-posta:</strong> {selected.email}
          </p>
          {selected.phone && (
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              <strong>Telefon:</strong> {selected.phone}
            </p>
          )}
          {selected.targetCountry && (
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              <strong>Hedef Ülke:</strong> {selected.targetCountry}
            </p>
          )}
          <p style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>{selected.message}</p>
          <div className="admin-form-actions">
            <button type="button" className="btn btn-secondary" onClick={() => toggleRead(selected)}>
              {selected.isRead ? 'Okunmadı Olarak İşaretle' : 'Okundu Olarak İşaretle'}
            </button>
            <button type="button" className="btn btn-gold" onClick={() => convertToApplication(selected)}>
              Başvuruya Dönüştür
            </button>
          </div>
        </div>
      )}
    </>
  );
}
