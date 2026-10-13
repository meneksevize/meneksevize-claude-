// Tek seferlik ekleme: Karadağ, AB vize politikasına uyum kapsamında 1 Kasım
// 2026'dan itibaren Türk vatandaşlarından vize istemeye başlıyor (31 Ekim
// 2026'ya kadar vizesiz giriş sürüyor) — bu, gerçek ve güncel bir iş/SEO
// fırsatı: önceden vizesiz olan bir ülke artık danışmanlık gerektiriyor.
// Kaynaklar: Karadağ hükümetinin 23 Temmuz 2026 açıklaması, T.C. Dışişleri
// Bakanlığı seyahat bilgilendirmesi (çapraz doğrulandı: evrensel.net,
// gzt.com, uzmanpara.milliyet.com.tr — hepsi 1 Kasım 2026 tarihinde hemfikir).
// Muafiyet: geçerli Schengen/ABD/İngiltere/İrlanda vizesi veya oturum izni
// olanlar 30 güne kadar vizesiz giriş yapabiliyor.
//
// TR kaynak veri src/data/countries.js + src/data/visaDocuments.js'teki
// 'karadag' girdileriyle birebir aynı (oradan kopyalandı); EN/AR çevirileri
// bu script içinde ayrıca sağlanıyor.
import { db } from './connection.js';

const TR = {
  id: 'karadag',
  flag: '🇲🇪',
  title: 'Karadağ',
  homeDescription: '1 Kasım 2026\'dan itibaren vize zorunlu — turistik, ticari ve aile ziyareti başvurularında süreç desteği.',
  servicesDescription: 'Karadağ, AB vize politikasına uyum kapsamında 1 Kasım 2026\'dan itibaren Türk vatandaşlarından vize istiyor; başvuru evrakı ve büyükelçilik/konsolosluk süreç takibinde destek sağlıyoruz.',
  intro: 'Karadağ, 1 Kasım 2026 itibarıyla Türk vatandaşlarına vize zorunluluğu getiriyor; turistik, ticari ve aile ziyareti seyahatinizde başvuru sürecinde yanınızdayız.',
  overview: 'Karadağ, Avrupa Birliği üyelik müzakerelerinin bir parçası olarak vize politikasını AB ile uyumlu hale getiriyor ve 1 Kasım 2026\'dan itibaren Türk vatandaşlarından vize talep etmeye başlıyor; 31 Ekim 2026\'ya kadar vizesiz giriş uygulaması sürüyor. Budva, Kotor ve Bar gibi Adriyatik kıyı şehirleri yaz turizminde, başkent Podgorica ise iş seyahatlerinde en çok tercih edilen noktalardır. Geçerli bir Schengen, ABD, İngiltere veya İrlanda vizesi/oturum izni bulunan Türk vatandaşları bu belgeyle 30 güne kadar vizesiz giriş yapabiliyor; bu koşulu taşımayanlar için başvuru Ankara\'daki Karadağ Büyükelçiliği veya İstanbul Başkonsolosluğu üzerinden, randevuyla yapılır.',
  quickFacts: [
    { label: 'Kalış Süresi', value: 'Vize ile genellikle tek girişte 30 güne kadar' },
    { label: 'İşlem Süresi', value: 'Randevuya bağlı — seyahatten en az 4 hafta önce başvuru önerilir' },
    { label: 'Başkent & Para Birimi', value: 'Podgorica · Euro (EUR)' },
    { label: 'Dil', value: 'Karadağca' },
  ],
  tags: ['Turistik', 'Ticari', 'Aile Birleşimi'],
  region: 'avrupa',
  types: ['turistik', 'ticari', 'aile-birlesimi'],
};

