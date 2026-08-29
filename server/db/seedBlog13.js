// On üçüncü blog seed paketi: 36 ülkelik içerik boşluğunu kapatma serisinin
// altıncı grubu (bkz. seedBlog8-12.js), Schengen dışı büyük destinasyonlar —
// Güney Kore, Çin, Hindistan, Meksika, Yeni Zelanda, Singapur.
import { db } from './connection.js';

const posts = [
  {
    slug: 'guney-kore-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1612150139260-09745e8a1d55?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T14:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Güney Kore Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'K-pop ve dizi kültürüne duyulan ilginin yanı sıra elektronik ve otomotiv sektöründeki iş bağlantılarıyla talep gören Güney Kore\'de Türk vatandaşları vize muafiyeti kapsamında değil.',
      content: `Güney Kore, popüler kültürüne (K-pop, dizi/film endüstrisi) duyulan ilginin yanı sıra elektronik ve otomotiv sektöründeki güçlü iş bağlantılarıyla hem turistik hem ticari ziyaretlerde talep gören bir ülkedir. Bu yazıda Güney Kore vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Seul merkezli şehir turları, K-pop ve kültür rotaları
- **Ticari**: Elektronik ve otomotiv sektörü fuarları
- **Aile ziyareti**: Güney Kore'de yaşayan aile üyelerini ziyaret

## Vize Muafiyeti Kapsamında Değilsiniz

Türk vatandaşları vize muafiyeti kapsamında olmadığından başvurular konsolosluk üzerinden değerlendirilir. Detaylı ve tutarlı bir seyahat planı ile güncel banka hesap hareketleri değerlendirme sürecinde önemli rol oynar.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, detaylı seyahat planı, uçak/otel rezervasyonu, güncel banka hesap özeti
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## İşlem Süresi

Güney Kore vize başvuruları genellikle 1-2 hafta içinde sonuçlanır.

## Bizim Yaklaşımımız

[Güney Kore vizesi sayfamızda](/ulkeler/guney-kore) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'South Korea Visa: The Application Process and What You Need to Know',
      excerpt: 'In demand thanks to interest in K-pop and drama culture as well as business ties in the electronics and automotive sectors, South Korea does not grant visa exemption to Turkish citizens.',
      content: `South Korea is a country in demand for both tourist and business visits, thanks to interest in its popular culture (K-pop, TV/film industry) as well as its strong business ties in the electronics and automotive sectors. In this article, we compiled the South Korea visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Seoul-based city tours, K-pop and culture routes
- **Business**: Electronics and automotive sector trade fairs
- **Family visit**: Visiting family members living in South Korea

## You Are Not Covered by Visa Exemption

Since Turkish citizens are not covered by visa exemption, applications are evaluated through the consulate. A detailed and consistent travel plan along with up-to-date bank account activity plays an important role in the evaluation process.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, detailed travel plan, flight/hotel reservations, up-to-date bank statement
4. Submit your application in full on the appointment day

## Processing Time

South Korea visa applications are typically resolved within 1-2 weeks.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our South Korea visa page](/ulkeler/guney-kore). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة كوريا الجنوبية: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'مطلوبة بفضل الاهتمام بثقافة K-pop والمسلسلات إلى جانب الروابط التجارية في قطاعي الإلكترونيات والسيارات، لا تمنح كوريا الجنوبية إعفاءً من التأشيرة للمواطنين الأتراك.',
      content: `كوريا الجنوبية دولة مطلوبة لكل من الزيارات السياحية والتجارية، بفضل الاهتمام بثقافتها الشعبية (K-pop، صناعة الدراما/الأفلام) إلى جانب روابطها التجارية القوية في قطاعي الإلكترونيات والسيارات. في هذا المقال، جمعنا عملية طلب تأشيرة كوريا الجنوبية.

## ما هو غرض سفرك؟

- **سياحي**: جولات مدينة سيول، مسارات K-pop والثقافة
- **تجاري**: معارض قطاعي الإلكترونيات والسيارات
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في كوريا الجنوبية

## أنت لست ضمن الإعفاء من التأشيرة

بما أن المواطنين الأتراك ليسوا مشمولين بالإعفاء من التأشيرة، تُقيَّم الطلبات عبر القنصلية. تلعب خطة سفر مفصّلة ومتسقة إلى جانب حركة حساب مصرفي محدّثة دورًا مهمًا في عملية التقييم.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، خطة سفر مفصّلة، حجوزات الطيران/الفندق، كشف حساب مصرفي محدّث
4. قدّم طلبك كاملًا في يوم الموعد

## مدة المعالجة

تُحسم طلبات تأشيرة كوريا الجنوبية عادةً في غضون 1-2 أسبوع.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة كوريا الجنوبية لدينا](/ulkeler/guney-kore). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'cin-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1693721783596-afebf1d4354f?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T14:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Çin Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Tekstil, elektronik ve toptan ticaret sektöründeki fuar ziyaretleriyle öne çıkan Çin\'de davet mektubunun başvuruyla tutarlı olması süreci hızlandırıyor.',
      content: `Çin'e yapılan başvuruların önemli bir kısmı tekstil, elektronik ve toptan ticaret sektöründeki tedarik/fuar ziyaretlerinden oluşur; Guangzhou, Yiwu ve Şangay bu ziyaretlerde en sık tercih edilen şehirlerdir. Bu yazıda Çin vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Ticari**: Tekstil, elektronik ve toptan ticaret fuarları/tedarik ziyaretleri
- **Turistik**: Pekin'in tarihi dokusu, Şangay'ın modern silüeti
- **Aile ziyareti**: Çin'de yaşayan aile üyelerini ziyaret

## Davet Mektubu Tutarlılığı

Ticari başvurularda Çinli iş ortağından alınan davet mektubunun (genellikle fuar organizatörü ya da şirket tarafından düzenlenir) başvuru ile tutarlı olması süreci hızlandırır.

## Vizesiz Transit İmkânı

Bazı şehirlerde belirli milliyetler için geçerli 72/144 saatlik vizesiz transit imkânı da güzergah planlamasında değerlendirilebilir; bu seçeneğin sizin için uygun olup olmadığını ön görüşmede birlikte netleştiririz.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, davet mektubu (ticari ziyaretlerde), uçak/otel rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## İşlem Süresi

Ortalama 4-7 iş günü içinde sonuçlanır.

## Bizim Yaklaşımımız

[Çin vizesi sayfamızda](/ulkeler/cin) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'China Visa: The Application Process and What You Need to Know',
      excerpt: "Standing out for trade-fair visits in the textile, electronics, and wholesale trade sectors, China's process moves faster when the invitation letter is consistent with the application.",
      content: `A significant portion of applications to China consist of supply/trade-fair visits in the textile, electronics, and wholesale trade sectors; Guangzhou, Yiwu, and Shanghai are the most frequently preferred cities for these visits. In this article, we compiled the China visa application process.

## What Is Your Purpose of Travel?

- **Business**: Textile, electronics, and wholesale trade fairs/supply visits
- **Tourist**: Beijing's historic fabric, Shanghai's modern skyline
- **Family visit**: Visiting family members living in China

## Invitation Letter Consistency

For business applications, having the invitation letter from your Chinese business partner (usually issued by the trade fair organizer or the company) be consistent with your application speeds up the process.

## The Visa-Free Transit Option

Some cities offer a 72/144-hour visa-free transit option valid for certain nationalities, which can be factored into route planning; we clarify together during the pre-assessment whether this option applies to you.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, invitation letter (for business visits), flight/hotel reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Processing Time

Typically resolved within an average of 4-7 business days.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our China visa page](/ulkeler/cin). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة الصين: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'تبرز الصين بزيارات المعارض التجارية في قطاعات النسيج والإلكترونيات وتجارة الجملة، وتتسارع عمليتها عندما يكون خطاب الدعوة متسقًا مع الطلب.',
      content: `يتكون جزء كبير من الطلبات إلى الصين من زيارات التوريد/المعارض في قطاعات النسيج والإلكترونيات وتجارة الجملة؛ وتُعد غوانزو ويوو وشنغهاي المدن الأكثر تفضيلًا لهذه الزيارات. في هذا المقال، جمعنا عملية طلب تأشيرة الصين.

## ما هو غرض سفرك؟

- **تجاري**: معارض/زيارات توريد في قطاعات النسيج والإلكترونيات وتجارة الجملة
- **سياحي**: النسيج التاريخي لبكين، أفق شنغهاي الحديث
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في الصين

## اتساق خطاب الدعوة

بالنسبة للطلبات التجارية، فإن اتساق خطاب الدعوة من شريكك التجاري الصيني (يُصدر عادةً من منظم المعرض أو الشركة) مع طلبك يُسرّع العملية.

## خيار العبور دون تأشيرة

تقدم بعض المدن خيار عبور دون تأشيرة لمدة 72/144 ساعة صالح لجنسيات معينة، ويمكن أخذه بعين الاعتبار عند تخطيط المسار؛ نوضّح معًا خلال التقييم المسبق ما إذا كان هذا الخيار ينطبق عليك.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، خطاب الدعوة (لزيارات العمل)، حجوزات الطيران/الفندق، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## مدة المعالجة

تُحسم عادةً في غضون 4-7 أيام عمل في المتوسط.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة الصين لدينا](/ulkeler/cin). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'hindistan-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1545562083-c583d014b4f2?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T14:10:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Hindistan Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'e-Vize sistemi sayesinde tamamen online ve hızlı sonuçlanan Hindistan başvurusunda Taç Mahal, Kerala ve Rajasthan en çok tercih edilen rotalar.',
      content: `Hindistan, e-Vize (e-Tourist/e-Business Visa) sistemi sayesinde Türk vatandaşları için tamamen online ve nispeten hızlı sonuçlanan bir başvuru süreci sunar. Bu yazıda Hindistan vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Taç Mahal, Kerala ve Rajasthan rotaları
- **Ticari**: Tekstil ve ilaç sektöründeki iş bağlantıları
- **Aile ziyareti**: Hindistan'da yaşayan aile üyelerini ziyaret

## e-Vize Başvurusunda Dikkat Edilecek

E-Vize başvurusunda pasaport taramasının ve dijital fotoğrafın net olması onay sürecini hızlandırır. Bazı sınır bölgelerine (Pakistan, Çin sınırı gibi) yapılacak seyahatlerde ek izin gerekebileceğinden güzergahınızı önceden netleştirmenizi öneririz.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. e-Vize başvurusu için gerekli evrakları hazırlayın: net pasaport taraması, dijital fotoğraf, uçak/otel rezervasyonu
3. Online başvurunuzu tamamlayın
4. Onay e-postanızı seyahatiniz boyunca yanınızda bulundurun

## İşlem Süresi

E-Vize başvurularında genellikle 3-5 iş günü içinde sonuçlanır.

## Bizim Yaklaşımımız

[Hindistan vizesi sayfamızda](/ulkeler/hindistan) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'India Visa: The Application Process and What You Need to Know',
      excerpt: 'Thanks to the e-Visa system, India\'s application is fully online and resolves quickly, with the Taj Mahal, Kerala, and Rajasthan the most preferred routes.',
      content: `India, thanks to its e-Visa (e-Tourist/e-Business Visa) system, offers a fully online and relatively fast application process for Turkish citizens. In this article, we compiled the India visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: The Taj Mahal, Kerala, and Rajasthan routes
