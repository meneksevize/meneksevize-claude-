import { NavLink } from 'react-router-dom';
import {
  HomeIcon, GlobeIcon, ChecklistIcon, PhoneIcon,
} from './icons.jsx';

const tabs = [
  { to: '/', label: 'Ana Sayfa', end: true, Icon: HomeIcon },
  { to: '/hizmetler', label: 'Ülkeler', Icon: GlobeIcon },
  { to: '/evrak-rehberi', label: 'Evrak', Icon: ChecklistIcon },
  { to: '/iletisim', label: 'İletişim', Icon: PhoneIcon },
];

export default function MobileTabBar() {
  return (
    <nav className="mobile-tabbar" aria-label="Hızlı gezinme">
      {tabs.map(({
        to, label, end, Icon,
      }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => `mobile-tab ${isActive ? 'active' : ''}`}
        >
          <Icon width={20} height={20} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
