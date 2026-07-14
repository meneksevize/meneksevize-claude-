import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { photos } from '../data/photos.js';
import { ChevronDownIcon } from '../components/icons.jsx';

const steps = [
  {
    title: 'Ön Görüşme',
    body: 'Ücretsiz bir görüşmede seyahat amacınızı, hedef ülkenizi ve zaman planınızı dinliyor, size en uygun vize tipini birlikte belirliyoruz.',
  },
  {
    title: 'Evrak Toplama & Kişisel Checklist',
    body: (
      <>
        Ülke ve vize tipinize özel bir evrak listesi hazırlıyoruz.{' '}
        <Link to="/evrak-rehberi" style={{ color: 'var(--accent-color)' }}>Evrak Rehberi</Link> aracımızla kendi checklist&apos;inizi anında oluşturabilirsiniz.
      </>
    ),
  },
  {
    title: 'Randevu & Başvuru',
    body: 'Konsolosluk veya vize başvuru merkezinden randevunuzu planlıyor, başvurunuzu evraklarınızla birlikte eksiksiz şekilde teslim ediyoruz.',
  },
  {
    title: (
      <>Mülakat Hazırlığı <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.85rem' }}>(gerekiyorsa)</span></>
    ),
    body: 'Vize tipine bağlı olarak mülakat gerekiyorsa, olası sorular ve doğru yanıt yaklaşımı üzerine sizi hazırlıyoruz.',
  },
  {
    title: 'Takip',
    body: 'Başvurunuzun durumunu düzenli olarak kontrol ediyor, gelişmeleri sizinle paylaşıyoruz — sürecin neresinde olduğunuzu her zaman bilirsiniz.',
  },
  {
    title: 'Sonuç & Teslim',
    body: 'Vize sonucunuz çıktığında pasaportunuzu teslim alıyor, sonraki adımlar (seyahat, vb.) için size bilgi veriyoruz. Nihai karar ilgili konsolosluğa aittir.',
  },
];

export default function Process() {
  useDocumentMeta(
    'Süreç | Menekşe Vize',
    'Menekşe Vize ile vize başvuru sürecinizin adım adım nasıl ilerlediğini keşfedin: ön görüşme, evrak toplama, randevu, mülakat hazırlığı, takip ve sonuç.',
  );

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="page-header has-photo" style={{ '--page-photo': `url(${photos.planningNotebook})` }}>
        <span className="kicker">Nasıl Çalışır</span>
        <h1>Vize Başvuru Süreciniz Adım Adım</h1>
        <p>Her adımı açarak neler olduğunu ve sizden ne beklendiğini detaylıca görebilirsiniz.</p>
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
            <Link to="/iletisim" className="btn btn-gold">Ücretsiz Ön Görüşme Alın</Link>
          </div>
        </div>
      </section>
    </>
  );
}
