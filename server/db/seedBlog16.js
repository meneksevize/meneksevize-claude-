// On altıncı blog seed paketi — tek, zamana duyarlı gerçek haber: Karadağ
// hükümetinin 23 Temmuz 2026 açıklamasıyla, 1 Kasım 2026'dan itibaren Türk
// vatandaşlarından vize istemeye başlaması. Önceden vizesiz olan bir ülke
// artık vize gerektiriyor — hem gerçek haber değeri hem de yeni bir hizmet
// alanı (bkz. server/db/addMontenegro.js, 48. ülke sayfası) olduğu için
// ayrıca haber formatında bir blog yazısı olarak da işlendi.
// Kaynaklar: evrensel.net, gzt.com, uzmanpara.milliyet.com.tr (hepsi 1 Kasım
// 2026 tarihinde hemfikir).
import { db } from './connection.js';

const posts = [
  {
    slug: 'karadag-vize-zorunlulugu-1-kasim-2026',
    coverImageUrl: 'https://images.unsplash.com/photo-1657537245425-3fd5236a7879',
    publishedAt: '2026-10-13T09:00:00.000Z',
    category: 'genel',
    tr: {
      title: 'Karadağ\'a Vize Zorunluluğu Geliyor: 1 Kasım 2026\'dan İtibaren Neler Değişiyor?',
      excerpt: 'Karadağ, AB vize politikasına uyum kapsamında 1 Kasım 2026\'dan itibaren Türk vatandaşlarından vize istemeye başlıyor. Kimler muaf, başvuru nereden yapılır — tüm detaylar.',
      content: `Karadağ, yıllardır Türk vatandaşlarının vizesiz seyahat ettiği popüler bir Adriyatik destinasyonuydu. Ancak Karadağ hükümetinin 23 Temmuz 2026'da yaptığı açıklamayla bu durum değişiyor: **1 Kasım 2026'dan itibaren Türk vatandaşları Karadağ'a girişte vize almak zorunda**. 31 Ekim 2026'ya kadar mevcut vizesiz uygulama sürüyor.

## Neden Bu Değişiklik Yapılıyor?

Karadağ, 2028'de Avrupa Birliği'ne tam üye olmayı hedefliyor ve bu sürecin bir parçası olarak vize politikasını AB ile uyumlu hale getiriyor. Bu kapsamda Türkiye'nin yanı sıra Çin, Rusya, Suudi Arabistan ve Belarus vatandaşları için de vize zorunluluğu geliyor.

## Kimler Muaf?

İyi haber: geçerli bir **Schengen vizesi, ABD vizesi, İngiltere vizesi veya İrlanda vizesi/oturum izni** bulunan Türk vatandaşları, bu belgeyle Karadağ'a **30 güne kadar vizesiz** giriş yapabilecek. Yani özellikle Schengen vizesi olan müşterilerimizin büyük bir kısmı için pratikte bir değişiklik olmayacak — ancak belgenizin geçerli ve seyahat tarihinizi kapsıyor olması gerekiyor.

Diplomatik, hizmet ve hususi pasaport sahipleri de ayrı düzenlemeler kapsamında muafiyetlerini koruyor.

## Muaf Değilseniz Ne Yapmalısınız?

Yukarıdaki belgelerden hiçbirine sahip değilseniz, Karadağ seyahatiniz için önceden vize başvurusu yapmanız gerekiyor:

- **Başvuru yeri:** Ankara'daki Karadağ Büyükelçiliği veya İstanbul Karadağ Başkonsolosluğu
- **Randevu:** Konsolosluk randevuyla çalıştığından önce e-posta ile randevu talebinde bulunulması gerekiyor
- **Zamanlama:** Seyahatinizden en az 4 hafta önce başvurmanız öneriliyor
- **Gerekli belgeler:** Geçerli pasaport, doldurulmuş başvuru formu, gidiş-dönüş uçak bileti ve otel rezervasyonu, banka hesap özeti, uluslararası seyahat sağlık sigortası

## Hangi Vize Türleri Mevcut?

Turistik, ticari ve aile ziyareti olmak üzere üç ana kategori bulunuyor — detaylı evrak listelerini [Karadağ ülke sayfamızdan](/ulkeler/karadag) inceleyebilirsiniz.

## Bizim Yaklaşımımız

Bu yeni süreçte Karadağ seyahatinizin vize durumunu (muaf mısınız, değil misiniz) netleştiriyor, muaf değilseniz başvuru evrakınızı ve büyükelçilik/konsolosluk sürecini uçtan uca takip ediyoruz. [Ücretsiz ön değerlendirme](/on-degerlendirme) talep ederek durumunuzu hemen netleştirebilirsiniz.`,
    },
    en: {
      title: 'Montenegro Introduces a Visa Requirement: What Changes Starting November 1, 2026?',
      excerpt: 'As part of aligning its visa policy with the EU, Montenegro will require a visa from Turkish citizens starting November 1, 2026. Here\'s who\'s exempt and how to apply.',
      content: `Montenegro has long been a popular Adriatic destination that Turkish citizens could visit visa-free. That's changing: following the Montenegrin government's announcement on July 23, 2026, **Turkish citizens will need a visa to enter Montenegro starting November 1, 2026**. The current visa-free arrangement remains in effect until October 31, 2026.

## Why Is This Changing?

Montenegro aims to become a full EU member by 2028, and as part of this process it is aligning its visa policy with the EU. Alongside Turkey, citizens of China, Russia, Saudi Arabia, and Belarus will also become subject to the new visa requirement.

## Who's Exempt?

The good news: Turkish citizens holding a valid **Schengen visa, US visa, UK visa, or Ireland visa/residence permit** will still be able to enter Montenegro visa-free for up to 30 days using that document. This means, in practice, nothing changes for the large share of our customers who already hold a Schengen visa — as long as it's valid and covers your travel dates.

Holders of diplomatic, service, and special passports also retain their exemptions under separate arrangements.

## What If You're Not Exempt?

If you don't hold any of the documents above, you'll need to apply for a Montenegro visa in advance:

- **Where to apply:** The Montenegrin Embassy in Ankara or the Consulate General in Istanbul
- **Appointment:** Since the consulate works by appointment, you need to request one by email first
- **Timing:** It's recommended to apply at least 4 weeks before travel
- **Required documents:** Valid passport, completed application form, round-trip flight and hotel reservation, bank statement, international travel health insurance

## What Visa Types Are Available?

There are three main categories: tourist, business, and family visit — you can review the detailed document lists on [our Montenegro country page](/en/ulkeler/karadag).

## Our Approach

We help you determine your visa status for this new process (exempt or not), and if you're not exempt, we follow your application documents and the embassy/consulate process end to end. Request a [free pre-assessment](/en/on-degerlendirme) to clarify your situation right away.`,
    },
    ar: {
      title: 'الجبل الأسود يفرض شرط التأشيرة: ما الذي يتغير ابتداءً من 1 نوفمبر 2026؟',
      excerpt: 'في إطار مواءمة سياسة التأشيرات مع الاتحاد الأوروبي، سيطلب الجبل الأسود تأشيرة من المواطنين الترك ابتداءً من 1 نوفمبر 2026. من المعفى وكيفية التقديم — كل التفاصيل.',
      content: `كان الجبل الأسود منذ سنوات وجهة أدرياتيكية شهيرة يمكن للمواطنين الترك زيارتها دون تأشيرة. لكن هذا سيتغير: بعد إعلان حكومة الجبل الأسود في 23 يوليو 2026، **سيحتاج المواطنون الترك إلى تأشيرة لدخول الجبل الأسود ابتداءً من 1 نوفمبر 2026**. ويستمر العمل بنظام الدخول بدون تأشيرة الحالي حتى 31 أكتوبر 2026.

## لماذا يحدث هذا التغيير؟

يهدف الجبل الأسود إلى أن يصبح عضوًا كامل العضوية في الاتحاد الأوروبي بحلول عام 2028، وكجزء من هذه العملية يعمل على مواءمة سياسة التأشيرات مع الاتحاد الأوروبي. إلى جانب تركيا، سيشمل شرط التأشيرة الجديد أيضًا مواطني الصين وروسيا والسعودية وبيلاروسيا.

## من المعفى؟

الخبر الجيد: يمكن للمواطنين الترك الحاملين لتأشيرة **شنغن أو الولايات المتحدة أو المملكة المتحدة أو تأشيرة/إقامة أيرلندا** سارية المفعول الدخول إلى الجبل الأسود دون تأشيرة لمدة تصل إلى 30 يومًا بهذه الوثيقة. هذا يعني عمليًا أن شيئًا لن يتغير بالنسبة لغالبية عملائنا الذين يحملون تأشيرة شنغن — طالما كانت سارية المفعول وتغطي تواريخ سفرك.

كما يحتفظ حاملو الجوازات الدبلوماسية والخدمة والخاصة بمعافاتهم بموجب ترتيبات منفصلة.

## ماذا تفعل إذا لم تكن معفى؟

إذا لم تكن تحمل أيًا من الوثائق المذكورة أعلاه، فستحتاج إلى التقديم على تأشيرة الجبل الأسود مسبقًا:

- **مكان التقديم:** سفارة الجبل الأسود في أنقرة أو القنصلية العامة في إسطنبول
- **الموعد:** بما أن القنصلية تعمل بنظام المواعيد، يجب طلب موعد عبر البريد الإلكتروني أولاً
- **التوقيت:** يُنصح بالتقديم قبل السفر بأربعة أسابيع على الأقل
- **الوثائق المطلوبة:** جواز سفر ساري المفعول، استمارة طلب معبأة، حجز تذكرة طيران ذهاب وعودة وفندق، كشف حساب بنكي، تأمين صحي دولي للسفر

## ما هي أنواع التأشيرات المتاحة؟

توجد ثلاث فئات أساسية: سياحية وتجارية وزيارة عائلية — يمكنك مراجعة قوائم الوثائق التفصيلية في [صفحة الجبل الأسود](/ar/ulkeler/karadag).

## نهجنا

نساعدك في تحديد حالة التأشيرة الخاصة بك في هذا الإجراء الجديد (معفى أم لا)، وإذا لم تكن معفى، نتابع وثائق طلبك وعملية السفارة/القنصلية من البداية إلى النهاية. اطلب [تقييمًا مسبقًا مجانيًا](/ar/on-degerlendirme) لتوضيح حالتك على الفور.`,
    },
  },
];

