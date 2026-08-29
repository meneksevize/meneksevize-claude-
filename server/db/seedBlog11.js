// On birinci blog seed paketi: 36 ülkelik içerik boşluğunu kapatma serisinin
// dördüncü grubu (bkz. seedBlog8/9/10.js) — Estonya, İzlanda, Letonya,
// Lihtenştayn, Litvanya, Lüksemburg.
import { db } from './connection.js';

const posts = [
  {
    slug: 'estonya-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1742409657355-4a6138f02d94?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T12:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Estonya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: "Tallinn'in UNESCO listesindeki ortaçağ eski şehri ve dünyanın en dijitalleşmiş kamu hizmetlerine sahip ülkelerinden biri olmasıyla Estonya, hem kültür turizmine hem teknoloji sektörü ziyaretlerine ev sahipliği yapıyor.",
      content: `Estonya, Tallinn'in UNESCO listesindeki ortaçağ eski şehri ile kısa şehir turlarında tercih edilirken, dünyanın en dijitalleşmiş kamu hizmetlerine sahip ülkelerinden biri olması nedeniyle teknoloji sektöründen ticari ziyaretler de görülür. Bu yazıda Estonya vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Tallinn eski şehir turları, Baltık bölgesi gezileri
- **Ticari**: Teknoloji sektörü fuarları ve iş görüşmeleri
- **Aile ziyareti**: Estonya'da yaşayan aile üyelerini ziyaret

## Baltık Turunun Bir Parçasıysa

Baltık bölgesi turlarının genellikle bir parçası olarak Letonya ve Litvanya ile birlikte ziyaret edilir. Bölgesel gezi planlıyorsanız güzergahınızı ve en uzun kalacağınız ülkeyi başvuruda netleştirmeniz önemlidir.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Estonya vizesi sayfamızda](/ulkeler/estonya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Estonia Visa: The Application Process and What You Need to Know',
      excerpt: "With Tallinn's UNESCO-listed medieval old town and being one of the world's most digitalized public-service countries, Estonia hosts both cultural tourism and tech-sector business visits.",
      content: `Estonia is chosen for short city breaks thanks to Tallinn's UNESCO-listed medieval old town, while also seeing business visits from the tech sector due to being one of the world's most digitalized countries in public services. In this article, we compiled the Estonia visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Tallinn old town tours, Baltic region trips
- **Business**: Technology sector trade fairs and business meetings
- **Family visit**: Visiting family members living in Estonia

## If It's Part of a Baltic Trip

Estonia is often visited together with Latvia and Lithuania as part of Baltic region tours. If you're planning a regional trip, it's important to clarify your route and which country you'll stay in longest in your application.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Estonia visa page](/ulkeler/estonya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة إستونيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'ببلدة تالين القديمة المدرجة في قائمة اليونسكو وكونها من أكثر دول العالم رقمنة في الخدمات العامة، تستضيف إستونيا السياحة الثقافية وزيارات أعمال قطاع التكنولوجيا.',
      content: `تُختار إستونيا لرحلات المدن القصيرة بفضل بلدة تالين القديمة من العصور الوسطى المدرجة في قائمة اليونسكو، بينما تشهد أيضًا زيارات أعمال من قطاع التكنولوجيا كونها من أكثر الدول رقمنة في الخدمات العامة عالميًا. في هذا المقال، جمعنا عملية طلب تأشيرة إستونيا.

## ما هو غرض سفرك؟

- **سياحي**: جولات بلدة تالين القديمة، رحلات منطقة البلطيق
- **تجاري**: معارض قطاع التكنولوجيا واجتماعات العمل
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في إستونيا

## إذا كانت جزءًا من رحلة بلطيقية

غالبًا ما تُزار إستونيا مع لاتفيا وليتوانيا كجزء من جولات منطقة البلطيق. إذا كنت تخطط لرحلة إقليمية، من المهم توضيح مسارك والدولة التي ستقيم فيها لأطول مدة في طلبك.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة إستونيا لدينا](/ulkeler/estonya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'izlanda-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1565787731524-ee4e8adc05f9?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T12:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'İzlanda Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Gayzerleri, buzulları ve kuzey ışıklarıyla doğa fotoğrafçılığı meraklılarının en çok tercih ettiği Schengen ülkelerinden İzlanda\'da esnek seyahat planlaması önemli.',
      content: `İzlanda, gayzerleri, buzulları, şelaleleri ve kuzey ışıklarıyla doğa fotoğrafçılığı ve macera turizmi meraklılarının en çok tercih ettiği Schengen ülkelerinden biridir. Bu yazıda İzlanda vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Şelale ve buzul turları, kuzey ışığı gözlemi, doğa fotoğrafçılığı
- **Ticari**: Yenilenebilir enerji ve balıkçılık sektörü
- **Aile ziyareti**: İzlanda'da yaşayan aile üyelerini ziyaret

## Ada Ülkesi Olmasının Getirdiği Planlama İhtiyacı

Ada ülkesi olması ve genellikle tek başına ziyaret edilmesi nedeniyle seyahat planınızın ve konaklama rezervasyonlarınızın net olması önemlidir. Kış aylarında hava koşulları seyahat planlamasını doğrudan etkileyebileceğinden esnek bir program önerilir.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[İzlanda vizesi sayfamızda](/ulkeler/izlanda) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Iceland Visa: The Application Process and What You Need to Know',
      excerpt: 'With its geysers, glaciers, and northern lights, Iceland is one of the Schengen countries most preferred by nature photography enthusiasts — flexible travel planning matters here.',
      content: `Iceland, with its geysers, glaciers, waterfalls, and northern lights, is one of the Schengen countries most preferred by nature photography and adventure tourism enthusiasts. In this article, we compiled the Iceland visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Waterfall and glacier tours, northern lights viewing, nature photography
- **Business**: Renewable energy and fishing sectors
- **Family visit**: Visiting family members living in Iceland

## The Planning Iceland's Island Geography Requires

Because Iceland is an island nation usually visited on its own (not combined with other countries), having a clear travel plan and accommodation reservations is important. Since winter weather conditions can directly affect travel planning, a flexible itinerary is recommended.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Iceland visa page](/ulkeler/izlanda). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة آيسلندا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بينابيعها الحرارية وأنهارها الجليدية وأضوائها الشمالية، تُعد آيسلندا من أكثر دول شنغن تفضيلًا لهواة تصوير الطبيعة — التخطيط المرن للسفر مهم هنا.',
      content: `آيسلندا، بينابيعها الحرارية وأنهارها الجليدية وشلالاتها وأضوائها الشمالية، من أكثر دول شنغن تفضيلًا لهواة تصوير الطبيعة والسياحة المغامرة. في هذا المقال، جمعنا عملية طلب تأشيرة آيسلندا.

## ما هو غرض سفرك؟

- **سياحي**: جولات الشلالات والأنهار الجليدية، مشاهدة الأضواء الشمالية، تصوير الطبيعة
- **تجاري**: قطاعا الطاقة المتجددة وصيد الأسماك
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في آيسلندا

## التخطيط الذي تتطلبه جغرافيا الجزيرة

بما أن آيسلندا دولة جزرية وتُزار عادةً بمفردها (دون دمجها مع دول أخرى)، من المهم أن تكون خطة سفرك وحجوزات إقامتك واضحة. نظرًا لأن أحوال الطقس الشتوية قد تؤثر مباشرة على تخطيط السفر، يُنصح ببرنامج مرن.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة آيسلندا لدينا](/ulkeler/izlanda). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'letonya-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1683730796330-06e60e3438d8?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T12:10:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Letonya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Riga\'nın Avrupa\'nın en zengin art nouveau mimari dokusuyla mimari ve kültür turlarında tercih edilen Letonya, genellikle Estonya ve Litvanya ile birlikte ziyaret ediliyor.',
      content: `Letonya, başkent Riga'nın Avrupa'nın en zengin art nouveau mimari dokusuna sahip olmasıyla mimari ve kültür turlarında tercih edilir. Bu yazıda Letonya vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Riga art nouveau mimari turları, Baltık bölgesi gezileri
- **Ticari**: Lojistik ve teknoloji sektörü
- **Aile ziyareti**: Letonya'da yaşayan aile üyelerini ziyaret

## Baltık Turunun Bir Parçasıysa

Baltık bölgesi turlarının bir parçası olarak genellikle Estonya ve Litvanya ile birlikte ziyaret edilir. Bölgesel bir güzergah planlıyorsanız bunu başvuruda netleştirmenizi öneririz.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Letonya vizesi sayfamızda](/ulkeler/letonya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Latvia Visa: The Application Process and What You Need to Know',
      excerpt: "Chosen for architecture and cultural tours thanks to Riga's rich Art Nouveau architectural fabric — Europe's finest — Latvia is often visited together with Estonia and Lithuania.",
      content: `Latvia is chosen for architecture and cultural tours thanks to the capital Riga having the richest Art Nouveau architectural fabric in Europe. In this article, we compiled the Latvia visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Riga Art Nouveau architecture tours, Baltic region trips
- **Business**: Logistics and technology sectors
- **Family visit**: Visiting family members living in Latvia

## If It's Part of a Baltic Trip

Latvia is often visited together with Estonia and Lithuania as part of Baltic region tours. If you're planning a regional route, we recommend clarifying this in your application.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Latvia visa page](/ulkeler/letonya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة لاتفيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'تُختار لاتفيا لجولات العمارة والثقافة بفضل نسيج ريغا المعماري الغني بطراز آر نوفو — الأغنى في أوروبا — وغالبًا ما تُزار مع إستونيا وليتوانيا.',
      content: `تُختار لاتفيا لجولات العمارة والثقافة بفضل امتلاك عاصمتها ريغا لأغنى نسيج معماري بطراز آر نوفو في أوروبا. في هذا المقال، جمعنا عملية طلب تأشيرة لاتفيا.

## ما هو غرض سفرك؟

- **سياحي**: جولات عمارة آر نوفو في ريغا، رحلات منطقة البلطيق
- **تجاري**: قطاعا اللوجستيات والتكنولوجيا
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في لاتفيا

## إذا كانت جزءًا من رحلة بلطيقية

غالبًا ما تُزار لاتفيا مع إستونيا وليتوانيا كجزء من جولات منطقة البلطيق. إذا كنت تخطط لمسار إقليمي، ننصح بتوضيح ذلك في طلبك.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة لاتفيا لدينا](/ulkeler/letonya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'lihtenstayn-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1668030837521-03e6c10ee21d?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T12:15:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Lihtenştayn Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Alpler\'in eteğinde konumlanan dünyanın en küçük ülkelerinden Lihtenştayn, genellikle İsviçre veya Avusturya gezisinin bir parçası olarak kısa süreliğine ziyaret ediliyor.',
      content: `Lihtenştayn, Alpler'in eteğinde konumlanan, dünyanın en küçük ülkelerinden biri olan bir prensliktir ve genellikle İsviçre veya Avusturya gezisinin bir parçası olarak kısa süreliğine ziyaret edilir. Bu yazıda Lihtenştayn vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Vaduz Kalesi, kısa Alp gezileri
- **Ticari**: Finans sektöründeki güçlü konumu nedeniyle bankacılık ziyaretleri
- **Aile ziyareti**: Lihtenştayn'da yaşayan aile üyelerini ziyaret

## Tek Başına Değil, Bölgesel Bir Gezinin Parçası

Lihtenştayn tek başına değil, bölgesel bir gezinin parçası olarak planlanması yaygındır. İsviçre veya Avusturya güzergahınızın neresinde yer aldığını başvurunuzda netleştirmeniz önemlidir.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Lihtenştayn vizesi sayfamızda](/ulkeler/lihtenstayn) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Liechtenstein Visa: The Application Process and What You Need to Know',
      excerpt: "One of the world's smallest countries, nestled at the foot of the Alps, Liechtenstein is often visited briefly as part of a Switzerland or Austria trip.",
      content: `Liechtenstein is a principality — one of the world's smallest countries — nestled at the foot of the Alps, and is often visited briefly as part of a Switzerland or Austria trip. In this article, we compiled the Liechtenstein visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Vaduz Castle, short Alpine trips
- **Business**: Banking visits given its strong position in the finance sector
- **Family visit**: Visiting family members living in Liechtenstein

## Part of a Regional Trip, Not a Standalone One

It's common for Liechtenstein to be planned not on its own, but as part of a regional trip. It's important to clarify in your application where it fits within your Switzerland or Austria route.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Liechtenstein visa page](/ulkeler/lihtenstayn). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة ليختنشتاين: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'واحدة من أصغر دول العالم، تقع عند سفح جبال الألب، وغالبًا ما تُزار ليختنشتاين لفترة قصيرة كجزء من رحلة إلى سويسرا أو النمسا.',
      content: `ليختنشتاين إمارة — واحدة من أصغر دول العالم — تقع عند سفح جبال الألب، وغالبًا ما تُزار لفترة قصيرة كجزء من رحلة إلى سويسرا أو النمسا. في هذا المقال، جمعنا عملية طلب تأشيرة ليختنشتاين.

