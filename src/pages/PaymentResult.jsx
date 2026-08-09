import { useParams, useSearchParams } from 'react-router-dom';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function PaymentResult() {
  const { code } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useLocale();
  const durum = searchParams.get('durum');

  const MESSAGES = {
    basarili: { title: t('paymentResult.successTitle'), body: t('paymentResult.successBody'), tone: 'var(--accent-color)' },
    basarisiz: { title: t('paymentResult.failTitle'), body: t('paymentResult.failBody'), tone: 'var(--gold)' },
    hata: { title: t('paymentResult.errorTitle'), body: t('paymentResult.errorBody'), tone: 'var(--gold)' },
  };
  const info = MESSAGES[durum] || MESSAGES.hata;

  useDocumentMeta(t('paymentResult.metaTitle'));

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('paymentResult.breadcrumbPayment'), to: `/odeme/${code}` }, { label: t('paymentResult.breadcrumbResult') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.passportBoardingPass})` }}>
        <span className="kicker">{t('paymentResult.kicker')}</span>
        <h1>{info.title}</h1>
      </section>
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: info.tone, marginBottom: '2rem' }}>{info.body}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {durum === 'basarisiz' && (
              <Link to={`/odeme/${code}`} className="btn btn-gold">{t('paymentResult.retry')}</Link>
            )}
            <Link to="/iletisim" className="btn btn-secondary">{t('paymentResult.contact')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
