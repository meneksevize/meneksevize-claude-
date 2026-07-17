import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import Reveal from '../components/Reveal.jsx';
import { photos } from '../data/photos.js';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">Blog</span>
        <h1>Vize Süreçleri Üzerine Yazılarımız</h1>
        <p>Evrak ipuçları, ülkelere özel rehberler ve süreç deneyimlerini buradan takip edebilirsiniz.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          {loading && <p className="checklist-placeholder">Yükleniyor…</p>}
          {!loading && posts.length === 0 && (
            <p className="checklist-placeholder">Henüz yayınlanmış bir yazı yok — yakında burada olacak.</p>
          )}

          <div className="grid grid-3">
            {posts.map((post, i) => (
              <Reveal as={Link} to={`/blog/${post.slug}`} className="card blog-card" delay={i * 60} key={post.id}>
                {post.coverImageUrl && (
                  <div className="blog-card-media">
                    <img src={post.coverImageUrl} alt={post.title} loading="lazy" />
                  </div>
                )}
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