- **Business**: Business ties in the textile and pharmaceutical sectors
- **Family visit**: Visiting family members living in India

## What to Watch for in the e-Visa Application

In the e-Visa application, having a clear passport scan and digital photo speeds up the approval process. Since some border regions (such as the Pakistan or China border) may require additional permits, we recommend clarifying your route in advance.

## Application Steps

1. Clarify your purpose of travel and dates
2. Prepare the documents required for the e-Visa application: clear passport scan, digital photo, flight/hotel reservations
3. Complete your online application
4. Keep your approval email with you throughout your trip

## Processing Time

E-Visa applications are typically resolved within 3-5 business days.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our India visa page](/ulkeler/hindistan). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة الهند: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بفضل نظام التأشيرة الإلكترونية، طلب الهند إلكتروني بالكامل ويُحسم بسرعة، وتاج محل وكيرالا وراجستان هي المسارات الأكثر تفضيلًا.',
      content: `تُقدّم الهند، بفضل نظام التأشيرة الإلكترونية (السياحية/التجارية الإلكترونية)، عملية طلب إلكترونية بالكامل وسريعة نسبيًا للمواطنين الأتراك. في هذا المقال، جمعنا عملية طلب تأشيرة الهند.

## ما هو غرض سفرك؟

- **سياحي**: مسارات تاج محل وكيرالا وراجستان
- **تجاري**: الروابط التجارية في قطاعي النسيج والأدوية
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في الهند

## ما يجب الانتباه إليه في طلب التأشيرة الإلكترونية

في طلب التأشيرة الإلكترونية، وضوح مسح جواز السفر والصورة الرقمية يُسرّع عملية الموافقة. نظرًا لأن بعض المناطق الحدودية (مثل حدود باكستان أو الصين) قد تتطلب تصاريح إضافية، ننصح بتوضيح مسارك مسبقًا.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. حضّر الوثائق المطلوبة لطلب التأشيرة الإلكترونية: مسح جواز سفر واضح، صورة رقمية، حجوزات الطيران/الفندق
3. أكمل طلبك عبر الإنترنت
4. احتفظ ببريد الموافقة الإلكتروني معك طوال رحلتك

## مدة المعالجة

تُحسم طلبات التأشيرة الإلكترونية عادةً في غضون 3-5 أيام عمل.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة الهند لدينا](/ulkeler/hindistan). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'meksika-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1533251568747-725d423801d3?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T14:15:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Meksika Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Geçerli bir ABD, Kanada, İngiltere veya Schengen vizesi olan Türk vatandaşları için Meksika\'da az bilinen ama çok değerli bir vize muafiyeti kısayolu var.',
      content: `Meksika, geçerli bir ABD, Kanada, İngiltere veya Schengen vizesine ya da bu ülkelerden birinde oturum iznine sahip Türk vatandaşlarına vize muafiyeti tanır — bu, genellikle bilinmeyen ama çok değerli bir kısayoldur. Bu yazıda Meksika vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Cancún, Riviera Maya, Mexico City rotaları
