import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function EVisa() {
  const { countries } = useSiteData();
  const eVisaCountries = countries.filter((c) => c.tags?.includes('E-Vize'));

  useDocumentMeta(
    'E-Vize Başvurusu Yapılan Ülkeler | Menekşe Vize',
    'Dubai, Rusya, Hindistan, Mısır, Tayland, Vietnam ve Sri Lanka gibi tamamen online başvurulan e-Vize ülkeleri için hızlı süreç desteği.',
    { image: photos.passportBoardingPass, path: '/e-vize' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'E-Vize Ülkeleri' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">Hızlı Süreç</span>
        <h1>E-Vize Başvurusu Yapılan Ülkeler</h1>
        <p>
          Büyükelçilik randevusu gerektirmeyen, tamamen online başvurulan ve genellikle birkaç gün içinde
          sonuçlanan e-Vize ülkeleri burada bir arada.
        </p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">Neden E-Vize?</span>
            <h2>Randevu Beklemeden, Evden Başvuru</h2>
            <p>
              E-Vize sistemi, pasaportunuzu büyükelçiliğe teslim etmenizi veya konsolosluk randevusu almanızı
              gerektirmez — başvuru formu, dijital fotoğraf ve pasaport taraması ile tamamen online yürütülür.
              Sonuç genellikle birkaç iş günü, bazı ülkelerde ise birkaç saat içinde e-postanıza ulaşır. Biz de bu
              süreçte formun eksiksiz doldurulmasından belge hazırlığına kadar sizinle birlikte çalışıyoruz.
            </p>
          </div>

          <div className="country-tile-grid">
            {eVisaCountries.map((country, i) => (
              <Reveal
                as={Link}
                to={`/ulkeler/${country.id}`}
                className="country-tile"
                delay={Math.min(i * 15, 300)}
                key={country.id}
              >
                <CountryFlag country={country} className="country-tile-flag" />
                <span className="country-tile-name">{country.title}</span>
              </Reveal>
            ))}
          </div>

          <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '2rem auto 0' }}>
            Listede aradığınız ülkeyi bulamadınız mı? <Link to="/hizmetler" style={{ color: 'var(--accent-color)' }}>tüm ülkeler sayfamıza</Link> göz atın
            ya da <Link to="/iletisim" style={{ color: 'var(--accent-color)' }}>bizimle iletişime geçin</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
