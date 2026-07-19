import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function NotFound() {
  useDocumentMeta(
    'Sayfa Bulunamadı | Menekşe Vize',
    'Aradığınız sayfa taşınmış veya kaldırılmış olabilir.',
  );

  return (
    <section className="section" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="kicker">404</span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '1rem' }}>Aradığınız Sayfayı Bulamadık</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 2rem' }}>
          Bu sayfa taşınmış, adı değişmiş veya hiç var olmamış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-gold">Ana Sayfaya Dön</Link>
          <Link to="/hizmetler" className="btn btn-secondary">Ülkeleri İncele</Link>
          <Link to="/iletisim" className="btn btn-secondary">Bize Ulaşın</Link>
        </div>
      </div>
    </section>
  );
}