- **Ticari**: İş görüşmeleri ve fuarlar
- **Aile ziyareti**: Meksika'da yaşayan aile üyelerini ziyaret

## Sizin İçin Hangi Yol Geçerli?

Geçerli bir ABD, Kanada, İngiltere veya Schengen vizeniz ya da bu ülkelerden birinde oturum izniniz varsa, online olarak kısa sürede "yetkilendirme" (authorization) alabilirsiniz. Bu şartları taşımıyorsanız, standart turistik vize süreci Meksika büyükelçiliği üzerinden yürütülür. Hangi yolun sizin için geçerli olduğunu ön görüşmede birlikte netleştiriyoruz.

## Başvuru Adımları (Muafiyet Kapsamındaysanız)

1. Geçerli ABD/Kanada/İngiltere/Schengen vizenizi veya oturum izninizi kontrol edin
2. Online yetkilendirme başvurunuzu tamamlayın
3. Onay belgenizi seyahatiniz boyunca yanınızda bulundurun

## Başvuru Adımları (Standart Vize İçin)

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Meksika büyükelçiliğinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, uçak/otel rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Meksika vizesi sayfamızda](/ulkeler/meksika) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Mexico Visa: The Application Process and What You Need to Know',
      excerpt: 'For Turkish citizens holding a valid US, Canada, UK, or Schengen visa, Mexico offers a little-known but very valuable visa exemption shortcut.',
      content: `Mexico grants visa exemption to Turkish citizens who hold a valid US, Canada, UK, or Schengen visa, or a residence permit in one of those countries — a shortcut that's often unknown but very valuable. In this article, we compiled the Mexico visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: The Cancún, Riviera Maya, and Mexico City routes
- **Business**: Business meetings and trade fairs
- **Family visit**: Visiting family members living in Mexico

## Which Path Applies to You?

If you have a valid US, Canada, UK, or Schengen visa, or a residence permit in one of these countries, you can get an online "authorization" within a short time. If you don't meet these conditions, the standard tourist visa process is carried out through the Mexican embassy. We clarify together during the pre-assessment which path applies to you.

## Application Steps (If Covered by Exemption)

1. Check your valid US/Canada/UK/Schengen visa or residence permit
2. Complete your online authorization application
3. Keep your confirmation document with you throughout your trip

## Application Steps (For the Standard Visa)

1. Clarify your purpose of travel and dates
2. Get an appointment from the Mexican embassy
3. Prepare your documents: passport, biometric photo, flight/hotel reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Mexico visa page](/ulkeler/meksika). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة المكسيك: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'للمواطنين الأتراك الحاصلين على تأشيرة سارية للولايات المتحدة أو كندا أو بريطانيا أو شنغن، تقدم المكسيك مسارًا مختصرًا للإعفاء من التأشيرة غير معروف كثيرًا لكنه قيّم جدًا.',
      content: `تمنح المكسيك إعفاءً من التأشيرة للمواطنين الأتراك الحاصلين على تأشيرة سارية للولايات المتحدة أو كندا أو بريطانيا أو شنغن، أو إقامة في إحدى هذه الدول — وهو مسار مختصر غالبًا ما يكون غير معروف لكنه قيّم جدًا. في هذا المقال، جمعنا عملية طلب تأشيرة المكسيك.

