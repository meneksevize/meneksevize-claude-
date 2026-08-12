// Altıncı blog seed paketi: ABD ve İngiltere için öğrenci vizesi süreçlerine
// özel iki yeni yazı (bkz. seedBlog.js/seedBlog2.js/seedBlog3.js deseni).
// Bu iki ülkenin "ogrenci" vize tipi zaten sitede tanımlı (src/data/countries.js)
// ama şimdiye kadar kendine özel bir blog yazısı yoktu (var olan ABD/İngiltere
// yazıları mülakat/ETA/genel evrak konularını kapsıyordu) — bu paket o boşluğu
// dolduruyor. TR içerik ana dil; EN/AR aynı anda yazılıyor (bkz. Faz 4 —
// translateBlog.js deseni) ki site genelindeki çok dilli kapsamda bir eksik
// oluşmasın.
import { db } from './connection.js';

const posts = [
  {
    slug: 'abd-ogrenci-vizesi-f1-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1503572327579-b5c6afe5c5c5?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-12T09:00:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: "ABD Öğrenci Vizesi (F1) Başvurusunda I-20'den SEVIS Ücretine Adım Adım Süreç",
      excerpt: "ABD'de eğitim almak isteyenler için F1 vizesi süreci, okul kabulünden mülakata kadar birkaç farklı adımdan oluşur. İşte bilmeniz gerekenler.",
      content: `Amerika Birleşik Devletleri'nde lisans, yüksek lisans veya dil eğitimi almak isteyen öğrenciler için F1 vizesi, sürecin merkezinde yer alır. Turistik/ticari B1/B2 vizesinden farklı olarak F1 başvurusu, okuldan alınacak resmi bir belgeyle başlar ve birkaç ayrı adımı sırayla takip eder.

## I-20 Formu Nedir ve Nereden Alınır?

I-20 formu, kabul aldığınız ve SEVP (Student and Exchange Visitor Program) onaylı okulun sizin adınıza düzenlediği resmi bir belgedir; program adı, süresi ve tahmini eğitim masrafı gibi bilgileri içerir. Vize başvurusunun ilk adımı bu formun okuldan eksiksiz ve doğru bilgilerle alınmasıdır — I-20'deki herhangi bir tutarsızlık (isim, doğum tarihi, program tarihleri) sonraki adımlarda soruna yol açabilir.

## SEVIS Ücreti (I-901)

I-20 elinize geçtikten sonra, DS-160 başvurusundan önce SEVIS ücretinin (I-901 formu üzerinden) ödenmesi gerekir. Bu ücret, öğrenci takip sisteminin işletim masraflarını karşılar ve MRV vize başvuru ücretinden tamamen ayrı, ek bir ödemedir. Ödeme sonrası alınan dekontun bir kopyasının mülakata götürülmesi önerilir.

## DS-160 ve Mülakat Randevusu

SEVIS ücreti ödendikten sonra DS-160 formu doldurulur ve mülakat randevusu alınır. F1 mülakatlarında konsolosluk yetkilileri özellikle şu noktalara odaklanır: eğitim planınızın tutarlılığı, okulu ve programı neden seçtiğiniz, ve eğitim sonrası Türkiye'ye dönme niyetiniz.

## Mali Yeterlilik Beklentisi

I-20'de belirtilen tahmini yıllık maliyeti (eğitim + yaşam giderleri) karşılayacak mali kaynağın net ve belgelenebilir olması beklenir — burs, aile desteği veya kişisel birikim olabilir. Kaynağın kim tarafından sağlanacağı ve nasıl belgeleneceği mülakat öncesinde netleştirilmelidir.

## Sık Yapılan Hatalar

- I-20'deki bilgilerle DS-160'ta beyan edilen bilgilerin uyuşmaması
- SEVIS ücretinin DS-160'tan sonra veya son dakikada ödenmesi (randevu öncesi yeterli süre bırakılmaması)
- Mali kaynağın kim tarafından sağlanacağının belirsiz bırakılması
- Eğitim sonrası niyetin mülakatta net ifade edilememesi

## Bizim Yaklaşımımız

I-20 elinize geçtiği andan mülakat hazırlığına kadar süreci sizinle birlikte adım adım takip ediyor, SEVIS ücreti ve DS-160 sürecinin doğru sırayla ilerlemesini sağlıyoruz. [ABD vizesi sayfamızdan](/ulkeler/abd/ogrenci) genel süreç bilgilerine, [ücretsiz ön değerlendirme sayfamızdan](/on-degerlendirme) durumunuza özel bir değerlendirmeye ulaşabilirsiniz.`,
    },
    en: {
      title: 'US Student Visa (F1) Application: Step-by-Step Process From I-20 to the SEVIS Fee',
      excerpt: "For those who want to study in the US, the F1 visa process consists of several distinct steps, from school acceptance to the interview. Here's what you need to know.",
      content: `For students who want to pursue an undergraduate, graduate, or language program in the United States, the F1 visa is at the center of the process. Unlike the B1/B2 tourist/business visa, an F1 application begins with an official document from the school and follows several separate steps in sequence.

## What Is the I-20 Form and Where Do You Get It?

The I-20 form is an official document issued in your name by the SEVP (Student and Exchange Visitor Program)-certified school that accepted you; it includes information such as the program name, duration, and estimated cost of education. The first step of the visa application is obtaining this form from the school with complete and accurate information — any inconsistency on the I-20 (name, date of birth, program dates) can cause problems in later steps.

## The SEVIS Fee (I-901)

Once you have your I-20, the SEVIS fee (via Form I-901) must be paid before the DS-160 application. This fee covers the operating costs of the student tracking system and is a separate, additional payment from the MRV visa application fee. We recommend bringing a copy of the payment receipt to the interview.

## DS-160 and the Interview Appointment

After the SEVIS fee is paid, the DS-160 form is filled out and an interview appointment is scheduled. In F1 interviews, consular officers focus particularly on: the consistency of your education plan, why you chose that school and program, and your intent to return to Turkey after finishing your studies.

## Financial Sufficiency Expectations

You're expected to have clear, documentable financial resources to cover the estimated annual cost (education + living expenses) stated on the I-20 — this can be a scholarship, family support, or personal savings. Who will provide the funds and how they will be documented should be clarified before the interview.

## Common Mistakes

- Information on the I-20 not matching what's declared on the DS-160
- Paying the SEVIS fee after the DS-160 or at the last minute (not leaving enough time before the appointment)
- Leaving unclear who will provide the financial resources
- Not being able to clearly express your post-study intent in the interview

## Our Approach

From the moment your I-20 arrives to your interview preparation, we track the process together with you step by step, making sure the SEVIS fee and DS-160 process proceed in the correct order. You can find general process information on [our US visa page](/ulkeler/abd/ogrenci), and a personalized assessment of your situation through [our free initial assessment page](/on-degerlendirme).`,
    },
    ar: {
      title: 'طلب تأشيرة الطالب الأمريكية (F1): العملية خطوة بخطوة من I-20 إلى رسوم SEVIS',
      excerpt: 'بالنسبة لمن يرغبون في الدراسة في الولايات المتحدة، تتكون عملية تأشيرة F1 من عدة خطوات متتالية، من قبول المدرسة إلى المقابلة. إليك ما تحتاج إلى معرفته.',
      content: `بالنسبة للطلاب الراغبين في الحصول على تعليم جامعي أو دراسات عليا أو دورة لغة في الولايات المتحدة الأمريكية، تُعد تأشيرة F1 محور العملية. على عكس تأشيرة B1/B2 السياحية/التجارية، يبدأ طلب F1 بوثيقة رسمية من المدرسة ويتبع عدة خطوات منفصلة بالتتابع.

## ما هو نموذج I-20 وأين تحصل عليه؟

نموذج I-20 هو وثيقة رسمية تُصدرها باسمك المدرسة المعتمدة من برنامج SEVP (برنامج الطلاب والزوار المتبادلين) التي قبلتك؛ يتضمن معلومات مثل اسم البرنامج ومدته والتكلفة التقديرية للتعليم. الخطوة الأولى في طلب التأشيرة هي الحصول على هذا النموذج من المدرسة بمعلومات كاملة ودقيقة — أي عدم تطابق في نموذج I-20 (الاسم، تاريخ الميلاد، تواريخ البرنامج) قد يتسبب في مشاكل في الخطوات اللاحقة.

## رسوم SEVIS (I-901)

بمجرد حصولك على I-20، يجب دفع رسوم SEVIS (عبر النموذج I-901) قبل تقديم طلب DS-160. تغطي هذه الرسوم تكاليف تشغيل نظام تتبع الطلاب وهي دفعة إضافية منفصلة تمامًا عن رسوم طلب تأشيرة MRV. نوصي بإحضار نسخة من إيصال الدفع إلى المقابلة.

## DS-160 وموعد المقابلة

بعد دفع رسوم SEVIS، يتم تعبئة نموذج DS-160 وتحديد موعد للمقابلة. في مقابلات F1، يركز الموظفون القنصليون بشكل خاص على: اتساق خطتك التعليمية، سبب اختيارك لهذه المدرسة والبرنامج، ونيتك في العودة إلى تركيا بعد إنهاء دراستك.

## توقعات الكفاية المالية

يُتوقع أن تكون لديك مصادر مالية واضحة وقابلة للتوثيق لتغطية التكلفة السنوية التقديرية (التعليم + تكاليف المعيشة) المذكورة في I-20 — يمكن أن تكون منحة دراسية أو دعمًا عائليًا أو مدخرات شخصية. يجب توضيح من سيوفر الأموال وكيف سيتم توثيقها قبل المقابلة.

## الأخطاء الشائعة

- عدم تطابق المعلومات في I-20 مع ما هو مُصرَّح به في DS-160
- دفع رسوم SEVIS بعد DS-160 أو في اللحظة الأخيرة (عدم ترك وقت كافٍ قبل الموعد)
- عدم توضيح من سيوفر المصادر المالية
- عدم القدرة على التعبير بوضوح عن نيتك بعد الدراسة في المقابلة

## نهجنا

من لحظة وصول I-20 إلى استعدادك للمقابلة، نتابع العملية معك خطوة بخطوة، ونضمن سير عملية رسوم SEVIS وDS-160 بالترتيب الصحيح. يمكنك أن تجد معلومات عامة عن العملية في [صفحة تأشيرة الولايات المتحدة لدينا](/ulkeler/abd/ogrenci)، وتقييمًا مخصصًا لحالتك من خلال [صفحة التقييم المسبق المجاني](/on-degerlendirme).`,
    },
  },
  {
    slug: 'ingiltere-ogrenci-vizesi-cas-belgesi-basvuru-sureci',
    coverImageUrl: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1600&q=70',
    publishedAt: '2026-08-12T09:05:00.000Z',
    category: 'basvuru-rehberleri',
    tr: {
      title: 'İngiltere Öğrenci Vizesi (Student Visa) Başvurusunda CAS Belgesi ve Sürecin İşleyişi',
      excerpt: "İngiltere'de eğitim almak isteyenler için Student Visa süreci CAS belgesiyle başlar. İşte başvurunun nasıl işlediği ve dikkat edilmesi gereken noktalar.",
      content: `İngiltere'de üniversite veya dil eğitimi almak isteyen öğrenciler için başvuru süreci, Schengen ülkelerindeki öğrenci vizesi süreçlerinden farklı bir sırayla ilerler. Sürecin merkezinde, okuldan alınacak CAS belgesi yer alır.

## CAS Belgesi Nedir?

CAS (Confirmation of Acceptance for Studies), İngiltere'deki lisanslı bir eğitim kurumunun size verdiği, öğrenci vizesi başvurusu için gerekli olan elektronik bir referans numarasıdır. Kabul mektubundan farklı bir belgedir — kabul aldıktan sonra, genellikle eğitim ücretinin bir kısmının veya depozitonun ödenmesi sonrasında okul tarafından düzenlenir. Vize başvurusu CAS numarası elinize geçmeden başlatılamaz.

## Başvuru İçin Gereken Temel Belgeler

- CAS referans numarası ve içeriğindeki bilgiler (program, okul, süre)
- Pasaport
- Mali yeterlilik belgeleri (banka hesap özeti)
- İngilizce yeterlilik belgesi (CAS'ta belirtilmişse)
- Biyometrik fotoğraf

## Mali Yeterlilik ve Hesap Geçmişi

İngiltere öğrenci vizesi başvurularında banka hesap özetinin belirli bir süre (genellikle son 28 gün) kesintisiz aynı bakiye seviyesinde durması beklenir; bu tutar CAS'ta belirtilen eğitim ücreti bakiyesi ve yaşam maliyetine göre hesaplanır. Başvurudan hemen önce hesaba büyük bir tutar yatırmak, bu 28 günlük kesintisizlik şartını bozacağı için mali yeterliliği güçlendirmek yerine reddedilme riskini artırabilir.

## Biyometrik Randevu ve Dijital İkamet Durumu

Başvuru online tamamlandıktan sonra biyometrik randevu için vize başvuru merkezine gidilir. İngiltere, fiziksel biyometrik ikamet kartı (BRP) yerine dijital ikamet durumu (eVisa) sistemine geçişini sürdürüyor; vize onaylandığında UKVI hesabınız üzerinden dijital olarak ikamet durumunuza erişebilirsiniz — bu hesabı oluşturmayı ve giriş bilgilerinizi güvenli şekilde saklamayı unutmamak önemlidir.

## Sık Yapılan Hatalar

- CAS numarası gelmeden başvuru sürecine erken başlanması
- Banka hesap özetinde 28 günlük kesintisizlik şartının gözden kaçırılması
- CAS'taki program/okul bilgileriyle başvuru formundaki bilgilerin uyuşmaması

## Bizim Yaklaşımımız

CAS belgeniz elinize geçtiği andan biyometrik randevunuza kadar süreci birlikte takip ediyor, özellikle mali yeterlilik hesaplamasında 28 günlük kuralın gözden kaçmamasını sağlıyoruz. [İngiltere vizesi sayfamızdan](/ulkeler/ingiltere/ogrenci) genel süreç bilgilerine, [ücretsiz ön değerlendirme sayfamızdan](/on-degerlendirme) durumunuza özel bir değerlendirmeye ulaşabilirsiniz.`,
    },
    en: {
      title: 'UK Student Visa Application: The CAS Document and How the Process Works',
      excerpt: "For those who want to study in the UK, the Student Visa process begins with the CAS document. Here's how the application works and what to watch out for.",
      content: `For students who want to pursue a university education or language course in the UK, the application process follows a different sequence than student visa processes for Schengen countries. At the center of the process is the CAS document issued by the school.

## What Is the CAS Document?

CAS (Confirmation of Acceptance for Studies) is an electronic reference number given to you by a licensed educational institution in the UK, required for the student visa application. It's a different document from the acceptance letter — it's usually issued by the school after acceptance, generally following payment of part of the tuition fee or a deposit. The visa application cannot be started until you have your CAS number.

## Basic Documents Required for the Application

- The CAS reference number and the information it contains (program, school, duration)
- Passport
- Proof of financial sufficiency (bank statement)
- English language proficiency certificate (if specified in the CAS)
- Biometric photo

## Financial Sufficiency and Account History

For UK student visa applications, the bank statement is expected to maintain the same balance level without interruption for a specific period (usually the last 28 days); this amount is calculated based on the tuition balance stated in the CAS and living costs. Depositing a large amount into the account right before applying can break this 28-day uninterrupted requirement, increasing the risk of refusal instead of strengthening financial sufficiency.

## Biometric Appointment and Digital Immigration Status

After the online application is completed, you go to a visa application center for a biometric appointment. The UK continues transitioning from the physical Biometric Residence Permit (BRP) card to a digital immigration status (eVisa) system; once your visa is approved, you can access your immigration status digitally through your UKVI account — it's important to remember to create this account and keep your login details safe.

## Common Mistakes

- Starting the application process too early, before the CAS number arrives
- Overlooking the 28-day uninterrupted requirement in the bank statement
- The program/school information on the CAS not matching the information on the application form

## Our Approach

From the moment your CAS document arrives to your biometric appointment, we track the process together, making sure the 28-day rule in particular isn't overlooked in the financial sufficiency calculation. You can find general process information on [our UK visa page](/ulkeler/ingiltere/ogrenci), and a personalized assessment of your situation through [our free initial assessment page](/on-degerlendirme).`,
    },
    ar: {
      title: 'طلب تأشيرة الطالب البريطانية: وثيقة CAS وكيف تعمل العملية',
      excerpt: 'بالنسبة لمن يرغبون في الدراسة في بريطانيا، تبدأ عملية تأشيرة الطالب بوثيقة CAS. إليك كيف تعمل عملية التقديم وما يجب مراعاته.',
      content: `بالنسبة للطلاب الراغبين في الحصول على تعليم جامعي أو دورة لغة في بريطانيا، تسير عملية التقديم بترتيب مختلف عن عمليات تأشيرة الطالب في دول شنغن. في محور العملية توجد وثيقة CAS الصادرة من المدرسة.

## ما هي وثيقة CAS؟

CAS (تأكيد قبول الدراسة) هو رقم مرجعي إلكتروني تمنحه لك مؤسسة تعليمية مرخصة في بريطانيا، وهو مطلوب لطلب تأشيرة الطالب. إنها وثيقة مختلفة عن خطاب القبول — تُصدرها المدرسة عادةً بعد القبول، وغالبًا بعد دفع جزء من الرسوم الدراسية أو تأمين. لا يمكن بدء طلب التأشيرة قبل حصولك على رقم CAS.

## الوثائق الأساسية المطلوبة للطلب

- الرقم المرجعي لـ CAS والمعلومات التي يتضمنها (البرنامج، المدرسة، المدة)
- جواز السفر
- إثبات الكفاية المالية (كشف حساب مصرفي)
- شهادة إجادة اللغة الإنجليزية (إذا كانت محددة في CAS)
- صورة بيومترية

## الكفاية المالية وتاريخ الحساب

في طلبات تأشيرة الطالب البريطانية، يُتوقَّع أن يحافظ كشف الحساب المصرفي على نفس مستوى الرصيد دون انقطاع لفترة محددة (عادةً آخر 28 يومًا)؛ يُحسب هذا المبلغ بناءً على رصيد الرسوم الدراسية المذكور في CAS وتكاليف المعيشة. قد يؤدي إيداع مبلغ كبير في الحساب قبل التقديم مباشرة إلى كسر شرط عدم الانقطاع لمدة 28 يومًا، مما يزيد من خطر الرفض بدلاً من تقوية الكفاية المالية.

## الموعد البيومتري وحالة الإقامة الرقمية

بعد اكتمال الطلب عبر الإنترنت، تتوجه إلى مركز طلب التأشيرة لموعد بيومتري. تستمر بريطانيا في الانتقال من بطاقة الإقامة البيومترية الفعلية (BRP) إلى نظام حالة الإقامة الرقمية (eVisa)؛ بمجرد الموافقة على تأشيرتك، يمكنك الوصول إلى حالة إقامتك رقميًا من خلال حساب UKVI الخاص بك — من المهم تذكر إنشاء هذا الحساب والحفاظ على معلومات تسجيل الدخول بأمان.

## الأخطاء الشائعة

- بدء عملية التقديم مبكرًا جدًا، قبل وصول رقم CAS
- إغفال شرط عدم الانقطاع لمدة 28 يومًا في كشف الحساب المصرفي
- عدم تطابق معلومات البرنامج/المدرسة في CAS مع المعلومات في نموذج الطلب

## نهجنا

من لحظة وصول وثيقة CAS إلى موعدك البيومتري، نتابع العملية معًا، ونضمن عدم إغفال قاعدة 28 يومًا بشكل خاص في حساب الكفاية المالية. يمكنك أن تجد معلومات عامة عن العملية في [صفحة تأشيرة بريطانيا لدينا](/ulkeler/ingiltere/ogrenci)، وتقييمًا مخصصًا لحالتك من خلال [صفحة التقييم المسبق المجاني](/on-degerlendirme).`,
    },
  },
];

function seedBlogPosts6() {
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

seedBlogPosts6();
console.log('Altıncı blog seed paketi tamamlandı.');
