// On dördüncü blog seed paketi: 36 ülkelik içerik boşluğunu kapatma serisinin
// yedinci ve son grubu (bkz. seedBlog8-13.js) — Mısır, Güney Afrika, Tayland,
// Vietnam, Sri Lanka. Bu paketle 33 hedef ülkenin tamamı tamamlanmış olur.
import { db } from './connection.js';

const posts = [
  {
    slug: 'misir-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1776065567045-b4bc49416979?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-06T14:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Mısır Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'E-Vize ile tamamen online ve hızlı sonuçlanan Mısır başvurusunda Kahire\'deki piramitler, Luxor ve Kızıldeniz kıyısı en çok tercih edilen rotalar.',
      content: `Mısır, e-Vize sistemi sayesinde Türk vatandaşları için tamamen online ve hızlı sonuçlanan bir başvuru süreci sunar; Kahire'deki piramitler, Luxor'un antik tapınakları ve Kızıldeniz kıyısındaki tatil beldeleri (Hurgada, Şarm El-Şeyh) en çok tercih edilen rotalardır. Bu yazıda Mısır vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Kahire piramitleri, Luxor antik tapınakları, Hurgada ve Şarm El-Şeyh tatil beldeleri
- **Ticari**: İş görüşmeleri ve fuarlar
- **Aile ziyareti**: Mısır'da yaşayan aile üyelerini ziyaret

## E-Vize Başvurusunda Dikkat Edilecek

E-Vize başvurusunda pasaport taramasının net olması ve seyahat tarihleriyle tutarlı bir giriş-çıkış planı belirtilmesi süreci hızlandırır. Bazı tatil beldelerinde varışta vize alma seçeneği de bulunur, ancak önceden e-Vize almak randevu/kuyruk beklemeden giriş yapmanızı sağlar.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. E-Vize başvurusu için gerekli evrakları hazırlayın: net pasaport taraması, dijital fotoğraf, uçak/otel rezervasyonu
3. Online başvurunuzu tamamlayın
4. Onay e-postanızı seyahatiniz boyunca yanınızda bulundurun

## İşlem Süresi

E-Vize başvurularında genellikle birkaç iş günü içinde sonuçlanır.

## Bizim Yaklaşımımız

[Mısır vizesi sayfamızda](/ulkeler/misir) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Egypt Visa: The Application Process and What You Need to Know',
      excerpt: "With a fully online e-Visa system that resolves quickly, Egypt's most preferred routes are the pyramids of Cairo, Luxor, and the Red Sea coast.",
      content: `Egypt, thanks to its e-Visa system, offers a fully online and fast application process for Turkish citizens; the pyramids of Cairo, Luxor's ancient temples, and the Red Sea coastal resorts (Hurghada, Sharm El Sheikh) are the most preferred routes. In this article, we compiled the Egypt visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: The pyramids of Cairo, Luxor's ancient temples, Hurghada and Sharm El Sheikh resorts
- **Business**: Business meetings and trade fairs
- **Family visit**: Visiting family members living in Egypt

## What to Watch for in the e-Visa Application

In the e-Visa application, having a clear passport scan and specifying an entry-exit plan consistent with your travel dates speeds up the process. Some resort areas also offer a visa-on-arrival option, but getting an e-Visa in advance lets you enter without waiting in line for an appointment.

## Application Steps

1. Clarify your purpose of travel and dates
2. Prepare the documents required for the e-Visa application: clear passport scan, digital photo, flight/hotel reservations
3. Complete your online application
4. Keep your approval email with you throughout your trip

## Processing Time

E-Visa applications are typically resolved within a few business days.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Egypt visa page](/ulkeler/misir). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة مصر: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بنظام تأشيرة إلكترونية بالكامل ويُحسم بسرعة، أهرامات القاهرة والأقصر وساحل البحر الأحمر هي المسارات الأكثر تفضيلًا في مصر.',
      content: `تُقدّم مصر، بفضل نظام التأشيرة الإلكترونية، عملية طلب إلكترونية بالكامل وسريعة للمواطنين الأتراك؛ وتُعد أهرامات القاهرة ومعابد الأقصر القديمة ومنتجعات ساحل البحر الأحمر (الغردقة، شرم الشيخ) المسارات الأكثر تفضيلًا. في هذا المقال، جمعنا عملية طلب تأشيرة مصر.

## ما هو غرض سفرك؟

- **سياحي**: أهرامات القاهرة، معابد الأقصر القديمة، منتجعات الغردقة وشرم الشيخ
- **تجاري**: اجتماعات العمل والمعارض
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في مصر

## ما يجب الانتباه إليه في طلب التأشيرة الإلكترونية

في طلب التأشيرة الإلكترونية، وضوح مسح جواز السفر وتحديد خطة دخول-خروج متسقة مع تواريخ سفرك يُسرّع العملية. تقدم بعض المناطق السياحية أيضًا خيار التأشيرة عند الوصول، لكن الحصول على التأشيرة الإلكترونية مسبقًا يتيح لك الدخول دون انتظار في طابور موعد.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. حضّر الوثائق المطلوبة لطلب التأشيرة الإلكترونية: مسح جواز سفر واضح، صورة رقمية، حجوزات الطيران/الفندق
3. أكمل طلبك عبر الإنترنت
4. احتفظ ببريد الموافقة الإلكتروني معك طوال رحلتك

## مدة المعالجة

تُحسم طلبات التأشيرة الإلكترونية عادةً في غضون بضعة أيام عمل.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة مصر لدينا](/ulkeler/misir). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'guney-afrika-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1770988966522-4eea7f83dbe9?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-06T14:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Güney Afrika Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Safari turları ve Cape Town\'ın doğal güzellikleriyle öne çıkan Güney Afrika\'da çocuklu seyahatlerde ek belge şartı dikkat gerektiriyor.',
      content: `Güney Afrika, safari turları (Kruger Milli Parkı), Cape Town'ın doğal güzellikleri ve madencilik/enerji sektöründeki iş bağlantılarıyla hem turistik hem ticari ziyaretlerde tercih edilen bir ülkedir. Bu yazıda Güney Afrika vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Kruger Milli Parkı safarileri, Cape Town ve Table Mountain
- **Ticari**: Madencilik ve enerji sektörü iş görüşmeleri
- **Aile ziyareti**: Güney Afrika'da yaşayan aile üyelerini ziyaret

## Sarı Humma Aşısı ve Çocuklu Seyahat Şartları

Başvurularda sarı humma aşı sertifikası, seyahat güzergahınıza bağlı olarak istenebilir; bu nedenle güzergahınızı netleştirmeniz önemlidir. Çocuklu seyahatlerde doğum belgesi ve varsa velayet belgelerinin sunulması, Güney Afrika'nın çocuk kaçırma karşıtı düzenlemeleri gereği zorunludur — bu şart birçok aile tarafından son anda fark ediliyor, bu yüzden erken planlamanızı öneririz.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, uçak/otel rezervasyonu, çocuklu seyahatlerde doğum belgesi
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## İşlem Süresi

Ortalama 1-2 hafta içinde sonuçlanır.

## Bizim Yaklaşımımız

[Güney Afrika vizesi sayfamızda](/ulkeler/guney-afrika) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'South Africa Visa: The Application Process and What You Need to Know',
      excerpt: "Standing out with safari tours and Cape Town's natural beauty, South Africa's applications with children require careful attention to extra documentation.",
      content: `South Africa is a country preferred for both tourist and business visits, thanks to safari tours (Kruger National Park), Cape Town's natural beauty, and business ties in the mining and energy sectors. In this article, we compiled the South Africa visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Kruger National Park safaris, Cape Town and Table Mountain
- **Business**: Mining and energy sector business meetings
- **Family visit**: Visiting family members living in South Africa

## Yellow Fever Vaccination and Requirements for Traveling with Children

A yellow fever vaccination certificate may be requested depending on your travel route, so it's important to clarify your route. For trips with children, submitting a birth certificate and, if applicable, custody documents is mandatory under South Africa's anti-child-trafficking regulations — this requirement catches many families off guard at the last minute, so we recommend planning early.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, flight/hotel reservations, birth certificate for trips with children
4. Submit your application in full on the appointment day

## Processing Time

Typically resolved within an average of 1-2 weeks.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our South Africa visa page](/ulkeler/guney-afrika). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة جنوب أفريقيا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'تبرز جنوب أفريقيا برحلات السفاري وجمال كيب تاون الطبيعي، وتتطلب طلبات السفر مع الأطفال انتباهًا خاصًا لوثائق إضافية.',
      content: `جنوب أفريقيا دولة مفضّلة لكل من الزيارات السياحية والتجارية، بفضل رحلات السفاري (حديقة كروغر الوطنية)، وجمال كيب تاون الطبيعي، والروابط التجارية في قطاعي التعدين والطاقة. في هذا المقال، جمعنا عملية طلب تأشيرة جنوب أفريقيا.

## ما هو غرض سفرك؟

- **سياحي**: سفاري حديقة كروغر الوطنية، كيب تاون وجبل الطاولة
- **تجاري**: اجتماعات عمل في قطاعي التعدين والطاقة
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في جنوب أفريقيا

## لقاح الحمى الصفراء ومتطلبات السفر مع الأطفال

قد تُطلب شهادة لقاح الحمى الصفراء حسب مسار سفرك، لذا من المهم توضيح مسارك. بالنسبة للرحلات مع الأطفال، تقديم شهادة الميلاد ووثائق الحضانة إن وُجدت أمر إلزامي بموجب لوائح جنوب أفريقيا لمكافحة اختطاف الأطفال — يفاجأ الكثير من العائلات بهذا الشرط في اللحظة الأخيرة، لذا ننصح بالتخطيط المبكر.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، حجوزات الطيران/الفندق، شهادة الميلاد للرحلات مع الأطفال
4. قدّم طلبك كاملًا في يوم الموعد

## مدة المعالجة

تُحسم عادةً في غضون 1-2 أسبوع في المتوسط.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة جنوب أفريقيا لدينا](/ulkeler/guney-afrika). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'tayland-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1747235156815-3b39a7097b7b?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-06T14:10:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Tayland Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'E-Vize ile online başvuru imkânı sunan Tayland\'da Bangkok, Phuket ve Chiang Mai en çok tercih edilen rotalar; kalabalık dönemlerde erken planlama öneriyoruz.',
      content: `Tayland, e-Vize sistemi üzerinden Türk vatandaşlarına online başvuru imkânı sunar; Bangkok'un tapınakları, Phuket ve Koh Samui gibi adaların plajları ile Chiang Mai'nin dağlık kuzey bölgesi en çok tercih edilen rotalardır. Bu yazıda Tayland vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Bangkok tapınakları, Phuket ve Koh Samui plajları, Chiang Mai dağ bölgesi
- **Ticari**: İş görüşmeleri
- **Aile ziyareti**: Tayland'da yaşayan aile üyelerini ziyaret

## Kalabalık Dönemlerde Erken Planlama Önemli

E-Vize başvurusunda dönüş bileti ve konaklama rezervasyonunun net olması önemlidir. Kalabalık tatil dönemlerinde (yılbaşı, Songkran festivali) uçak ve otel fiyatlarının belirgin şekilde arttığını göz önünde bulundurarak erken planlama öneriyoruz.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. E-Vize başvurusu için gerekli evrakları hazırlayın: net pasaport taraması, dijital fotoğraf, uçak/otel rezervasyonu
3. Online başvurunuzu tamamlayın
4. Onay e-postanızı seyahatiniz boyunca yanınızda bulundurun

## İşlem Süresi

E-Vize başvurularında genellikle birkaç iş günü içinde sonuçlanır.

## Bizim Yaklaşımımız

[Tayland vizesi sayfamızda](/ulkeler/tayland) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Thailand Visa: The Application Process and What You Need to Know',
      excerpt: 'Offering an online application through its e-Visa system, Thailand\'s most preferred routes are Bangkok, Phuket, and Chiang Mai — we recommend planning early during peak periods.',
      content: `Thailand offers Turkish citizens an online application option through its e-Visa system; Bangkok's temples, the beaches of islands like Phuket and Koh Samui, and Chiang Mai's mountainous northern region are the most preferred routes. In this article, we compiled the Thailand visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Bangkok's temples, Phuket and Koh Samui beaches, Chiang Mai's mountain region
