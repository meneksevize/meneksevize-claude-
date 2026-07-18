import { Link, useParams, useSearchParams } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { photos } from '../data/photos.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const MESSAGES = {
  basarili: {
    title: 'Ödemeniz Alındı',
    body: 'Ödemeniz başarıyla tamamlanmıştır. İlginiz için teşekkür ederiz, en kısa sürede sizinle iletişime geçeceğiz.',
    tone: 'var(--accent-color)',
  },
  basarisiz: {
    title: 'Ödeme Tamamlanamadı',
    body: 'Ödemeniz sırasında bir sorun oluştu. Kart bilgilerinizi kontrol edip tekrar deneyebilir veya bizimle iletişime geçebilirsiniz.',
    tone: 'var(--gold)',
  },
  hata: {
    title: 'Bir Hata Oluştu',
    body: 'Ödeme sonucu doğrulanamadı. Lütfen bizimle iletişime geçin, ödeme durumunuzu sizin için kontrol edelim.',
    tone: 'var(--gold)',
  },
};

export default function PaymentResult() {
  const { code } = useParams();
  const [searchParams] = useSearchParams();
  const durum = searchParams.get('durum');
  const info = MESSAGES[durum] || MESSAGES.hata;

  useDocumentMeta('Ödeme Sonucu | Menekşe Vize');

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'Ödeme', to: `/odeme/${code}` }, { label: 'Sonuç' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">Ödeme</span>
        <h1>{info.title}</h1>
      </section>
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: info.tone, marginBottom: '2rem' }}>{info.body}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {durum === 'basarisiz' && (
              <Link to={`/odeme/${code}`} className="btn btn-gold">Tekrar Dene</Link>
            )}
            <Link to="/iletisim" className="btn btn-secondary">İletişime Geç</Link>
          </div>
        </div>
      </section>
    </>
  );
}
