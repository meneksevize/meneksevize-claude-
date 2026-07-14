// Schengen bölgesindeki 29 ülke tek bir vize koduyla (Schengen vizesi) yönetilir,
// bu yüzden hepsi aynı evrak listesini paylaşır (bkz. visaDocuments.js -> "schengen").
// docsKey alanı, bir ülkenin hangi evrak listesini kullanacağını belirtir.
function schengenMember(id, flag, title) {
  return {
    id,
    flag,
    title,
    homeDescription: `${title} için Schengen turistik, ticari ve aile ziyareti vizesi.`,
    servicesDescription: `${title}, Schengen bölgesinin bir üyesidir; aynı Schengen vizesiyle turistik, ticari ve aile ziyareti amacıyla girilebilir.`,
    intro: `${title}, Schengen bölgesinin üyesidir ve tek bir Schengen vizesiyle ziyaret edilebilir. Turistik, ticari, aile ziyareti ve transit başvurularınızda süreci baştan sona birlikte yönetiyoruz.`,
    quickFacts: [
      { label: 'Kalış Süresi', value: 'Herhangi 180 günlük dönemde en fazla 90 gün' },
      { label: 'İşlem Süresi', value: 'Başvuru yoğunluğuna göre değişir, genellikle birkaç hafta' },
      { label: 'Kapsam', value: 'Schengen bölgesi — 29 ülkede geçerli tek vize' },
    ],
    tags: ['Turistik', 'Ticari', 'Aile Birleşimi', 'Transit'],
    region: 'avrupa',
    types: ['turistik', 'ticari', 'aile-birlesimi', 'transit'],
    docsKey: 'schengen',
  };
}

const schengenCountries = [
  schengenMember('almanya', '🇩🇪', 'Almanya'),
  schengenMember('fransa', '🇫🇷', 'Fransa'),
  schengenMember('italya', '🇮🇹', 'İtalya'),
  schengenMember('ispanya', '🇪🇸', 'İspanya'),
  schengenMember('hollanda', '🇳🇱', 'Hollanda'),
  schengenMember('avusturya', '🇦🇹', 'Avusturya'),
  schengenMember('belcika', '🇧🇪', 'Belçika'),
  schengenMember('bulgaristan', '🇧🇬', 'Bulgaristan'),
  schengenMember('hirvatistan', '🇭🇷', 'Hırvatistan'),
  schengenMember('cekya', '🇨🇿', 'Çekya'),
  schengenMember('danimarka', '🇩🇰', 'Danimarka'),
  schengenMember('estonya', '🇪🇪', 'Estonya'),
  schengenMember('finlandiya', '🇫🇮', 'Finlandiya'),
  schengenMember('yunanistan', '🇬🇷', 'Yunanistan'),
  schengenMember('macaristan', '🇭🇺', 'Macaristan'),
  schengenMember('izlanda', '🇮🇸', 'İzlanda'),
  schengenMember('letonya', '🇱🇻', 'Letonya'),
  schengenMember('lihtenstayn', '🇱🇮', 'Lihtenştayn'),
  schengenMember('litvanya', '🇱🇹', 'Litvanya'),
  schengenMember('luksemburg', '🇱🇺', 'Lüksemburg'),
  schengenMember('malta', '🇲🇹', 'Malta'),
  schengenMember('norvec', '🇳🇴', 'Norveç'),
  schengenMember('polonya', '🇵🇱', 'Polonya'),
  schengenMember('portekiz', '🇵🇹', 'Portekiz'),
  schengenMember('romanya', '🇷🇴', 'Romanya'),
  schengenMember('slovakya', '🇸🇰', 'Slovakya'),
  schengenMember('slovenya', '🇸🇮', 'Slovenya'),
  schengenMember('isvec', '🇸🇪', 'İsveç'),
  schengenMember('isvicre', '🇨🇭', 'İsviçre'),
];