- **Business**: Business meetings
- **Family visit**: Visiting family members living in Thailand

## Early Planning Matters During Peak Periods

In the e-Visa application, having a clear return ticket and accommodation reservation is important. Considering that flight and hotel prices rise noticeably during peak holiday periods (New Year's, the Songkran festival), we recommend planning early.

## Application Steps

1. Clarify your purpose of travel and dates
2. Prepare the documents required for the e-Visa application: clear passport scan, digital photo, flight/hotel reservations
3. Complete your online application
4. Keep your approval email with you throughout your trip

## Processing Time

E-Visa applications are typically resolved within a few business days.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Thailand visa page](/ulkeler/tayland). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة تايلاند: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'تقدم تايلاند إمكانية التقديم عبر الإنترنت من خلال نظام التأشيرة الإلكترونية، وبانكوك وبوكيت وتشيانغ ماي هي المسارات الأكثر تفضيلًا — ننصح بالتخطيط المبكر خلال الفترات الذروة.',
      content: `تُقدّم تايلاند للمواطنين الأتراك خيار التقديم عبر الإنترنت من خلال نظام التأشيرة الإلكترونية؛ وتُعد معابد بانكوك، وشواطئ جزر مثل بوكيت وكوه ساموي، ومنطقة تشيانغ ماي الجبلية الشمالية المسارات الأكثر تفضيلًا. في هذا المقال، جمعنا عملية طلب تأشيرة تايلاند.

## ما هو غرض سفرك؟

- **سياحي**: معابد بانكوك، شواطئ بوكيت وكوه ساموي، منطقة تشيانغ ماي الجبلية
- **تجاري**: اجتماعات العمل
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في تايلاند

## التخطيط المبكر مهم خلال فترات الذروة

في طلب التأشيرة الإلكترونية، من المهم أن تكون تذكرة العودة وحجز الإقامة واضحين. مع الأخذ بعين الاعتبار أن أسعار الطيران والفنادق ترتفع بشكل ملحوظ خلال فترات العطلات المزدحمة (رأس السنة، مهرجان سونغكران)، ننصح بالتخطيط المبكر.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. حضّر الوثائق المطلوبة لطلب التأشيرة الإلكترونية: مسح جواز سفر واضح، صورة رقمية، حجوزات الطيران/الفندق
3. أكمل طلبك عبر الإنترنت
4. احتفظ ببريد الموافقة الإلكتروني معك طوال رحلتك

## مدة المعالجة

تُحسم طلبات التأشيرة الإلكترونية عادةً في غضون بضعة أيام عمل.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة تايلاند لدينا](/ulkeler/tayland). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'vietnam-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1634951412593-b2cdca1ae519?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-06T14:15:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Vietnam Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'İyi kurumsallaşmış e-Vize sistemiyle hızlı ve öngörülebilir bir süreç sunan Vietnam\'da Halong Körfezi, Hanoi ve Ho Chi Minh şehri en çok tercih edilen rotalar.',
      content: `Vietnam, iyi kurumsallaşmış e-Vize sistemi sayesinde Türk vatandaşları için hızlı ve öngörülebilir bir başvuru süreci sunar; Halong Körfezi, Hanoi'nin eski şehri ve Ho Chi Minh şehrinin canlı sokakları en çok tercih edilen rotalardır. Bu yazıda Vietnam vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Halong Körfezi, Hanoi eski şehir, Ho Chi Minh şehri
