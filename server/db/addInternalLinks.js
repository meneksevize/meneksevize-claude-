// Tek seferlik düzeltme: 74 blog yazısından 21'i hiçbir iç link içermiyordu
// (dönüşüm sayfalarına ya da ülke sayfalarına hiç bağlanmıyordu) — bu hem iç
// link otoritesi dağılımını hem de okurun bir sonraki adıma geçişini
// zayıflatıyordu. Her yazının konusuna uygun, doğal bir kapanış bölümü
// ekliyoruz (var olan seedBlog8+ paketlerindeki "Bizim Yaklaşımımız" deseniyle
// tutarlı).
import { db } from './connection.js';

const closings = {
  'vize-basvurusunda-niyet-mektubu-nasil-yazilir': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nNiyet mektubunuzu başvurunuzun geri kalanıyla tutarlı hale getirmek için [Evrak Rehberi aracımızı](/evrak-rehberi) kullanabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can use [our Document Guide tool](/evrak-rehberi) to make your cover letter consistent with the rest of your application, and request [a free pre-assessment](/on-degerlendirme) for guidance specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك استخدام [أداة دليل الوثائق لدينا](/evrak-rehberi) لجعل خطاب النوايا متسقًا مع بقية طلبك، وطلب [تقييم مسبق مجاني](/on-degerlendirme) للحصول على إرشادات خاصة بحالتك.',
  },
  'vize-mulakatina-hazirlik-sik-sorulan-sorular': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nMülakat öncesi olası soruları ve doğru yanıt yaklaşımını birlikte gözden geçirmek isterseniz [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nIf you would like to go over likely interview questions and the right way to answer them together, you can request [a free pre-assessment](/on-degerlendirme).',
    ar: '\n\n## نهجنا\n\nإذا كنت ترغب في مراجعة الأسئلة المحتملة في المقابلة والطريقة الصحيحة للإجابة عليها معًا، يمكنك طلب [تقييم مسبق مجاني](/on-degerlendirme).',
  },
  'seyahat-saglik-sigortasi-secerken-nelere-dikkat-etmeli': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nSeyahat sağlık sigortanızın diğer evraklarınızla uyumlu olup olmadığını [Evrak Rehberi aracımızla](/evrak-rehberi) kontrol edebilir, sorularınız için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can check whether your travel health insurance is consistent with the rest of your documents using [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) for any questions.',
    ar: '\n\n## نهجنا\n\nيمكنك التحقق مما إذا كان تأمين السفر الصحي الخاص بك متسقًا مع بقية وثائقك باستخدام [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) لأي أسئلة.',
  },
  'banka-hesap-ozeti-ile-mali-yeterlilik-nasil-kanitlanir': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nMali yeterlilik belgelerinizin başvurunuzla tutarlı olup olmadığını [Evrak Rehberi aracımızla](/evrak-rehberi) kontrol edebilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can check whether your proof of financial sufficiency is consistent with your application using [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك التحقق مما إذا كانت وثائق كفايتك المالية متسقة مع طلبك باستخدام [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'kanadada-dogum-yapmak-surec-maliyet-bilinmesi-gerekenler': {
    tr: '\n\n## Bizim Yaklaşımımız\n\n[Kanada vizesi sayfamızda](/ulkeler/kanada) ülkeye özel güncel bilgileri ve evrak listesini bulabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can find country-specific, up-to-date information and the document list on [our Canada visa page](/ulkeler/kanada), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة كندا لدينا](/ulkeler/kanada)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'ab-yeni-giris-cikis-sistemi-ees-schengen-seyahatinde-degisen': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nEES sisteminin başvurunuzu nasıl etkileyeceğini [hizmetlerimiz sayfamızdan](/hizmetler) inceleyebilir, sorularınız için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can review how the EES system will affect your application on [our services page](/hizmetler), and request [a free pre-assessment](/on-degerlendirme) for any questions.',
    ar: '\n\n## نهجنا\n\nيمكنك مراجعة كيفية تأثير نظام EES على طلبك في [صفحة خدماتنا](/hizmetler)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) لأي أسئلة.',
  },
  'aile-birlesimi-vizesi-basvurusunda-dikkat-edilmesi-gerekenler': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nAile birleşimi başvurunuz için gereken evrak listesini [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can build the document checklist for your family reunification application with [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك إنشاء قائمة الوثائق لطلب لم شمل الأسرة الخاص بك عبر [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'schengen-vizesi-reddi-en-sik-7-neden': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nRet kararı almış bir başvurunuz varsa [vize reddi sayfamızda](/vize-reddi) sonraki adımları bulabilir, durumunuzu birlikte değerlendirmek için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nIf you have received a rejection, you can find next steps on [our visa rejection page](/vize-reddi), and request [a free pre-assessment](/on-degerlendirme) to review your situation together.',
    ar: '\n\n## نهجنا\n\nإذا تلقيت رفضًا، يمكنك أن تجد الخطوات التالية في [صفحة رفض التأشيرة لدينا](/vize-reddi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) لمراجعة حالتك معًا.',
  },
  'abd-yeni-250-dolar-visa-integrity-fee-kimleri-kapsiyor': {
    tr: '\n\n## Bizim Yaklaşımımız\n\n[ABD vizesi sayfamızda](/ulkeler/abd) ülkeye özel güncel bilgileri ve evrak listesini bulabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can find country-specific, up-to-date information and the document list on [our US visa page](/ulkeler/abd), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة الولايات المتحدة لدينا](/ulkeler/abd)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'schengen-vize-ucreti-90-euroya-yukseldi': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nGüncel ücretin başvurunuzu nasıl etkileyeceğini [hizmetlerimiz sayfamızdan](/hizmetler) inceleyebilir, sorularınız için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can review how the updated fee affects your application on [our services page](/hizmetler), and request [a free pre-assessment](/on-degerlendirme) for any questions.',
    ar: '\n\n## نهجنا\n\nيمكنك مراجعة كيفية تأثير الرسوم المحدثة على طلبك في [صفحة خدماتنا](/hizmetler)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) لأي أسئلة.',
  },
  'etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nETIAS\'ın seyahat planınızı nasıl etkileyeceğini [hizmetlerimiz sayfamızdan](/hizmetler) inceleyebilir, sorularınız için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can review how ETIAS will affect your travel plans on [our services page](/hizmetler), and request [a free pre-assessment](/on-degerlendirme) for any questions.',
    ar: '\n\n## نهجنا\n\nيمكنك مراجعة كيفية تأثير ETIAS على خطط سفرك في [صفحة خدماتنا](/hizmetler)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) لأي أسئلة.',
  },
  'yurt-disi-egitim-ogrenci-vizesi-basvuru-rehberi': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nÖğrenci vizesi başvurunuz için gereken evrak listesini [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can build the document checklist for your student visa application with [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك إنشاء قائمة الوثائق لطلب تأشيرة الطالب الخاص بك عبر [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'ticari-vize-basvurusunda-davet-mektubu-ve-firma-belgeleri': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nTicari vize başvurunuz için gereken evrak listesini [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can build the document checklist for your business visa application with [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك إنشاء قائمة الوثائق لطلب التأشيرة التجارية الخاص بك عبر [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'vize-basvurusunda-biyometrik-fotograf-standartlari': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nBaşvurunuzun geri kalanıyla ilgili evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilir, sorularınız için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can build your document checklist for the rest of your application with [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) for any questions.',
    ar: '\n\n## نهجنا\n\nيمكنك إنشاء قائمة وثائقك لبقية طلبك عبر [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) لأي أسئلة.',
  },
  'coklu-giris-schengen-vizesi-nasil-alinir': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nÇoklu giriş başvurunuz için doğru güzergah ve evrak stratejisini [hizmetlerimiz sayfamızdan](/hizmetler) inceleyebilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can review the right route and document strategy for your multiple-entry application on [our services page](/hizmetler), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك مراجعة المسار الصحيح واستراتيجية الوثائق لطلب الدخول المتعدد في [صفحة خدماتنا](/hizmetler)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'ingiltere-eta-sistemi-turk-vatandaslarini-etkiliyor-mu': {
    tr: '\n\n## Bizim Yaklaşımımız\n\n[İngiltere vizesi sayfamızda](/ulkeler/ingiltere) ülkeye özel güncel bilgileri ve evrak listesini bulabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can find country-specific, up-to-date information and the document list on [our UK visa page](/ulkeler/ingiltere), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة بريطانيا لدينا](/ulkeler/ingiltere)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'cocuklu-ailelerin-vize-basvurusunda-ekstra-belgeler': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nÇocuklu seyahatiniz için gereken evrak listesini [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can build the document checklist for your trip with children using [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك إنشاء قائمة الوثائق لرحلتك مع الأطفال باستخدام [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'guvenilir-vize-danismanligi-nasil-secilir-dikkat-edilmesi-gerekenler': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nBu yaklaşımı nasıl uyguladığımızı [hakkımızda sayfamızda](/hakkimizda) okuyabilir, sorularınızı doğrudan [iletişim sayfamızdan](/iletisim) bize iletebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can read how we put this approach into practice on [our About page](/hakkimizda), and reach us directly through [our Contact page](/iletisim) with any questions.',
    ar: '\n\n## نهجنا\n\nيمكنك قراءة كيفية تطبيقنا لهذا النهج في [صفحة من نحن](/hakkimizda)، والتواصل معنا مباشرة عبر [صفحة الاتصال](/iletisim) لأي أسئلة.',
  },
  'kanada-ziyaretci-vizesinde-2026-degisiklikleri': {
    tr: '\n\n## Bizim Yaklaşımımız\n\n[Kanada vizesi sayfamızda](/ulkeler/kanada) ülkeye özel güncel bilgileri ve evrak listesini bulabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can find country-specific, up-to-date information and the document list on [our Canada visa page](/ulkeler/kanada), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة كندا لدينا](/ulkeler/kanada)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'schengen-ulkelerinden-hangisine-basvurmaliyim': {
    tr: '\n\n## Bizim Yaklaşımımız\n\nHangi Schengen ülkesinin sizin için doğru olduğunu [hizmetlerimiz sayfamızdan](/hizmetler) inceleyebilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can review which Schengen country is right for you on [our services page](/hizmetler), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.',
    ar: '\n\n## نهجنا\n\nيمكنك مراجعة أي دولة شنغن مناسبة لك في [صفحة خدماتنا](/hizmetler)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.',
  },
  'vize-basvurusu-reddedildi-simdi-ne-yapmali': {
    tr: '\n\n## Bizim Yaklaşımımız\n\n[Vize reddi sayfamızda](/vize-reddi) sonraki adımları detaylı bulabilir, durumunuzu birlikte değerlendirmek için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.',
    en: '\n\n## Our Approach\n\nYou can find next steps in detail on [our visa rejection page](/vize-reddi), and request [a free pre-assessment](/on-degerlendirme) to review your situation together.',
    ar: '\n\n## نهجنا\n\nيمكنك أن تجد الخطوات التالية بالتفصيل في [صفحة رفض التأشيرة لدينا](/vize-reddi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) لمراجعة حالتك معًا.',
  },
};

function addInternalLinks() {
  const getStmt = db.prepare('SELECT slug, content, content_en, content_ar FROM posts WHERE slug = ?');
  const updateStmt = db.prepare('UPDATE posts SET content = @content, content_en = @contentEn, content_ar = @contentAr, updated_at = @updatedAt WHERE slug = @slug');

  const updatedAt = new Date().toISOString();
  let updated = 0;
  let skipped = 0;

  Object.entries(closings).forEach(([slug, texts]) => {
    const row = getStmt.get(slug);
    if (!row) {
      console.log(`Atlandı (bulunamadı): ${slug}`);
      skipped += 1;
      return;
    }
    // Zaten iç link eklenmişse tekrar eklenmesin (script iki kez çalışırsa).
    if (/\]\(\/(ulkeler|on-degerlendirme|evrak-rehberi|iletisim|hizmetler|hakkimizda|vize-reddi)/.test(row.content || '')) {
      console.log(`Atlandı (zaten link var): ${slug}`);
      skipped += 1;
      return;
    }
    updateStmt.run({
      slug,
      content: (row.content || '') + texts.tr,
      contentEn: (row.content_en || '') + texts.en,
      contentAr: (row.content_ar || '') + texts.ar,
      updatedAt,
    });
    updated += 1;
  });

  console.log(`${updated} yazıya iç link eklendi, ${skipped} yazı atlandı.`);
}

addInternalLinks();
