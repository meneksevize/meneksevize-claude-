import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [stats, setStats] = useState({ countries: 0, contacts: 0, unread: 0 });

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/countries').then((res) => res.json()),
      fetch('/api/admin/contacts').then((res) => res.json()),
    ]).then(([countries, contacts]) => {
      setStats({
        countries: countries.length,
        contacts: contacts.length,
        unread: contacts.filter((c) => !c.isRead).length,
      });
    });
  }, []);

  return (
    <>
      <div className="admin-page-head">
        <h1>Genel Bakış</h1>
        <p>Menekşe Vize yönetim paneline hoş geldiniz.</p>
      </div>

      <div className="admin-stat-grid">
        <div className="admin-stat-card">
          <div className="value">{stats.countries}</div>
          <div className="label">Yönetilen Ülke</div>
        </div>
        <div className="admin-stat-card">
          <div className="value">{stats.contacts}</div>
          <div className="label">Toplam Başvuru</div>
        </div>
        <div className="admin-stat-card">
          <div className="value">{stats.unread}</div>
          <div className="label">Okunmamış Başvuru</div>
        </div>
      </div>

      <div style={{
        display: 'flex', gap: '1rem', flexWrap: 'wrap',
      }}
      >
        <Link to="/admin/contacts" className="btn btn-secondary">Gelen Başvurulara Git</Link>
        <Link to="/admin/countries" className="btn btn-secondary">Ülkeleri Yönet</Link>
        <Link to="/admin/settings" className="btn btn-secondary">Genel Ayarlar</Link>
      </div>
    </>
  );
}