const EN = {
  title: 'Montenegro',
  homeDescription: 'Visa required starting November 1, 2026 — application support for tourist, business, and family-visit travel.',
  servicesDescription: 'As part of aligning its visa policy with the EU, Montenegro will require a visa from Turkish citizens starting November 1, 2026; we support your application documents and the embassy/consulate process.',
  intro: 'Montenegro is introducing a visa requirement for Turkish citizens as of November 1, 2026; we\'re with you through the application process for tourist, business, and family-visit travel.',
  overview: 'As part of its EU accession negotiations, Montenegro is aligning its visa policy with the EU and will start requiring a visa from Turkish citizens on November 1, 2026; visa-free entry remains in effect until October 31, 2026. Adriatic coastal towns such as Budva, Kotor, and Bar are the most popular destinations for summer tourism, while the capital Podgorica is preferred for business travel. Turkish citizens holding a valid Schengen, US, UK, or Ireland visa or residence permit can still enter visa-free for up to 30 days with that document; those who don\'t meet this condition must apply through the Montenegrin Embassy in Ankara or the Consulate General in Istanbul, by appointment.',
  quickFacts: [
    { label: 'Length of Stay', value: 'Up to 30 days per entry with a visa' },
    { label: 'Processing Time', value: 'Appointment-dependent — apply at least 4 weeks before travel' },
    { label: 'Capital & Currency', value: 'Podgorica · Euro (EUR)' },
    { label: 'Language', value: 'Montenegrin' },
  ],
};

const AR = {
  title: 'الجبل الأسود',
  homeDescription: 'التأشيرة مطلوبة ابتداءً من 1 نوفمبر 2026 — دعم في طلبات السياحة والأعمال وزيارة العائلة.',
  servicesDescription: 'في إطار مواءمة سياسة التأشيرات مع الاتحاد الأوروبي، سيطلب الجبل الأسود تأشيرة من المواطنين الترك ابتداءً من 1 نوفمبر 2026؛ نقدم الدعم في وثائق طلبك وعملية السفارة/القنصلية.',
  intro: 'يفرض الجبل الأسود شرط التأشيرة على المواطنين الترك ابتداءً من 1 نوفمبر 2026؛ نحن معك خلال عملية التقديم لرحلات السياحة والأعمال وزيارة العائلة.',
  overview: 'في إطار مفاوضات الانضمام إلى الاتحاد الأوروبي، يعمل الجبل الأسود على مواءمة سياسة التأشيرات مع الاتحاد الأوروبي، وسيبدأ بطلب تأشيرة من المواطنين الترك في 1 نوفمبر 2026؛ ويستمر الدخول بدون تأشيرة حتى 31 أكتوبر 2026. تُعد مدن الساحل الأدرياتيكي مثل بودفا وكوتور وبار الأكثر شعبية للسياحة الصيفية، بينما تُفضَّل العاصمة بودغوريتسا لرحلات الأعمال. يمكن للمواطنين الترك الحاملين لتأشيرة أو إقامة سارية من شنغن أو الولايات المتحدة أو المملكة المتحدة أو أيرلندا الدخول بدون تأشيرة لمدة تصل إلى 30 يومًا بهذه الوثيقة؛ أما من لا يستوفي هذا الشرط، فيجب عليه التقديم عبر سفارة الجبل الأسود في أنقرة أو القنصلية العامة في إسطنبول، بموعد مسبق.',
  quickFacts: [
    { label: 'مدة الإقامة', value: 'حتى 30 يومًا لكل دخول بالتأشيرة' },
    { label: 'مدة المعالجة', value: 'تعتمد على الموعد — يُنصح بالتقديم قبل السفر بأربعة أسابيع على الأقل' },
    { label: 'العاصمة والعملة', value: 'بودغوريتسا · يورو (EUR)' },
    { label: 'اللغة', value: 'المونتينيغرية' },
  ],
};

