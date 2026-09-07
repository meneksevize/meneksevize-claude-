import { useMemo, useState } from 'react';
import { Link } from '../components/LocaleLink.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { useSiteData } from '../context/SiteDataContext.jsx';
import { useLocale } from '../context/LocaleContext.jsx';
import { photos } from '../data/photos.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CountryFlag from '../components/CountryFlag.jsx';

// Rakip sitelerde (Vize Merkezi, Taksim Vize) sık görülen "Vize Rejim
// Tablosu" — tüm ülkeleri tek bakışta karşılaştırma. Bizde eksikti; burada
// tamamen mevcut/gerçek ülke verisinden (quickFacts, tags, docsKey) türetilir,
// yeni/uydurma bir içerik eklenmez.
const REGION_FILTERS = ['all', 'avrupa', 'amerika', 'orta-dogu', 'diger'];

// Bir ülkenin "amaç" etiketleri arasından yöntem göstergelerini (E-Vize,
// Biyometrik Vize) ayıklar — geri kalanı gerçek başvuru amaçlarıdır.
const METHOD_TAGS = new Set(['E-Vize', 'Biyometrik Vize']);

function stayValue(quickFacts) {
  const stay = quickFacts?.find((f) => f.label === 'Kalış Süresi' || f.label === 'Geçerlilik');
  return stay?.value || '—';
}

export default function VisaRegimeTable() {
  const { countries } = useSiteData();
  const { t } = useLocale();
  const [region, setRegion] = useState('all');

  useDocumentMeta(
    t('visaRegimeTable.metaTitle'),
    t('visaRegimeTable.metaDescription'),
    { path: '/vize-rejim-tablosu' },
  );

  const regionLabels = {
    all: t('services.regionAll'),
    avrupa: t('services.regionEurope'),
    amerika: t('services.regionAmerica'),
    'orta-dogu': t('services.regionMiddleEast'),
    diger: t('services.regionOther'),
  };

  const rows = useMemo(() => countries
    .filter((c) => region === 'all' || c.region === region)
    .map((c) => ({
      ...c,
      system: c.docsKey === 'schengen' ? t('visaRegimeTable.systemSchengen') : t('visaRegimeTable.systemOwn'),
      method: c.tags?.includes('E-Vize') ? t('visaRegimeTable.methodEVisa') : t('visaRegimeTable.methodConsulate'),
      stay: stayValue(c.quickFacts),
      purposes: (c.tags || []).filter((tag) => !METHOD_TAGS.has(tag)).join(', '),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, 'tr')), [countries, region, t]);

  return (
    <>
      <Breadcrumbs items={[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('visaRegimeTable.breadcrumb') }]} />
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.worldMap})` }}>
        <span className="kicker">{t('visaRegimeTable.pageKicker')}</span>
        <h1>{t('visaRegimeTable.pageTitle')}</h1>
        <p>{t('visaRegimeTable.pageSubtitle')}</p>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="filter-bar">
            {REGION_FILTERS.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-btn ${region === value ? 'active' : ''}`}
                onClick={() => setRegion(value)}
              >
                {regionLabels[value]}
              </button>
            ))}
          </div>

          <div className="regime-table-scroll">
            <table className="regime-table">
              <thead>
                <tr>
                  <th>{t('visaRegimeTable.colCountry')}</th>
                  <th>{t('visaRegimeTable.colSystem')}</th>
                  <th>{t('visaRegimeTable.colMethod')}</th>
                  <th>{t('visaRegimeTable.colStay')}</th>
                  <th>{t('visaRegimeTable.colPurposes')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <Link to={`/ulkeler/${c.id}`} className="regime-table-country">
                        <CountryFlag country={c} className="regime-table-flag" />
                        {c.title}
                      </Link>
                    </td>
                    <td>{c.system}</td>
                    <td>{c.method}</td>
                    <td>{c.stay}</td>
                    <td>{c.purposes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="form-note" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            {t('visaRegimeTable.footnotePre')}<Link to="/on-degerlendirme" style={{ color: 'var(--link-color)' }}>{t('visaRegimeTable.footnoteLink')}</Link>{t('visaRegimeTable.footnotePost')}
          </p>
        </div>
      </section>
    </>
  );
}
