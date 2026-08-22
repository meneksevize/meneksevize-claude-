// Yedinci blog seed paketi: yüksek arama niyetli iki yazı (bkz. seedBlog6.js
// deseni — üç dil aynı anda). (1) İspanya: en yoğun talep gören Schengen
// ülkelerinden olmasına rağmen kendine özel blog yazısı olmayan tek büyük
// destinasyondu (almanya/fransa/yunanistan/italya yazıları mevcut) — bu yazı
// ülke sayfasındaki "İlgili Blog Yazıları" bölümünü de besliyor. (2) "Schengen
// vizesi ne kadar sürede çıkar": doğrudan arama sorgusu formunda, satın alma
// niyeti yüksek bir bilgi sayfası.
import { db } from './connection.js';

const posts = [
  {
    slug: 'ispanya-vizesi-basvurusunda-bilinmesi-gerekenler',
    coverImageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-22T09:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'İspanya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Barcelona, Madrid ve Akdeniz kıyılarıyla İspanya, en çok tercih edilen Schengen destinasyonlarından. Başvuru sürecinin adımları ve dikkat edilmesi gereken noktalar.',
      content: `İspanya; Barcelona'nın Gaudí mimarisi, Madrid'in müzeleri ve Costa Brava'dan Costa del Sol'a uzanan plajlarıyla Türk gezginlerin en çok tercih ettiği Schengen ülkelerinden biridir. Bu yazıda İspanya vizesi başvurusunun nasıl işlediğini ve süreci kolaylaştıran noktaları derledik.

## Hangi Amaçla Gidiyorsunuz?

İspanya, tek bir Schengen vizesi altında farklı seyahat amaçlarını kapsar:

- **Turistik**: Şehir turları, plaj tatilleri, kültür gezileri
- **Ticari**: Teknoloji, turizm ve gıda sektörlerindeki fuarlar ve iş görüşmeleri
- **Aile ziyareti**: İspanya'da yaşayan aile üyelerini ziyaret

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Mali Yeterlilikte Dikkat Edilen Nokta

İspanya başvurularında banka hesap özetinizin **son üç aylık düzenli hareketleri** net şekilde göstermesi önemlidir. Başvurudan hemen önce yatırılan büyük tutarlar, mali yeterliliği güçlendirmek yerine soru işareti yaratabilir.

## Sezon Planlaması

Yaz ayları ve okul tatillerinde randevu yoğunluğu belirgin şekilde artar. Nisan-Mayıs gibi erken dönemde başvurmak, hem randevu bulmayı hem de olası ek evrak taleplerine zaman tanımayı kolaylaştırır.

## Bizim Yaklaşımımız

[İspanya vizesi sayfamızda](/ulkeler/ispanya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Spain Visa: The Application Process and What You Need to Know',
      excerpt: 'With Barcelona, Madrid, and its Mediterranean coasts, Spain is one of the most preferred Schengen destinations. The steps of the application process and key points to note.',
      content: `Spain — with Barcelona's Gaudí architecture, Madrid's museums, and beaches stretching from the Costa Brava to the Costa del Sol — is one of the Schengen countries most preferred by Turkish travelers. In this article, we compiled how the Spain visa application works and the points that make the process easier.

## What Is Your Purpose of Travel?

Spain covers different travel purposes under a single Schengen visa:

- **Tourist**: City tours, beach holidays, culture trips
- **Business**: Trade fairs and business meetings in the technology, tourism, and food sectors
- **Family visit**: Visiting family members living in Spain

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## The Key Point in Financial Sufficiency

In Spain applications, it's important that your bank statement clearly shows **regular activity over the last three months**. Large amounts deposited right before the application can raise questions instead of strengthening your financial sufficiency.

## Season Planning

Appointment demand rises noticeably in the summer months and school holidays. Applying early, around April-May, makes it easier both to find an appointment and to leave time for possible additional document requests.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Spain visa page](/ulkeler/ispanya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة إسبانيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'ببرشلونة ومدريد وسواحلها المتوسطية، تُعد إسبانيا من أكثر وجهات شنغن تفضيلًا. خطوات عملية التقديم والنقاط المهمة.',
      content: `إسبانيا — بعمارة غاودي في برشلونة ومتاحف مدريد وشواطئها الممتدة من كوستا برافا إلى كوستا ديل سول — من دول شنغن الأكثر تفضيلًا لدى المسافرين الأتراك. في هذا المقال، جمعنا كيفية سير طلب تأشيرة إسبانيا والنقاط التي تُسهِّل العملية.

## ما هو غرض سفرك؟

تشمل إسبانيا أغراض سفر مختلفة تحت تأشيرة شنغن واحدة:

- **سياحي**: جولات المدن، عطلات الشواطئ، الرحلات الثقافية
- **تجاري**: المعارض واجتماعات العمل في قطاعات التكنولوجيا والسياحة والأغذية
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في إسبانيا

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## النقطة المهمة في الكفاية المالية

في طلبات إسبانيا، من المهم أن يُظهر كشف حسابك المصرفي بوضوح **حركة منتظمة خلال الأشهر الثلاثة الأخيرة**. المبالغ الكبيرة المودعة قبل التقديم مباشرة قد تثير تساؤلات بدلًا من تقوية كفايتك المالية.

## التخطيط الموسمي

يرتفع الطلب على المواعيد بشكل ملحوظ في أشهر الصيف والعطلات المدرسية. التقديم المبكر، حوالي أبريل-مايو، يُسهِّل الحصول على موعد ويترك وقتًا لأي طلبات وثائق إضافية محتملة.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة إسبانيا لدينا](/ulkeler/ispanya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'schengen-vizesi-ne-kadar-surede-cikar',
    coverImageUrl: '/photos/world-map.webp',
    publishedAt: '2026-08-22T09:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Schengen Vizesi Ne Kadar Sürede Çıkar? Süreci Etkileyen Faktörler',
      excerpt: 'Standart değerlendirme süresi, randevu bekleme süresiyle karıştırılıyor. Gerçek zaman çizelgesi ve süreci uzatan/kısaltan faktörler.',
      content: `"Schengen vizesi kaç günde çıkar?" — en sık aldığımız sorulardan biri. Cevap iki ayrı süreden oluşur ve bunların karıştırılması, seyahat planlamasında en yaygın hataya yol açar.

## İki Ayrı Süre: Randevu + Değerlendirme

Toplam süreniz şu iki parçanın toplamıdır:

1. **Randevu bekleme süresi**: Başvuru merkezinde size verilen en yakın randevu tarihi — sezona ve ülkeye göre birkaç günden birkaç haftaya değişebilir
2. **Değerlendirme süresi**: Evraklarınızın teslim edildiği günden kararın çıkmasına kadar geçen süre

## Değerlendirme Süresi: Kural Ne Diyor?

Schengen Vize Kodu'na göre standart değerlendirme süresi başvurudan itibaren **15 takvim günüdür**. Ancak bu süre, ek inceleme gereken durumlarda **45 güne kadar** uzatılabilir. Pratikte çoğu başvuru 1-2 hafta içinde sonuçlanır; yaz sezonu ve bayram öncesi dönemlerde süreler uzayabilir.

## Süreci Uzatan Faktörler

- Eksik veya tutarsız evrak (en sık neden — ek evrak talebi süreci baştan uzatır)
- Yoğun sezon (Haziran-Eylül, yılbaşı ve bayram öncesi)
- İlk kez başvuru (seyahat geçmişi olanlara kıyasla daha detaylı inceleme)
- Ek doğrulama gereken özel durumlar (davet mektubu teyidi gibi)

## Süreci Kısaltan Faktörler

- Eksiksiz ve kendi içinde tutarlı bir dosya
- Temiz Schengen seyahat geçmişi
- Sezon dışı başvuru

## Ne Zaman Başvurmalı?

Kural olarak seyahat tarihinden en erken 6 ay önce başvurabilirsiniz. Önerimiz: tarihiniz netleşir netleşmez, ideal olarak seyahatten **6-8 hafta önce** süreci başlatmak. Bu, hem randevu bulmayı hem olası ek evrak taleplerini strese sokmadan karşılamayı mümkün kılar.

## Bizim Yaklaşımımız

Dosyanızı teslim öncesi bir bütün olarak kontrol ediyor, en sık gecikme nedeni olan eksik/tutarsız evrak riskini başvurudan önce kapatıyoruz. [Schengen vizesi sayfamızda](/ulkeler/schengen) güncel bilgileri bulabilir, [ücretsiz ön değerlendirme](/on-degerlendirme) ile kendi zaman planınızı birlikte çıkarabiliriz. Sık sorulan diğer sorular için [SSS sayfamıza](/sss) göz atabilirsiniz.`,
    },
    en: {
      title: 'How Long Does a Schengen Visa Take? The Factors That Affect the Process',
      excerpt: 'The standard evaluation period is often confused with the appointment waiting time. The real timeline, and the factors that lengthen or shorten the process.',
      content: `"How many days does a Schengen visa take?" — one of the questions we get most often. The answer consists of two separate periods, and confusing them leads to the most common mistake in travel planning.

## Two Separate Periods: Appointment + Evaluation

Your total time is the sum of these two parts:

1. **Appointment waiting time**: The earliest appointment date given to you at the application center — can vary from a few days to a few weeks depending on the season and country
2. **Evaluation period**: The time from the day your documents are submitted until the decision is issued

## The Evaluation Period: What Does the Rule Say?

According to the Schengen Visa Code, the standard evaluation period is **15 calendar days** from the application. However, this period can be extended **up to 45 days** in cases requiring additional review. In practice, most applications are resolved within 1-2 weeks; times can extend during the summer season and pre-holiday periods.

## Factors That Lengthen the Process

- Missing or inconsistent documents (the most common reason — an additional document request restarts the clock)
- Peak season (June-September, before New Year and holidays)
- First-time application (more detailed review compared to those with travel history)
- Special cases requiring additional verification (such as invitation letter confirmation)

## Factors That Shorten the Process

- A complete and internally consistent file
- A clean Schengen travel history
- Applying off-season

## When Should You Apply?

As a rule, you can apply at the earliest 6 months before your travel date. Our recommendation: start the process as soon as your date is clear, ideally **6-8 weeks before** your trip. This makes it possible both to find an appointment and to handle any additional document requests without stress.

## Our Approach

We check your file as a whole before submission, closing off the risk of missing/inconsistent documents — the most common cause of delays — before you apply. You can find up-to-date information on [our Schengen visa page](/ulkeler/schengen), and we can draw up your own timeline together with a [free pre-assessment](/on-degerlendirme). For other frequently asked questions, check out [our FAQ page](/sss).`,
    },
    ar: {
      title: 'كم تستغرق تأشيرة شنغن؟ العوامل المؤثرة في العملية',
      excerpt: 'كثيرًا ما يُخلط بين مدة التقييم القياسية ومدة انتظار الموعد. الجدول الزمني الحقيقي والعوامل التي تُطيل أو تُقصِّر العملية.',
      content: `"كم يومًا تستغرق تأشيرة شنغن؟" — من أكثر الأسئلة التي نتلقاها. الإجابة تتكون من فترتين منفصلتين، والخلط بينهما يؤدي إلى الخطأ الأكثر شيوعًا في التخطيط للسفر.

## فترتان منفصلتان: الموعد + التقييم

وقتك الإجمالي هو مجموع هذين الجزأين:

1. **مدة انتظار الموعد**: أقرب موعد يُمنح لك في مركز التقديم — قد تتراوح من بضعة أيام إلى بضعة أسابيع حسب الموسم والدولة
2. **مدة التقييم**: الوقت من يوم تسليم وثائقك حتى صدور القرار

## مدة التقييم: ماذا تقول القاعدة؟

وفقًا لقانون تأشيرة شنغن، مدة التقييم القياسية هي **15 يومًا تقويميًا** من التقديم. لكن يمكن تمديد هذه المدة **حتى 45 يومًا** في الحالات التي تتطلب مراجعة إضافية. عمليًا، تُحسم معظم الطلبات في غضون 1-2 أسبوع؛ وقد تطول المدد في موسم الصيف وقبل الأعياد.

## عوامل تُطيل العملية

- وثائق ناقصة أو غير متسقة (السبب الأكثر شيوعًا — طلب وثيقة إضافية يُعيد العد من البداية)
- موسم الذروة (يونيو-سبتمبر، وقبل رأس السنة والأعياد)
- التقديم لأول مرة (مراجعة أكثر تفصيلًا مقارنةً بمن لديهم تاريخ سفر)
- حالات خاصة تتطلب تحققًا إضافيًا (مثل تأكيد خطاب الدعوة)

## عوامل تُقصِّر العملية

- ملف كامل ومتسق داخليًا
- تاريخ سفر نظيف في شنغن
- التقديم خارج الموسم

## متى يجب التقديم؟

كقاعدة، يمكنك التقديم قبل تاريخ سفرك بستة أشهر على الأكثر تبكيرًا. نصيحتنا: ابدأ العملية فور وضوح تاريخك، ومثاليًا قبل رحلتك بـ **6-8 أسابيع**. هذا يجعل من الممكن الحصول على موعد والتعامل مع أي طلبات وثائق إضافية دون توتر.

## نهجنا

نتحقق من ملفك كوحدة واحدة قبل التسليم، ونُغلق خطر الوثائق الناقصة/غير المتسقة — السبب الأكثر شيوعًا للتأخير — قبل التقديم. يمكنك أن تجد معلومات حديثة في [صفحة تأشيرة شنغن لدينا](/ulkeler/schengen)، ويمكننا وضع جدولك الزمني معًا عبر [التقييم المسبق المجاني](/on-degerlendirme). وللأسئلة الشائعة الأخرى، راجع [صفحة الأسئلة الشائعة](/sss).`,
    },
  },
];

function seedBlogPosts7() {
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

seedBlogPosts7();
console.log('Yedinci blog seed paketi tamamlandı.');
