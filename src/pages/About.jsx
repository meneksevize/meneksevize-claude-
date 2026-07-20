import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import {
  ShieldIcon, ChecklistIcon, ClockIcon, RefreshIcon, GlobeIcon,
} from '../components/icons.jsx';

const values = [
  {
    icon: ShieldIcon,
    title: 'Dürüst Danışmanlık',
    text: 'Vize sonucunu garanti edemeyiz — bunu yapan hiçbir danışmanlık kuruluşu olamaz, çünkü nihai karar her zaman ilgili konsolosluğa aittir. Biz başvurunuzu elimizden gelen en güçlü ve eksiksiz şekilde hazırlamaya odaklanırız.',
  },
  {
    icon: ChecklistIcon,
    title: 'Kişiye Özel Yaklaşım',
    text: 'Her başvuru sahibinin durumu farklıdır. Hazır şablonlar yerine, seyahat amacınıza ve hedef ülkenize göre özelleştirilmiş bir evrak listesi ve süreç planı hazırlıyoruz.',
  },
  {
    icon: ClockIcon,
    title: 'Şeffaf Süreç Takibi',
    text: 'Başvurunuzun hangi aşamada olduğunu tahmin etmek zorunda kalmazsınız. Takip portalımız ve düzenli bilgilendirmelerimizle süreç boyunca nerede olduğunuzu her zaman bilirsiniz.',
  },
  {
    icon: RefreshIcon,
    title: 'Ulaşılabilir İletişim',
    text: 'Sorularınız telefon, WhatsApp veya e-posta üzerinden hızlı yanıt bulur. Süreç boyunca tek taraflı bir bilgilendirme değil, karşılıklı bir iletişim kuruyoruz.',
  },
];

export default function About() {
  const { countries } = useSiteData();

  useDocumentMeta(
    'Hakkımızda | Menekşe Vize',
    'Menekşe Vize olarak Schengen bölgesi ve dünya genelinde vize danışmanlığında şeffaflık, kişiye özel yaklaşım ve dürüst iletişimi esas alıyoruz.',
    { image: photos.mapWithPins, path: '/hakkimizda' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'Hakkımızda' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.mapWithPins})` }}>
        <span className="kicker">Hakkımızda</span>
        <h1>Vize Sürecinde Yanınızda Olan Danışmanlık</h1>
        <p>Menekşe Vize, Schengen bölgesi ve dünya genelinde vize başvurularında şeffaflık ve kişiye özel rehberliği esas alan bir danışmanlık hizmetidir.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">Ne Yapıyoruz</span>
            <h2>Vize Başvurunuzu Baştan Sona Birlikte Yönetiyoruz</h2>
            <p>
              {countries.length > 0 ? `${countries.length} farklı ülke/bölge için` : 'Schengen bölgesi ve dünya genelinde'} turistik,
              ticari, öğrenci, çalışma ve aile birleşimi vizesi başvurularında; ön görüşmeden evrak hazırlığına,
              randevu planlamasından sonuç takibine kadar süreci sizinle birlikte yürütüyoruz. Amacımız, karmaşık
              ve değişken vize prosedürlerini sizin için anlaşılır ve öngörülebilir hale getirmek.
            </p>
          </div>

          <div className="grid grid-4" style={{ marginBottom: '3rem' }}>
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={title}>
                <div className="card-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="card country-overview">
            <span className="kicker">Neden Bu Yaklaşımı Benimsiyoruz</span>
            <p>
              Vize danışmanlığı sektöründe bazen &ldquo;garanti sonuç&rdquo; gibi gerçekçi olmayan vaatlerle karşılaşabilirsiniz.
              Biz bunun yerine somut ve takip edilebilir bir süreç sunmayı tercih ediyoruz: hangi evrakın neden gerekli
              olduğunu açıklıyor, başvurunuzun aşamasını sizinle paylaşıyor ve sorularınızı doğrudan yanıtlıyoruz.
              Nihai vize kararı her zaman ilgili ülkenin konsolosluğuna/göçmenlik kurumuna aittir — biz bu süreçte
              başvurunuzu en güçlü şekilde hazırlamanıza yardımcı oluyoruz.
            </p>
          </Reveal>

          <Reveal as="div" className="card country-overview" style={{ marginTop: '1.5rem' }}>
            <span className="kicker">Kurumsal Statümüz</span>
            <p>
              Menekşe Vize, &ldquo;Menekşe Vize&rdquo; markası altında faaliyet gösteren bağımsız bir danışmanlık
              hizmetidir; hiçbir ülkenin konsolosluğu, büyükelçiliği veya resmi vize başvuru merkezi değildir ve
              onlarla resmi bir bağlantımız bulunmamaktadır. Sunduğumuz danışmanlık, evrak hazırlığı ve süreç
              rehberliği isteğe bağlı bir hizmettir; resmi başvurunuzu her zaman ilgili konsolosluk veya yetkili
              başvuru merkezi üzerinden bizzat siz gerçekleştirirsiniz.
            </p>
          </Reveal>

          <div className="section-head" style={{ marginTop: '4rem' }}>
            <span className="kicker">Kapsam</span>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center' }}>
              <GlobeIcon /> Hizmet Verdiğimiz Ülkeler
            </h2>
            <p>Schengen bölgesindeki 29 ülkenin yanı sıra ABD, İngiltere, Kanada, Dubai/BAE, Rusya ve Avustralya için danışmanlık sağlıyoruz.</p>
          </div>

          <div style={{
            textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
          }}
          >
            <Link to="/hizmetler" className="btn btn-secondary">Hizmetlerimizi İnceleyin</Link>
            <Link to="/iletisim" className="btn btn-gold">Ücretsiz Ön Görüşme Alın</Link>
          </div>
        </div>
      </section>
    </>
  );
}
