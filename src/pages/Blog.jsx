import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { photos } from '../data/photos.js';
import { BLOG_CATEGORIES, getCategoryLabel } from '../data/blogCategories.js';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');

  useDocumentMeta(
    'Blog | Menekşe Vize',
    'Vize başvuru süreçleri, evrak ipuçları ve ülkelere özel rehberler hakkında yazılarımız.',
    { path: '/blog' },
  );

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = useMemo(
    () => (category === 'all' ? posts : posts.filter((p) => p.category === category)),
    [posts, category],
  );

  return (
    <>
      <Breadcrumbs items={[{ label: 'Ana Sayfa', to: '/' }, { label: 'Blog' }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">Blog</span>
        <h1>Vize Süreçleri Üzerine Yazılarımız</h1>
        <p>Evrak ipuçları, ülkelere özel rehberler ve süreç deneyimlerini buradan takip edebilirsiniz.</p>
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
                Tümü
              </button>
              {BLOG_CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  className={`filter-btn ${category === c.key ? 'active' : ''}`}
                  onClick={() => setCategory(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}

          {loading && <p className="checklist-placeholder">Yükleniyor…</p>}
          {!loading && filteredPosts.length === 0 && (
            <p className="checklist-placeholder">Bu kategoride henüz yayınlanmış bir yazı yok.</p>
          )}

          <div className="grid grid-3">
            {filteredPosts.map((post, i) => (
              <Reveal as={Link} to={`/blog/${post.slug}`} className="card blog-card" delay={i * 60} key={post.id}>
                {post.coverImageUrl && (
                  <div className="blog-card-media">
                    <img src={post.coverImageUrl} alt={post.title} loading="lazy" />
                  </div>
                )}
                {post.category && <span className="kicker" style={{ display: 'block', marginBottom: '0.5rem' }}>{getCategoryLabel(post.category)}</span>}
                <h3>{post.title}</h3>
                {post.excerpt && <p>{post.excerpt}</p>}
                {post.publishedAt && (
                  <p className="blog-card-date">
                    {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
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
