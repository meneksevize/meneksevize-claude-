import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { regionLabels } from '../data/countries.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const visaTypeInfo = [
  { title: 'Turistik', text: 'Tatil, ziyaret veya kısa süreli seyahat amaçlı başvurular.' },
  { title: 'Ticari', text: 'Fuar, toplantı, iş görüşmesi gibi ticari faaliyetler için başvurular.' },
  { title: 'Öğrenci', text: 'Yurt dışında eğitim almak isteyenler için öğrenci vizesi süreçleri.' },
  { title: 'Çalışma', text: 'Yurt dışında bir işte çalışmak için gereken çalışma izni/vizesi.' },
  { title: 'Aile Birleşimi', text: 'Yurt dışında yaşayan aile üyesinin yanına taşınmak için başvurular.' },
  { title: 'Transit', text: 'Üçüncü bir ülkeye geçiş için havalimanında/kısa süreli transit vizeler.' },
  { title: 'E-Vize', text: 'Elektronik ortamda başvurulan, hızlı sonuçlanan vize türleri.' },
  { title: 'Doğum Vizesi', text: "Kanada'da doğum yapmak isteyenler için standart ziyaretçi vizesi (TRV) kapsamında özel hazırlık gerektiren başvurular." },
];

const regionFilters = ['all', 'avrupa', 'amerika', 'orta-dogu', 'diger'];
const typeFilters = ['all', 'turistik', 'ticari', 'ogrenci', 'calisma', 'aile-birlesimi', 'transit', 'e-vize', 'dogum'];

export default function Services() {
  const { countries, visaTypeLabels } = useSiteData();

  useDocumentMeta(
    'Hizmetlerimiz | Menekşe Vize',
    'Schengen, ABD, İngiltere, Kanada, Rusya, Dubai/BAE ve Avustralya için turistik, ticari, öğrenci, çalışma ve aile birleşimi vize danışmanlığı hizmetleri.',
  );

  const [region, setRegion] = useState('all');
  const [type, setType] = useState('all');

  const filteredCountries = useMemo(() => countries.filter((c) => {
    const regionMatch = region === 'all' || c.region === region;
    const typeMatch = type === 'all' || c.types.includes(type);
    return regionMatch && typeMatch;
  }), [region, type]);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'Hizmetler' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.worldMap})` }}>
        <span className="kicker">Hizmetlerimiz</span>
        <h1>Ülke ve Vize Tipine Göre Danışmanlık</h1>
        <p>Aşağıdaki filtrelerle size uygun ülke ve vize tipini hızlıca bulabilirsiniz.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">Bilgi</span>
            <h2>Vize Tipleri Nedir?</h2>
          </div>
          <div className="grid grid-4" style={{ marginBottom: '4rem' }}>
            {visaTypeInfo.map((item, i) => (
              <Reveal as="div" className="card" delay={i * 50} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="section-head">
            <span className="kicker">Ülkeler</span>
            <h2>Hizmet Verdiğimiz Ülkeler</h2>
            <p>
              Bölge ya da vize tipine göre filtreleyerek size uygun seçeneği bulun. Randevu beklemeden online
              başvurulan ülkeler için <Link to="/e-vize" style={{ color: 'var(--accent-color)' }}>E-Vize Ülkeleri sayfamıza</Link> göz atabilirsiniz.
            </p>
          </div>

          <div className="filter-bar">
            {regionFilters.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-btn ${region === value ? 'active' : ''}`}
                onClick={() => setRegion(value)}
              >
                {regionLabels[value]}
              </button>
            ))}
          </div>

          <div className="filter-bar">
            <button
              type="button"
              className={`filter-btn ${type === 'all' ? 'active' : ''}`}
              onClick={() => setType('all')}
            >
              Tüm Vize Tipleri
            </button>
            {typeFilters.filter((v) => v !== 'all').map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-btn ${type === value ? 'active' : ''}`}
                onClick={() => setType(value)}
              >
                {visaTypeLabels[value]}
              </button>
            ))}
          </div>

          <div className="country-tile-grid">
            {filteredCountries.map((country, i) => (
              <Reveal
                as={Link}
                to={`/ulkeler/${country.id}`}
                className="country-tile"
                delay={Math.min(i * 15, 300)}
                id={country.id}
                key={country.id}
              >
                <CountryFlag country={country} className="country-tile-flag" />
                <span className="country-tile-name">{country.title}</span>
              </Reveal>
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <p className="checklist-placeholder">Seçilen filtrelere uygun ülke bulunamadı. Filtreleri sıfırlayarak tekrar deneyin.</p>
          )}

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/evrak-rehberi" className="btn btn-secondary">Evrak Rehberine Git</Link>{' '}
            <Link to="/iletisim" className="btn btn-gold">Ücretsiz Ön Görüşme Alın</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="kicker">Ücretlendirme</span>
            <h2>Danışmanlık Ücreti ve Resmi Ücretler Ayrıdır</h2>
          </div>
          <Reveal as="div" className="card">
            <p>
              Menekşe Vize&apos;ye ödediğiniz danışmanlık hizmet bedeli ile ilgili ülkenin konsolosluğuna, büyükelçiliğine
              veya resmi vize başvuru merkezine ödenen vize harcı, hizmet/randevu bedeli gibi resmi ücretler
              <strong> birbirinden tamamen bağımsızdır</strong>. Resmi ücretler doğrudan ilgili kuruma ödenir ve
              danışmanlık bedelimize dahil değildir.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Danışmanlık ücretimiz; hedef ülke, vize tipi ve başvurunuzun kapsamına göre değişir ve size özel olarak
              ücretsiz ön görüşmede netleştirilir. Ödeme ve iptal/iade koşulları hakkında detaylı bilgi için{' '}
              <Link to="/iptal-iade-politikasi" style={{ color: 'var(--accent-color)' }}>İptal ve İade Politikamıza</Link>{' '}
              göz atabilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