## ما هو غرض سفرك؟

- **سياحي**: قلعة فادوز، رحلات ألبية قصيرة
- **تجاري**: زيارات مصرفية نظرًا لمكانتها القوية في قطاع التمويل
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في ليختنشتاين

## جزء من رحلة إقليمية، لا رحلة مستقلة

من الشائع ألا تُخطط ليختنشتاين بمفردها، بل كجزء من رحلة إقليمية. من المهم توضيح مكانها ضمن مسارك في سويسرا أو النمسا في طلبك.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة ليختنشتاين لدينا](/ulkeler/lihtenstayn). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'litvanya-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1660562278746-72e961bb9644?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T12:20:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Litvanya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Vilnius\'un Avrupa\'nın en büyük barok mimari dokusuna sahip eski şehirlerinden biri olmasıyla kültür turlarında tercih edilen Litvanya\'da lojistik ve teknoloji sektörü fuarları öne çıkıyor.',
      content: `Litvanya, başkent Vilnius'un Avrupa'nın en büyük barok mimari dokusuna sahip eski şehirlerinden biri olmasıyla kültür turlarında tercih edilir. Bu yazıda Litvanya vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Vilnius barok eski şehir turları, Baltık bölgesi gezileri
- **Ticari**: Lojistik ve teknoloji sektörü fuarları
- **Aile ziyareti**: Litvanya'da yaşayan aile üyelerini ziyaret

## Baltık Turunun Bir Parçasıysa

Baltık bölgesi turlarının bir parçası olarak Letonya ve Estonya ile birlikte ziyaret edilmesi yaygındır. Bölgesel bir güzergah planlıyorsanız bunu başvuruda netleştirmenizi öneririz.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Litvanya vizesi sayfamızda](/ulkeler/litvanya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Lithuania Visa: The Application Process and What You Need to Know',
      excerpt: "With Vilnius as one of Europe's largest Baroque old towns, Lithuania is chosen for cultural tours, while logistics and technology sector trade fairs stand out.",
      content: `Lithuania is chosen for cultural tours thanks to the capital Vilnius being one of Europe's largest old towns with a Baroque architectural fabric. In this article, we compiled the Lithuania visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Vilnius Baroque old town tours, Baltic region trips
