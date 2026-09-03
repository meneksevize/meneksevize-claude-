import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useLocale } from '../context/LocaleContext.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

const DATE_LOCALES = { tr: 'tr-TR', en: 'en-US', ar: 'ar' };

export default function BlogPost() {
  const { slug } = useParams();
  const { t, locale } = useLocale();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
    fetch(`/api/blog/${slug}?lang=${locale}`)
      .then((res) => {
        if (!res.ok) throw new Error('not-found');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, [slug, locale]);

  useDocumentMeta(
    post ? `${post.title}${t('blogPost.titleSuffix')}` : t('blogPost.fallbackMetaTitle'),
    post?.excerpt || t('blogPost.fallbackExcerpt'),
    { path: `/blog/${slug}`, image: post?.coverImageUrl },
  );

  // Google için BlogPosting yapılandırılmış verisi (yazı başlığı, tarih, görsel).
  useEffect(() => {
    if (!post) return undefined;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      image: post.coverImageUrl,
      author: { '@type': 'Organization', name: 'Menekşe Vize' },
      publisher: { '@type': 'Organization', name: 'Menekşe Vize' },
      mainEntityOfPage: `https://meneksevize.com/blog/${slug}`,
    };

    // server/lib/seo.js aynı şemayı statik HTML'e de gömüyor — önce olası
    // sunucu-render edilmiş kopyayı kaldırıp tek bir örnek kalmasını
    // garanti ediyoruz.
    document.getElementById('blogpost-jsonld')?.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'blogpost-jsonld';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('blogpost-jsonld')?.remove();
    };
  }, [post, slug]);

  if (status === 'loading') {
    return (
      <section className="section">
        <div className="container">
          <p className="checklist-placeholder">{t('blogPost.loading')}</p>
        </div>
      </section>
    );
  }

  if (status === 'error' || !post) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '1rem' }}>{t('blogPost.notFoundTitle')}</h1>
          <p className="checklist-placeholder">{t('blogPost.notFoundText')}</p>
          <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>{t('blogPost.backToBlog')}</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: t('common.breadcrumbHome'), to: '/' },
        { label: t('blogPage.breadcrumb'), to: '/blog' },
        { label: post.title },
      ]}
      />
      <section
        className={post.coverImageUrl ? 'page-header has-photo' : 'page-header'}
        style={post.coverImageUrl ? { '--page-photo': `url(${post.coverImageUrl})` } : undefined}
      >
        <span className="kicker">{t('blogPage.pageKicker')}</span>
        <h1>{post.title}</h1>
        {post.publishedAt && (
          <p>
            {new Date(post.publishedAt).toLocaleDateString(DATE_LOCALES[locale], { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        )}
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* eslint-disable-next-line react/no-danger */}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/blog" className="btn btn-secondary">{t('blogPost.allPosts')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
