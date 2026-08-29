// On ikinci blog seed paketi: 36 ülkelik içerik boşluğunu kapatma serisinin
// beşinci grubu (bkz. seedBlog8-11.js) — Malta, Norveç, İsveç, Portekiz.
import { db } from './connection.js';

const posts = [
  {
    slug: 'malta-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1669294841689-0ceb34ad40c1?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T13:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Malta Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Akdeniz\'in ortasında tarihi kaleleri, dalış turizmi ve İngilizce eğitim programlarıyla tercih edilen Malta, yıl boyu ılıman iklimiyle her mevsim ziyaret edilebiliyor.',
      content: `Malta, Akdeniz'in ortasında konumlanan, tarihi kaleleri, berrak sularıyla dalış turizmi ve İngilizce eğitim programlarıyla tercih edilen bir ada ülkesidir. Bu yazıda Malta vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Valletta tarihi merkezi, dalış turları, plaj tatilleri
- **Eğitim**: İngilizce dil okulu programları
- **Aile ziyareti**: Malta'da yaşayan aile üyelerini ziyaret

## Dil Eğitimi İçin Gidiyorsanız

Küçük yüzölçümüne rağmen yıl boyu ılıman iklimi sayesinde her mevsim ziyaret edilebilir. Dil eğitimi amaçlı uzun süreli ziyaretlerde konaklama ve okul kayıt belgelerinin başvuruya eklenmesi önemlidir.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri (dil okulu için kayıt belgesi)
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Malta vizesi sayfamızda](/ulkeler/malta) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Malta Visa: The Application Process and What You Need to Know',
      excerpt: 'Chosen for its historic fortifications, dive tourism, and English-language school programs in the middle of the Mediterranean, Malta can be visited in any season thanks to its mild climate.',
      content: `Malta, located in the middle of the Mediterranean, is an island nation chosen for its historic fortifications, dive tourism in clear waters, and English-language education programs. In this article, we compiled the Malta visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Valletta's historic center, dive tours, beach holidays
- **Education**: English-language school programs
- **Family visit**: Visiting family members living in Malta

## If You're Going for Language Education

Despite its small size, Malta can be visited in any season thanks to its year-round mild climate. For longer-stay visits for language education, it's important to attach accommodation and school enrollment documents to your application.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency (enrollment document for language school)
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Malta visa page](/ulkeler/malta). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة مالطا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'تُختار مالطا، في وسط البحر المتوسط، لحصونها التاريخية وسياحة الغوص وبرامج تعلم اللغة الإنجليزية — ويمكن زيارتها في أي موسم بفضل مناخها المعتدل.',
      content: `مالطا، الواقعة في وسط البحر المتوسط، دولة جزرية تُختار لحصونها التاريخية وسياحة الغوص في مياهها الصافية وبرامج التعليم باللغة الإنجليزية. في هذا المقال، جمعنا عملية طلب تأشيرة مالطا.

## ما هو غرض سفرك؟

- **سياحي**: مركز فاليتا التاريخي، جولات الغوص، عطلات الشاطئ
- **تعليمي**: برامج مدارس تعلم اللغة الإنجليزية
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في مالطا

## إذا كنت ذاهبًا لتعلم اللغة

رغم صغر مساحتها، يمكن زيارة مالطا في أي موسم بفضل مناخها المعتدل على مدار العام. بالنسبة للزيارات الطويلة لتعلم اللغة، من المهم إرفاق وثائق الإقامة والتسجيل المدرسي بطلبك.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية (وثيقة التسجيل لمدرسة اللغة)
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة مالطا لدينا](/ulkeler/malta). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'norvec-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1508592931388-95bc7b61033d?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T13:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Norveç Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Fiyortları, kuzey ışıkları ve gemi turlarıyla doğa turizminin en gözde rotalarından Norveç\'te yüksek yaşam maliyeti nedeniyle mali yeterlilik belgeleri önem taşıyor.',
      content: `Norveç, Avrupa Birliği üyesi olmamasına rağmen Schengen bölgesinin bir parçasıdır ve aynı Schengen vizesiyle ziyaret edilebilir. Fiyortları, kuzey ışıkları ve gemi turlarıyla doğa turizminin en gözde rotalarından biridir. Bu yazıda Norveç vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Fiyort turları, kuzey ışığı gözlemi, gemi turları
- **Ticari**: Enerji ve denizcilik sektörü
- **Aile ziyareti**: Norveç'te yaşayan aile üyelerini ziyaret

## Mali Yeterlilikte Dikkat Edilmesi Gereken

Yaşam maliyetinin yüksek olması nedeniyle mali yeterlilik belgelerinizin seyahat süresiyle orantılı olması önemlidir. Konaklama ve günlük harcama planınızı gerçekçi şekilde belgelemeniz değerlendirme sürecini kolaylaştırır.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Norveç vizesi sayfamızda](/ulkeler/norvec) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Norway Visa: The Application Process and What You Need to Know',
      excerpt: 'One of the most sought-after nature-tourism routes with its fjords, northern lights, and cruise tours, Norway requires careful attention to financial sufficiency given its high cost of living.',
      content: `Norway is not a member of the European Union, yet it is part of the Schengen area and can be visited with the same Schengen visa. It's one of the most sought-after routes for nature tourism thanks to its fjords, northern lights, and cruise tours. In this article, we compiled the Norway visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Fjord tours, northern lights viewing, cruise tours
- **Business**: Energy and maritime sectors
- **Family visit**: Visiting family members living in Norway

## What to Watch for in Financial Sufficiency

Since the cost of living is high, it's important that your financial sufficiency documents are proportional to your length of stay. Documenting your accommodation and daily spending plan realistically makes the evaluation process easier.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Norway visa page](/ulkeler/norvec). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة النرويج: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'واحدة من أكثر مسارات السياحة الطبيعية طلبًا بفيوردها وأضوائها الشمالية ورحلات السفن السياحية، تتطلب النرويج اهتمامًا دقيقًا بالكفاية المالية نظرًا لارتفاع تكاليف المعيشة.',
      content: `النرويج ليست عضوًا في الاتحاد الأوروبي، لكنها جزء من منطقة شنغن ويمكن زيارتها بنفس تأشيرة شنغن. إنها واحدة من أكثر المسارات طلبًا للسياحة الطبيعية بفضل فيوردها وأضوائها الشمالية ورحلات السفن السياحية. في هذا المقال، جمعنا عملية طلب تأشيرة النرويج.

