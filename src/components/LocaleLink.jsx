import { forwardRef } from 'react';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext.jsx';

// Sitedeki tüm <Link>/<NavLink> kullanımları bu dosyadan import edilir (bkz.
// her sayfadaki `import { Link, NavLink } from '../components/LocaleLink.jsx'`)
// böylece JSX'teki `to="/hizmetler"` gibi mutlak yollar hiç değişmeden, aktif
// dile göre otomatik olarak /en veya /ar önekini alır. Dış linkler
// (http/https/mailto/tel/#) ve zaten önekli yollar dokunulmadan geçer.
function localize(to, prefix) {
  if (typeof to !== 'string') return to;
  if (/^(https?:|mailto:|tel:|#)/.test(to)) return to;
  if (!to.startsWith('/')) return to;
  return `${prefix}${to}`;
}

export const Link = forwardRef(({ to, ...props }, ref) => {
  const { prefix } = useLocale();
  return <RouterLink ref={ref} to={localize(to, prefix)} {...props} />;
});
Link.displayName = 'LocaleLink';

export const NavLink = forwardRef(({ to, ...props }, ref) => {
  const { prefix } = useLocale();
  return <RouterNavLink ref={ref} to={localize(to, prefix)} {...props} />;
});
NavLink.displayName = 'LocaleNavLink';
