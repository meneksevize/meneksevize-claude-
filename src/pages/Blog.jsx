import { useEffect, useMemo, useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useLocale } from '../context/LocaleContext.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { photos } from '../data/photos.js';
import { BLOG_CATEGORIES, getCategoryLabel } from '../data/blogCategories.js';

const DATE_LOCALES = { tr: 'tr-TR', en: 'en-US', ar: 'ar' };

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const { t, locale } = useLocale();

  useDocumentMeta(
    t('blogPage.metaTitle'),
    t('blogPage.metaDescription'),
    { path: '/blog' },
  );

  useEffect(() => {
    setLoading(true);
    fetch(`/api/blog?lang=${locale}`)
      .then((res) => res.json())
      .then(setPosts)
      .finally(() => setLoading(false));
  }, [locale]);

  const filteredPosts = useMemo(
    () => (category === 'all' ? posts : posts.filter((p) => p.category === category)),
    [posts, category],
  );

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('blogPage.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">{t('blogPage.pageKicker')}</span>
        <h1>{t('blogPage.pageTitle')}</h1>
        <p>{t('blogPage.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          {!loading && posts.length > 0 && (
            <div className="filter-bar" style={{ marginBottom: '2rem' }}>
              <button
                type="button"
                className={`filter-btn ${category === 'all' ? 'active' : ''}`}
                onClick={() => setCategory('all')}
              >
                {t('blogPage.filterAll')}
              </button>
              {BLOG_CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  className={`filter-btn ${category === c.key ? 'active' : ''}`}
                  onClick={() => setCategory(c.key)}
                >
                  {t(c.i18nKey)}
                </button>
              ))}
            </div>
          )}

          {loading && <p className="checklist-placeholder">{t('blogPage.loading')}</p>}
          {!loading && filteredPosts.length === 0 && (
            <p className="checklist-placeholder">{t('blogPage.emptyCategory')}</p>
          )}

          <div className="grid grid-3">
            {filteredPosts.map((post, i) => (
              <Reveal as={Link} to={`/blog/${post.slug}`} className="card blog-card" delay={i * 60} key={post.id}>
                {post.coverImageUrl && (
                  <div className="blog-card-media">
                    <img src={post.coverImageUrl} alt={post.title} loading="lazy" />
                  </div>
                )}
                {post.category && <span className="kicker" style={{ display: 'block', marginBottom: '0.5rem' }}>{getCategoryLabel(post.category, t)}</span>}
                <h3>{post.title}</h3>
                {post.excerpt && <p>{post.excerpt}</p>}
                {post.publishedAt && (
                  <p className="blog-card-date">
                    {new Date(post.publishedAt).toLocaleDateString(DATE_LOCALES[locale], { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