const otherCountries = [
  {
    id: 'abd',
    flag: '🇺🇸',
    title: 'Amerika Birleşik Devletleri',
    homeDescription: 'B1/B2 turistik-ticari, öğrenci (F1) ve çalışma vizesi süreçleri.',
    servicesDescription: 'B1/B2 turistik-ticari vize, F1 öğrenci vizesi ve çalışma vizesi başvuru süreçleri için danışmanlık.',
    intro: 'ABD turistik/ticari, öğrenci ve çalışma vizesi başvurularınızda DS-160 formundan mülakat hazırlığına kadar yanınızdayız.',
    quickFacts: [
      { label: 'Geçerlilik', value: 'Vize tipine göre değişir, çoğunlukla çoklu giriş' },
      { label: 'İşlem Süresi', value: 'Konsolosluk randevu yoğunluğuna bağlı olarak değişir' },
      { label: 'Kapsam', value: 'Amerika Birleşik Devletleri' },
    ],
    tags: ['Turistik', 'Ticari', 'Öğrenci', 'Çalışma'],
    region: 'amerika',
    types: ['turistik', 'ticari', 'ogrenci', 'calisma'],
  },
  {
    id: 'ingiltere',
    flag: '🇬🇧',
    title: 'İngiltere',
    homeDescription: 'Standart ziyaretçi vizesi, öğrenci ve aile birleşimi başvuruları.',
    servicesDescription: 'Standart ziyaretçi vizesi, öğrenci vizesi ve aile birleşimi başvurularında uçtan uca destek.',
    intro: 'Standart ziyaretçi, öğrenci ve aile birleşimi vizesi başvurularınızı İngiltere\'nin güncel şartlarına göre hazırlıyoruz.',
    quickFacts: [
      { label: 'Kalış Süresi', value: 'Standart ziyaretçi vizesinde genellikle 6 aya kadar' },
      { label: 'İşlem Süresi', value: 'Ortalama birkaç hafta, başvuru yoğunluğuna göre değişir' },
      { label: 'Kapsam', value: 'Birleşik Krallık' },
    ],
    tags: ['Aile Birleşimi', 'Öğrenci'],
    region: 'avrupa',
    types: ['turistik', 'aile-birlesimi', 'ogrenci'],
  },
  {
    id: 'kanada',
    flag: '🇨🇦',
    title: 'Kanada',
    homeDescription: 'Turistik ziyaretçi vizesi, çalışma izni ve doğum amaçlı ziyaret başvuru desteği.',
    servicesDescription: 'Turistik ziyaretçi vizesi (TRV), çalışma izni ve doğum amaçlı ziyaret başvurularında evrak ve süreç desteği.',
    intro: 'Kanada turistik ziyaretçi vizesi (TRV), çalışma izni ve doğum amaçlı ziyaret başvurularında evrak hazırlığından takibe kadar destek sağlıyoruz.',
    quickFacts: [
      { label: 'Kalış Süresi', value: 'Genellikle tek girişte 6 aya kadar' },
      { label: 'İşlem Süresi', value: 'Başvuru yoğunluğuna göre değişir' },
      { label: 'Kapsam', value: 'Kanada' },
    ],
    tags: ['Turistik', 'Çalışma', 'Doğum Vizesi'],
    region: 'amerika',
    types: ['turistik', 'calisma', 'dogum'],
  },
  {
    id: 'dubai',
    flag: '🇦🇪',
    title: 'Dubai / BAE',
    homeDescription: 'Turistik ve ticari e-vize başvuruları, hızlı süreç takibi.',
    servicesDescription: 'Turistik ve ticari e-vize başvuruları; hızlı sonuçlanan süreçlerde takip desteği.',
    intro: 'Dubai/BAE için turistik ve ticari e-vize başvurularınızı hızlı ve takip edilebilir şekilde yönetiyoruz.',
    quickFacts: [
      { label: 'Kalış Süresi', value: 'Vize tipine göre genellikle 30 veya 90 gün' },
      { label: 'İşlem Süresi', value: 'E-vize başvurularında genellikle birkaç iş günü' },
      { label: 'Kapsam', value: 'Birleşik Arap Emirlikleri' },
    ],
    tags: ['E-Vize', 'Transit'],
    region: 'orta-dogu',
    types: ['turistik', 'ticari', 'e-vize', 'transit'],
  },
  {
    id: 'rusya',
    flag: '🇷🇺',
    title: 'Rusya',
    homeDescription: 'Birleşik e-Vize ile turistik ve ticari seyahatler için hızlı başvuru süreci.',
    servicesDescription: "Türk vatandaşları için Rusya'nın birleşik e-Vize sistemi üzerinden turistik ve ticari seyahat başvurularında hızlı süreç desteği.",
    intro: "Rusya, Türk vatandaşlarına tamamen online başvurulan birleşik e-Vize imkânı sunar. Turistik ve ticari seyahatlerinizde başvuru sürecinde yanınızdayız.",
    quickFacts: [
      { label: 'Kalış Süresi', value: 'Tek girişte en fazla 30 gün' },
      { label: 'İşlem Süresi', value: 'Ortalama 4 gün (e-Vize)' },
      { label: 'Kapsam', value: 'Rusya Federasyonu' },
    ],
    tags: ['E-Vize', 'Turistik', 'Ticari'],
    region: 'diger',
    types: ['turistik', 'ticari'],
  },
  {
    id: 'avustralya',
    flag: '🇦🇺',
    title: 'Avustralya',
    homeDescription: 'Ziyaretçi vizesi (Subclass 600) başvurularında biyometrik randevudan sonuca kadar destek.',
    servicesDescription: 'Türk vatandaşları eTA kapsamında olmadığından, Avustralya Ziyaretçi Vizesi (Subclass 600) başvurularında uçtan uca destek sağlıyoruz.',
    intro: 'Avustralya, Türk vatandaşlarına elektronik vize (eTA) sunmadığından başvurular tam Ziyaretçi Vizesi (Subclass 600) kapsamında değerlendirilir. Biyometrik randevudan sonuca kadar süreci birlikte yönetiyoruz.',
    quickFacts: [
      { label: 'Kalış Süresi', value: 'Genellikle tek girişte 3 aya kadar' },
      { label: 'İşlem Süresi', value: 'Ortalama 4-8 hafta' },
      { label: 'Kapsam', value: 'Avustralya (Subclass 600 Ziyaretçi Vizesi)' },
    ],
    tags: ['Turistik', 'Biyometrik Vize'],
    region: 'diger',
    types: ['turistik'],
  },
];

export const countries = [...schengenCountries, ...otherCountries];

export const visaTypeLabels = {
  turistik: 'Turistik',
  ticari: 'Ticari',
  ogrenci: 'Öğrenci',
  calisma: 'Çalışma',
  'aile-birlesimi': 'Aile Birleşimi',
  transit: 'Transit',
  'e-vize': 'E-Vize',
  dogum: 'Doğum Vizesi',
};

export const regionLabels = {
  all: 'Tüm Bölgeler',
  avrupa: 'Avrupa',
  amerika: 'Amerika',
  'orta-dogu': 'Orta Doğu',
  diger: 'Diğer',
};

export function getCountryById(id) {
  return countries.find((c) => c.id === id);
}

export function getDocsKey(country) {
  return country.docsKey || country.id;
}
