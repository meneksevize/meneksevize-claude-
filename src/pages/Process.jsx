import { useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import { ChevronDownIcon } from '../components/icons.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function Process() {
  const { t } = useLocale();

  const steps = [
    { title: t('process.step1Title'), body: t('process.step1Body') },
    {
      title: t('process.step2Title'),
      body: (
        <>
          {t('process.step2BodyPre')}
          <Link to="/evrak-rehberi" style={{ color: 'var(--link-color)' }}>{t('process.step2BodyLink')}</Link>
          {t('process.step2BodyPost')}
        </>
      ),
    },
    { title: t('process.step3Title'), body: t('process.step3Body') },
    {
      title: (
        <>{t('process.step4Title')} <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.85rem' }}>{t('process.step4TitleSuffix')}</span></>
      ),
      body: t('process.step4Body'),
    },
    { title: t('process.step5Title'), body: t('process.step5Body') },
    { title: t('process.step6Title'), body: t('process.step6Body') },
  ];

  useDocumentMeta(
    t('process.metaTitle'),
    t('process.metaDescription'),
  );

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('process.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">{t('process.pageKicker')}</span>
        <h1>{t('process.pageTitle')}</h1>
        <p>{t('process.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="timeline">
            {steps.map((step, i) => {
              const isOpen = openIndex === i;
              return (
                <div className={`timeline-step ${isOpen ? 'open' : ''}`} key={i}>
                  <div className="timeline-marker">{i + 1}</div>
                  <div
                    className="timeline-header"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpenIndex(isOpen ? -1 : i);
                      }
                    }}
                  >
                    <h3>{step.title}</h3>
                    <ChevronDownIcon className="timeline-chevron" />
                  </div>
                  <div className="timeline-body">
                    <div className="timeline-body-inner">{step.body}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/iletisim" className="btn btn-gold">{t('process.ctaConsult')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
