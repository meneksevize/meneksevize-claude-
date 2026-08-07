// Öne çıkan destinasyon kartlarının arka planında, düşük opaklıkla görünen
// soyut/geometrik siluet çizimleri. Gerçek fotoğraf kullanmak yerine (telif/
// kaynak sorunu olmadan, markanın soyut-gradyan diline uygun) her destinasyon
// için tek bir simge: ABD → yıldız, İngiltere → taç, Kanada → yaprak,
// Dubai → basamaklı kule, Schengen → yıldız halkası (AB motifi).
function StarShape() {
  return (
    <path d="M100,10 L120,72.5 L185.6,72.2 L132.3,110.5 L152.9,172.8 L100,134 L47.1,172.8 L67.7,110.5 L14.4,72.2 L80,72.5 Z" />
  );
}

function CrownShape() {
  return (
    <>
      <path d="M40,140 L40,90 L70,120 L100,60 L130,120 L160,90 L160,140 Z" />
      <rect x="35" y="138" width="130" height="24" rx="4" />
      <circle cx="40" cy="90" r="7" />
      <circle cx="100" cy="60" r="8" />
      <circle cx="160" cy="90" r="7" />
    </>
  );
}

function LeafShape() {
  return (
    <>
      <path d="M100,20 C138,55 138,120 100,182 C62,120 62,55 100,20 Z" />
      <path d="M100,40 L100,160 M100,75 L75,60 M100,95 L125,80 M100,120 L78,108 M100,140 L122,128" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
    </>
  );
}

function TowerShape() {
  return (
    <>
      <path d="M100,18 L105,52 L95,52 Z" />
      <rect x="88" y="50" width="24" height="38" />
      <rect x="80" y="86" width="40" height="46" />
      <rect x="70" y="130" width="60" height="52" />
    </>
  );
}

function StarRingShape() {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const cx = 100 + Math.cos(angle) * 72;
    const cy = 100 + Math.sin(angle) * 72;
    return <circle cx={cx} cy={cy} r="7" key={i} />;
  });
  return <>{stars}</>;
}

const SHAPES = {
  abd: StarShape,
  ingiltere: CrownShape,
  kanada: LeafShape,
  dubai: TowerShape,
  schengen: StarRingShape,
};

export default function DestinationArt({ id, className = '' }) {
  const Shape = SHAPES[id];
  if (!Shape) return null;
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" className={className} aria-hidden="true">
      <Shape />
    </svg>
  );
}
