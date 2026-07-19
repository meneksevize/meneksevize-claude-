import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { getCategoryLabel } from '../data/blogCategories.js';
import {
  ChecklistIcon, RefreshIcon, SearchIcon, ShieldIcon,
} from '../components/icons.jsx';

const REJECTION_REASONS = [
  {
    icon: ChecklistIcon,
    title: 'Eksik veya Tutarsız Evrak',
    text: 'En sık ret nedeni; belgeler arasındaki tarih, gelir veya beyan tutarsızlıklarıdır. Küçük bir çelişki bile başvuruyu zayıflatır.',
  },
  {
    icon: SearchIcon,
    title: 'Seyahat Amacının İkna Edici Olmaması',
    text: 'Konsolosluk, seyahat planınızın beyan ettiğiniz amaçla örtüştüğünü görmek ister. Belirsiz plan, ret riskini artırır.',
  },
  {
    icon: ShieldIcon,
    title: 'Ülkeye Bağlılığın Yeterince Gösterilememesi',
    text: 'İş, aile, mülk ve düzenli gelir gibi geri dönüş sinyalleri zayıf sunulduğunda başvuru olumsuz değerlendirilebilir.',
  },
  {
    icon: RefreshIcon,
    title: 'Geçmiş Vize İhlalleri veya Hatalı Beyan',
    text: 'Önceki seyahatlerdeki süre aşımı veya formdaki hatalı bilgiler, sonraki başvuruları da etkiler. Doğru strateji ile yönetilebilir.',
  },
];

const APPROACH_STEPS = [
  {
    title: 'Ret Mektubu Analizi',
    text: 'Ret gerekçe kodunu ve başvuru dosyanızı birlikte inceleyip gerçek nedeni netleştiriyoruz — tahmin üzerine ilerlemiyoruz.',
  },
  {
    title: 'İtiraz mı, Yeniden Başvuru mu?',
    text: 'Ülkeye, gerekçeye ve zamanlamanıza göre en mantıklı yolu öneriyoruz. Her durumda itiraz doğru seçenek değildir.',
  },
  {
    title: 'Dosyanın Güçlendirilmesi',
    text: 'Zayıf noktaları kapatan ek belgelerle yeni bir başvuru stratejisi kuruyor, evrak listenizi buna göre yeniden hazırlıyoruz.',
  },
];

export default function VisaRejection() {
  const [posts, setPosts] = useState([]);

  useDocumentMeta(
    'Vize Reddi Aldınız mı? Ret Analizi ve Yeniden Başvuru | Menekşe Vize',
    'Vize reddi sonrası ne yapmalı? Ret gerekçenizi analiz ediyor, itiraz veya yeniden başvuru için dosyanızı güçlendirerek en doğru stratejiyi birlikte kuruyoruz.',
    { path: '/vize-reddi' },
  );

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((all) => setPosts(all.filter((p) => p.category === 'vize-reddi').slice(0, 3)))
      .catch(() => {});
  }, []);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'Vize Reddi' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">Vize Reddi</span>
        <h1>Vize Reddi Son Nokta Değildir</h1>
        <p>Ret mektubunuzu birlikte analiz edelim; itiraz mı yoksa güçlendirilmiş bir yeniden başvuru mu — durumunuza en uygun yolu netleştirelim.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">Neden Reddedilir?</span>
            <h2>En Sık Karşılaşılan Ret Nedenleri</h2>
            <p>Retlerin büyük bölümü, doğru hazırlıkla önlenebilecek nedenlerden kaynaklanır.</p>
          </div>
          <div className="grid grid-4">
            {REJECTION_REASONS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={title}>
                <div className="card-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Yaklaşımımız</span>
            <h2>Ret Sonrası 3 Adımda Yol Haritası</h2>
            <p>Aceleyle yapılan ikinci bir başvuru, yeni bir ret riskini artırır. Önce analiz, sonra strateji.</p>
          </div>
          <div className="grid grid-3">
            {APPROACH_STEPS.map((step, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={step.title}>
                <div className="card-icon">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="form-note" style={{ textAlign: 'center', maxWidth: 620, margin: '2rem auto 0' }}>
            Nihai vize kararı ilgili konsolosluğa aittir; hiçbir danışmanlık firması onay garantisi veremez. Biz, başvurunuzun en güçlü haliyle sunulmasını sağlarız.
          </p>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Rehberler</span>
              <h2>Vize Reddi Üzerine Yazılarımız</h2>
            </div>
            <div className="grid grid-3">
              {posts.map((post, i) => (
                <Reveal as={Link} to={`/blog/${post.slug}`} className="card blog-card" delay={i * 60} key={post.id}>
                  <span className="kicker" style={{ display: 'block', marginBottom: '0.5rem' }}>{getCategoryLabel(post.category)}</span>
                  <h3>{post.title}</h3>
                  {post.excerpt && <p>{post.excerpt}</p>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="kicker">İlk Adım</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '1rem' }}>Ret Mektubunuzu Birlikte Değerlendirelim</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 2rem' }}>
            Ücretsiz ön değerlendirme formunda &ldquo;daha önce red aldım&rdquo; seçeneğini işaretleyin; sizi arayıp durumunuzu birlikte inceleyelim.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/on-degerlendirme" className="btn btn-gold">Ücretsiz Ön Değerlendirme</Link>
            <Link to="/iletisim" className="btn btn-secondary">Hemen İletişime Geçin</Link>
          </div>
        </div>
      </section>
    </>
  );
}
