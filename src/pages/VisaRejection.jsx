import { useEffect, useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { getCategoryLabel } from '../data/blogCategories.js';
import {
  ChecklistIcon, RefreshIcon, SearchIcon, ShieldIcon,
} from '../components/icons.jsx';

export default function VisaRejection() {
  const [posts, setPosts] = useState([]);
  const { t, locale } = useLocale();

  const REJECTION_REASONS = [
    { icon: ChecklistIcon, title: t('visaRejection.reason1Title'), text: t('visaRejection.reason1Text') },
    { icon: SearchIcon, title: t('visaRejection.reason2Title'), text: t('visaRejection.reason2Text') },
    { icon: ShieldIcon, title: t('visaRejection.reason3Title'), text: t('visaRejection.reason3Text') },
    { icon: RefreshIcon, title: t('visaRejection.reason4Title'), text: t('visaRejection.reason4Text') },
  ];

  const APPROACH_STEPS = [
    { title: t('visaRejection.step1Title'), text: t('visaRejection.step1Text') },
    { title: t('visaRejection.step2Title'), text: t('visaRejection.step2Text') },
    { title: t('visaRejection.step3Title'), text: t('visaRejection.step3Text') },
  ];

  useDocumentMeta(
    t('visaRejection.metaTitle'),
    t('visaRejection.metaDescription'),
    { path: '/vize-reddi' },
  );

  useEffect(() => {
    fetch(`/api/blog?lang=${locale}`)
      .then((res) => res.json())
      .then((all) => setPosts(all.filter((p) => p.category === 'vize-reddi').slice(0, 3)))
      .catch(() => {});
  }, [locale]);

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('visaRejection.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">{t('visaRejection.pageKicker')}</span>
        <h1>{t('visaRejection.pageTitle')}</h1>
        <p>{t('visaRejection.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('visaRejection.reasonsKicker')}</span>
            <h2>{t('visaRejection.reasonsTitle')}</h2>
            <p>{t('visaRejection.reasonsSubtitle')}</p>
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
            <span className="kicker">{t('visaRejection.approachKicker')}</span>
            <h2>{t('visaRejection.approachTitle')}</h2>
            <p>{t('visaRejection.approachSubtitle')}</p>
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
            {t('visaRejection.approachDisclaimer')}
          </p>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">{t('visaRejection.guidesKicker')}</span>
              <h2>{t('visaRejection.guidesTitle')}</h2>
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
          <span className="kicker">{t('visaRejection.finalKicker')}</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '1rem' }}>{t('visaRejection.finalTitle')}</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 2rem' }}>
            {t('visaRejection.finalText')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/on-degerlendirme" className="btn btn-gold">{t('visaRejection.ctaPreAssessment')}</Link>
            <Link to="/iletisim" className="btn btn-secondary">{t('visaRejection.ctaContact')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
