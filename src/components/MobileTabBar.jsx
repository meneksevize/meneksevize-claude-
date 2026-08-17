import { NavLink } from './LocaleLink.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { useSiteData } from '../context/SiteDataContext.jsx';
import {
  HomeIcon, GlobeIcon, ChecklistIcon, PhoneIcon,
} from './icons.jsx';

// Not: "Ara" sekmesi kasıtlı olarak bir NavLink DEĞİL, doğrudan tel: linki —
// mobil ziyaretçinin (reklam trafiğinin büyük kısmı mobilden geliyor) telefon
// numarasına ulaşmak için hamburger menüyü açıp aramasına gerek kalmıyor,
// ekranın her yerinden tek dokunuşla arama başlatılabiliyor.
export default function MobileTabBar() {
  const { t } = useLocale();
  const { settings } = useSiteData();
  const phone = settings.phone || '';
  const phoneHref = `tel:+${(settings.whatsapp || phone).replace(/\D/g, '')}`;

  const navTabs = [
    { to: '/', label: t('common.breadcrumbHome'), end: true, Icon: HomeIcon },
    { to: '/hizmetler', label: t('nav.countries'), Icon: GlobeIcon },
    { to: '/evrak-rehberi', label: t('nav.documentsShort'), Icon: ChecklistIcon },
  ];

  return (
    <nav className="mobile-tabbar" aria-label="Hızlı gezinme">
      {navTabs.map(({
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
      {phone && (
        <a href={phoneHref} className="mobile-tab mobile-tab-call">
          <PhoneIcon width={20} height={20} />
          <span>{t('nav.callNow')}</span>
        </a>
      )}
    </nav>
  );
}