- **Ticari**: İş görüşmeleri
- **Aile ziyareti**: Vietnam'da yaşayan aile üyelerini ziyaret

## Çok Noktalı Güzergahlarda Esneklik

E-Vize, tüm giriş kapılarında (havalimanı, kara ve deniz sınırları) geçerlidir, bu da çok noktalı güzergah planlayan gezginler için esneklik sağlar. Başvuruda yüklenen fotoğraf ve pasaport taramasının net ve güncel olması onay süresini kısaltır.

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. E-Vize başvurusu için gerekli evrakları hazırlayın: net pasaport taraması, dijital fotoğraf, uçak/otel rezervasyonu
3. Online başvurunuzu tamamlayın
4. Onay e-postanızı seyahatiniz boyunca yanınızda bulundurun

## İşlem Süresi

E-Vize başvurularında genellikle 3 iş günü içinde sonuçlanır.

## Bizim Yaklaşımımız

[Vietnam vizesi sayfamızda](/ulkeler/vietnam) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Vietnam Visa: The Application Process and What You Need to Know',
      excerpt: 'With a well-established e-Visa system offering a fast and predictable process, Halong Bay, Hanoi, and Ho Chi Minh City are Vietnam\'s most preferred routes.',
      content: `Vietnam, thanks to its well-established e-Visa system, offers Turkish citizens a fast and predictable application process; Halong Bay, Hanoi's old quarter, and the vibrant streets of Ho Chi Minh City are the most preferred routes. In this article, we compiled the Vietnam visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Halong Bay, Hanoi's old quarter, Ho Chi Minh City
- **Business**: Business meetings
- **Family visit**: Visiting family members living in Vietnam

## Flexibility for Multi-Point Routes

The e-Visa is valid at all entry points (airports, land, and sea borders), which offers flexibility for travelers planning multi-point routes. Having a clear and up-to-date uploaded photo and passport scan in the application shortens the approval time.

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Prepare the documents required for the e-Visa application: clear passport scan, digital photo, flight/hotel reservations
3. Complete your online application
4. Keep your approval email with you throughout your trip

## Processing Time

E-Visa applications are typically resolved within 3 business days.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Vietnam visa page](/ulkeler/vietnam). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة فيتنام: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بنظام تأشيرة إلكترونية راسخ يوفر عملية سريعة ويمكن التنبؤ بها، خليج هالونغ وهانوي ومدينة هوشي منه هي المسارات الأكثر تفضيلًا في فيتنام.',
      content: `تُقدّم فيتنام، بفضل نظام تأشيرتها الإلكترونية الراسخ، عملية طلب سريعة ويمكن التنبؤ بها للمواطنين الأتراك؛ ويُعد خليج هالونغ والحي القديم في هانوي وشوارع مدينة هوشي منه النابضة بالحياة المسارات الأكثر تفضيلًا. في هذا المقال، جمعنا عملية طلب تأشيرة فيتنام.