function seedBlogPosts16() {
  const insert = db.prepare(`
    INSERT OR IGNORE INTO posts (
      slug, title, excerpt, content, cover_image_url, category, is_published, published_at, updated_at,
      title_en, excerpt_en, content_en, title_ar, excerpt_ar, content_ar
    )
    VALUES (
      @slug, @title, @excerpt, @content, @coverImageUrl, @category, 1, @publishedAt, @publishedAt,
      @titleEn, @excerptEn, @contentEn, @titleAr, @excerptAr, @contentAr
    )
  `);

  const insertMany = db.transaction((rows) => {
    let added = 0;
    rows.forEach((post) => {
      const result = insert.run({
        slug: post.slug,
        title: post.tr.title,
        excerpt: post.tr.excerpt,
        content: post.tr.content.trim(),
        coverImageUrl: post.coverImageUrl,
        category: post.category,
        publishedAt: post.publishedAt,
        titleEn: post.en.title,
        excerptEn: post.en.excerpt,
        contentEn: post.en.content.trim(),
        titleAr: post.ar.title,
        excerptAr: post.ar.excerpt,
        contentAr: post.ar.content.trim(),
      });
      if (result.changes > 0) added += 1;
    });
    return added;
  });

  const added = insertMany(posts);
  console.log(`${added} yeni blog yazısı eklendi (toplam ${posts.length} tanımlı yazı bu pakette).`);
}

seedBlogPosts16();
