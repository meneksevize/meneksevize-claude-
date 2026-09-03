// On beşinci blog seed paketi — sitenin kendi hizmet kategorilerinde (Çalışma,
// Transit) ve çok sık karşılaşılan ama hiç işlenmemiş 2 pratik konuda
// (VFS Global/randevu sistemi, Schengen sigortası minimum teminat tutarı)
// gerçek içerik boşluklarını kapatır. "1000 URL" gibi rastgele bir sayıyı
// tutturmak için değil, gerçek arama niyetine cevap verdiği için yazıldı.
import { db } from './connection.js';

const posts = [
  {
    slug: 'calisma-vizesi-basvurusunda-bilinmesi-gerekenler',
    coverImageUrl: 'https://images.unsplash.com/photo-1758612214882-03f8a1d7211f?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-04T09:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Çalışma Vizesi Başvurusunda Bilinmesi Gerekenler',
      excerpt: 'Çalışma vizesi, turistik vizeden farklı olarak neredeyse her zaman bir işveren sponsorluğu ve ayrı bir çalışma izni süreci gerektirir. İşte bilmeniz gerekenler.',
      content: `Çalışma vizesi, turistik veya ticari vizeden temelde farklı bir kategoridir: neredeyse tüm ülkelerde başvurunun merkezinde **siz değil, sizi işe alacak işveren** yer alır. Bu yazıda çalışma vizesi başvurusunda dikkat edilmesi gereken noktaları derledik.

## İşveren Sponsorluğu Şart

Çoğu ülkede çalışma vizesi, önce yurt dışındaki işverenin sizin adınıza bir başvuru/izin süreci başlatmasıyla ilerler. Yani süreç genellikle şu sırayla işler:

1. İş teklifi ve iş sözleşmesi netleşir
2. İşveren, ülkenin göçmenlik/çalışma bakanlığı nezdinde sizin için bir çalışma izni/sponsorluk başvurusu yapar
3. Bu izin onaylandıktan sonra siz çalışma vizesi başvurunuzu yaparsınız

Bu nedenle, henüz somut bir iş teklifi olmadan çalışma vizesi süreci başlatmak mümkün değildir — turistik vizeden en büyük farkı budur.

## Çalışma İzni ile Çalışma Vizesi Aynı Şey Değildir

Birçok ülkede "çalışma izni" (work permit) ve "çalışma vizesi" (work visa) iki ayrı belgedir; izin önce işveren tarafından alınır, vize ise sizin ülkeye giriş yapmanızı sağlayan ayrı bir belgedir. Bazı ülkelerde bu iki süreç birleştirilmiş tek bir başvuru olarak işlerken, bazılarında tamamen ayrı adımlardır — hangi modelin geçerli olduğunu hedef ülkeye göre netleştirmek gerekir.

## Süreç Turistik Vizeye Göre Daha Uzun Sürer

İşveren onayı, çalışma piyasası testi (bazı ülkelerde işverenin önce yerel işgücü havuzunda uygun aday bulunmadığını göstermesi gerekir) ve ek belge kontrolleri nedeniyle çalışma vizesi süreci genellikle haftalar değil aylar sürebilir. Bu yüzden iş teklifi netleşir netleşmez sürece başlamak önemlidir.

## Bizim Yaklaşımımız

Çalışma vizesi başvurunuz için gereken evrak listesini [Evrak Rehberi aracımızla](/evrak-rehberi) oluşturabilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.`,
    },
    en: {
      title: 'What to Know When Applying for a Work Visa',
      excerpt: "Unlike a tourist visa, a work visa almost always requires employer sponsorship and a separate work-permit process. Here's what you need to know.",
      content: `A work visa is fundamentally different from a tourist or business visa: in almost every country, the application centers on **your employer, not you**. In this article, we compiled what to keep in mind when applying for a work visa.

## Employer Sponsorship Is Required

In most countries, a work visa process moves forward only after your prospective employer abroad initiates an application/permit process on your behalf. The process typically runs in this order:

1. The job offer and employment contract are finalized
2. The employer applies for a work permit/sponsorship with the country's immigration/labor ministry on your behalf
3. Once that permit is approved, you apply for your work visa

This means it isn't possible to start a work visa process without a concrete job offer already in place — this is the biggest difference from a tourist visa.

## A Work Permit and a Work Visa Are Not the Same Thing

In many countries, the "work permit" and the "work visa" are two separate documents; the permit is obtained first by the employer, while the visa is a separate document that lets you enter the country. In some countries these two processes are combined into a single application, while in others they are entirely separate steps — it's important to clarify which model applies to your target country.

## The Process Takes Longer Than a Tourist Visa

Because of employer approval, labor market testing (in some countries the employer must first show no suitable local candidate was available), and additional document checks, a work visa process can typically take months rather than weeks. This is why it's important to start the process as soon as the job offer is finalized.

## Our Approach

You can build the document checklist for your work visa application with [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.`,
    },
    ar: {
      title: 'ما تحتاج إلى معرفته عند التقديم على تأشيرة عمل',
      excerpt: 'على عكس التأشيرة السياحية، تتطلب تأشيرة العمل في الغالب كفالة من صاحب العمل وعملية تصريح عمل منفصلة. إليك ما تحتاج إلى معرفته.',
      content: `تأشيرة العمل تختلف جوهريًا عن التأشيرة السياحية أو التجارية: في معظم الدول، يتمحور الطلب حول **صاحب العمل وليس أنت**. في هذا المقال، جمعنا ما يجب مراعاته عند التقديم على تأشيرة عمل.

## كفالة صاحب العمل مطلوبة

في معظم الدول، لا تتقدم عملية تأشيرة العمل إلا بعد أن يبدأ صاحب العمل المحتمل في الخارج عملية طلب/تصريح نيابة عنك. تسير العملية عادةً بهذا الترتيب:

1. يتم الاتفاق على عرض العمل وعقد التوظيف
2. يقدم صاحب العمل طلب تصريح عمل/كفالة لدى وزارة الهجرة/العمل في الدولة نيابة عنك
3. بعد الموافقة على هذا التصريح، تتقدم أنت بطلب تأشيرة العمل

هذا يعني أنه لا يمكن بدء عملية تأشيرة العمل دون عرض عمل ملموس بالفعل — هذا هو أكبر فرق عن التأشيرة السياحية.

## تصريح العمل وتأشيرة العمل ليسا الشيء نفسه

في العديد من الدول، "تصريح العمل" و"تأشيرة العمل" وثيقتان منفصلتان؛ يحصل صاحب العمل على التصريح أولاً، بينما التأشيرة وثيقة منفصلة تتيح لك الدخول إلى البلاد. في بعض الدول تُدمج هاتان العمليتان في طلب واحد، بينما في دول أخرى تكونان خطوتين منفصلتين تمامًا — من المهم توضيح أي نموذج ينطبق على دولتك المستهدفة.

## العملية تستغرق وقتًا أطول من التأشيرة السياحية

بسبب موافقة صاحب العمل واختبار سوق العمل (في بعض الدول يجب على صاحب العمل أولاً إثبات عدم توفر مرشح محلي مناسب) وفحوصات الوثائق الإضافية، يمكن أن تستغرق عملية تأشيرة العمل عادةً أشهرًا بدلاً من أسابيع. لهذا من المهم بدء العملية بمجرد الاتفاق على عرض العمل.

## نهجنا

يمكنك إنشاء قائمة الوثائق لطلب تأشيرة العمل الخاص بك عبر [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.`,
    },
  },
  {
    slug: 'transit-vizesi-nedir-ne-zaman-gereklidir',
    coverImageUrl: 'https://images.unsplash.com/photo-1746125047145-d6698eef563a?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-04T09:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Transit Vizesi Nedir? Ne Zaman Gereklidir?',
      excerpt: 'Uçak aktarmalarında bazen vize gerekmez, bazen özel bir "transit vizesi" istenir. Aradaki farkı ve hangi durumda hangisinin geçerli olduğunu anlatıyoruz.',
      content: `Bir ülkeye gitmiyor, sadece başka bir uçuşa aktarma yapıyor olsanız bile bazı durumlarda ayrı bir **transit vizesi** gerekebilir. Bu yazıda transit vizesinin ne olduğunu ve ne zaman gerektiğini derledik.

## İki Tür Transit Var

- **Havalimanı transiti (Airport Transit Visa):** Uçaktan inmeden, pasaport kontrolünden geçmeden aynı havalimanında bir sonraki uçağa binmek. Bazı ülkeler, belirli milliyetler için bu durumda bile ayrı bir izin ister.
- **Sınırdan geçiş transiti (Transit Visa):** Aktarma sırasında ülkeye giriş yapıp (pasaport kontrolünden geçip) bir süre sonra ayrılmak — örneğin uzun bir bekleme süresinde şehre çıkmak veya kara sınırından geçiş yapmak.

## Ne Zaman Gerekir?

Transit vizesi gerekliliği; milliyetinize, aktarma yaptığınız ülkeye, uçuşlarınızın aynı havayolu/rezervasyon altında olup olmadığına ve bekleme süresine göre değişir. Bazı ülkeler kısa bekleme sürelerinde (ör. 24 saatin altında, aynı terminalde kalınması şartıyla) muafiyet tanırken, bazıları milliyete bakılmaksızın her aktarmada vize ister.

## Schengen Bölgesinde Transit

Schengen bölgesinde havalimanı transit vizesi (Type A) yalnızca belirli milliyetler için zorunludur ve bu liste ülkeden ülkeye değil, Schengen genelinde ortak bir listedir. Ancak havalimanından çıkıp şehre girecekseniz (kısa süreliğine de olsa) standart bir Schengen vizesi (Type C) gerekir — bu, "sadece aktarma yapıyorum" diye düşünülüp gözden kaçan bir noktadır.

## Güzergahınızı Önceden Netleştirin

Çok noktalı bir seyahat planlıyorsanız (örneğin üç farklı ülkeden geçen bir uçuş rotası), her aktarma noktasının kendi transit kuralını kontrol etmek gerekir — bazı rotalarda hiç vize gerekmezken, aynı varış noktasına farklı bir rotayla gitmek transit vizesi gerektirebilir.

## Bizim Yaklaşımımız

Güzergahınızın transit vizesi gerektirip gerektirmediğini [hizmetlerimiz sayfamızdan](/hizmetler) inceleyebilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.`,
    },
    en: {
      title: 'What Is a Transit Visa? When Is It Required?',
      excerpt: 'Sometimes a flight layover needs no visa at all, and sometimes it requires a special "transit visa." We explain the difference and when each applies.',
      content: `Even if you're not visiting a country and are only connecting to another flight, you may sometimes need a separate **transit visa**. In this article, we compiled what a transit visa is and when it's required.

## There Are Two Types of Transit

- **Airport Transit Visa:** Boarding your next flight at the same airport without leaving the plane area or going through passport control. Some countries require a separate permit for this even for certain nationalities.
- **Transit Visa (border crossing):** Actually entering the country (going through passport control) during your connection and leaving after a while — for example, going into the city during a long layover, or crossing a land border.

## When Is It Required?

Whether you need a transit visa depends on your nationality, the country you're connecting through, whether your flights are under the same airline/booking, and your layover duration. Some countries grant exemptions for short layovers (e.g., under 24 hours, staying in the same terminal), while others require a visa for every connection regardless of nationality.

## Transit in the Schengen Area

In the Schengen area, an airport transit visa (Type A) is mandatory only for certain nationalities, and this list is common across the whole Schengen area rather than varying by country. However, if you'll leave the airport and enter the city (even briefly), you need a standard Schengen visa (Type C) — this is a point that's often missed by people who think "I'm just connecting."

## Clarify Your Route in Advance

If you're planning a multi-point trip (for example, a flight route passing through three different countries), you need to check the transit rules at each connection point separately — some routes require no visa at all, while reaching the same destination via a different route might require a transit visa.

## Our Approach

You can review whether your route requires a transit visa on [our services page](/hizmetler), and request [a free pre-assessment](/on-degerlendirme) specific to your situation.`,
    },
    ar: {
      title: 'ما هي تأشيرة العبور؟ متى تكون مطلوبة؟',
      excerpt: 'أحيانًا لا يحتاج التوقف بين رحلتين إلى أي تأشيرة، وأحيانًا يتطلب "تأشيرة عبور" خاصة. نشرح الفرق ومتى تنطبق كل حالة.',
      content: `حتى لو كنت لا تزور دولة ما وتكتفي بالانتقال إلى رحلة أخرى، قد تحتاج أحيانًا إلى **تأشيرة عبور** منفصلة. في هذا المقال، جمعنا ما هي تأشيرة العبور ومتى تكون مطلوبة.

## هناك نوعان من العبور

- **تأشيرة العبور بالمطار:** الصعود إلى رحلتك التالية في نفس المطار دون مغادرة منطقة الطائرة أو المرور بمراقبة الجوازات. تتطلب بعض الدول تصريحًا منفصلاً لهذا حتى لجنسيات معينة.
- **تأشيرة العبور (عبور الحدود):** الدخول الفعلي إلى الدولة (المرور بمراقبة الجوازات) أثناء توقفك والمغادرة بعد فترة — مثل الذهاب إلى المدينة خلال توقف طويل، أو عبور حدود برية.

## متى تكون مطلوبة؟

يعتمد احتياجك لتأشيرة عبور على جنسيتك والدولة التي تعبر منها وما إذا كانت رحلاتك تحت نفس شركة الطيران/الحجز ومدة توقفك. تمنح بعض الدول إعفاءً للتوقفات القصيرة (مثلاً أقل من 24 ساعة، بشرط البقاء في نفس الصالة)، بينما تطلب دول أخرى تأشيرة لكل عبور بغض النظر عن الجنسية.

## العبور في منطقة شنغن

في منطقة شنغن، تأشيرة عبور المطار (النوع A) إلزامية فقط لجنسيات معينة، وهذه القائمة موحدة عبر منطقة شنغن بأكملها وليست مختلفة من دولة لأخرى. لكن إذا كنت ستغادر المطار وتدخل المدينة (ولو لفترة وجيزة)، فأنت بحاجة إلى تأشيرة شنغن قياسية (النوع C) — وهذه نقطة كثيرًا ما يغفل عنها من يظن أنه "يعبر فقط".

## وضّح مسارك مسبقًا

إذا كنت تخطط لرحلة متعددة النقاط (مثل مسار رحلة يمر بثلاث دول مختلفة)، يجب التحقق من قواعد العبور في كل نقطة اتصال على حدة — بعض المسارات لا تتطلب أي تأشيرة، بينما الوصول إلى نفس الوجهة عبر مسار مختلف قد يتطلب تأشيرة عبور.

## نهجنا

يمكنك مراجعة ما إذا كان مسارك يتطلب تأشيرة عبور في [صفحة خدماتنا](/hizmetler)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) خاص بحالتك.`,
    },
  },
  {
    slug: 'vfs-global-tlscontact-vize-basvuru-merkezi-randevu-sistemi',
    coverImageUrl: 'https://images.unsplash.com/photo-1758448093806-88b2089068ab?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-04T09:10:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'VFS Global, TLScontact: Vize Başvuru Merkezleri Nasıl Çalışır?',
      excerpt: 'Birçok ülkenin vize başvurusu artık büyükelçilikte değil, VFS Global veya TLScontact gibi dış hizmet sağlayıcılar üzerinden alınıyor. Bu merkezlerin ne olduğunu ve nasıl çalıştığını anlatıyoruz.',
      content: `Bugün birçok ülkenin vize başvurusu doğrudan büyükelçilik veya konsoloslukta değil, **VFS Global**, **TLScontact** gibi dış hizmet sağlayıcıların işlettiği başvuru merkezlerinde alınıyor. Bu durum ilk kez başvuranlar için kafa karıştırıcı olabiliyor — bu yazıda bu sistemin ne olduğunu ve nasıl işlediğini derledik.

## Bu Merkezler Konsolosluk Değildir

VFS Global ve TLScontact gibi şirketler, konsolosluklar adına **yalnızca lojistik hizmetleri** yürütür: randevu planlama, evrak teslim alma, biyometrik veri (parmak izi/fotoğraf) toplama ve pasaportu ilgili konsolosluğa iletme. **Vize kararını bu merkezler vermez** — karar her zaman ilgili ülkenin konsolosluğuna aittir; merkez yalnızca aracıdır.

## Randevu Sistemi Nasıl İşler?

1. İlgili ülkenin VFS Global veya TLScontact üzerindeki resmi sayfasından bir hesap oluşturulur
2. Şehre ve vize türüne göre uygun randevu tarihi seçilir (yoğun dönemlerde randevu bulmak haftalar sürebilir — bu yüzden erken planlama önemlidir)
3. Randevu gününde evraklar fiziksel olarak teslim edilir, biyometrik veri alınır
4. Bazı merkezler ek ücretli hizmetler sunar (SMS bilgilendirme, evrak fotokopisi, öncelikli randevu gibi) — bunlar isteğe bağlıdır, zorunlu değildir

## Dikkat Edilmesi Gereken Nokta

Başvuru merkezinin aldığı hizmet ücreti, konsolosluğun kendi vize ücretinden **ayrı ve ek** bir ücrettir. İkisini karıştırmamak, bütçe planlarken her iki ücreti de hesaba katmak gerekir.

## Bizim Yaklaşımımız

Hedef ülkenizin hangi başvuru merkezini kullandığını ve randevu sürecini birlikte netleştirebilir, [ücretsiz ön görüşme](/on-degerlendirme) ile başvurunuzu adım adım planlayabiliriz.`,
    },
    en: {
      title: 'VFS Global, TLScontact: How Do Visa Application Centers Work?',
      excerpt: "Many countries' visa applications are no longer taken at the embassy but through outsourced providers like VFS Global or TLScontact. Here's what these centers are and how they work.",
      content: `Today, many countries' visa applications are no longer taken directly at the embassy or consulate, but at application centers operated by outsourced service providers like **VFS Global** and **TLScontact**. This can be confusing for first-time applicants — in this article, we compiled what this system is and how it works.

## These Centers Are Not the Consulate

Companies like VFS Global and TLScontact carry out **only logistical services** on behalf of consulates: scheduling appointments, collecting documents, gathering biometric data (fingerprints/photo), and forwarding your passport to the relevant consulate. **These centers do not make the visa decision** — the decision always belongs to the relevant country's consulate; the center is only an intermediary.

## How Does the Appointment System Work?

1. An account is created on the relevant country's official page on VFS Global or TLScontact
2. An available appointment date is selected based on city and visa type (during busy periods, finding an appointment can take weeks — so early planning matters)
3. On the appointment day, documents are physically submitted and biometric data is collected
4. Some centers offer additional paid services (SMS notifications, document photocopying, priority appointments) — these are optional, not mandatory

## What to Watch Out For

The service fee charged by the application center is **separate from and in addition to** the consulate's own visa fee. It's important not to confuse the two, and to budget for both fees.

## Our Approach

We can help clarify together which application center your target country uses and how the appointment process works, and plan your application step by step with [a free pre-assessment](/on-degerlendirme).`,
    },
    ar: {
      title: 'VFS Global و TLScontact: كيف تعمل مراكز طلبات التأشيرة؟',
      excerpt: 'لم تعد طلبات التأشيرة لكثير من الدول تُقدَّم في السفارة بل عبر مزودي خدمات خارجيين مثل VFS Global أو TLScontact. نشرح ما هي هذه المراكز وكيف تعمل.',
      content: `اليوم، لم تعد طلبات تأشيرة العديد من الدول تُقدَّم مباشرة في السفارة أو القنصلية، بل في مراكز طلبات يديرها مزودو خدمات خارجيون مثل **VFS Global** و**TLScontact**. قد يكون هذا مربكًا لمن يتقدم لأول مرة — في هذا المقال، جمعنا ما هو هذا النظام وكيف يعمل.

## هذه المراكز ليست القنصلية

تقوم شركات مثل VFS Global وTLScontact بتنفيذ **خدمات لوجستية فقط** نيابة عن القنصليات: جدولة المواعيد، استلام الوثائق، جمع البيانات البيومترية (بصمات الأصابع/الصورة)، وإرسال جواز سفرك إلى القنصلية المعنية. **هذه المراكز لا تتخذ قرار التأشيرة** — القرار يعود دائمًا إلى قنصلية الدولة المعنية؛ المركز مجرد وسيط.

## كيف يعمل نظام المواعيد؟

1. يتم إنشاء حساب على الصفحة الرسمية للدولة المعنية على VFS Global أو TLScontact
2. يتم اختيار موعد متاح حسب المدينة ونوع التأشيرة (خلال الفترات المزدحمة، قد يستغرق إيجاد موعد أسابيع — لذا التخطيط المبكر مهم)
3. في يوم الموعد، تُقدَّم الوثائق فعليًا وتُجمع البيانات البيومترية
4. تقدم بعض المراكز خدمات إضافية مدفوعة (إشعارات عبر الرسائل النصية، تصوير الوثائق، مواعيد ذات أولوية) — هذه اختيارية وليست إلزامية

## ما يجب الانتباه إليه

رسوم الخدمة التي يفرضها مركز الطلبات **منفصلة عن رسوم التأشيرة الخاصة بالقنصلية وإضافية لها**. من المهم عدم الخلط بين الاثنين، وتخصيص ميزانية لكلا الرسمين.

## نهجنا

يمكننا المساعدة في توضيح أي مركز طلبات تستخدمه دولتك المستهدفة وكيف تعمل عملية المواعيد معًا، وتخطيط طلبك خطوة بخطوة عبر [تقييم مسبق مجاني](/on-degerlendirme).`,
    },
  },
  {
    slug: 'schengen-vizesi-seyahat-sigortasi-minimum-teminat-tutari',
    coverImageUrl: 'https://images.unsplash.com/photo-1761322572550-967ea8c0bfd9?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-09-04T09:15:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'Schengen Vizesi İçin Seyahat Sigortası Minimum Teminat Tutarı Nedir?',
      excerpt: 'Schengen vize başvurularında seyahat sağlık sigortası zorunludur ve teminat tutarının 30.000 Euro\'nun altında olmaması gerekir. Bu tutarın neyi kapsaması gerektiğini anlatıyoruz.',
      content: `Schengen vizesi başvurularında seyahat sağlık sigortası zorunlu belgelerden biridir, ancak "sigortam var" demek yeterli değildir — sigortanın **belirli bir minimum teminat tutarını ve kapsamı** karşılaması gerekir. Bu yazıda bu şartları derledik.

## Minimum Teminat: 30.000 Euro

Schengen vizesi için seyahat sağlık sigortasının teminat tutarı en az **30.000 Euro** olmalıdır. Bu tutarın altında bir poliçe, teminatı yeterli olsa bile başvurunun eksik evrakla değerlendirilmesine yol açabilir.

## Neleri Kapsamalı?

Poliçe yalnızca genel bir "seyahat sigortası" değil, özellikle şu kalemleri açıkça kapsamalıdır:

- Acil tıbbi tedavi masrafları
- Acil hastane tedavisi
- Vefat halinde cenazenin ülkeye nakli (repatriation)

Sadece bagaj kaybı veya uçuş iptali gibi teminatlar içeren ama tıbbi acil durumu kapsamayan bir seyahat sigortası, Schengen başvurusu için yeterli sayılmaz.

## Geçerlilik Alanı ve Tarihleri

Poliçe, **tüm Schengen bölgesinde** geçerli olmalı ve seyahat tarihlerinizin tamamını (gidiş-dönüş dahil) kapsamalıdır — sadece hedef ülkede geçerli veya seyahatinizin bir kısmını kapsamayan bir poliçe eksik kabul edilir. Çok noktalı bir Schengen seyahati planlıyorsanız, poliçenin ziyaret edeceğiniz tüm ülkeleri kapsadığından emin olunmalıdır.

## Sık Yapılan Hata

En sık karşılaşılan hata, poliçenin teminat tutarının 30.000 Euro'nun altında kalması ya da poliçenin yalnızca hedef ülkede değil, dönüş yolculuğunuzdaki transit ülkeleri kapsamamasıdır.

## Bizim Yaklaşımımız

Sigorta poliçenizin gerekli teminat ve kapsam şartlarını taşıyıp taşımadığını [Evrak Rehberi aracımızla](/evrak-rehberi) kontrol edebilir, sorularınız için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.`,
    },
    en: {
      title: 'What Is the Minimum Travel Insurance Coverage for a Schengen Visa?',
      excerpt: "Travel health insurance is mandatory for Schengen visa applications, and the coverage amount must be at least €30,000. Here's what that coverage needs to include.",
      content: `Travel health insurance is one of the mandatory documents for Schengen visa applications, but simply having "some insurance" isn't enough — the policy needs to meet a **specific minimum coverage amount and scope**. In this article, we compiled these requirements.

## Minimum Coverage: €30,000

For a Schengen visa, travel health insurance coverage must be at least **€30,000**. A policy below this amount can cause your application to be treated as having incomplete documentation, even if the coverage itself is adequate for your needs.

## What Should It Cover?

The policy shouldn't just be a generic "travel insurance" — it must specifically and clearly cover:

- Emergency medical treatment costs
- Emergency hospitalization
- Repatriation of remains in case of death

A travel insurance policy that only covers things like lost luggage or flight cancellation, without covering medical emergencies, is not considered sufficient for a Schengen application.

## Coverage Area and Dates

The policy must be valid **across the entire Schengen area** and must cover the full duration of your trip (including outbound and return) — a policy valid only in your destination country, or one that doesn't cover part of your trip, is considered incomplete. If you're planning a multi-point Schengen trip, make sure the policy covers every country you'll visit.

## A Common Mistake

The most common mistake is a policy whose coverage amount falls below €30,000, or one that doesn't cover the transit countries on your return journey, only your final destination.

## Our Approach

You can check whether your insurance policy meets the required coverage amount and scope using [our Document Guide tool](/evrak-rehberi), and request [a free pre-assessment](/on-degerlendirme) for any questions.`,
    },
    ar: {
      title: 'ما هو الحد الأدنى لتغطية تأمين السفر لتأشيرة شنغن؟',
      excerpt: 'التأمين الصحي للسفر إلزامي لطلبات تأشيرة شنغن، ويجب ألا يقل مبلغ التغطية عن 30,000 يورو. نشرح ما يجب أن تغطيه هذه التغطية.',
      content: `التأمين الصحي للسفر هو أحد الوثائق الإلزامية لطلبات تأشيرة شنغن، لكن مجرد امتلاك "تأمين ما" لا يكفي — يجب أن تستوفي البوليصة **مبلغ تغطية أدنى ونطاقًا محددًا**. في هذا المقال، جمعنا هذه المتطلبات.

## الحد الأدنى للتغطية: 30,000 يورو

بالنسبة لتأشيرة شنغن، يجب ألا يقل مبلغ تغطية التأمين الصحي للسفر عن **30,000 يورو**. يمكن أن تؤدي بوليصة أقل من هذا المبلغ إلى معاملة طلبك على أنه يحتوي على وثائق غير مكتملة، حتى لو كانت التغطية نفسها كافية لاحتياجاتك.

## ماذا يجب أن تغطي؟

يجب ألا تكون البوليصة مجرد "تأمين سفر" عام — يجب أن تغطي تحديدًا وبوضوح:

- تكاليف العلاج الطبي الطارئ
- الاستشفاء الطارئ
- إعادة الرفات إلى الوطن في حالة الوفاة

بوليصة تأمين سفر تغطي فقط أشياء مثل فقدان الأمتعة أو إلغاء الرحلة، دون تغطية الطوارئ الطبية، لا تُعتبر كافية لطلب تأشيرة شنغن.

## نطاق التغطية والتواريخ

يجب أن تكون البوليصة سارية **في جميع أنحاء منطقة شنغن** وأن تغطي كامل مدة رحلتك (بما في ذلك الذهاب والعودة) — تُعتبر البوليصة السارية فقط في دولة وجهتك، أو التي لا تغطي جزءًا من رحلتك، غير مكتملة. إذا كنت تخطط لرحلة شنغن متعددة النقاط، تأكد من أن البوليصة تغطي كل دولة ستزورها.

## خطأ شائع

الخطأ الأكثر شيوعًا هو بوليصة يقل مبلغ تغطيتها عن 30,000 يورو، أو بوليصة لا تغطي دول العبور في رحلة عودتك، بل وجهتك النهائية فقط.

## نهجنا

يمكنك التحقق مما إذا كانت بوليصة التأمين الخاصة بك تستوفي مبلغ التغطية والنطاق المطلوبين باستخدام [أداة دليل الوثائق لدينا](/evrak-rehberi)، وطلب [تقييم مسبق مجاني](/on-degerlendirme) لأي أسئلة.`,
    },
  },
];

function seedBlogPosts15() {
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

seedBlogPosts15();
