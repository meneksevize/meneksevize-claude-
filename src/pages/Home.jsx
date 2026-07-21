import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import CountUp from '../components/CountUp.jsx';
import { getCategoryLabel } from '../data/blogCategories.js';
import { STAGES } from '../data/stages.js';

// Hero'daki takip kartı mockup'ında gösterilen örnek süreç durumu:
// ilk iki aşama tamamlanmış, üçüncüsü devam ediyor.
const MOCK_ACTIVE_STAGE = 2;
import {
  ClockIcon, ChecklistIcon, RefreshIcon, ShieldIcon, StarIcon, CheckIcon,
} from '../components/icons.jsx';

const whyUs = [
  {
    icon: ClockIcon,
    title: 'Şeffaf Süreç Takibi',
    text: 'Başvurunuzun hangi aşamada olduğunu her zaman bilirsiniz — sürpriz ya da belirsizlik yok.',
  },
  {
    icon: ChecklistIcon,
    title: 'Kişiye Özel Evrak Rehberi',
    text: "Ülke ve vize tipinize göre özelleştirilmiş, adım adım evrak checklist'i hazırlıyoruz.",
  },
  {
    icon: RefreshIcon,
    title: 'Net İletişim',
    text: 'Sorularınıza hızlı dönüş — telefon ve e-posta üzerinden doğrudan bize ulaşabilirsiniz.',
  },
  {
    icon: ShieldIcon,
    title: 'Dürüst Danışmanlık',
    text: 'Nihai vize kararı ilgili konsolosluğa aittir; biz başvurunuzu en güçlü şekilde hazırlamanıza yardımcı oluruz.',
  },
];

const processSteps = [
  { title: 'Ön Görüşme', text: 'Ücretsiz görüşmede ihtiyacınızı ve uygun vize tipini belirliyoruz.' },
  { title: 'Evrak Toplama', text: 'Size özel checklist ile gerekli belgeleri adım adım hazırlıyoruz.' },
  { title: 'Randevu & Başvuru', text: 'Randevunuzu planlıyor, başvurunuzu eksiksiz şekilde teslim ediyoruz.' },
  { title: 'Takip & Sonuç', text: 'Başvuru durumunuzu düzenli olarak sizinle paylaşıyoruz.' },
];

