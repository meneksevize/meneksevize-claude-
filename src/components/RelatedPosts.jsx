import { useEffect, useState } from 'react';
import { Link } from './LocaleLink.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { getCategoryLabel } from '../data/blogCategories.js';

// Ülke ve vize tipi sayfalarında, o ülkeyle ilgili blog yazılarını listeler —
// para kazandıran sayfalardan blog içeriğine iç link (ve tersi zaten mevcut)
// SEO açısından iki yönlü bağlantı sağlar. Eşleştirme slug üzerinden yapılır:
// slug'lar Türkçe ülke id'siyle başlayan/onu içeren kelimeler taşır
// ("almanya-vizesi-...", "kanadada-dogum-..."), bu yüzden id'nin bir kelime
// başlangıcı olarak geçtiği slug'lar aranır ("icin" içindeki "cin" gibi kelime
// ortası eşleşmeler elenir).
export default function RelatedPosts({ countryId }) {
  const { t, locale } = useLocale();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let active = true;
    const pattern = new RegExp(`(^|-)${countryId}`);
    fetch(`/api/blog?lang=${locale}`)
      .then((res) => res.json())
      .then((all) => {
        if (!active || !Array.isArray(all)) return;
        setPosts(all.filter((post) => pattern.test(post.slug)).slice(0, 3));
      })
      .catch(() => {});
    return () => { active = false; };
  }, [countryId, locale]);

  if (posts.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{t('countryDetail.relatedPostsKicker')}</span>
          <h2>{t('countryDetail.relatedPostsTitle')}</h2>
        </div>
        <div className="grid grid-3">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} className="card blog-card" key={post.id}>
              {post.category && <span className="kicker" style={{ display: 'block', marginBottom: '0.5rem' }}>{getCategoryLabel(post.category, t)}</span>}
              <h3>{post.title}</h3>
              {post.excerpt && <p>{post.excerpt}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
