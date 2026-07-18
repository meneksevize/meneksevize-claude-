import { Link, useParams, Navigate } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData, getDocsKey } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { CheckIcon } from '../components/icons.jsx';

const typeIntros = {
  turistik: 'tatil, ziyaret veya kısa süreli seyahat amaçlı başvurular için',
  ticari: 'fuar, toplantı ve iş görüşmesi gibi ticari faaliyetler için',
  ogrenci: 'yurt dışında eğitim almak isteyenler için',
  calisma: 'yurt dışında bir işte çalışmak için gereken çalışma izni/vizesi için',
  'aile-birlesimi': 'yurt dışında yaşayan bir aile üyesinin yanına gitmek için',
  transit: 'üçüncü bir ülkeye geçiş için havalimanında kısa süreli transit amaçlı',
  'e-vize': 'elektronik ortamda başvurulan, hızlı sonuçlanan vize süreci için',
  dogum: "Kanada'da doğum yapmak isteyenler için özel hazırlık gerektiren",
};

// Vize türüne özel pratik rehberlik. Her ülkede birebir aynı metin
// tekrarlanmasın diye, o ülke için zaten özgün yazılmış servicesDescription
// alanıyla harmanlanır — böylece 35 ülkenin her sayfası gerçekten farklı
// bir paragraf üretir, sadece ülke adı değişen bir şablon olmaz.
const typeGuideBase = {
  turistik: 'turistik vize başvurularında en çok dikkat edilmesi gereken nokta, seyahat planınızın (uçak bileti, konaklama, seyahat sigortası) tarih ve içerik olarak birbiriyle tutarlı olmasıdır. Türkiye\'ye dönüş bağlarınızı (iş, aile, mülkiyet) gösteren belgeler, başvurunuzun güçlü değerlendirilmesine katkı sağlar.',
  ticari: 'ticari vize başvurularında davet mektubunun ziyaret amacını (fuar, toplantı, iş ortaklığı) ve tarihleri net şekilde belirtmesi, şirketinizin faaliyet belgesiyle tutarlı olması beklenir. Seyahat programınızı (toplantı/fuar günleri) başvurunuza eklemeniz değerlendirme sürecini hızlandırır.',
  ogrenci: 'öğrenci vizesi başvurularında kabul mektubu, okul kayıt belgesi ve mali yeterlilik kanıtı sürecin temelini oluşturur. Eğitim süresine ve okulun bulunduğu şehre göre değişen mali yeterlilik eşiklerini ön görüşmede birlikte netleştiriyoruz.',
  calisma: 'çalışma vizesi/izni başvurularında genellikle bir işveren teklifi veya sponsorluk belgesi gereklidir. Diploma ve iş deneyimi belgelerinizin güncel, onaylı ve iş teklifiyle tutarlı olması değerlendirme sürecini kolaylaştırır.',
  'aile-birlesimi': 'aile birleşimi başvurularında davet eden kişinin ikamet/oturum belgesi ile aranızdaki akrabalık bağını gösteren resmi belgeler (nüfus kayıt örneği, evlilik cüzdanı vb.) birlikte sunulmalıdır. Mali yeterlilik genellikle davet eden kişinin durumuyla birlikte değerlendirilir.',
  transit: 'transit vize başvurularında devam uçuşunuzun bileti ve varsa hedef ülke vizeniz en önemli belgelerdir. Aktarma süreniz uzunsa (genellikle 24 saati aşan durumlarda) konaklama kanıtı da istenebilir.',
  'e-vize': 'e-vize başvuruları tamamen online yürütülür ve genellikle birkaç iş günü içinde sonuçlanır. Pasaport taramanızın ve dijital fotoğrafınızın net ve okunaklı olması, başvurunun sorunsuz ilerlemesi için önemlidir.',
  dogum: 'doğum amaçlı ziyaretlerde gebelik durumunuzu ve niyetinizi başvuruda doğru şekilde beyan etmeniz yasal bir zorunluluktur; özel sağlık sigortası ve hastane kabul belgenizin eksiksiz olması sürecin sorunsuz ilerlemesi için kritik önem taşır.',
};

function buildTypeGuide(country, visaType, typeLabel) {
  const base = typeGuideBase[visaType];
  if (!base) return null;
  const countryContext = country.servicesDescription || country.homeDescription || '';
  return `${country.title} için ${base} ${countryContext}`.trim();
}

