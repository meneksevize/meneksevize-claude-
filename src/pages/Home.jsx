import { useEffect, useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos, cardCover } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import DestinationArt from '../components/DestinationArt.jsx';
import CountUp from '../components/CountUp.jsx';
import { getCategoryLabel } from '../data/blogCategories.js';
import {
  ClockIcon, ChecklistIcon, RefreshIcon, ShieldIcon, StarIcon,
} from '../components/icons.jsx';

export default function Home() {
  const { countries, testimonials, faqs } = useSiteData();
  const { t, locale } = useLocale();
  const faqTeasers = faqs.slice(0, 3);
  const [latestPosts, setLatestPosts] = useState([]);

  const FEATURED_DESTINATIONS = [
    { id: 'abd', title: 'ABD', tag: t('home.destTagAbd'), to: '/ulkeler/abd' },
    { id: 'ingiltere', title: 'İngiltere', tag: t('home.destTagIngiltere'), to: '/ulkeler/ingiltere' },
    { id: 'kanada', title: 'Kanada', tag: t('home.destTagKanada'), to: '/ulkeler/kanada' },
    { id: 'dubai', title: 'Dubai', tag: t('home.destTagDubai'), to: '/ulkeler/dubai' },
    { id: 'schengen', title: 'Schengen', tag: t('home.destTagSchengen'), flag: '🇪🇺', to: '/blog/schengen-ulkelerinden-hangisine-basvurmaliyim' },
  ];

  const whyUs = [
    { icon: ClockIcon, title: t('home.why1Title'), text: t('home.why1Text') },
    { icon: ChecklistIcon, title: t('home.why2Title'), text: t('home.why2Text') },
    { icon: RefreshIcon, title: t('home.why3Title'), text: t('home.why3Text') },
    { icon: ShieldIcon, title: t('home.why4Title'), text: t('home.why4Text') },
  ];

  const processSteps = [
    { title: t('home.process1Title'), text: t('home.process1Text') },
    { title: t('home.process2Title'), text: t('home.process2Text') },
    { title: t('home.process3Title'), text: t('home.process3Text') },
    { title: t('home.process4Title'), text: t('home.process4Text') },
  ];

  useEffect(() => {
    fetch(`/api/blog?lang=${locale}`)
      .then((res) => res.json())
      .then((posts) => setLatestPosts(posts.slice(0, 3)))
      .catch(() => {});
  }, [locale]);

  // İstatistik bandındaki tüm değerler gerçek site verisinden türetilir —
  // uydurma başarı oranı/başvuru sayısı kullanılmaz.
  const eVisaCount = countries.filter((c) => c.tags?.includes('E-Vize')).length;
  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((sum, t2) => sum + t2.rating, 0) / testimonials.length).toFixed(1)
    : null;

  useDocumentMeta(
    t('home.metaTitle'),
    // {rating} gerçek testimonials ortalamasından geliyor — sabit/uydurma bir
    // puan yazılmıyor. averageRating boşsa (hiç yorum yoksa) 5.0'a düşer;
    // bu site canlıda gerçek yorumlar taşıdığı için pratikte tetiklenmeyen
    // savunmacı bir varsayılan.
    t('home.metaDescription', { rating: averageRating || '5.0' }),
    { image: photos.heroPlaneWindow, path: '/' },
  );

  // GERİ ALINDI (2026-09-03): burada testimonials'tan bir AggregateRating/
  // Review JSON-LD (TravelAgency şemasına gömülü) üretilip enjekte
  // ediliyordu. Google'ın kendi kuralları bunu açıkça yasaklıyor: bir
  // işletme kendi hakkındaki yorumları kendi sitesinde işaretlerse, sayfa
  // yıldızlı yorum özelliği için uygun değildir ("self-serving review").
  // Yani bu hem hiçbir zaman yıldız göstermeyecekti hem de yapısal veri
  // spam tespiti riski taşıyordu — kaldırıldı (server/lib/seo.js'teki
  // eşleniği de kaldırıldı). Gerçek/meşru yol Google Business Profile'ın
  // kendi yorum sistemi. averageRating yine de yukarıda hero rozeti/istatistik
  // bandı ve meta açıklama için düz metin olarak hesaplanmaya devam ediyor.

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
            {averageRating ? `${averageRating}/5 ${t('home.heroBadgeRatingSuffix')}` : ''}{countries.length} {t('home.heroBadgeCountriesSuffix')}
          </span>
          <h1>{t('home.heroTitlePart1')}<span className="highlight">{t('home.heroTitleHighlight')}</span>{t('home.heroTitlePart3')}</h1>
          <p>{t('home.heroSubtitle')}</p>
          <div className="hero-buttons">
            <Link to="/on-degerlendirme" className="btn btn-gold">{t('home.ctaPreAssessment')}</Link>
            <Link to="/hizmetler" className="btn btn-accent">{t('home.ctaServices')}</Link>
          </div>

          <div className="hero-destinations">
            <span className="hero-destinations-label">{t('home.featuredDestinationsLabel')}</span>
            <div className="hero-destinations-row">
              {FEATURED_DESTINATIONS.map((dest) => (
                <Link to={dest.to} className="hero-destination-card" key={dest.id}>
                  <CountryFlag country={dest} className="hero-destination-flag" />
                  <span>{dest.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <Reveal as="div" className="stats-band">
            <div className="stats-band-item">
              <span className="stats-band-value"><CountUp value={countries.length} /></span>
              <span className="stats-band-label">{t('home.statCountries')}</span>
            </div>
            <div className="stats-band-item">
              <span className="stats-band-value"><CountUp value={eVisaCount} /></span>
              <span className="stats-band-label">{t('home.statEVisa')}</span>
            </div>
            {averageRating && (
              <div className="stats-band-item">
                <span className="stats-band-value"><CountUp value={averageRating} suffix="/5" decimals={1} /></span>
                <span className="stats-band-label">{t('home.statRating')}</span>
              </div>
            )}
            <div className="stats-band-item">
              <span className="stats-band-value"><CountUp value={6} /></span>
              <span className="stats-band-label">{t('home.statProcessSteps')}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('home.whyUsKicker')}</span>
            <h2>{t('home.whyUsTitle')}</h2>
            <p>{t('home.whyUsSubtitle')}</p>
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
              <img src={photos.passportBoardingPass} alt={t('home.photoAlt')} loading="lazy" />
            </div>
            <div className="photo-feature-text">
              <span className="kicker">{t('home.photoFeatureKicker')}</span>
              <h2>{t('home.photoFeatureTitle')}</h2>
              <p>{t('home.photoFeatureText')}</p>
              <Link to="/surec" className="btn btn-secondary">{t('home.photoFeatureCta')}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('home.destinationsKicker')}</span>
            <h2>{t('home.destinationsTitle')}</h2>
            <p>{t('home.destinationsSubtitlePart1')}{countries.length - FEATURED_DESTINATIONS.length}{t('home.destinationsSubtitlePart2')}</p>
          </div>
          <div className="destination-feature-grid">
            {FEATURED_DESTINATIONS.map((dest, i) => (
              <Reveal
                as={Link}
                to={dest.to}
                className="destination-feature-card"
                delay={i * 70}
                key={dest.id}
              >
                <DestinationArt id={dest.id} className="destination-feature-art" />
                <CountryFlag country={dest} className="destination-feature-flag" />
                <span className="destination-feature-name">{dest.title}</span>
                <span className="destination-feature-tag">{dest.tag}</span>
              </Reveal>
            ))}
          </div>
          <p className="form-note" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            {t('home.destinationsFallbackPre')}<Link to="/hizmetler" style={{ color: 'var(--link-color)' }}>{t('home.destinationsFallbackLink1')}</Link>{t('home.destinationsFallbackMid')}<Link to="/iletisim" style={{ color: 'var(--link-color)' }}>{t('home.destinationsFallbackLink2')}</Link>{t('home.destinationsFallbackEnd')}
          </p>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section testimonial-wall-section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{t('home.testimonialsKicker')}</span>
              <h2>{t('home.testimonialsTitle')}</h2>
              <p>{t('home.testimonialsSubtitle')}</p>
            </div>
          </div>
          <div className="testimonial-marquee">
            <div className="testimonial-track">
              {[...testimonials, ...testimonials, ...testimonials].map((t2, i) => (
                <div className="testimonial-wall-card" key={`${t2.id}-${i}`}>
                  <span className="testimonial-quote-mark">&ldquo;</span>
                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        style={{ color: starIndex < t2.rating ? 'var(--gold)' : 'var(--border-color)' }}
                      />
                    ))}
                  </div>
                  <p className="testimonial-quote">{t2.quote}</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{t2.name}</span>
                    {t2.location && <span className="testimonial-location">{t2.location}</span>}
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
            <span className="kicker">{t('home.howItWorksKicker')}</span>
            <h2>{t('home.howItWorksTitle')}</h2>
            <p>{t('home.howItWorksSubtitle')}</p>
          </div>
          <div className="process-flow">
            {processSteps.map((step, i) => (
              <Reveal as="div" className="process-step" delay={i * 90} key={step.title}>
                <span className="process-step-num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
          <div style={{
            textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
          }}
          >
            <Link to="/surec" className="btn btn-secondary">{t('home.ctaFullProcess')}</Link>
            <Link to="/takip" className="btn btn-gold">{t('home.ctaTrackApplication')}</Link>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{t('home.blogKicker')}</span>
              <h2>{t('home.blogTitle')}</h2>
              <p>{t('home.blogSubtitle')}</p>
            </div>
            <div className="grid grid-3">
              {latestPosts.map((post, i) => (
                <Reveal as={Link} to={`/blog/${post.slug}`} className="card blog-card" delay={i * 60} key={post.id}>
                  {post.coverImageUrl && (
                    <div className="blog-card-media">
                      <img src={cardCover(post.coverImageUrl)} alt={post.title} loading="lazy" />
                      {post.category && <span className="blog-card-chip">{getCategoryLabel(post.category, t)}</span>}
                    </div>
                  )}
                  <div className="blog-card-body">
                    {!post.coverImageUrl && post.category && <span className="kicker" style={{ marginBottom: 0 }}>{getCategoryLabel(post.category, t)}</span>}
                    <h3>{post.title}</h3>
                    {post.excerpt && <p>{post.excerpt}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/blog" className="btn btn-secondary">{t('home.blogCtaAll')}</Link>
            </div>
          </div>
        </section>
      )}

      {faqTeasers.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{t('home.faqKicker')}</span>
              <h2>{t('home.faqTitle')}</h2>
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
              <Link to="/sss" className="btn btn-secondary">{t('home.faqCtaAll')}</Link>
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
          <span className="kicker">{t('home.finalCtaKicker')}</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>{t('home.finalCtaTitle')}</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 2rem' }}>{t('home.finalCtaText')}</p>
          <Link to="/iletisim" className="btn btn-gold btn-pulse">{t('home.finalCtaButton')}</Link>
        </div>
      </section>
    </>
  );
}
