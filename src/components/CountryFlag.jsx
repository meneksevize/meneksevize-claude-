// Sadece sitede kullanılan ülkelerin bayrak bileşenleri adlandırılmış import ile
// alınır — böylece bundler (Rollup/Vite) kullanılmayan ~200 diğer ülke bayrağını
// paketten eler (tree-shaking). Emoji bayraklar Windows'ta (Segoe UI Emoji) resim
// olarak değil, iki harfli kod veya boş kutucuk olarak göründüğü için bu SVG
// tabanlı çözüm kullanılıyor.
import {
  DE, FR, IT, ES, NL, AT, BE, BG, HR, CZ, DK, EE, FI, GR, HU, IS, LV, LI, LT, LU,
  MT, NO, PL, PT, RO, SK, SI, SE, CH, US, GB, CA, AE, RU, AU,
} from 'country-flag-icons/react/3x2';
import { COUNTRY_ISO_CODES } from '../data/countryFlags.js';

const FLAG_COMPONENTS = {
  de: DE, fr: FR, it: IT, es: ES, nl: NL, at: AT, be: BE, bg: BG, hr: HR, cz: CZ,
  dk: DK, ee: EE, fi: FI, gr: GR, hu: HU, is: IS, lv: LV, li: LI, lt: LT, lu: LU,
  mt: MT, no: NO, pl: PL, pt: PT, ro: RO, sk: SK, si: SI, se: SE, ch: CH, us: US,
  gb: GB, ca: CA, ae: AE, ru: RU, au: AU,
};

export default function CountryFlag({ country, className = '' }) {
  if (!country) return null;
  const iso = COUNTRY_ISO_CODES[country.id];
  const Flag = iso && FLAG_COMPONENTS[iso];

  if (!Flag) {
    return <span className={className}>{country.flag}</span>;
  }

  return (
    <Flag
      title={`${country.title} bayrağı`}
      className={`country-flag-icon${className ? ` ${className}` : ''}`}
    />
  );
}