- **Business**: Logistics and technology sector trade fairs
- **Family visit**: Visiting family members living in Lithuania

## If It's Part of a Baltic Trip

It's common for Lithuania to be visited together with Latvia and Estonia as part of Baltic region tours. If you're planning a regional route, we recommend clarifying this in your application.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Lithuania visa page](/ulkeler/litvanya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة ليتوانيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بفلنيوس كواحدة من أكبر البلدات القديمة الباروكية في أوروبا، تُختار ليتوانيا لجولات ثقافية، بينما تبرز معارض قطاعي اللوجستيات والتكنولوجيا.',
      content: `تُختار ليتوانيا لجولات ثقافية بفضل امتلاك عاصمتها فلنيوس لواحدة من أكبر البلدات القديمة في أوروبا بطراز معماري باروكي. في هذا المقال، جمعنا عملية طلب تأشيرة ليتوانيا.

## ما هو غرض سفرك؟

- **سياحي**: جولات بلدة فلنيوس القديمة الباروكية، رحلات منطقة البلطيق
- **تجاري**: معارض قطاعي اللوجستيات والتكنولوجيا
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في ليتوانيا

## إذا كانت جزءًا من رحلة بلطيقية

من الشائع أن تُزار ليتوانيا مع لاتفيا وإستونيا كجزء من جولات منطقة البلطيق. إذا كنت تخطط لمسار إقليمي، ننصح بتوضيح ذلك في طلبك.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة ليتوانيا لدينا](/ulkeler/litvanya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'luksemburg-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1748030278234-5c1e9f155c1a?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T12:25:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Lüksemburg Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Küçük yüzölçümüne rağmen AB kurumları ve uluslararası bankacılık sektörü sayesinde ticari ziyaretlerin yoğun olduğu Lüksemburg, genellikle Belçika veya Almanya gezisiyle birlikte planlanıyor.',
      content: `Lüksemburg, küçük yüzölçümüne rağmen AB kurumları ve uluslararası bankacılık sektörü sayesinde ticari ziyaretlerin yoğun olduğu bir ülkedir. Bu yazıda Lüksemburg vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Ortaçağ kalesi, şehir merkezi kısa turları
- **Ticari**: AB kurumları ve uluslararası bankacılık sektörü ziyaretleri
- **Aile ziyareti**: Lüksemburg'da yaşayan aile üyelerini ziyaret

## Kısa Bir Durak Olarak Planlama

Genellikle Belçika veya Almanya gezisiyle birlikte kısa bir durak olarak planlanır. Birden fazla ülke ziyaret edecekseniz, en uzun süre kalacağınız ülkeyi başvurunuzda netleştirmeniz önemlidir.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri (ticari ziyaretlerde toplantı programı ve davet mektubu)
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Lüksemburg vizesi sayfamızda](/ulkeler/luksemburg) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Luxembourg Visa: The Application Process and What You Need to Know',
      excerpt: 'Despite its small size, Luxembourg sees heavy business travel thanks to EU institutions and its international banking sector, and is often planned together with a Belgium or Germany trip.',
      content: `Luxembourg, despite its small size, is a country with heavy business travel thanks to EU institutions and its international banking sector. In this article, we compiled the Luxembourg visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Medieval castle, short city center tours
- **Business**: EU institutions and international banking sector visits
- **Family visit**: Visiting family members living in Luxembourg

## Planning It as a Short Stop

Luxembourg is often planned as a short stop together with a Belgium or Germany trip. If you'll be visiting more than one country, it's important to clarify which country you'll stay in longest in your application.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency (for business visits, the meeting agenda and invitation letter)
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Luxembourg visa page](/ulkeler/luksemburg). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة لوكسمبورغ: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'رغم صغر مساحتها، تشهد لوكسمبورغ حركة أعمال كثيفة بفضل مؤسسات الاتحاد الأوروبي وقطاعها المصرفي الدولي، وغالبًا ما تُخطط مع رحلة إلى بلجيكا أو ألمانيا.',
      content: `لوكسمبورغ، رغم صغر مساحتها، دولة تشهد حركة أعمال كثيفة بفضل مؤسسات الاتحاد الأوروبي وقطاعها المصرفي الدولي. في هذا المقال، جمعنا عملية طلب تأشيرة لوكسمبورغ.

## ما هو غرض سفرك؟

- **سياحي**: القلعة القروسطية، جولات قصيرة في وسط المدينة
- **تجاري**: زيارات مؤسسات الاتحاد الأوروبي والقطاع المصرفي الدولي
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في لوكسمبورغ

## التخطيط لها كمحطة قصيرة

غالبًا ما تُخطط لوكسمبورغ كمحطة قصيرة مع رحلة إلى بلجيكا أو ألمانيا. إذا كنت ستزور أكثر من دولة، من المهم توضيح الدولة التي ستقيم فيها لأطول مدة في طلبك.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية (لزيارات العمل، جدول أعمال الاجتماع وخطاب الدعوة)
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة لوكسمبورغ لدينا](/ulkeler/luksemburg). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
];

function seedBlogPosts11() {
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

seedBlogPosts11();
console.log('On birinci blog seed paketi tamamlandı.');
