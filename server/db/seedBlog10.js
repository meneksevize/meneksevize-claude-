// Onuncu blog seed paketi: 36 ülkelik içerik boşluğunu kapatma serisinin
// üçüncü grubu (bkz. seedBlog8.js, seedBlog9.js) — Bulgaristan, Hırvatistan,
// Çekya, Romanya, Slovakya, Slovenya.
import { db } from './connection.js';

const posts = [
  {
    slug: 'bulgaristan-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1601152888642-f2f1b5ee0ca2?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T11:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Bulgaristan Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Türkiye\'ye kara sınırıyla komşu olması ve Karadeniz kıyısındaki tatil beldeleriyle Bulgaristan, kısa süreli tatil ve aile ziyaretlerinde sıkça tercih edilen bir Schengen ülkesi.',
      content: `Bulgaristan, Türkiye'ye kara sınırıyla komşu olması ve Karadeniz kıyısındaki tatil beldeleri (Sunny Beach, Nesebar gibi) sayesinde hem kısa süreli tatil hem de aile ziyaretlerinde sıkça tercih edilen bir Schengen ülkesidir. Bu yazıda Bulgaristan vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Karadeniz kıyısı tatil beldeleri (yaz), Bansko kayak merkezi (kış)
- **Ticari**: Sınır ticareti ve lojistik
- **Aile ziyareti**: Bulgaristan'da yaşayan aile üyelerini ziyaret

## Kara Sınırından Geçiş Yapacaksanız

Kara sınırından yapılan geçişlerde de aynı Schengen evrak seti geçerlidir; uçakla değil karayoluyla seyahat planlıyorsanız güzergahınızı ve giriş noktanızı başvurunuzda netleştirmeniz önemlidir.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı (hava/kara) ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve ulaşım rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Bulgaristan vizesi sayfamızda](/ulkeler/bulgaristan) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Bulgaria Visa: The Application Process and What You Need to Know',
      excerpt: 'Sharing a land border with Turkey and with Black Sea coast resorts, Bulgaria is a Schengen country frequently chosen for short holidays and family visits.',
      content: `Bulgaria, thanks to sharing a land border with Turkey and its Black Sea coast resorts (such as Sunny Beach and Nesebar), is a Schengen country frequently chosen for both short holidays and family visits. In this article, we compiled the Bulgaria visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Black Sea coast resorts (summer), Bansko ski resort (winter)
- **Business**: Border trade and logistics
- **Family visit**: Visiting family members living in Bulgaria

## If You're Crossing by Land

The same Schengen document set applies for land border crossings; if you're planning to travel by road rather than by air, it's important to clarify your route and entry point in your application.

## Application Steps

1. Clarify your purpose of travel, route (air/land), and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and transport reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Bulgaria visa page](/ulkeler/bulgaristan). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة بلغاريا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بحدودها البرية مع تركيا ومنتجعاتها على ساحل البحر الأسود، تُعد بلغاريا دولة شنغن يُقبل عليها كثيرًا للعطلات القصيرة وزيارات الأسرة.',
      content: `بفضل حدودها البرية مع تركيا ومنتجعاتها على ساحل البحر الأسود (مثل صني بيتش ونيسيبار)، تُعد بلغاريا دولة شنغن يُقبل عليها كثيرًا للعطلات القصيرة وزيارات الأسرة. في هذا المقال، جمعنا عملية طلب تأشيرة بلغاريا.

## ما هو غرض سفرك؟

- **سياحي**: منتجعات ساحل البحر الأسود (صيفًا)، منتجع بانسكو للتزلج (شتاءً)
- **تجاري**: التجارة الحدودية واللوجستيات
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في بلغاريا

## إذا كنت ستعبر برًا

تنطبق نفس مجموعة وثائق شنغن على العبور من الحدود البرية؛ إذا كنت تخطط للسفر برًا بدلاً من الطيران، فمن المهم توضيح مسارك ونقطة دخولك في طلبك.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك (جوًا/برًا) وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والنقل، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة بلغاريا لدينا](/ulkeler/bulgaristan). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'hirvatistan-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1565784623522-7fdf499a94a4?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T11:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Hırvatistan Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: '2023\'ten itibaren Schengen alanına dahil olan Hırvatistan; Dubrovnik, Split ve ada turlarıyla özellikle yaz aylarında yoğun talep gören bir destinasyon.',
      content: `Hırvatistan, 2023'ten itibaren Euro bölgesine ve Schengen alanına dahil olmuş, Adriyatik kıyısındaki Dubrovnik, Split ve ada turlarıyla özellikle yaz aylarında yoğun talep gören bir destinasyondur. Bu yazıda Hırvatistan vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Dubrovnik, Split, Adriyatik ada turları, tekne turları
- **Ticari**: Turizm ve denizcilik sektörü
- **Aile ziyareti**: Hırvatistan'da yaşayan aile üyelerini ziyaret

## Yaz Sezonunda Erken Planlama

Tekne turları ve kıyı şeridi rotaları nedeniyle konaklama ve ulaşım planının net olması başvuru değerlendirmesinde önemlidir. Yaz sezonunda doluluk oranı yüksek olduğundan erken rezervasyon ve erken başvuru öneriyoruz.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak/tekne rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Hırvatistan vizesi sayfamızda](/ulkeler/hirvatistan) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Croatia Visa: The Application Process and What You Need to Know',
      excerpt: 'Part of the Schengen area since 2023, Croatia is a destination that sees especially strong demand in summer thanks to Dubrovnik, Split, and its island tours.',
      content: `Croatia, part of the eurozone and Schengen area since 2023, is a destination that sees especially strong demand during the summer months thanks to Dubrovnik, Split, and Adriatic island tours. In this article, we compiled the Croatia visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Dubrovnik, Split, Adriatic island tours, boat tours
- **Business**: Tourism and maritime sectors
- **Family visit**: Visiting family members living in Croatia

## Plan Early for Summer Season

Because of boat tours and coastal routes, having a clear accommodation and transport plan is important for the application evaluation. Since occupancy rates are high during summer season, we recommend booking and applying early.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight/boat reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Croatia visa page](/ulkeler/hirvatistan). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة كرواتيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'جزء من منطقة شنغن منذ عام 2023، تشهد كرواتيا طلبًا قويًا بشكل خاص في الصيف بفضل دوبروفنيك وسبليت وجولات جزرها.',
      content: `كرواتيا، وهي جزء من منطقة اليورو ومنطقة شنغن منذ عام 2023، وجهة تشهد طلبًا قويًا بشكل خاص خلال أشهر الصيف بفضل دوبروفنيك وسبليت وجولات جزر الأدرياتيك. في هذا المقال، جمعنا عملية طلب تأشيرة كرواتيا.

