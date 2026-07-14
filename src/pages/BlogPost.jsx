import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
    fetch(`/api/blog/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('not-found');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, [slug]);

  useDocumentMeta(
    post ? `${post.title} | Menekşe Vize Blog` : 'Blog | Menekşe Vize',
    post?.excerpt || 'Menekşe Vize blog yazısı.',
  );

  if (status === 'loading') {
    return (
      <section className="section">
        <div className="container">
          <p className="checklist-placeholder">Yükleniyor…</p>
        </div>
      </section>
    );
  }

  if (status === 'error' || !post) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '1rem' }}>Yazı Bulunamadı</h1>
          <p className="checklist-placeholder">Aradığınız blog yazısı yayından kaldırılmış olabilir.</p>
          <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Blog&apos;a Dön</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className={post.coverImageUrl ? 'page-header has-photo' : 'page-header'}
        style={post.coverImageUrl ? { '--page-photo': `url(${post.coverImageUrl})` } : undefined}
      >
        <span className="kicker">Blog</span>
        <h1>{post.title}</h1>
        {post.publishedAt && (
          <p>
            {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        )}
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* eslint-disable-next-line react/no-danger */}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/blog" className="btn btn-secondary">Tüm Yazılar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
