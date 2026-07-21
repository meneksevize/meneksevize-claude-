import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { regionLabels } from '../data/countries.js';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import CountUp from '../components/CountUp.jsx';
import { getCategoryLabel } from '../data/blogCategories.js';
import {
  ClockIcon, ChecklistIcon, RefreshIcon, ShieldIcon, StarIcon,
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

const REGION_ORDER = ['avrupa', 'amerika', 'orta-dogu', 'diger'];

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
  const countriesByRegion = REGION_ORDER
    .map((region) => ({ region, label: regionLabels[region], items: countries.filter((c) => c.region === region) }))
    .filter((group) => group.items.length > 0);
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
      <section className="hero hero-aurora has-photo" style={{ '--hero-photo': `url(${photos.heroPlaneWindow})` }}>
        <div className="hero-aurora-bg" aria-hidden="true">
          <span className="aurora aurora-1"></span>
          <span className="aurora aurora-2"></span>
          <span className="aurora aurora-3"></span>
          <div className="hero-grid-overlay"></div>
        </div>
        <div className="hero-content hero-aurora-content">
          <span className="hero-badge">
            <StarIcon style={{ color: 'var(--gold)' }} />
            {averageRating ? `${averageRating}/5 değerlendirme · ` : ''}{countries.length} ülke için vize danışmanlığı
          </span>
          <h1>Vize Sürecinizi <span className="highlight">Şeffaf</span> ve Öngörülebilir Hale Getiriyoruz</h1>
          <p>Schengen, ABD, İngiltere, Kanada ve daha birçok ülke için başvurunuzu adım adım, kişiye özel evrak rehberliğiyle yönetiyoruz. Her aşamada nerede olduğunuzu bilirsiniz.</p>
          <div className="hero-buttons">
            <Link to="/on-degerlendirme" className="btn btn-gold">Ücretsiz Ön Değerlendirme</Link>
            <Link to="/hizmetler" className="btn btn-secondary">Hizmetlerimizi İnceleyin</Link>
          </div>
        </div>

        {/* Hizmet verilen ülkelerin bayraklarından oluşan, yavaşça kayan şerit */}
        <div className="hero-flag-marquee" aria-hidden="true">
          <div className="hero-flag-track">
            {[...countries, ...countries].map((country, i) => (
              <span className="hero-flag-item" key={`${country.id}-${i}`}>
                <CountryFlag country={country} className="hero-flag-icon" />
                <span>{country.title}</span>
              </span>
            ))}
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
            <div className="photo-feature-media photo-feature-media-glow">
              <div className="photo-feature-duotone" aria-hidden="true"></div>
              <img src={photos.passportBoardingPass} alt="Pasaport ve uçuş bileti" loading="lazy" className="photo-feature-img" />
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

      <section className="section section-alt country-shelves-section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Ülkeler</span>
            <h2>47 Ülke, Tek Bir Yerden</h2>
            <p>Bölgesine göre kayan listeden ülkenizi bulun, dokunun, evrak listenizi görün.</p>
          </div>
        </div>
        {countriesByRegion.map((group) => (
          <div className="country-shelf" key={group.region}>
            <div className="container country-shelf-head">
              <h3>{group.label}</h3>
              <span className="country-shelf-count">{group.items.length} ülke</span>
            </div>
            <div className="country-shelf-row">
              <div className="country-shelf-track">
                {group.items.map((country) => (
                  <Link to={`/ulkeler/${country.id}`} className="country-shelf-card" key={country.id}>
                    <CountryFlag country={country} className="country-shelf-flag" />
                    <span>{country.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <p className="form-note" style={{ textAlign: 'center', marginTop: '2rem' }}>
          Listede aradığınız ülkeyi bulamadıysanız <Link to="/iletisim" style={{ color: 'var(--accent-color)' }}>bize ulaşın</Link>, birlikte değerlendirelim.
        </p>
      </section>

      {testimonials.length > 0 && (
        <section className="section testimonial-wall-section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Referanslar</span>
              <h2>Müşterilerimiz Ne Diyor</h2>
              <p>Süreci birlikte yürüttüğümüz müşterilerimizin deneyimleri.</p>
            </div>
          </div>
          <div className="testimonial-marquee">
            <div className="testimonial-track">
              {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <div className="testimonial-wall-card" key={`${t.id}-${i}`}>
                  <span className="testimonial-quote-mark">&ldquo;</span>
                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        style={{ color: starIndex < t.rating ? 'var(--gold)' : 'var(--border-color)' }}
                      />
                    ))}
                  </div>
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{t.name}</span>
                    {t.location && <span className="testimonial-location">{t.location}</span>}
                  </div>
                </div>
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
          <Reveal as="div" className="process-rail">
            <div className="process-rail-line">
              <div className="process-rail-fill"></div>
            </div>
            <div className="process-rail-steps">
              {processSteps.map((step, i) => (
                <div className="process-rail-step" style={{ '--i': i }} key={step.title}>
                  <span className="process-rail-dot">{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
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

      <section className="section final-cta-aurora">
        <div className="final-cta-aurora-bg" aria-hidden="true">
          <span className="aurora aurora-cta-1"></span>
          <span className="aurora aurora-cta-2"></span>
        </div>
        <div className="container final-cta-content" style={{ textAlign: 'center' }}>
          <span className="kicker">Hazır mısınız?</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>Vize Sürecinizi Bugün Başlatın</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 2rem' }}>Ücretsiz ön görüşme ile size en uygun vize tipini ve süreç planını birlikte belirleyelim.</p>
          <Link to="/iletisim" className="btn btn-gold btn-pulse">Hemen İletişime Geçin</Link>
        </div>
      </section>
    </>
  );
}
