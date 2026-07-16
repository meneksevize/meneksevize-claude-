import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';

export default function PrivacyPolicy() {
  const { settings } = useSiteData();
  const email = settings.email || 'meneksevize@gmail.com';

  useDocumentMeta(
    'Gizlilik Politikası ve KVKK Aydınlatma Metni | Menekşe Vize',
    'Menekşe Vize olarak kişisel verilerinizin hangi amaçla, nasıl toplandığı ve haklarınız hakkında 6698 sayılı KVKK kapsamında aydınlatma metni.',
    { path: '/gizlilik-politikasi' },
  );

  return (
    <>
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">Yasal</span>
        <h1>Gizlilik Politikası ve KVKK Aydınlatma Metni</h1>
        <p>Kişisel verilerinizin toplanma amacı, yöntemi ve haklarınız hakkında bilgilendirme.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal as="div" className="card" style={{ lineHeight: 1.8 }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, Menekşe Vize (&quot;biz&quot;)
              tarafından işletilen meneksevize.com internet sitesi üzerinden elde edilen kişisel verilerinizin
              işlenmesine ilişkin olarak veri sorumlusu sıfatıyla sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Veri Sorumlusu</h2>
            <p>
              Kişisel verileriniz, veri sorumlusu sıfatıyla Menekşe Vize tarafından, bu metinde açıklanan amaç ve
              kapsamda işlenmektedir. Sorularınız için{' '}
              <a href={`mailto:${email}`} style={{ color: 'var(--accent-color)' }}>{email}</a> adresinden bize
              ulaşabilirsiniz.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Hangi Kişisel Verileri Topluyoruz</h2>
            <p>Sitemizi kullanırken aşağıdaki kişisel verileriniz toplanabilir:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>İletişim formu üzerinden paylaştığınız ad-soyad, e-posta adresi, telefon numarası, hedef ülke ve mesaj içeriği</li>
              <li>Başvuru takip aracını kullanırken girdiğiniz takip kodu ve soyisim bilgisi</li>
              <li>Başvurunuzu bizimle birlikte oluşturmanız hâlinde iletişim ve seyahat bilgileriniz</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              Sitemiz, ziyaretçi davranışını izleyen üçüncü taraf analitik veya reklam çerezleri kullanmamaktadır.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. İşleme Amaçları</h2>
            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>İletişim formu üzerinden ilettiğiniz taleplere yanıt vermek ve sizinle iletişime geçmek</li>
              <li>Talep etmeniz hâlinde vize danışmanlığı hizmeti sunmak ve başvuru sürecinizi takip etmek</li>
              <li>Hizmet kalitemizi korumak ve yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Hukuki Sebep ve Toplama Yöntemi</h2>
            <p>
              Kişisel verileriniz, KVKK&apos;nın 5. maddesinde belirtilen &quot;ilgili kişinin temel hak ve
              özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati için veri işlenmesinin zorunlu
              olması&quot; ve talep üzerine kurulacak bir sözleşmenin kurulması/ifasıyla doğrudan ilgili olması
              hukuki sebeplerine dayanarak; iletişim formu, başvuru takip aracı ve doğrudan iletişim (telefon,
              e-posta, WhatsApp) yollarıyla elektronik ortamda toplanmaktadır.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Kişisel Verilerin Aktarılması</h2>
            <p>
              Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz veya
              pazarlama/reklam amacıyla satılmaz. Sitenin teknik altyapısını sağlayan barındırma ve e-posta
              bildirim hizmeti sağlayıcıları (sunucu barındırma ve e-posta gönderim altyapısı), yalnızca hizmetin
              işleyişini sağlamak amacıyla sınırlı ölçüde veriye erişebilir.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>6. Saklama Süresi</h2>
            <p>
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı
              süreleri saklı kalmak kaydıyla saklanır; amacın ortadan kalkması hâlinde silinir veya anonim hâle getirilir.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>7. KVKK Kapsamındaki Haklarınız</h2>
            <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde/dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesindeki şartlar çerçevesinde silinmesini/yok edilmesini isteme</li>
              <li>Düzeltme, silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işlenme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>8. Başvuru Yöntemi</h2>
            <p>
              Yukarıdaki haklarınızı kullanmak için taleplerinizi{' '}
              <a href={`mailto:${email}`} style={{ color: 'var(--accent-color)' }}>{email}</a> adresine
              yazılı olarak iletebilirsiniz. Talebiniz, niteliğine göre en kısa sürede ve en geç 30 gün içinde
              ücretsiz olarak sonuçlandırılır.
            </p>

            <p style={{ color: 'var(--text-muted)', marginTop: '2rem', fontSize: '0.9rem' }}>
              Son güncelleme: Temmuz 2026. Bu metin zaman zaman güncellenebilir, güncel hâli her zaman bu sayfada yer alır.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