## ما هو غرض سفرك؟

- **سياحي**: دوبروفنيك، سبليت، جولات جزر الأدرياتيك، جولات القوارب
- **تجاري**: قطاعا السياحة والملاحة البحرية
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في كرواتيا

## خطط مبكرًا لموسم الصيف

بسبب جولات القوارب والمسارات الساحلية، من المهم وجود خطة إقامة ونقل واضحة لتقييم الطلب. نظرًا لارتفاع معدلات الإشغال خلال موسم الصيف، ننصح بالحجز والتقديم مبكرًا.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران/القوارب، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة كرواتيا لدينا](/ulkeler/hirvatistan). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'cekya-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1763305102178-4448e7a5a7a0?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T11:10:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Çekya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Prag\'ın Karlov Köprüsü ve Prag Kalesi\'yle kısa şehir turlarında en çok tercih edilen Schengen ülkelerinden Çekya\'da otomotiv ve imalat sektörü fuarları öne çıkıyor.',
      content: `Çekya, başkent Prag'ın Karlov Köprüsü ve Prag Kalesi gibi tarihi dokusuyla kısa şehir turlarında en çok tercih edilen Schengen ülkelerinden biridir. Bu yazıda Çekya vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Prag şehir turları, Karlov Köprüsü, Prag Kalesi
- **Ticari**: Otomotiv ve imalat sektörü fuarları
- **Aile ziyareti**: Çekya'da yaşayan aile üyelerini ziyaret

## Bütçe Planlaması

Çekya Euro bölgesinde olmadığından mali yeterlilik belgelerinizde kur farkının doğru hesaplanması önemlidir; bu hesaplamayı ön görüşmede birlikte netleştiriyoruz.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Çekya vizesi sayfamızda](/ulkeler/cekya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Czechia Visa: The Application Process and What You Need to Know',
      excerpt: "One of the most popular Schengen countries for short city breaks thanks to Prague's Charles Bridge and Prague Castle, Czechia sees strong automotive and manufacturing trade fair activity.",
      content: `Czechia, with the historic fabric of the capital Prague — its Charles Bridge and Prague Castle — is one of the most preferred Schengen countries for short city breaks. In this article, we compiled the Czechia visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Prague city tours, Charles Bridge, Prague Castle
