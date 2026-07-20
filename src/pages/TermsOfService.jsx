import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function TermsOfService() {
  const { settings } = useSiteData();
  const email = settings.email || 'meneksevize@gmail.com';

  useDocumentMeta(
    'Kullanım Koşulları | Menekşe Vize',
    'Menekşe Vize web sitesini ve danışmanlık hizmetlerini kullanırken geçerli olan koşullar, hizmetin niteliği ve sorumluluk sınırları.',
    { path: '/kullanim-kosullari' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'Kullanım Koşulları' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">Yasal</span>
        <h1>Kullanım Koşulları</h1>
        <p>meneksevize.com web sitesini ve sunulan danışmanlık hizmetlerini kullanırken geçerli olan koşullar.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal as="div" className="card" style={{ lineHeight: 1.8 }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Bu metin, meneksevize.com internet sitesini (&quot;Site&quot;) ziyaret eden veya Menekşe Vize
              tarafından sunulan danışmanlık hizmetlerinden (&quot;Hizmet&quot;) faydalanan kullanıcılar
              (&quot;Kullanıcı&quot;) için geçerli koşulları düzenler. Siteyi kullanarak veya Hizmet talebinde
              bulunarak bu koşulları kabul etmiş sayılırsınız.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Hizmetin Niteliği</h2>
            <p>
              Menekşe Vize, &ldquo;Menekşe Vize&rdquo; markası altında faaliyet gösteren özel/bağımsız bir
              <strong> vize danışmanlık hizmetidir</strong>. Menekşe Vize; hiçbir ülkenin konsolosluğu, büyükelçiliği,
              resmi vize başvuru merkezi, göçmenlik dairesi veya bu kurumların yetkili temsilcisi/acentesi
              <strong> değildir</strong>. Sunduğumuz hizmet; başvuru sürecinde evrak hazırlığı, süreç rehberliği ve
              danışmanlık desteğinden ibarettir; isteğe bağlıdır ve resmi bir başvuru zorunluluğu doğurmaz.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Vize Sonucu Hakkında</h2>
            <p>
              Vize başvurusunun onaylanıp onaylanmayacağına dair nihai karar, münhasıran ilgili ülkenin konsolosluğuna,
              büyükelçiliğine veya yetkili göçmenlik makamına aittir. Menekşe Vize, hiçbir şekilde vize onayı, belirli
              bir sonuç veya belirli bir süre garantisi vermez; veremez. Hizmetimiz, başvurunuzun mevcut şartlar
              çerçevesinde en eksiksiz ve tutarlı şekilde hazırlanmasına yönelik bir destekten ibarettir.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Ücretlendirme</h2>
            <p>
              Danışmanlık hizmeti karşılığında alınan ücret ile ilgili konsolosluğa, büyükelçiliğe veya resmi vize
              başvuru merkezine ödenen harç, hizmet bedeli ve benzeri resmi ödemeler birbirinden tamamen bağımsızdır.
              Resmi ücretler doğrudan ilgili resmi kuruma ödenir ve Menekşe Vize&apos;nin hizmet bedeline dahil
              değildir. Danışmanlık ücretimiz, başvurunuzun kapsamına göre ön görüşme sırasında netleştirilir.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. Kullanıcının Sorumluluğu</h2>
            <p>
              Kullanıcı, danışmanlık sürecinde paylaştığı bilgi ve belgelerin doğru, güncel ve eksiksiz olmasından
              bizzat sorumludur. Yanlış veya eksik beyan edilen bilgilerden doğabilecek sonuçlardan Menekşe Vize
              sorumlu tutulamaz.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>5. Site İçeriği</h2>
            <p>
              Sitedeki ülke, vize türü ve evrak listesi bilgileri genel bir rehber niteliğindedir; ilgili konsolosluğun
              güncel ve resmi gerekliliklerinin yerine geçmez. Bu bilgiler dönem dönem güncellenir, ancak başvuru
              öncesinde güncel resmi gereklilikler ön görüşmemizde birlikte teyit edilir.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>6. Fikri Mülkiyet</h2>
            <p>
              Sitede yer alan metin, tasarım ve görsel unsurların telif hakları Menekşe Vize&apos;ye aittir; önceden
              yazılı izin alınmaksızın ticari amaçla çoğaltılamaz veya kullanılamaz.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>7. Değişiklikler</h2>
            <p>
              Bu koşullar zaman zaman güncellenebilir; güncel hâli her zaman bu sayfada yayımlanır.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>8. İletişim</h2>
            <p>
              Bu koşullarla ilgili sorularınız için{' '}
              <a href={`mailto:${email}`} style={{ color: 'var(--accent-color)' }}>{email}</a> adresinden bize
              ulaşabilirsiniz.
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