## ما هو غرض سفرك؟

- **سياحي**: مسارات كانكون وريفيرا مايا ومكسيكو سيتي
- **تجاري**: اجتماعات العمل والمعارض
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في المكسيك

## أي مسار ينطبق عليك؟

إذا كان لديك تأشيرة سارية للولايات المتحدة أو كندا أو بريطانيا أو شنغن، أو إقامة في إحدى هذه الدول، يمكنك الحصول على "تصريح" إلكتروني خلال وقت قصير. إذا لم تستوفِ هذه الشروط، تُنفَّذ عملية التأشيرة السياحية القياسية عبر السفارة المكسيكية. نوضّح معًا خلال التقييم المسبق أي مسار ينطبق عليك.

## خطوات التقديم (إذا كنت مشمولًا بالإعفاء)

1. تحقق من تأشيرتك السارية للولايات المتحدة/كندا/بريطانيا/شنغن أو إقامتك
2. أكمل طلب التصريح الإلكتروني
3. احتفظ بوثيقة التأكيد معك طوال رحلتك

## خطوات التقديم (للتأشيرة القياسية)

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من السفارة المكسيكية
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، حجوزات الطيران/الفندق، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة المكسيك لدينا](/ulkeler/meksika). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'yeni-zelanda-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1591640040362-f55d95a6b2bc?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T14:20:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Yeni Zelanda Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Türk vatandaşlarına elektronik seyahat izni sunmayan Yeni Zelanda\'da başvurular standart ziyaretçi vizesi kapsamında, tamamen online bir sistem üzerinden değerlendiriliyor.',
      content: `Yeni Zelanda, Türk vatandaşlarına elektronik seyahat izni (NZeTA) sunmadığından başvurular standart ziyaretçi vizesi kapsamında, tamamen online bir sistem (Immigration New Zealand) üzerinden değerlendirilir. Bu yazıda Yeni Zelanda vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Milford Sound, Queenstown ve Kuzey Ada doğa rotaları
- **Ticari**: İş görüşmeleri
- **Aile ziyareti**: Yeni Zelanda'da yaşayan aile üyelerini ziyaret

## Coğrafi Uzaklık Nedeniyle Erken Başvuru Önemli

Coğrafi uzaklık nedeniyle işlem süreleri diğer bazı destinasyonlara göre daha uzun olabilir; bu yüzden seyahat tarihinizden yeterince önce başvurmanızı öneririz. Mali yeterlilik ve seyahat planının tutarlılığı değerlendirmede önemli rol oynar.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Online başvuru sistemi üzerinden hesap oluşturun
3. Evraklarınızı hazırlayın: pasaport, dijital fotoğraf, seyahat planı, mali yeterlilik belgeleri
4. Başvurunuzu online tamamlayın

## İşlem Süresi

Ortalama birkaç hafta sürebilir.

## Bizim Yaklaşımımız

[Yeni Zelanda vizesi sayfamızda](/ulkeler/yeni-zelanda) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'New Zealand Visa: The Application Process and What You Need to Know',
      excerpt: 'Since New Zealand does not offer an electronic travel authorization to Turkish citizens, applications are evaluated under the standard visitor visa through a fully online system.',
      content: `New Zealand, since it does not offer Turkish citizens an electronic travel authorization (NZeTA), evaluates applications under the standard visitor visa through a fully online system (Immigration New Zealand). In this article, we compiled the New Zealand visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Milford Sound, Queenstown, and North Island nature routes
