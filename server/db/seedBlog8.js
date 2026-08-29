// Sekizinci blog seed paketi: 47 ülkeden 36'sının hiç ilgili blog yazısı
// olmadığı (RelatedPosts eşleşmesi) tespit edildi — bu üçü gerçek arama
// hacmi olan, henüz kapsanmamış en büyük destinasyonlardı: Hollanda (yoğun
// ticari+turistik Schengen trafiği), İsviçre (AB dışı ama Schengen, yüksek
// yaşam maliyeti nedeniyle mali yeterlilik vurgusu farklı), Japonya
// (Schengen dışı, tamamen ayrı bir süreç — içerik çeşitliliği de katıyor).
import { db } from './connection.js';

const posts = [
  {
    slug: 'hollanda-vizesi-basvuru-sureci-ve-onemli-noktalar',
    coverImageUrl: 'https://images.unsplash.com/photo-1742054294211-4036a4bfa4ef?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T09:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Hollanda Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: "Rotterdam Limanı ve Amsterdam'ın ticaret merkezi olmasıyla Hollanda, iş ve turizm başvurularının iç içe geçtiği bir Schengen ülkesi. Süreç adımları ve dikkat edilmesi gerekenler.",
      content: `Hollanda; Amsterdam'ın kanalları, lale bahçeleri ve müzeleriyle turistik açıdan öne çıkarken, Rotterdam Limanı ve uluslararası ticaret ağı sayesinde iş dünyasının da yoğun ilgi gösterdiği bir Schengen ülkesidir. Bu yazıda Hollanda vizesi başvuru sürecini ve öne çıkan noktaları derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Amsterdam, Rotterdam, Lahey güzergahı, lale sezonu (Nisan-Mayıs)
- **Ticari**: Lojistik, tarım teknolojileri ve liman ticareti fuarları, iş görüşmeleri
- **Aile ziyareti**: Hollanda'da yaşayan aile üyelerini ziyaret

## Ticari Başvurularda Öne Çıkan Nokta

Hollanda'nın güçlü ticaret altyapısı, iş amaçlı başvuruların diğer Schengen ülkelerine kıyasla daha sık görüldüğü anlamına gelir. Bu başvurularda şirketin faaliyet belgesinin ve Hollandalı firmadan alınan davet mektubunun tutarlı ve güncel olması, değerlendirme sürecini hızlandıran en önemli etken.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri (iş ziyaretlerinde ayrıca davet mektubu ve şirket belgeleri)
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Lale Sezonu Uyarısı

Nisan-Mayıs ayları hem turistik talebin hem de randevu yoğunluğunun en yüksek olduğu dönem. Bu dönemde seyahat planlıyorsanız başvurunuzu mümkün olduğunca erken (6-8 hafta önce) başlatmanızı öneririz.

## Bizim Yaklaşımımız

[Hollanda vizesi sayfamızda](/ulkeler/hollanda) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Netherlands Visa: The Application Process and What You Need to Know',
      excerpt: "With Rotterdam's port and Amsterdam as a trade hub, the Netherlands is a Schengen country where business and tourism applications closely intersect. The process steps and key points to note.",
      content: `The Netherlands stands out for tourism with Amsterdam's canals, tulip fields, and museums, while also drawing strong interest from the business world thanks to the Port of Rotterdam and its international trade network. In this article, we compiled the Netherlands visa application process and its key points.

## What Is Your Purpose of Travel?

- **Tourist**: The Amsterdam–Rotterdam–The Hague route, tulip season (April–May)
- **Business**: Logistics, agri-tech, and port trade fairs and business meetings
- **Family visit**: Visiting family members living in the Netherlands

## The Key Point in Business Applications

The Netherlands' strong trade infrastructure means business-purpose applications are more common here than in many other Schengen countries. In these applications, having a consistent and up-to-date company activity document and invitation letter from the Dutch company is the single biggest factor in speeding up the evaluation.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency (for business trips, also the invitation letter and company documents)
4. Submit your application in full on the appointment day

## A Note on Tulip Season

April and May see both the highest tourist demand and the busiest appointment schedules. If you're planning travel during this period, we recommend starting your application as early as possible (6-8 weeks ahead).

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Netherlands visa page](/ulkeler/hollanda). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة هولندا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'بميناء روتردام وأمستردام كمركز تجاري، تُعد هولندا دولة شنغن تتقاطع فيها طلبات العمل والسياحة بشكل وثيق. خطوات العملية والنقاط المهمة.',
      content: `تتميز هولندا سياحيًا بقنوات أمستردام وحقول الزنبق ومتاحفها، بينما تحظى أيضًا باهتمام كبير من عالم الأعمال بفضل ميناء روتردام وشبكتها التجارية الدولية. في هذا المقال، جمعنا عملية طلب تأشيرة هولندا ونقاطها المهمة.

## ما هو غرض سفرك؟

- **سياحي**: مسار أمستردام-روتردام-لاهاي، موسم الزنبق (أبريل-مايو)
- **تجاري**: معارض واجتماعات أعمال في قطاعات اللوجستيات والتكنولوجيا الزراعية والتجارة عبر الميناء
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في هولندا

## النقطة المهمة في طلبات العمل

تعني البنية التحتية التجارية القوية لهولندا أن طلبات غرض العمل أكثر شيوعًا هنا مقارنة بالعديد من دول شنغن الأخرى. في هذه الطلبات، يُعد امتلاك وثيقة نشاط شركة محدّثة ومتسقة وخطاب دعوة من الشركة الهولندية أهم عامل في تسريع التقييم.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية (لرحلات العمل، أيضًا خطاب الدعوة ووثائق الشركة)
4. قدّم طلبك كاملًا في يوم الموعد

## ملاحظة حول موسم الزنبق

يشهد شهرا أبريل ومايو أعلى طلب سياحي وأكثر جداول المواعيد ازدحامًا. إذا كنت تخطط للسفر خلال هذه الفترة، ننصح ببدء طلبك في أبكر وقت ممكن (6-8 أسابيع مسبقًا).

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة هولندا لدينا](/ulkeler/hollanda). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'isvicre-vizesi-basvuru-rehberi',
    coverImageUrl: 'https://images.unsplash.com/photo-1785920599356-21a06b5b2ba4?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T09:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'İsviçre Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'AB üyesi olmasa da Schengen bölgesinin parçası olan İsviçre, yüksek yaşam standardı nedeniyle mali yeterlilik konusunda daha dikkatli değerlendirme yapıyor. Süreç ve dikkat edilmesi gerekenler.',
      content: `İsviçre; Avrupa Birliği'ne üye olmamasına rağmen Schengen bölgesinin bir parçasıdır ve aynı Schengen vizesiyle ziyaret edilebilir. Alp manzaraları, kayak merkezleri ve Cenevre merkezli uluslararası kuruluşlar sayesinde hem turistik hem ticari ziyaretlerde yoğun talep görür. Bu yazıda İsviçre vizesi başvurusunda dikkat edilmesi gereken noktaları derledik.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Alp manzaraları, kayak merkezleri (Zermatt, St. Moritz), göl turları
- **Ticari**: Cenevre merkezli uluslararası kuruluşlar, bankacılık ve finans sektörü toplantıları
- **Aile ziyareti**: İsviçre'de yaşayan aile üyelerini ziyaret

## Mali Yeterlilik Neden Daha Dikkatli Değerlendiriliyor?

İsviçre'nin yaşam ve konaklama maliyetleri diğer Schengen ülkelerine kıyasla belirgin şekilde yüksektir. Bu nedenle konsolosluk, günlük harcama kapasitenizi ve konaklama planınızı diğer ülkelere göre daha titiz değerlendirebilir. Otel rezervasyonunuzun ve banka hesap özetinizin planlanan seyahat süresiyle tutarlı olması önemlidir.

## Başvuru Adımları

1. Seyahat amacınızı ve tarihlerinizi netleştirin
2. Yetkili vize başvuru merkezinden randevu alın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, seyahat sağlık sigortası (min. 30.000 € teminatlı), konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. Randevu gününde başvurunuzu eksiksiz teslim edin

## Kayak Sezonu Uyarısı

Aralık-Mart kayak sezonu ve Temmuz-Ağustos yaz turizmi döneminde randevu yoğunluğu artar. Bu dönemlerde erken başvuru, hem randevu bulmayı hem olası ek evrak taleplerini rahat karşılamayı kolaylaştırır.

## Bizim Yaklaşımımız

[İsviçre vizesi sayfamızda](/ulkeler/isvicre) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Switzerland Visa: The Application Process and What You Need to Know',
      excerpt: 'Not an EU member but part of the Schengen area, Switzerland applies closer scrutiny to financial sufficiency given its high cost of living. The process and key points to note.',
      content: `Switzerland is not a member of the European Union, yet it is part of the Schengen area and can be visited with the same Schengen visa. Thanks to its Alpine scenery, ski resorts, and Geneva-based international organizations, it sees strong demand for both tourist and business visits. In this article, we compiled the key points to note for a Switzerland visa application.

## What Is Your Purpose of Travel?

- **Tourist**: Alpine scenery, ski resorts (Zermatt, St. Moritz), lake tours
- **Business**: Geneva-based international organizations, banking and finance sector meetings
- **Family visit**: Visiting family members living in Switzerland

## Why Financial Sufficiency Gets Closer Scrutiny

Switzerland's cost of living and accommodation costs are noticeably higher than in other Schengen countries. Because of this, the consulate may assess your daily spending capacity and accommodation plan more rigorously than for other destinations. It's important that your hotel reservation and bank statement are consistent with your planned length of stay.

## Application Steps

1. Clarify your purpose of travel and dates
2. Get an appointment from the authorized visa application center
3. Prepare your documents: passport, biometric photo, travel health insurance (minimum €30,000 coverage), accommodation and flight reservations, proof of financial sufficiency
4. Submit your application in full on the appointment day

## A Note on Ski Season

Appointment demand rises during the December-March ski season and the July-August summer tourism period. Applying early during these periods makes it easier both to find an appointment and to handle any additional document requests comfortably.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Switzerland visa page](/ulkeler/isvicre). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة سويسرا: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'رغم أنها ليست عضوًا في الاتحاد الأوروبي، تُطبّق سويسرا (كجزء من منطقة شنغن) تدقيقًا أكثر صرامة على الكفاية المالية نظرًا لارتفاع تكاليف المعيشة فيها. العملية والنقاط المهمة.',
      content: `سويسرا ليست عضوًا في الاتحاد الأوروبي، لكنها جزء من منطقة شنغن ويمكن زيارتها بنفس تأشيرة شنغن. بفضل مناظر جبال الألب ومنتجعات التزلج والمنظمات الدولية التي تتخذ من جنيف مقرًا لها، تشهد طلبًا قويًا للزيارات السياحية والتجارية على حد سواء. في هذا المقال، جمعنا النقاط المهمة لطلب تأشيرة سويسرا.

## ما هو غرض سفرك؟

- **سياحي**: مناظر جبال الألب، منتجعات التزلج (زيرمات، سانت موريتز)، جولات البحيرات
- **تجاري**: اجتماعات المنظمات الدولية ومؤسسات القطاع المصرفي والمالي في جنيف
- **زيارة عائلية**: زيارة أفراد العائلة المقيمين في سويسرا

## لماذا يُدقَّق في الكفاية المالية بشكل أكبر؟

تكاليف المعيشة والإقامة في سويسرا أعلى بشكل ملحوظ مقارنة بدول شنغن الأخرى. لهذا السبب، قد تُقيّم القنصلية قدرتك على الإنفاق اليومي وخطة إقامتك بدقة أكبر مقارنة بوجهات أخرى. من المهم أن يكون حجز الفندق وكشف حسابك المصرفي متسقين مع مدة إقامتك المخطط لها.

## خطوات التقديم

1. وضّح غرض سفرك وتواريخك
2. احجز موعدًا من مركز طلبات التأشيرة المعتمد
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر (بتغطية لا تقل عن 30,000 يورو)، حجوزات الإقامة والطيران، وثائق الكفاية المالية
4. قدّم طلبك كاملًا في يوم الموعد

## ملاحظة حول موسم التزلج

يرتفع الطلب على المواعيد خلال موسم التزلج (ديسمبر-مارس) وموسم السياحة الصيفية (يوليو-أغسطس). التقديم المبكر خلال هذه الفترات يُسهِّل الحصول على موعد والتعامل بشكل مريح مع أي طلبات وثائق إضافية.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة سويسرا لدينا](/ulkeler/isvicre). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
  {
    slug: 'japonya-vizesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1753516075748-52c86d90d3b2?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-30T09:10:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Japonya Vizesi: Başvuru Süreci ve Bilinmesi Gerekenler',
      excerpt: 'Schengen sisteminin dışında, kendine özel bir başvuru süreci olan Japonya; kiraz çiçeği sezonuyla Türk gezginler arasında hızla popülerleşiyor. Süreç adımları ve dikkat edilmesi gerekenler.',
      content: `Japonya, Schengen bölgesinin tamamen dışında kendi vize sistemine sahiptir — bu yüzden başvuru formu, evrak seti ve süreç diğer Avrupa ülkelerinden farklıdır. Kiraz çiçeği (sakura) sezonu ve modern-gelenek karışımı kültürüyle son yıllarda Türk gezginler arasında hızla popülerleşen bir destinasyondur; Tokyo, Kyoto ve Osaka güzergahı en sık tercih edilen rota. Bu yazıda Japonya vizesi başvurusunun nasıl işlediğini derledik.

## Schengen'den Farkı Nedir?

Japonya vizesi başvurularında biyometrik veri (parmak izi) standart turistik başvurularda genellikle istenmez; bunun yerine detaylı bir **seyahat planı (itinerary)** ve bazı durumlarda Türkiye'deki bir kefil/davet eden kişinin belgeleri talep edilir. Sigorta zorunluluğu Schengen'deki gibi katı bir minimum teminat şartına bağlı değildir ama seyahat sağlık sigortası önerilir.

## Hangi Amaçla Gidiyorsunuz?

- **Turistik**: Tokyo, Kyoto, Osaka güzergahı; kiraz çiçeği sezonu (Mart-Nisan)
- **Ticari**: Elektronik, otomotiv ve robotik sektöründeki fuarlar ve iş görüşmeleri

## Başvuru Adımları

1. Seyahat amacınızı, güzergahınızı ve tarihlerinizi netleştirin
2. Detaylı bir seyahat planı (günlük program) hazırlayın
3. Evraklarınızı hazırlayın: pasaport, biyometrik fotoğraf, uçak/otel rezervasyonu, mali yeterlilik belgeleri
4. Başvurunuzu yetkili merkeze teslim edin

## Kiraz Çiçeği Sezonu Uyarısı

Mart-Nisan ayları hem uçak/otel fiyatlarının hem randevu yoğunluğunun en yüksek olduğu dönem. Bu sezonda seyahat planlıyorsanız başvurunuzu ve rezervasyonlarınızı olabildiğince erken tamamlamanızı öneririz.

## İşlem Süresi

Japonya vize başvuruları genellikle **1-2 hafta** içinde sonuçlanır — bu, birçok Avrupa ülkesine kıyasla daha öngörülebilir bir süreçtir.

## Bizim Yaklaşımımız

[Japonya vizesi sayfamızda](/ulkeler/japonya) ülkeye özel güncel bilgileri ve evrak listesini bulabilirsiniz. Durumunuza özel bir değerlendirme için [ücretsiz ön değerlendirme sayfamızı](/on-degerlendirme) kullanabilir, kendi evrak listenizi [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilirsiniz.`,
    },
    en: {
      title: 'Japan Visa: The Application Process and What You Need to Know',
      excerpt: 'Outside the Schengen system with its own distinct application process, Japan is rapidly gaining popularity among Turkish travelers thanks to cherry blossom season. The process steps and key points to note.',
      content: `Japan has its own visa system entirely outside the Schengen area — so the application form, document set, and process differ from European countries. With its cherry blossom (sakura) season and a culture that blends modern and traditional, it has rapidly become a popular destination among Turkish travelers in recent years; the Tokyo–Kyoto–Osaka route is the most commonly chosen itinerary. In this article, we compiled how the Japan visa application process works.

## How Is It Different From Schengen?

Biometric data (fingerprints) is generally not required for standard tourist applications to Japan; instead, a detailed **travel itinerary** is requested, and in some cases, documents from a guarantor/host in Turkey. Insurance is not tied to as strict a minimum coverage requirement as in Schengen, but travel health insurance is recommended.

## What Is Your Purpose of Travel?

- **Tourist**: The Tokyo–Kyoto–Osaka route; cherry blossom season (March–April)
- **Business**: Trade fairs and business meetings in the electronics, automotive, and robotics sectors

## Application Steps

1. Clarify your purpose of travel, route, and dates
2. Prepare a detailed travel itinerary (day-by-day plan)
3. Prepare your documents: passport, biometric photo, flight/hotel reservations, proof of financial sufficiency
4. Submit your application to the authorized center

## A Note on Cherry Blossom Season

March and April see both the highest flight/hotel prices and the busiest appointment schedules. If you're planning travel during this season, we recommend completing your application and reservations as early as possible.

## Processing Time

Japan visa applications are typically resolved within **1-2 weeks** — a more predictable timeline compared to many European countries.

## Our Approach

You can find country-specific, up-to-date information and the document list on [our Japan visa page](/ulkeler/japonya). For an assessment specific to your situation, you can use [our free pre-assessment page](/on-degerlendirme), and build your own document checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'تأشيرة اليابان: عملية التقديم وما تحتاج إلى معرفته',
      excerpt: 'خارج نظام شنغن ولها عملية تقديم خاصة بها، تكتسب اليابان شعبية متزايدة بسرعة بين المسافرين الأتراك بفضل موسم أزهار الكرز. خطوات العملية والنقاط المهمة.',
      content: `تمتلك اليابان نظام تأشيرات خاصًا بها خارج منطقة شنغن تمامًا — لذلك يختلف نموذج الطلب ومجموعة الوثائق والعملية عن الدول الأوروبية. بفضل موسم أزهار الكرز (الساكورا) وثقافتها التي تمزج بين الحداثة والتقاليد، أصبحت اليابان في السنوات الأخيرة وجهة تكتسب شعبية سريعة بين المسافرين الأتراك؛ ويُعد مسار طوكيو-كيوتو-أوساكا الأكثر اختيارًا. في هذا المقال، جمعنا كيفية سير عملية طلب تأشيرة اليابان.

## ما الفرق عن شنغن؟

لا تُطلب عادةً البيانات البيومترية (بصمات الأصابع) في الطلبات السياحية القياسية لليابان؛ وبدلاً من ذلك، يُطلب **برنامج سفر مفصّل**، وفي بعض الحالات وثائق من كفيل/مضيف في تركيا. التأمين غير مرتبط بشرط حد أدنى صارم للتغطية كما في شنغن، لكن يُنصح بالتأمين الصحي للسفر.

## ما هو غرض سفرك؟

- **سياحي**: مسار طوكيو-كيوتو-أوساكا؛ موسم أزهار الكرز (مارس-أبريل)
- **تجاري**: معارض واجتماعات أعمال في قطاعات الإلكترونيات والسيارات والروبوتات

## خطوات التقديم

1. وضّح غرض سفرك ومسارك وتواريخك
2. حضّر برنامج سفر مفصّل (خطة يومية)
3. حضّر وثائقك: جواز السفر، الصورة البيومترية، حجوزات الطيران والفندق، وثائق الكفاية المالية
4. قدّم طلبك إلى المركز المعتمد

## ملاحظة حول موسم أزهار الكرز

يشهد شهرا مارس وأبريل أعلى أسعار للطيران والفنادق وأكثر جداول المواعيد ازدحامًا. إذا كنت تخطط للسفر خلال هذا الموسم، ننصح بإكمال طلبك وحجوزاتك في أبكر وقت ممكن.

## مدة المعالجة

تُحسم طلبات تأشيرة اليابان عادةً في غضون **1-2 أسبوع** — وهو جدول زمني أكثر قابلية للتنبؤ مقارنة بالعديد من الدول الأوروبية.

## نهجنا

يمكنك أن تجد معلومات حديثة خاصة بالدولة وقائمة الوثائق في [صفحة تأشيرة اليابان لدينا](/ulkeler/japonya). لتقييم خاص بحالتك، يمكنك استخدام [صفحة التقييم المسبق المجاني](/on-degerlendirme)، وإنشاء قائمة وثائقك الخاصة عبر [أداة دليل الوثائق](/evrak-rehberi).`,
    },
  },
];

function seedBlogPosts8() {
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

seedBlogPosts8();
console.log('Sekizinci blog seed paketi tamamlandı.');