## ما هو غرض سفرك؟

- **سياحي**: خليج هالونغ، الحي القديم في هانوي، مدينة هوشي منه
- **تجاري**: اجتماعات العمل
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في فيتنام

## مرونة للمسارات متعددة النقاط

التأشيرة الإلكترونية سارية في جميع نقاط الدخول (المطارات، الحدود البرية والبحرية)، مما يوفر مرونة للمسافرين الذين يخططون لمسارات متعددة النقاط. وضوح الصورة المرفوعة ومسح جواز السفر المحدّث في الطلب يقلل من مدة الموافقة.

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. حضّر الوثائق المطلوبة لطلب التأشيرة الإلكترونية: مسح جواز سفر واضح، صورة رقمية، حجوزات الطيران/الفندق
3. أكمل طلبك عبر الإنترنت
4. احتفظ ببريد الموافقة الإلكتروني معك طوال رحلتك

## مدة المعالجة

تُحسم طلبات التأشيرة الإلكترونية عادةً في غضون 3 أيام عمل.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة فيتنام لدينا](/ulkeler/vietnam). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'sri-lanka-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1751247026229-518bfec9b5e6?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-06T14:20:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Sri Lanka Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Elektronik Seyahat İzni (ETA) ile genellikle dakikalar içinde onaylanan Sri Lanka başvurusunda çay bahçeleri, tarihi tapınaklar ve güney kıyısı plajları öne çıkıyor.',
      content: `Sri Lanka, Elektronik Seyahat İzni (ETA) sistemi ile Türk vatandaşları için hızlı ve tamamen online bir başvuru süreci sunar; çay bahçeleri, tarihi tapınakları ve güney kıyısındaki plajları ile hem doğa hem kültür turizmine hitap eder. Bu yazıda Sri Lanka vizesi başvuru sürecini derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Çay bahçeleri, Sigiriya kaya kalesi, güney kıyısı plajları
- **Ticari**: İş görüşmeleri
- **Aile ziyareti**: Sri Lanka'da yaşayan aile üyelerini ziyaret

## Güzergahınızı Muson Mevsimine Göre Planlayın

ETA başvurusu genellikle birkaç dakika içinde onaylanır, ancak seyahat öncesi çıktısının yanınızda bulundurulması önerilir. Muson mevsimi bölgeye göre değiştiğinden (batı-güney ve doğu kıyıları farklı dönemlerde yağış alır), seyahat tarihinize göre güzergah önerisi sunuyoruz.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Online ETA başvurunuzu tamamlayın: pasaport bilgileri, dijital fotoğraf
3. Onay belgenizin çıktısını alın
4. Seyahatiniz boyunca yanınızda bulundurun

## İşlem Süresi

ETA başvurularında genellikle birkaç dakika ile birkaç saat arasında sonuçlanır.

## Bizim Yaklaşımımız

[Sri Lanka vizesi sayfamızda](/ulkeler/sri-lanka) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Sri Lanka Visa: The Application Process and What You Need to Know',
      excerpt: "Typically approved within minutes via the Electronic Travel Authorization (ETA), Sri Lanka's application highlights tea gardens, historic temples, and south coast beaches.",
      content: `Sri Lanka, with its Electronic Travel Authorization (ETA) system, offers Turkish citizens a fast and fully online application process; with its tea gardens, historic temples, and south coast beaches, it appeals to both nature and culture tourism. In this article, we compiled the Sri Lanka visa application process.