- **Business**: Business meetings
- **Family visit**: Visiting family members living in New Zealand

## Applying Early Matters Due to Geographic Distance

Due to geographic distance, processing times can be longer than for some other destinations, so we recommend applying well ahead of your travel date. Financial sufficiency and the consistency of your travel plan play an important role in the evaluation.

## Application Steps

1. Clarify your purpose of travel and dates
2. Create an account through the online application system
3. Prepare your documents: passport, digital photo, travel plan, proof of financial sufficiency
4. Complete your application online

## Processing Time

Can take an average of several weeks.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our New Zealand visa page](/ulkeler/yeni-zelanda). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة نيوزيلندا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بما أن نيوزيلندا لا تقدّم تصريح سفر إلكتروني للمواطنين الأتراك، تُقيَّم الطلبات ضمن تأشيرة الزائر القياسية عبر نظام إلكتروني بالكامل.',
      content: `نيوزيلندا، بما أنها لا تقدّم للمواطنين الأتراك تصريح سفر إلكتروني (NZeTA)، تُقيّم الطلبات ضمن تأشيرة الزائر القياسية عبر نظام إلكتروني بالكامل (Immigration New Zealand). في هذا المقال، جمعنا عملية طلب تأشيرة نيوزيلندا.

## ما هو غرض سفرك؟

- **سياحي**: مسارات ميلفورد ساوند وكوينزتاون وطبيعة الجزيرة الشمالية
- **تجاري**: اجتماعات العمل
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في نيوزيلندا

## التقديم المبكر مهم بسبب البعد الجغرافي

بسبب البعد الجغرافي، قد تكون مدد المعالجة أطول مقارنة ببعض الوجهات الأخرى، لذا ننصح بالتقديم قبل موعد سفرك بوقت كافٍ. تلعب الكفاية المالية واتساق خطة سفرك دورًا مهمًا في التقييم.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. أنشئ حسابًا عبر نظام التقديم الإلكتروني
3. حضّر وثائقك: جواز السفر، صورة رقمية، خطة السفر، وثائق الكفاية المالية
4. أكمل طلبك عبر الإنترنت

## مدة المعالجة

قد تستغرق عدة أسابيع في المتوسط.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة نيوزيلندا لدينا](/ulkeler/yeni-zelanda). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'singapur-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1774075884764-be7319c06e08?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T14:25:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Singapur Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Türk vatandaşlarının başvurularının doğrudan büyükelçilik yerine yetkilendirilmiş yerel ajanslar üzerinden değerlendirildiği Singapur\'da doğru ajans seçimi önem taşıyor.',
      content: `Singapur, Türk vatandaşlarının vize başvurularını doğrudan büyükelçilik yerine yetkilendirilmiş yerel ajanslar üzerinden değerlendirdiği, bölgedeki birkaç istisnai ülkeden biridir. Bu yazıda Singapur vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Sentosa Adası, şehir mimarisi