const DOCS = {
  turistik: {
    tr: {
      items: ['Pasaport (geçerlilik süresi yeterli)', 'Doldurulmuş vize başvuru formu', 'Vesikalık fotoğraf', 'Gidiş-dönüş uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu', 'Banka hesap özeti (son 3 ay)', 'Uluslararası seyahat sağlık sigortası'],
      note: 'Geçerli bir Schengen, ABD, İngiltere veya İrlanda vizesi/oturum izni olan Türk vatandaşları bu belgeyle 30 güne kadar vizesiz giriş yapabilir; bu koşulu taşımayanlar başvurusunu Ankara\'daki Karadağ Büyükelçiliği veya İstanbul Başkonsolosluğu\'na, seyahatten en az 4 hafta önce ve randevuyla yapmalıdır.',
    },
    en: {
      items: ['Passport (with sufficient validity)', 'Completed visa application form', 'Passport-size photo', 'Round-trip flight reservation', 'Hotel/accommodation reservation', 'Bank statement (last 3 months)', 'International travel health insurance'],
      note: 'Turkish citizens holding a valid Schengen, US, UK, or Ireland visa or residence permit can enter visa-free for up to 30 days with that document; those who don\'t meet this condition must apply through the Montenegrin Embassy in Ankara or the Consulate General in Istanbul, at least 4 weeks before travel and by appointment.',
    },
    ar: {
      items: ['جواز سفر (ساري المفعول لمدة كافية)', 'استمارة طلب التأشيرة معبأة', 'صورة شخصية', 'حجز تذكرة طيران ذهاب وعودة', 'حجز فندق/إقامة', 'كشف حساب بنكي (آخر 3 أشهر)', 'تأمين صحي دولي للسفر'],
      note: 'يمكن للمواطنين الترك الحاملين لتأشيرة أو إقامة سارية من شنغن أو الولايات المتحدة أو المملكة المتحدة أو أيرلندا الدخول بدون تأشيرة لمدة تصل إلى 30 يومًا بهذه الوثيقة؛ أما من لا يستوفي هذا الشرط، فيجب عليه التقديم عبر سفارة الجبل الأسود في أنقرة أو القنصلية العامة في إسطنبول، قبل السفر بأربعة أسابيع على الأقل وبموعد مسبق.',
    },
  },
  ticari: {
    tr: {
      items: ['Pasaport', 'Doldurulmuş vize başvuru formu', 'Vesikalık fotoğraf', 'Davet mektubu (iş ortağı/fuar)', 'Şirket faaliyet belgesi', 'Gidiş-dönüş uçak bileti ve otel rezervasyonu', 'Banka hesap özeti', 'Uluslararası seyahat sağlık sigortası'],
      note: 'Davet mektubunun ziyaret amacını ve tarihleri net belirtmesi süreci hızlandırır.',
    },
    en: {
      items: ['Passport', 'Completed visa application form', 'Passport-size photo', 'Invitation letter (business partner/trade fair)', 'Company activity certificate', 'Round-trip flight and hotel reservation', 'Bank statement', 'International travel health insurance'],
      note: 'An invitation letter that clearly states the purpose of the visit and travel dates speeds up the process.',
    },
    ar: {
      items: ['جواز سفر', 'استمارة طلب التأشيرة معبأة', 'صورة شخصية', 'خطاب دعوة (شريك تجاري/معرض)', 'شهادة سجل تجاري للشركة', 'حجز تذكرة طيران ذهاب وعودة وفندق', 'كشف حساب بنكي', 'تأمين صحي دولي للسفر'],
      note: 'خطاب الدعوة الذي يوضح بدقة الغرض من الزيارة وتواريخ السفر يُسرّع عملية المعالجة.',
    },
  },
  'aile-birlesimi': {
    tr: {
      items: ['Pasaport', 'Doldurulmuş vize başvuru formu', 'Vesikalık fotoğraf', 'Davet eden kişinin ikamet/pasaport belgesi', 'Akrabalık belgesi', 'Banka hesap özeti', 'Uluslararası seyahat sağlık sigortası'],
      note: 'Davet eden kişinin Karadağ\'daki ikamet durumunu ve aranızdaki akrabalık bağını gösteren belgeler birlikte sunulmalıdır.',
    },
    en: {
      items: ['Passport', 'Completed visa application form', 'Passport-size photo', 'Inviting person\'s residence/passport document', 'Proof of family relationship', 'Bank statement', 'International travel health insurance'],
      note: 'Documents showing the inviting person\'s residence status in Montenegro and your family relationship must be submitted together.',
    },
    ar: {
      items: ['جواز سفر', 'استمارة طلب التأشيرة معبأة', 'صورة شخصية', 'وثيقة إقامة/جواز سفر الشخص الداعي', 'وثيقة تثبت صلة القرابة', 'كشف حساب بنكي', 'تأمين صحي دولي للسفر'],
      note: 'يجب تقديم الوثائق التي تثبت حالة إقامة الشخص الداعي في الجبل الأسود وصلة القرابة بينكما معًا.',
    },
  },
};

