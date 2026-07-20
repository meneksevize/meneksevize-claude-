import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function RefundPolicy() {
  const { settings } = useSiteData();
  const email = settings.email || 'meneksevize@gmail.com';
  const phone = settings.phone || '';

  useDocumentMeta(
    'İptal ve İade Politikası | Menekşe Vize',
    'Menekşe Vize danışmanlık hizmetinde iptal ve iade koşulları; resmi konsolosluk/harç ücretlerinin bu politikaya dahil olmadığına dair bilgilendirme.',
    { path: '/iptal-iade-politikasi' },
  );

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'İptal ve İade Politikası' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">Yasal</span>
        <h1>İptal ve İade Politikası</h1>
        <p>Danışmanlık hizmetimizin iptal ve iade koşulları hakkında bilgilendirme.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal as="div" className="card" style={{ lineHeight: 1.8 }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Bu politika, Menekşe Vize&apos;den danışmanlık hizmeti talep eden müşterilerimiz için iptal ve iade
              koşullarını açıklar. Aşağıdaki koşullar yalnızca Menekşe Vize&apos;ye ödenen{' '}
              <strong>danışmanlık hizmet bedelini</strong> kapsar.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>1. Danışmanlık Ücreti ile Resmi Ücretlerin Ayrımı</h2>
            <p>
              Menekşe Vize&apos;ye ödenen danışmanlık hizmet bedeli ile ilgili ülkenin konsolosluğuna, büyükelçiliğine
              veya resmi vize başvuru merkezine ödenen vize harcı, hizmet bedeli, randevu ücreti ve benzeri resmi
              ödemeler <strong>birbirinden tamamen bağımsızdır</strong>. Resmi kurumlara yapılan ödemeler doğrudan o
              kurumun kendi iptal/iade politikasına tabidir; Menekşe Vize bu ödemeler üzerinde tasarruf yetkisine
              sahip değildir ve bu tutarları iade edemez.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>2. Danışmanlık Hizmetinin İptali</h2>
            <p>
              Henüz fiilen başlanmamış bir danışmanlık talebini, ön görüşme aşamasında herhangi bir ücret ödemeden
              iptal edebilirsiniz. Hizmet bedeli tahsil edildikten sonra, evrak hazırlığı veya süreç rehberliği fiilen
              başlamışsa, o ana kadar verilen emek ve zaman göz önünde bulundurularak iade tutarı tarafımızca
              değerlendirilir.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>3. Vize Reddi Durumunda İade</h2>
            <p>
              Danışmanlık hizmetimiz; başvurunuzun en güçlü ve eksiksiz şekilde hazırlanmasına yönelik bir emek ve süreç
              desteğidir, bir sonuç garantisi değildir. Bu nedenle, danışmanlık süreci eksiksiz şekilde tamamlanmış
              olmasına rağmen ilgili konsolosluk/makam tarafından vize başvurusunun reddedilmesi tek başına iade
              nedeni oluşturmaz. Ret sonrası itiraz veya yeniden başvuru sürecinde destek olmaya devam ederiz.
            </p>

            <h2 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.75rem' }}>4. İade Talebi Nasıl Yapılır</h2>
            <p>
              İade talebinizi{' '}
              <a href={`mailto:${email}`} style={{ color: 'var(--accent-color)' }}>{email}</a>
              {phone && <> adresine veya {phone} numaralı telefondan</>} bize ileterek başlatabilirsiniz. Talebiniz
              en geç 30 gün içinde değerlendirilip tarafınıza dönüş yapılır.
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