## What Is Your Purpose of Travel?

- **Tourist**: Tea gardens, Sigiriya rock fortress, south coast beaches
- **Business**: Business meetings
- **Family visit**: Visiting family members living in Sri Lanka

## Plan Your Route Around Monsoon Season

The ETA application is typically approved within a few minutes, but we recommend carrying a printout of your confirmation before your trip. Since monsoon season varies by region (the west-south and east coasts receive rain at different times), we offer route recommendations based on your travel dates.

## Application Steps

1. Clarify your purpose of travel and dates
2. Complete your online ETA application: passport information, digital photo
3. Print out your confirmation document
4. Keep it with you throughout your trip

## Processing Time

ETA applications are typically resolved within a few minutes to a few hours.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Sri Lanka visa page](/ulkeler/sri-lanka). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة سريلانكا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'تُعتمد عادةً خلال دقائق عبر تصريح السفر الإلكتروني (ETA)، ويبرز طلب سريلانكا حدائق الشاي والمعابد التاريخية وشواطئ الساحل الجنوبي.',
      content: `تُقدّم سريلانكا، بنظام تصريح السفر الإلكتروني (ETA)، عملية طلب سريعة وإلكترونية بالكامل للمواطنين الأتراك؛ وبفضل حدائق الشاي ومعابدها التاريخية وشواطئ ساحلها الجنوبي، تجذب سياحة الطبيعة والثقافة معًا. في هذا المقال، جمعنا عملية طلب تأشيرة سريلانكا.

## ما هو غرض سفرك؟

- **سياحي**: حدائق الشاي، قلعة سيجيريا الصخرية، شواطئ الساحل الجنوبي
- **تجاري**: اجتماعات العمل
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في سريلانكا

## خطّط مسارك وفقًا لموسم الرياح الموسمية

يُعتمد طلب ETA عادةً خلال دقائق قليلة، لكن ننصح بحمل نسخة مطبوعة من تأكيدك قبل السفر. نظرًا لأن موسم الرياح الموسمية يختلف حسب المنطقة (يهطل المطر على الساحلين الغربي-الجنوبي والشرقي في أوقات مختلفة)، نقدم توصيات للمسار وفقًا لتواريخ سفرك.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. أكمل طلب ETA عبر الإنترنت: معلومات جواز السفر، صورة رقمية
3. اطبع وثيقة التأكيد
4. احتفظ بها معك طوال رحلتك

## مدة المعالجة

تُحسم طلبات ETA عادةً في غضون دقائق قليلة إلى بضع ساعات.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة سريلانكا لدينا](/ulkeler/sri-lanka). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
];

function seedBlogPosts14() {
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

seedBlogPosts14();
console.log('On dördüncü ve son blog seed paketi tamamlandı — 33 ülkelik içerik boşluğu kapatıldı.');