function addCountry() {
  const already = db.prepare('SELECT id FROM countries WHERE id = ?').get(TR.id);
  if (already) {
    console.log('Karadağ zaten ülkeler tablosunda var — ülke eklemesi atlandı.');
    return;
  }
  const { maxOrder } = db.prepare('SELECT MAX(sort_order) AS maxOrder FROM countries').get();
  db.prepare(`
    INSERT INTO countries (
      id, flag, title, home_description, services_description, intro, overview, region, docs_key, tags, types, quick_facts, sort_order,
      title_en, home_description_en, services_description_en, intro_en, overview_en, quick_facts_en,
      title_ar, home_description_ar, services_description_ar, intro_ar, overview_ar, quick_facts_ar
    ) VALUES (
      @id, @flag, @title, @homeDescription, @servicesDescription, @intro, @overview, @region, @docsKey, @tags, @types, @quickFacts, @sortOrder,
      @titleEn, @homeDescriptionEn, @servicesDescriptionEn, @introEn, @overviewEn, @quickFactsEn,
      @titleAr, @homeDescriptionAr, @servicesDescriptionAr, @introAr, @overviewAr, @quickFactsAr
    )
  `).run({
    id: TR.id,
    flag: TR.flag,
    title: TR.title,
    homeDescription: TR.homeDescription,
    servicesDescription: TR.servicesDescription,
    intro: TR.intro,
    overview: TR.overview,
    region: TR.region,
    docsKey: null,
    tags: JSON.stringify(TR.tags),
    types: JSON.stringify(TR.types),
    quickFacts: JSON.stringify(TR.quickFacts),
    sortOrder: (maxOrder ?? -1) + 1,
    titleEn: EN.title,
    homeDescriptionEn: EN.homeDescription,
    servicesDescriptionEn: EN.servicesDescription,
    introEn: EN.intro,
    overviewEn: EN.overview,
    quickFactsEn: JSON.stringify(EN.quickFacts),
    titleAr: AR.title,
    homeDescriptionAr: AR.homeDescription,
    servicesDescriptionAr: AR.servicesDescription,
    introAr: AR.intro,
    overviewAr: AR.overview,
    quickFactsAr: JSON.stringify(AR.quickFacts),
  });
  console.log('Karadağ ülke olarak eklendi (TR/EN/AR).');
}

function addDocuments() {
  const insert = db.prepare(`
    INSERT INTO visa_documents (docs_key, type_key, items, note, items_en, note_en, items_ar, note_ar)
    VALUES (@docsKey, @typeKey, @items, @note, @itemsEn, @noteEn, @itemsAr, @noteAr)
  `);
  let added = 0;
  Object.entries(DOCS).forEach(([typeKey, byLang]) => {
    const exists = db.prepare('SELECT 1 FROM visa_documents WHERE docs_key = ? AND type_key = ?').get('karadag', typeKey);
    if (exists) return;
    insert.run({
      docsKey: 'karadag',
      typeKey,
      items: JSON.stringify(byLang.tr.items),
      note: byLang.tr.note,
      itemsEn: JSON.stringify(byLang.en.items),
      noteEn: byLang.en.note,
      itemsAr: JSON.stringify(byLang.ar.items),
      noteAr: byLang.ar.note,
    });
    added += 1;
  });
  console.log(`${added} Karadağ evrak listesi eklendi (TR/EN/AR).`);
}

addCountry();
addDocuments();