export default function Home() {
  const { countries, testimonials, faqs } = useSiteData();
  const faqTeasers = faqs.slice(0, 3);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((posts) => setLatestPosts(posts.slice(0, 3)))
      .catch(() => {});
  }, []);

  // İstatistik bandındaki tüm değerler gerçek site verisinden türetilir —
  // uydurma başarı oranı/başvuru sayısı kullanılmaz.
  const eVisaCount = countries.filter((c) => c.tags?.includes('E-Vize')).length;
  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : null;

  useDocumentMeta(
    'Menekşe Vize | Şeffaf ve Kişiye Özel Vize Danışmanlığı',
    'Menekşe Vize; Schengen, ABD, İngiltere, Kanada ve daha fazlası için şeffaf süreç takibi ve kişiye özel evrak rehberliğiyle vize danışmanlığı sunar.',
    { image: photos.heroPlaneWindow, path: '/' },
  );

  // Bu sayfada aşağıda görünen gerçek müşteri yorumlarının ortalama puanını
  // yansıtır — sayı/puan uydurulmaz, doğrudan testimonials tablosundan hesaplanır.
  useEffect(() => {
    if (testimonials.length === 0) return undefined;

    const average = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Menekşe Vize',
      url: 'https://meneksevize.com/',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: average.toFixed(1),
        reviewCount: testimonials.length,
      },
      review: testimonials.map((t) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewRating: { '@type': 'Rating', ratingValue: t.rating },
        reviewBody: t.quote,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'aggregate-rating-jsonld';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('aggregate-rating-jsonld')?.remove();
    };
  }, [testimonials]);

  return (
    <>
      <section className="hero hero-split has-photo" style={{ '--hero-photo': `url(${photos.heroPlaneWindow})` }}>
        <div className="hero-glow-rose"></div>
        <div className="hero-split-inner">
          <div className="hero-content">
            <span className="kicker">Menekşe Vize</span>
            <h1>Vize Sürecinizi <span className="highlight">Şeffaf</span> ve Öngörülebilir Hale Getiriyoruz</h1>
            <p>Schengen, ABD, İngiltere, Kanada ve daha birçok ülke için başvurunuzu adım adım, kişiye özel evrak rehberliğiyle yönetiyoruz. Her aşamada nerede olduğunuzu bilirsiniz.</p>
            <div className="hero-buttons">
              <Link to="/on-degerlendirme" className="btn btn-gold">Ücretsiz Ön Değerlendirme</Link>
              <Link to="/hizmetler" className="btn btn-secondary">Hizmetlerimizi İnceleyin</Link>
            </div>
            {averageRating && (
              <p className="hero-trust-row">
                <StarIcon style={{ color: 'var(--gold)' }} /> {averageRating}/5 müşteri değerlendirmesi
                <span className="hero-trust-sep">·</span> {countries.length} ülke için rehberlik
              </p>
            )}
          </div>

          {/* Başvuru Takip portalının (/takip) hero'daki temsili — örnek veridir */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-mock-card">
              <div className="hero-mock-head">
                <span className="hero-mock-title">Başvuru Takibi</span>
                <span className="hero-mock-code">MV-4K7A2C</span>
              </div>
              <div className="hero-mock-country">
                <CountryFlag country={countries.find((c) => c.id === 'almanya')} className="hero-mock-flag" />
                <div>
                  <strong>Almanya</strong>
                  <span>Turistik Vize Başvurusu</span>
                </div>
              </div>
              <ul className="hero-mock-stages">
                {STAGES.map((stage, i) => {
                  let state = 'upcoming';
                  if (i < MOCK_ACTIVE_STAGE) state = 'done';
                  else if (i === MOCK_ACTIVE_STAGE) state = 'active';
                  return (
                    <li className={`hero-mock-stage ${state}`} key={stage.key}>
                      <span className="hero-mock-dot">{state === 'done' ? <CheckIcon /> : null}</span>
                      {stage.label}
                    </li>
                  );
                })}
              </ul>
              <div className="hero-mock-note">Evrak listeniz güncellendi — randevu planlaması başladı</div>
            </div>
            <div className="hero-mock-chip">
              <span className="hero-mock-chip-check"><CheckIcon /></span>
              Kişiye özel evrak listesi hazır
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <Reveal as="div" className="stats-band">
            <div className="stats-band-item">
              <span className="stats-band-value"><CountUp value={countries.length} /></span>
              <span className="stats-band-label">Ülke İçin Vize Rehberliği</span>
            </div>
            <div className="stats-band-item">
              <span className="stats-band-value"><CountUp value={eVisaCount} /></span>
              <span className="stats-band-label">Ülkeye E-Vize Desteği</span>
            </div>
            {averageRating && (
              <div className="stats-band-item">
                <span className="stats-band-value"><CountUp value={averageRating} suffix="/5" decimals={1} /></span>
                <span className="stats-band-label">Müşteri Değerlendirmesi</span>
              </div>
            )}
            <div className="stats-band-item">
              <span className="stats-band-value"><CountUp value={6} /></span>
              <span className="stats-band-label">Aşamalı Şeffaf Süreç Takibi</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Neden Menekşe Vize</span>
            <h2>Danışmanlıkta Netlik Esastır</h2>
            <p>Abartılı vaatler yerine somut ve takip edilebilir bir süreç sunuyoruz.</p>
          </div>
          <div className="grid grid-4">
            {whyUs.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={title}>
                <div className="card-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="photo-feature">
            <div className="photo-feature-media">
              <img src={photos.passportBoardingPass} alt="Pasaport ve uçuş bileti" loading="lazy" />
            </div>
            <div className="photo-feature-text">
              <span className="kicker">Evraktan Uçuşa</span>
              <h2>Pasaportunuz Elinize Geçtiği Anda İşimiz Bitmiş Olur</h2>
              <p>Ön görüşmeden randevuya, evrak toplamadan sonuç takibine kadar her adımda yanınızdayız. Siz sadece valizinizi hazırlamaya odaklanın.</p>
              <Link to="/surec" className="btn btn-secondary">Süreci İnceleyin</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Ülkeler</span>
            <h2>Ülke Seçin, Evrak Listenizi Görün</h2>
            <p>Bir ülkenin bayrağına tıklayarak o ülkeye özel vize türlerini, gerekli evrakları ve süreç bilgisini inceleyebilirsiniz.</p>
          </div>
          <div className="country-tile-grid">
            {countries.map((country, i) => (
              <Reveal
                as={Link}
                to={`/ulkeler/${country.id}`}
                className="country-tile"
                delay={Math.min(i * 15, 300)}
                key={country.id}
              >
                <CountryFlag country={country} className="country-tile-flag" />
                <span className="country-tile-name">{country.title}</span>
              </Reveal>
            ))}
          </div>
          <p className="form-note" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            Listede aradığınız ülkeyi bulamadıysanız <Link to="/iletisim" style={{ color: 'var(--accent-color)' }}>bize ulaşın</Link>, birlikte değerlendirelim.
          </p>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Referanslar</span>
              <h2>Müşterilerimiz Ne Diyor</h2>
              <p>Süreci birlikte yürüttüğümüz müşterilerimizin deneyimleri.</p>
            </div>
            <div className="grid grid-3">
              {testimonials.map((t, i) => (
                <Reveal as="div" className="card testimonial-card" delay={i * 70} key={t.id}>
                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        style={{ color: starIndex < t.rating ? 'var(--gold)' : 'var(--border-color)' }}
                      />
                    ))}
                  </div>
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{t.name}</span>
                    {t.location && <span className="testimonial-location">{t.location}</span>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Nasıl Çalışır</span>
            <h2>4 Adımda Vize Sürecinizi Yönetiyoruz</h2>
            <p>Tam interaktif zaman çizelgesini süreç sayfasında inceleyebilirsiniz.</p>
          </div>
          <div className="grid grid-4">
            {processSteps.map((step, i) => (
              <Reveal as="div" className="card" delay={i * 70} key={step.title}>
                <div className="card-icon">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
          <div style={{
            textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
          }}
          >
            <Link to="/surec" className="btn btn-secondary">Tüm Süreci İncele</Link>
            <Link to="/takip" className="btn btn-gold">Başvurunuzu Takip Edin</Link>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Güncel</span>
              <h2>Blog&apos;dan Son Yazılar</h2>
              <p>Vize süreçleri, evrak ipuçları ve güncel gelişmeler üzerine rehberlerimiz.</p>
            </div>
            <div className="grid grid-3">
              {latestPosts.map((post, i) => (
                <Reveal as={Link} to={`/blog/${post.slug}`} className="card blog-card" delay={i * 60} key={post.id}>
                  {post.category && <span className="kicker" style={{ display: 'block', marginBottom: '0.5rem' }}>{getCategoryLabel(post.category)}</span>}
                  <h3>{post.title}</h3>
                  {post.excerpt && <p>{post.excerpt}</p>}
                </Reveal>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/blog" className="btn btn-secondary">Tüm Yazıları Okuyun</Link>
            </div>
          </div>
        </section>
      )}

      {faqTeasers.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Merak Edilenler</span>
              <h2>Sıkça Sorulan Sorular</h2>
            </div>
            <div className="faq-group">
              {faqTeasers.map((item) => (
                <details className="faq-item" key={item.id}>
                  <summary>{item.question}</summary>
                  {/* eslint-disable-next-line react/no-danger */}
                  <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
                </details>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link to="/sss" className="btn btn-secondary">Tüm Soruları Gör</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="kicker">Hazır mısınız?</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '1rem' }}>Vize Sürecinizi Bugün Başlatın</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 2rem' }}>Ücretsiz ön görüşme ile size en uygun vize tipini ve süreç planını birlikte belirleyelim.</p>
          <Link to="/iletisim" className="btn btn-gold">Hemen İletişime Geçin</Link>
        </div>
      </section>
    </>
  );
}