- **Ticari**: Finans ve teknoloji sektörü ziyaretleri
- **Aile ziyareti**: Singapur'da yaşayan aile üyelerini ziyaret

## Doğru Ajans Seçimi Önemli

Başvuru sürecinin doğru ajans ve doğru evrak setiyle yürütülmesi önemlidir — büyükelçiliğe doğrudan başvuru yapılamaz. Genellikle Malezya veya Endonezya gezisiyle birlikte planlanır; bölgesel bir güzergahınız varsa bunu netleştirmenizi öneririz.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkilendirilmiş ajans üzerinden başvurunuzu hazırlayın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, uçak/otel rezervasyonu, mali yeterlilik belgeleri
4. Başvurunuzu ajans aracılığıyla teslim edin

## İşlem Süresi

Ortalama 3-5 iş günü içinde sonuçlanır.

## Bizim Yaklaşımımız

[Singapur vizesi sayfamızda](/ulkeler/singapur) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Singapore Visa: The Application Process and What You Need to Know',
      excerpt: "One of the few countries in the region where Turkish citizens' applications are evaluated through authorized local agencies rather than directly through the embassy — choosing the right agency matters.",
      content: `Singapore is one of the few exceptional countries in the region where Turkish citizens' visa applications are evaluated through authorized local agencies rather than directly through the embassy. In this article, we compiled the Singapore visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Sentosa Island, city architecture
- **Business**: Finance and technology sector visits
- **Family visit**: Visiting family members living in Singapore

## Choosing the Right Agency Matters

It's important that the application process is carried out through the right agency with the right document set — you cannot apply directly to the embassy. It's often planned together with a Malaysia or Indonesia trip; if you have a regional route, we recommend clarifying this.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Prepare your application through an authorized agency
3. Prepare your documents: passport, biometric photo, flight/hotel reservations, proof of financial sufficiency
4. Submit your application through the agency

## Processing Time

Typically resolved within an average of 3-5 business days.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Singapore visa page](/ulkeler/singapur). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة سنغافورة: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'واحدة من الدول القليلة في المنطقة التي تُقيَّم فيها طلبات المواطنين الأتراك عبر وكالات محلية معتمدة بدلًا من السفارة مباشرة — اختيار الوكالة الصحيحة مهم.',
      content: `سنغافورة واحدة من الدول الاستثنائية القليلة في المنطقة التي تُقيَّم فيها طلبات تأشيرة المواطنين الأتراك عبر وكالات محلية معتمدة بدلًا من السفارة مباشرة. في هذا المقال، جمعنا عملية طلب تأشيرة سنغافورة.

## ما هو غرض سفرك؟

- **سياحي**: جزيرة سنتوسا، عمارة المدينة
- **تجاري**: زيارات قطاعي التمويل والتكنولوجيا
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في سنغافورة

## اختيار الوكالة الصحيحة مهم

من المهم أن تُنفَّذ عملية التقديم عبر الوكالة الصحيحة ومجموعة الوثائق الصحيحة — لا يمكنك التقديم مباشرة إلى السفارة. غالبًا ما تُخطط مع رحلة إلى ماليزيا أو إندونيسيا؛ إذا كان لديك مسار إقليمي، ننصح بتوضيح ذلك.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. حضّر طلبك عبر وكالة معتمدة
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، حجوزات الطيران/الفندق، وثائق الكفاية المالية
4. قدّم طلبك عبر الوكالة

## مدة المعالجة

تُحسم عادةً في غضون 3-5 أيام عمل في المتوسط.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة سنغافورة لدينا](/ulkeler/singapur). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
];

function seedBlogPosts13() {
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

seedBlogPosts13();
console.log('On üçüncü blog seed paketi tamamlandı.');