export default function CountryVisaType() {
  const { countryId, visaType } = useParams();
  const { countries, visaTypeLabels, visaDocuments } = useSiteData();

  const country = countries.find((c) => c.id === countryId);
  const docsByType = country ? visaDocuments[getDocsKey(country)] : null;
  const typeLabel = visaTypeLabels[visaType] || visaType;
  const entry = docsByType?.[visaType] ?? { items: [], note: null };
  const intro = typeIntros[visaType] || 'bu vize türü için';
  const typeGuide = country ? buildTypeGuide(country, visaType, typeLabel) : null;

  useDocumentMeta(
    country ? `${country.title} ${typeLabel} Vizesi Başvurusu ve Gerekli Evraklar | Menekşe Vize` : 'Ülke Bulunamadı | Menekşe Vize',
    country ? `${country.title} ${typeLabel.toLowerCase()} vizesi için gerekli evraklar, başvuru süreci ve dikkat edilmesi gerekenler.` : undefined,
    { image: photos.passportBoardingPass, path: country ? `/ulkeler/${country.id}/${visaType}` : undefined },
  );

  if (countries.length > 0 && (!country || !country.types.includes(visaType))) {
    return <Navigate to={country ? `/ulkeler/${country.id}` : '/hizmetler'} replace />;
  }

  if (!country) {
    return null;
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Ana Sayfa', to: '/' },
        { label: 'Ülkeler', to: '/hizmetler' },
        { label: `${country.title} Vizesi`, to: `/ulkeler/${country.id}` },
        { label: `${typeLabel} Vizesi` },
      ]}
      />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">Ülkeler</span>
        <h1><CountryFlag country={country} className="country-detail-flag" />{country.title} {typeLabel} Vizesi</h1>
        <p>
          {country.title} için {intro} vize başvurunuzda gerekli evrakları ve süreç bilgisini bu sayfada bulabilirsiniz.
        </p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
            {country.quickFacts.map((fact, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={fact.label}>
                <h3 style={{ fontSize: '1rem' }}>{fact.label}</h3>
                <p>{fact.value}</p>
              </Reveal>
            ))}
          </div>

          {country.overview && (
            <Reveal as="div" className="card country-overview">
              <span className="kicker">{country.title} Hakkında</span>
              <p>{country.overview}</p>
            </Reveal>
          )}

          {typeGuide && (
            <Reveal as="div" className="card" style={{ marginTop: '1.5rem' }}>
              <span className="kicker">{typeLabel} Vizesi Hakkında</span>
              <p>{typeGuide}</p>
            </Reveal>
          )}

          <div className="section-head" style={{ marginTop: '3rem' }}>
            <span className="kicker">Gerekli Evraklar</span>
            <h2>{country.title} {typeLabel} Vizesi İçin Evrak Listesi</h2>
          </div>

          <Reveal as="div" className="card faq-answer checklist-output" style={{ border: '1px solid var(--border-color)' }}>
            {entry.items.length > 0 ? (
              <ul>
                {entry.items.map((doc, di) => (
                  <li key={doc} style={{ '--item-delay': `${di * 45}ms` }}>
                    <span className="checklist-check"><CheckIcon /></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Bu vize türü için evrak listesi ön görüşmede birlikte netleştirilir.</p>
            )}
            {entry.note && (
              <div className="doc-note">
                <span><strong>Önemli:</strong> {entry.note}</span>
              </div>
            )}
          </Reveal>

          <p className="form-note" style={{ textAlign: 'center', maxWidth: 600, margin: '2rem auto 0' }}>
            Bu liste genel bir rehber niteliğindedir; başvurunuza özel ek belge gerekip gerekmediğini ön görüşmemizde birlikte netleştiririz. Nihai vize kararı ilgili konsolosluğa aittir.
          </p>

          <div style={{
            textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
          }}
          >
            <Link to={`/ulkeler/${country.id}`} className="btn btn-secondary">{country.title} İçin Diğer Vize Türleri</Link>
            <Link to="/iletisim" className="btn btn-gold">Ücretsiz Ön Görüşme Alın</Link>
          </div>
        </div>
      </section>
    </>
  );
}
