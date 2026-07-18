import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SITE_URL = 'https://meneksevize.com';

// items: [{ label, to }, ...] — son öğe `to` almaz (mevcut sayfa).
// Hem görsel gezinme yolu hem de Google için BreadcrumbList yapılandırılmış
// verisini üretir; bu sayede derin sayfalar (ör. ülke + vize türü) site
// hiyerarşisi içinde net şekilde konumlanır ve iç bağlantı sağlar.
export default function Breadcrumbs({ items }) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        ...(item.to ? { item: `${SITE_URL}${item.to}` } : {}),
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-jsonld';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('breadcrumb-jsonld')?.remove();
    };
  }, [items]);

  return (
    <nav className="breadcrumbs" aria-label="Gezinme yolu">
      <ol className="breadcrumbs-list">
        {items.map((item, i) => (
          <li key={item.label}>
            {i > 0 && <span className="breadcrumbs-sep">/</span>}
            {item.to ? <Link to={item.to}>{item.label}</Link> : <span className="breadcrumbs-current">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