- **Business**: Automotive and manufacturing sector trade fairs
- **Family visit**: Visiting family members living in Czechia

## Budget Planning

Since Czechia is not in the eurozone, correctly calculating the exchange rate in your financial sufficiency documents is important; we clarify this calculation together during the pre-assessment call.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Czechia visa page](/ulkeler/cekya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة التشيك: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'واحدة من أكثر دول شنغن تفضيلًا لرحلات المدن القصيرة بفضل جسر تشارلز وقلعة براغ، وتشهد التشيك نشاطًا قويًا في معارض قطاعي السيارات والتصنيع.',
      content: `التشيك، بنسيجها التاريخي في العاصمة براغ — جسر تشارلز وقلعة براغ — واحدة من أكثر دول شنغن تفضيلًا لرحلات المدن القصيرة. في هذا المقال، جمعنا عملية طلب تأشيرة التشيك.

## ما هو غرض سفرك؟

- **سياحي**: جولات مدينة براغ، جسر تشارلز، قلعة براغ
- **تجاري**: معارض قطاعي السيارات والتصنيع
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في التشيك

## تخطيط الميزانية

بما أن التشيك ليست في منطقة اليورو، فإن حساب سعر الصرف بشكل صحيح في وثائق كفايتك المالية أمر مهم؛ نوضّح هذا الحساب معًا خلال مكالمة التقييم المسبق.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة التشيك لدينا](/ulkeler/cekya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'romanya-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1695045088081-1f37125905a2?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T11:15:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Romanya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Transilvanya\'nın tarihi kaleleri ve Karpat Dağları\'nın doğal güzellikleriyle Romanya, Türkiye\'ye coğrafi yakınlığı sayesinde kısa süreli aile ziyaretlerinde de sık tercih ediliyor.',
      content: `Romanya, Transilvanya bölgesindeki tarihi kaleler ve Karpat Dağları'nın doğal güzellikleriyle hem kültür hem doğa turizmine hitap eder. Bu yazıda Romanya vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Transilvanya kaleleri (Peleş Kalesi, Bran Kalesi), Karpat Dağları doğa turları
- **Ticari**: Otomotiv ve tarım sektörü
- **Aile ziyareti**: Türkiye'ye coğrafi yakınlığı nedeniyle sık tercih edilen kısa süreli aile ziyaretleri

## Bütçe Planlaması

Romanya Euro bölgesinde olmadığından mali yeterlilik belgelerinde güncel kur bilgisini birlikte değerlendiriyoruz.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Romanya vizesi sayfamızda](/ulkeler/romanya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Romania Visa: The Application Process and What You Need to Know',
      excerpt: "With Transylvania's historic castles and the natural beauty of the Carpathian Mountains, Romania is also frequently chosen for short family visits due to its geographic proximity to Turkey.",
      content: `Romania, with the historic castles of the Transylvania region and the natural beauty of the Carpathian Mountains, appeals to both cultural and nature tourism. In this article, we compiled the Romania visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Transylvania's castles (Peleș Castle, Bran Castle), Carpathian Mountains nature tours
- **Business**: Automotive and agriculture sectors
- **Family visit**: Short family visits frequently chosen thanks to geographic proximity to Turkey

## Budget Planning

Since Romania is not in the eurozone, we assess the current exchange rate together for your financial sufficiency documents.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Romania visa page](/ulkeler/romanya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة رومانيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بقلاع ترانسيلفانيا التاريخية وجمال جبال الكاربات الطبيعي، تُختار رومانيا كثيرًا أيضًا لزيارات الأسرة القصيرة بفضل قربها الجغرافي من تركيا.',
      content: `رومانيا، بقلاعها التاريخية في منطقة ترانسيلفانيا وجمال جبال الكاربات الطبيعي، تجذب السياحة الثقافية والطبيعية على حد سواء. في هذا المقال، جمعنا عملية طلب تأشيرة رومانيا.

## ما هو غرض سفرك؟

- **سياحي**: قلاع ترانسيلفانيا (قلعة بيليش، قلعة بران)، جولات طبيعة جبال الكاربات
- **تجاري**: قطاعا السيارات والزراعة
- **زيارة عائلية**: زيارات أسرية قصيرة تُختار كثيرًا بفضل القرب الجغرافي من تركيا

## تخطيط الميزانية

بما أن رومانيا ليست في منطقة اليورو، فإننا نُقيّم سعر الصرف الحالي معًا لوثائق كفايتك المالية.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة رومانيا لدينا](/ulkeler/romanya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'slovakya-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1568616388664-1e37d8376363?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T11:20:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Slovakya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Bratislava\'nın nehir kıyısındaki kalesi ve Tatra Dağları\'nın kayak/doğa turizmiyle Slovakya, genellikle Avusturya veya Çekya gezisinin bir parçası olarak ziyaret ediliyor.',
      content: `Slovakya, başkent Bratislava'nın nehir kıyısındaki kalesi ve Tatra Dağları'nın kayak/doğa turizmiyle hem kısa şehir turlarına hem de kış sporlarına uygun bir Schengen ülkesidir. Bu yazıda Slovakya vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Bratislava şehir turu, Tatra Dağları kayak ve doğa turları
- **Ticari**: Otomotiv sektörü fuarları
- **Aile ziyareti**: Slovakya'da yaşayan aile üyelerini ziyaret

## Bölgesel Güzergah Planlıyorsanız

Slovakya genellikle Avusturya veya Çekya gezisinin bir parçası olarak ziyaret edilir. Bölgesel bir güzergah planlıyorsanız, başvurunuzda tüm rotayı ve konaklama planınızı netleştirmenizi öneririz.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Slovakya vizesi sayfamızda](/ulkeler/slovakya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Slovakia Visa: The Application Process and What You Need to Know',
      excerpt: "With Bratislava's riverside castle and the ski/nature tourism of the Tatra Mountains, Slovakia is often visited as part of an Austria or Czechia trip.",
      content: `Slovakia, with the riverside castle of the capital Bratislava and the ski and nature tourism of the Tatra Mountains, is a Schengen country suited to both short city breaks and winter sports. In this article, we compiled the Slovakia visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Bratislava city tour, Tatra Mountains ski and nature tours
- **Business**: Automotive sector trade fairs
- **Family visit**: Visiting family members living in Slovakia

## If You're Planning a Regional Route

Slovakia is often visited as part of an Austria or Czechia trip. If you're planning a regional route, we recommend clarifying the full itinerary and accommodation plan in your application.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Slovakia visa page](/ulkeler/slovakya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة سلوفاكيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بقلعة براتيسلافا المطلة على النهر وسياحة التزلج والطبيعة في جبال تاترا، غالبًا ما تُزار سلوفاكيا كجزء من رحلة إلى النمسا أو التشيك.',
      content: `سلوفاكيا، بقلعة عاصمتها براتيسلافا المطلة على النهر وسياحة التزلج والطبيعة في جبال تاترا، دولة شنغن مناسبة لرحلات المدن القصيرة والرياضات الشتوية على حد سواء. في هذا المقال، جمعنا عملية طلب تأشيرة سلوفاكيا.

## ما هو غرض سفرك؟

- **سياحي**: جولة مدينة براتيسلافا، جولات التزلج والطبيعة في جبال تاترا
- **تجاري**: معارض قطاع السيارات
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في سلوفاكيا

## إذا كنت تخطط لمسار إقليمي

غالبًا ما تُزار سلوفاكيا كجزء من رحلة إلى النمسا أو التشيك. إذا كنت تخطط لمسار إقليمي، ننصح بتوضيح المسار الكامل وخطة الإقامة في طلبك.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة سلوفاكيا لدينا](/ulkeler/slovakya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'slovenya-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1764357030659-9244f92d81e0?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T11:25:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Slovenya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Bled Gölü\'nün adacığı ve Alp-Akdeniz iklimini bir arada barındıran coğrafyasıyla Slovenya, genellikle İtalya, Avusturya veya Hırvatistan gezisiyle birleştirilerek planlanıyor.',
      content: `Slovenya, Bled Gölü'nün adacığı ve mağaralarıyla, Alp ve Akdeniz iklimini aynı anda barındıran coğrafyasıyla doğa turizminde öne çıkan küçük ama etkileyici bir Schengen ülkesidir. Bu yazıda Slovenya vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Bled Gölü, Ljubljana eski şehir, mağara turları
- **Ticari**: Lojistik ve otomotiv yan sanayi
- **Aile ziyareti**: Slovenya'da yaşayan aile üyelerini ziyaret

## Bölgesel Bir Gezinin Parçası Olarak Planlama

Slovenya genellikle İtalya, Avusturya veya Hırvatistan gezisiyle birleştirilerek planlanır. Birden fazla ülke ziyaret edecekseniz, en uzun süre kalacağınız veya ilk giriş yapacağınız ülkeyi netleştirmeniz Schengen kuralları gereği önemlidir.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Bizim Yaklaşımımız

[Slovenya vizesi sayfamızda](/ulkeler/slovenya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Slovenia Visa: The Application Process and What You Need to Know',
      excerpt: 'With Lake Bled\'s island and a geography that spans both Alpine and Mediterranean climates, Slovenia is often planned in combination with a trip to Italy, Austria, or Croatia.',
      content: `Slovenia, with Lake Bled's island and caves, and a geography that combines Alpine and Mediterranean climates at once, is a small but striking Schengen country that stands out for nature tourism. In this article, we compiled the Slovenia visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Lake Bled, Ljubljana's old town, cave tours
- **Business**: Logistics and automotive supply chain
- **Family visit**: Visiting family members living in Slovenia

## Planning as Part of a Regional Trip

Slovenia is often planned in combination with a trip to Italy, Austria, or Croatia. If you'll be visiting more than one country, clarifying which country you'll stay in longest or enter first is important under Schengen rules.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Slovenia visa page](/ulkeler/slovenya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة سلوفينيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بجزيرة بحيرة بليد وجغرافيا تجمع بين مناخي الألب والبحر المتوسط، غالبًا ما تُخطط سلوفينيا كجزء من رحلة إلى إيطاليا أو النمسا أو كرواتيا.',
      content: `سلوفينيا، بجزيرة بحيرة بليد وكهوفها، وجغرافيا تجمع بين مناخي الألب والبحر المتوسط في آن واحد، دولة شنغن صغيرة لكنها لافتة في السياحة الطبيعية. في هذا المقال، جمعنا عملية طلب تأشيرة سلوفينيا.

## ما هو غرض سفرك؟

- **سياحي**: بحيرة بليد، البلدة القديمة في ليوبليانا، جولات الكهوف
- **تجاري**: اللوجستيات وصناعة السيارات الفرعية
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في سلوفينيا

## التخطيط كجزء من رحلة إقليمية

غالبًا ما تُخطط سلوفينيا مع رحلة إلى إيطاليا أو النمسا أو كرواتيا. إذا كنت ستزور أكثر من دولة، فإن توضيح الدولة التي ستقيم فيها لأطول مدة أو التي ستدخل منها أولًا أمر مهم بموجب قواعد شنغن.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة سلوفينيا لدينا](/ulkeler/slovenya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
];

function seedBlogPosts10() {
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

seedBlogPosts10();
console.log('Onuncu blog seed paketi tamamlandı.');