## ما هو غرض سفرك؟

- **سياحي**: جولات الفيورد، مشاهدة الأضواء الشمالية، رحلات السفن السياحية
- **تجاري**: قطاعا الطاقة والملاحة البحرية
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في النرويج

## ما يجب الانتباه إليه في الكفاية المالية

نظرًا لارتفاع تكاليف المعيشة، من المهم أن تكون وثائق كفايتك المالية متناسبة مع مدة إقامتك. توثيق خطة إقامتك وإنفاقك اليومي بشكل واقعي يُسهّل عملية التقييم.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة النرويج لدينا](/ulkeler/norvec). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'isvec-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T13:10:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'İsveç Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Stockholm\'ün takımada yapısı ve İskandinav tasarım kültürüyle hem şehir turizmine hem doğa gezilerine ev sahipliği yapan İsveç\'te teknoloji sektörü ticari ziyaretleri sık görülüyor.',
      content: `İsveç, Stockholm'ün 14 adadan oluşan takımada yapısı ve İskandinav tasarım kültürüyle hem şehir turizmine hem de doğa gezilerine ev sahipliği yapar. Bu yazıda İsveç vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Stockholm takımada turu, tasarım ve müze gezileri
- **Ticari**: Teknoloji ve tasarım sektörü fuarları
- **Aile ziyareti**: İsveç'te yaşayan aile üyelerini ziyaret

## Bütçe Planlaması

Güçlü teknoloji ve tasarım sektörü nedeniyle ticari ziyaretler de sık görülür. Euro bölgesinde olmadığından bütçe planlamasında güncel kur bilgisini ön görüşmede birlikte netleştiriyoruz.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[İsveç vizesi sayfamızda](/ulkeler/isvec) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Sweden Visa: The Application Process and What You Need to Know',
      excerpt: "With Stockholm's 14-island archipelago structure and Scandinavian design culture, Sweden hosts both city tourism and nature trips, and sees frequent business visits from the tech sector.",
      content: `Sweden, with Stockholm's 14-island archipelago structure and Scandinavian design culture, hosts both city tourism and nature trips. In this article, we compiled the Sweden visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Stockholm archipelago tours, design and museum trips
- **Business**: Technology and design sector trade fairs
- **Family visit**: Visiting family members living in Sweden

## Budget Planning

