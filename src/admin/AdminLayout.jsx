import { useCallback, useEffect, useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useAdminAuth } from './AdminAuthContext.jsx';
import {
  HomeIcon, InboxIcon, SearchIcon, GlobeIcon, BookIcon, HelpIcon, StarIcon, GearIcon,
} from '../components/icons.jsx';

const navGroups = [
  {
    label: 'Genel',
    items: [
      { to: '/admin', label: 'Genel Bakış', end: true, Icon: HomeIcon },
    ],
  },
  {
    label: 'Operasyon',
    items: [
      {
        to: '/admin/contacts', label: 'Gelen Başvurular', Icon: InboxIcon, showBadge: true,
      },
      { to: '/admin/applications', label: 'Başvuru Takip', Icon: SearchIcon },
    ],
  },
  {
    label: 'İçerik',
    items: [
      { to: '/admin/countries', label: 'Ülkeler & Vizeler', Icon: GlobeIcon },
      { to: '/admin/blog', label: 'Blog', Icon: BookIcon },
      { to: '/admin/faqs', label: 'SSS', Icon: HelpIcon },
      { to: '/admin/testimonials', label: 'Yorumlar', Icon: StarIcon },
    ],
  },
  {
    label: 'Ayarlar',
    items: [
      { to: '/admin/settings', label: 'Genel Ayarlar', Icon: GearIcon },
    ],
  },
];

export default function AdminLayout() {
  const { logout } = useAdminAuth();
  const [unreadCount, setUnreadCount] = useState(0);

  const refreshUnreadCount = useCallback(() => {
    fetch('/api/admin/contacts')
      .then((res) => (res.ok ? res.json() : []))
      .then((rows) => setUnreadCount(rows.filter((row) => !row.isRead).length))
      .catch(() => {});
  }, []);

  useEffect(() => {
    refreshUnreadCount();
  }, [refreshUnreadCount]);

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="logo">Menekşe<span>Vize</span></div>
        <nav className="admin-nav">
          {navGroups.map((group) => (
            <div className="admin-nav-group" key={group.label}>
              <div className="admin-nav-group-title">{group.label}</div>
              {group.items.map(({
                to, label, end, Icon, showBadge,
              }) => (
                <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
                  <Icon width={18} height={18} />
                  {label}
                  {showBadge && unreadCount > 0 && <span className="badge-count">{unreadCount}</span>}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <button type="button" className="admin-logout-btn" onClick={logout}>
            Çıkış Yap
          </button>
          <Link to="/" className="admin-view-site-link" target="_blank" rel="noopener noreferrer">
            Siteyi Görüntüle ↗
          </Link>
        </div>
      </aside>
      <div className="admin-content">
        <Outlet context={{ refreshUnreadCount }} />
      </div>
    </div>
  );
}
