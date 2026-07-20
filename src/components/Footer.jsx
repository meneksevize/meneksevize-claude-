import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { InstagramIcon } from './icons.jsx';

export default function Footer() {
  const { settings } = useSiteData();
  const phone = settings.phone || '';
  const phoneHref = `tel:+${(settings.whatsapp || phone).replace(/\D/g, '')}`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">Menekşe<span>Vize</span></Link>
            <p>{settings.footer_note || 'Schengen ve dünya genelinde vize başvurularınızda şeffaf süreç takibi ve kişiye özel evrak rehberliği sunan danışmanlık hizmeti.'}</p>
          </div>
          <div className="footer-col">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/hizmetler">Hizmetler</Link></li>
              <li><Link to="/e-vize">E-Vize Ülkeleri</Link></li>
              <li><Link to="/surec">Süreç</Link></li>
              <li><Link to="/vize-reddi">Vize Reddi</Link></li>
              <li><Link to="/on-degerlendirme">Ücretsiz Ön Değerlendirme</Link></li>
              <li><Link to="/evrak-rehberi">Evrak Rehberi</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/sss">SSS</Link></li>
              <li><Link to="/takip">Başvurumu Takip Et</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <ul>
              {phone && <li><a href={phoneHref}>{phone}</a></li>}
              {settings.email && <li><a href={`mailto:${settings.email}`}>{settings.email}</a></li>}
              <li><Link to="/iletisim">İletişim Formu</Link></li>
              <li>
                <a
                  href="https://www.instagram.com/meneksevize"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <InstagramIcon width={16} height={16} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-disclaimer">
          Menekşe Vize özel bir vize danışmanlık firmasıdır. Resmi konsolosluk, büyükelçilik veya başvuru merkezi değildir. Sunulan hizmetler isteğe bağlı danışmanlık kapsamındadır.
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Menekşe Vize. Tüm hakları saklıdır.</span>
          <Link to="/gizlilik-politikasi">Gizlilik Politikası (KVKK)</Link>
          <Link to="/kullanim-kosullari">Kullanım Koşulları</Link>
          <Link to="/iptal-iade-politikasi">İptal ve İade Politikası</Link>
          <span>Nihai vize kararı ilgili konsolosluğa aittir.</span>
        </div>
      </div>
    </footer>
  );
}
