import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export default function FAQ() {
  const { faqs } = useSiteData();

  useDocumentMeta(
    'Sıkça Sorulan Sorular | Menekşe Vize',
    'Menekşe Vize danışmanlık süreci, ücretlendirme, evrak ve randevu/mülakat hakkında sıkça sorulan sorular ve yanıtları.',
    { path: '/sss' },
  );

  // Google'ın FAQPage yapılandırılmış verisi: klasik arama sonuçlarında artık
  // çoğunlukla resmi kurum/sağlık siteleriyle sınırlı olsa da, içerik anlama ve
  // yapay zeka destekli arama özetleri (AI Overviews vb.) için hâlâ değerlidir.
  useEffect(() => {
    if (faqs.length === 0) return undefined;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: stripHtml(faq.answerHtml),
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-jsonld';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('faq-jsonld')?.remove();
    };
  }, [faqs]);

  const groups = useMemo(() => {
    const byGroup = new Map();
    faqs.forEach((faq) => {
      if (!byGroup.has(faq.group)) byGroup.set(faq.group, []);
      byGroup.get(faq.group).push(faq);
    });
    return Array.from(byGroup.entries()).map(([title, items]) => ({ title, items }));
  }, [faqs]);

  return (
    <>
      <section className="page-header">
        <span className="kicker">Merak Edilenler</span>
        <h1>Sıkça Sorulan Sorular</h1>
        <p>Aradığınız cevabı bulamazsanız <Link to="/iletisim" style={{ color: 'var(--accent-color)' }}>bize doğrudan ulaşabilirsiniz</Link>.</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          {groups.map((group) => (
            <div className="faq-group" key={group.title}>
              <div className="faq-group-title">{group.title}</div>
              {group.items.map((item) => (
                <details className="faq-item" key={item.id} open={item.openDefault}>
                  <summary>{item.question}</summary>
                  {/* eslint-disable-next-line react/no-danger */}
                  <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