Business visits are also frequent thanks to the strong technology and design sector. Since Sweden is not in the eurozone, we clarify the current exchange rate together during the pre-assessment call for budget planning.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Sweden visa page](/ulkeler/isvec). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة السويد: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'ببنية أرخبيل ستوكهولم المكوّن من 14 جزيرة وثقافة التصميم الاسكندنافية، تستضيف السويد السياحة الحضرية ورحلات الطبيعة، وتشهد زيارات أعمال متكررة من قطاع التكنولوجيا.',
      content: `السويد، ببنية أرخبيل ستوكهولم المكوّن من 14 جزيرة وثقافة التصميم الاسكندنافية، تستضيف السياحة الحضرية ورحلات الطبيعة على حد سواء. في هذا المقال، جمعنا عملية طلب تأشيرة السويد.

## ما هو غرض سفرك؟

- **سياحي**: جولات أرخبيل ستوكهولم، رحلات التصميم والمتاحف
- **تجاري**: معارض قطاعي التكنولوجيا والتصميم
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في السويد

## تخطيط الميزانية

تشيع زيارات الأعمال أيضًا بفضل قطاعي التكنولوجيا والتصميم القويين. بما أن السويد ليست في منطقة اليورو، نوضّح سعر الصرف الحالي معًا خلال مكالمة التقييم المسبق لتخطيط الميزانية.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة السويد لدينا](/ulkeler/isvec). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'portekiz-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T13:15:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Portekiz Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: "Lizbon'un renkli sokakları, Porto'nun şarap bağları ve Algarve kıyısının plajlarıyla Portekiz, ılıman iklimi sayesinde yıl boyu ziyarete elverişli bir Schengen ülkesi.",
      content: `Portekiz, Lizbon'un renkli sokakları, Porto'nun şarap bağları ve Algarve kıyısının plajlarıyla hem kültür hem de tatil turizminde tercih edilen bir Schengen ülkesidir. Bu yazıda Portekiz vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Lizbon şehir turları, Porto şarap bağları gezileri, Algarve plaj tatilleri
- **Ticari**: Turizm ve şarapçılık sektörü
- **Aile ziyareti**: Portekiz'de yaşayan aile üyelerini ziyaret

## Yıl Boyu Ziyaret Avantajı

Atlantik kıyısında olması nedeniyle iklimi diğer Schengen ülkelerine göre daha ılıman ve yıl boyu ziyarete elverişlidir. Konaklama rezervasyonlarınızın seyahat güzergahınızla tutarlı olması başvuru değerlendirmesini kolaylaştırır.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Portekiz vizesi sayfamızda](/ulkeler/portekiz) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Portugal Visa: The Application Process and What You Need to Know',
      excerpt: "With Lisbon's colorful streets, Porto's vineyards, and the beaches of the Algarve coast, Portugal is a Schengen country that's pleasant to visit year-round thanks to its mild climate.",
      content: `Portugal, with Lisbon's colorful streets, Porto's vineyards, and the beaches of the Algarve coast, is a Schengen country preferred for both cultural and holiday tourism. In this article, we compiled the Portugal visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Lisbon city tours, Porto vineyard trips, Algarve beach holidays
- **Business**: Tourism and winemaking sectors
- **Family visit**: Visiting family members living in Portugal

## The Advantage of Year-Round Visiting

Being on the Atlantic coast means its climate is milder than other Schengen countries and pleasant to visit year-round. Having accommodation reservations consistent with your travel route makes the application evaluation easier.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Portugal visa page](/ulkeler/portekiz). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة البرتغال: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بشوارع لشبونة الملونة وكروم بورتو وشواطئ ساحل الألغارف، تُعد البرتغال دولة شنغن ممتعة للزيارة على مدار العام بفضل مناخها المعتدل.',
      content: `البرتغال، بشوارع لشبونة الملونة وكروم بورتو وشواطئ ساحل الألغارف، دولة شنغن يُقبل عليها للسياحة الثقافية والترفيهية على حد سواء. في هذا المقال، جمعنا عملية طلب تأشيرة البرتغال.

## ما هو غرض سفرك؟

- **سياحي**: جولات مدينة لشبونة، رحلات كروم بورتو، عطلات شواطئ الألغارف
- **تجاري**: قطاعا السياحة وصناعة النبيذ
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في البرتغال

## ميزة الزيارة على مدار العام

كونها على ساحل المحيط الأطلسي يعني أن مناخها أكثر اعتدالًا من دول شنغن الأخرى وممتع للزيارة على مدار العام. وجود حجوزات إقامة متسقة مع مسار سفرك يُسهّل تقييم الطلب.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة البرتغال لدينا](/ulkeler/portekiz). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
];

function seedBlogPosts12() {
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

seedBlogPosts12();
console.log('On ikinci blog seed paketi tamamlandı.');
