// Tek seferlik güncelleme: "ETIAS 2026'nın Sonunda Başlıyor" yazısı, AB'nin
// Ağustos 2026'da ETIAS'ı süresiz olarak erteleyeceğini açıklamasından önce
// yazılmıştı ve artık yanlış bilgi veriyor (yazı hâlâ "2026 son çeyreğinde
// devreye giriyor, 2027 Nisan'da zorunlu olacak" diyor). Gerçek, yazıyı
// kaldırmak yerine (tekil "ETIAS" araması için mevcut rank/backlink değerini
// korumak için) doğru, güncel durumla düzeltildi.
// Kaynaklar: tr.euronews.com (2026-07-08, 2026-08-12 — süresiz erteleme
// açıklaması), eu-LISA/Financial Times raporlaması.
import { db } from './connection.js';

const NEW_TITLE_TR = 'ETIAS Ne Zaman Başlıyor? Sistem Süresiz Olarak Ertelendi (Ekim 2026 Durumu)';
const NEW_EXCERPT_TR = 'AB, ETIAS seyahat izni sistemini Ağustos 2026\'da süresiz olarak erteledi; yeni bir tarih henüz açıklanmadı. Gecikmenin nedenini ve Türk vatandaşlarını nasıl etkilediğini anlatıyoruz.';
const NEW_CONTENT_TR = `**ETIAS (European Travel Information and Authorisation System)**, yıllardır ertelenen bir sistem olarak gündemdeydi ve bu yazı ilk yayınlandığında 2026'nın son çeyreğinde (Ekim-Aralık) devreye girmesi planlanıyordu. Ancak Avrupa Birliği, Ağustos 2026'da yaptığı resmi açıklamayla ETIAS'ın yürürlüğe girişini **süresiz olarak erteledi** — yeni bir başlangıç tarihi henüz belirlenmedi. AB, kesin tarih netleştiğinde bunu sistem devreye girmeden birkaç ay önce resmi olarak duyuracağını belirtiyor.

## Gecikmenin Nedeni Ne?

Ertelemenin arkasında, ETIAS'tan önce devreye alınan **EES (Giriş-Çıkış Sistemi)**'nde yaşanan teknik sorunlar var. Parmak izi ve yüz tanıma zorunluluğu getiren EES, bazı sınır kapılarında saatlerce süren kuyruklara yol açtı; AB, ikinci bir yeni sistemi bu sorunlar tam olarak çözülmeden devreye almak istemiyor.

## ETIAS Tam Olarak Nedir?

ETIAS, vize muafiyeti bulunan (yani Schengen bölgesine vizesiz girebilen) yaklaşık 60 ülke vatandaşının, seyahat öncesinde online bir seyahat izni almasını zorunlu kılan bir sistemdir — ABD'nin ESTA sistemine benzer şekilde çalışır.

## Peki Türk Vatandaşlarını Etkiliyor mu?

**Kısa cevap: Hayır, doğrudan etkilemiyor.** Türk vatandaşları Schengen bölgesine halihazırda vizesiz giremediği için, ETIAS'ın kapsadığı "vize muafiyetli ülkeler" listesinde yer almıyor. Yani Menekşe Vize müşterilerimizin büyük çoğunluğu için süreç bu sistemden bağımsız olarak, standart Schengen vizesi başvurusu şeklinde devam ediyor — gecikme de bu açıdan bir değişiklik yaratmıyor.

## Öyleyse Neden Bilmemiz Gerekiyor?

- Vize muafiyetli bir ülkeden (örneğin ikinci bir vatandaşlığı olan) aile üyeleriniz veya sizinle seyahat edecek arkadaşlarınız varsa, onların ETIAS almaları gerekebilir — ve bu kişiler için de henüz kesin bir tarih yok.
- ETIAS ve daha önce tam olarak devreye giren EES (Giriş-Çıkış Sistemi) birlikte, AB'nin sınır kontrol altyapısını kapsamlı şekilde dijitalleştiriyor — bu değişim, orta vadede vize süreçlerinin bazı yönlerini de (randevu sistemleri, veri paylaşımı gibi) etkileyebilir.

## Bizim Yaklaşımımız

AB sınır sistemlerindeki gelişmeleri yakından takip ediyor, sizi ve seyahat ettiğiniz grup içindeki farklı uyruklardaki kişileri doğru şekilde bilgilendiriyoruz. ETIAS'ın kesin başlangıç tarihi resmi olarak açıklandığında, güncel bilgileri bu blogdan paylaşmaya devam edeceğiz.

ETIAS'ın seyahat planınızı nasıl etkileyeceğini [hizmetlerimiz sayfamızdan](/hizmetler) inceleyebilir, sorularınız için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.`;

const NEW_TITLE_EN = 'When Does ETIAS Start? The System Has Been Postponed Indefinitely (October 2026 Update)';
const NEW_EXCERPT_EN = 'The EU postponed the ETIAS travel authorization system indefinitely in August 2026; no new date has been announced yet. Here\'s why it was delayed and what it means for Turkish citizens.';
const NEW_CONTENT_EN = `**ETIAS (European Travel Information and Authorisation System)** has been on the agenda for years as a repeatedly postponed system, and when this article was first published, it was planned to launch in the last quarter of 2026 (October-December). However, the European Union officially announced in August 2026 that it has **postponed ETIAS indefinitely** — no new start date has been set yet. The EU states that once a firm date is confirmed, it will be officially announced a few months before the system goes live.

## Why Was It Delayed?

The delay stems from technical issues with the **EES (Entry/Exit System)**, which launched before ETIAS. EES, which requires fingerprint and facial recognition, caused queues of several hours at some border crossings; the EU doesn't want to roll out a second new system before these issues are fully resolved.

## What Exactly Is ETIAS?

ETIAS is a system that requires citizens of around 60 visa-exempt countries (i.e., those who can enter the Schengen area without a visa) to obtain an online travel authorization before traveling — it works similarly to the US's ESTA system.

## Does It Affect Turkish Citizens?

**Short answer: No, not directly.** Since Turkish citizens already cannot enter the Schengen area without a visa, they are not on the list of "visa-exempt countries" covered by ETIAS. This means that for the vast majority of our Menekşe Vize customers, the process continues independently of this system, in the form of a standard Schengen visa application — and the delay doesn't change that.

## So Why Do We Need to Know About It?

- If you have family members or friends traveling with you who hold citizenship of a visa-exempt country (for example, a second nationality), they may need ETIAS too — and for them, there's no confirmed date yet either.
- ETIAS, together with the now fully operational EES (Entry/Exit System), is comprehensively digitalizing the EU's border control infrastructure — this shift may, in the medium term, also affect some aspects of visa processes (such as appointment systems and data sharing).

## Our Approach

We closely follow developments in EU border systems and properly inform you and any people of different nationalities traveling within your group. Once ETIAS's exact start date is officially confirmed, we will continue to share up-to-date information through this blog.

You can review how ETIAS will affect your travel plans on [our services page](/en/hizmetler), and request [a free pre-assessment](/en/on-degerlendirme) for any questions.`;

const NEW_TITLE_AR = 'متى ينطلق نظام ETIAS؟ تم تأجيل النظام إلى أجل غير معلوم (تحديث أكتوبر 2026)';
const NEW_EXCERPT_AR = 'أجّل الاتحاد الأوروبي نظام تصريح السفر ETIAS إلى أجل غير معلوم في أغسطس 2026؛ ولم يُعلن عن تاريخ جديد حتى الآن. نوضح سبب التأجيل وتأثيره على المواطنين الترك.';
const NEW_CONTENT_AR = `كان نظام **ETIAS (نظام معلومات وتصريح السفر الأوروبي)** على جدول الأعمال منذ سنوات كنظام تأجَّل مرارًا، وعندما نُشر هذا المقال لأول مرة كان من المخطط إطلاقه في الربع الأخير من عام 2026 (أكتوبر-ديسمبر). لكن الاتحاد الأوروبي أعلن رسميًا في أغسطس 2026 أنه **أجّل تطبيق ETIAS إلى أجل غير معلوم** — ولم يُحدَّد تاريخ بدء جديد حتى الآن. ويذكر الاتحاد الأوروبي أنه بعد تحديد تاريخ نهائي، سيُعلن عنه رسميًا قبل عدة أشهر من دخول النظام حيز التنفيذ.

## ما سبب التأجيل؟

يعود سبب التأجيل إلى المشكلات التقنية في نظام **EES (نظام الدخول والخروج)** الذي انطلق قبل ETIAS. فنظام EES، الذي يتطلب بصمات الأصابع والتعرف على الوجه، تسبب في طوابير استمرت لساعات عند بعض نقاط الحدود؛ ولا يريد الاتحاد الأوروبي تطبيق نظام جديد ثانٍ قبل حل هذه المشكلات بشكل كامل.

## ما هو نظام ETIAS بالضبط؟

ETIAS نظام يُلزم مواطني حوالي 60 دولة معفاة من التأشيرة (أي يمكنهم دخول منطقة شنغن دون تأشيرة) بالحصول على تصريح سفر عبر الإنترنت قبل السفر — يعمل بشكل مشابه لنظام ESTA الأمريكي.

## هل يؤثر على المواطنين الترك؟

**الإجابة المختصرة: لا، لا يؤثر مباشرة.** بما أن المواطنين الترك لا يمكنهم بالفعل دخول منطقة شنغن دون تأشيرة، فهم غير مدرجين في قائمة "الدول المعفاة من التأشيرة" التي يغطيها ETIAS. أي أن العملية بالنسبة لغالبية عملاء منكشة فيزا ستستمر بشكل مستقل عن هذا النظام، في شكل طلب تأشيرة شنغن قياسي — والتأجيل لا يغيّر ذلك.

## فلماذا يجب أن نعرف عن هذا؟

- إذا كان لديك أفراد من عائلتك أو أصدقاء يسافرون معك يحملون جنسية دولة معفاة من التأشيرة (مثل جنسية ثانية)، فقد يحتاجون إلى ETIAS أيضًا — ولا يوجد تاريخ مؤكد لهم أيضًا حتى الآن.
- يعمل نظام ETIAS، إلى جانب نظام EES الذي أصبح الآن يعمل بكامل طاقته، على رقمنة البنية التحتية لمراقبة الحدود في الاتحاد الأوروبي بشكل شامل — وقد يؤثر هذا التحول على المدى المتوسط في بعض جوانب عمليات التأشيرة أيضًا (مثل نظم المواعيد ومشاركة البيانات).

## نهجنا

نتابع عن كثب التطورات في أنظمة حدود الاتحاد الأوروبي، ونُطلعك بشكل صحيح أنت والأشخاص من جنسيات مختلفة الذين يسافرون معك ضمن مجموعتك. عندما يُعلن رسميًا عن تاريخ بدء ETIAS النهائي، سنستمر في مشاركة المعلومات الحديثة عبر هذا البلوج.

يمكنك مراجعة كيفية تأثير ETIAS على خطط سفرك في [صفحة خدماتنا](/ar/hizmetler)، وطلب [تقييم مسبق مجاني](/ar/on-degerlendirme) لأي أسئلة.`;

function updatePost() {
  const updatedAt = new Date().toISOString();
  const stmt = db.prepare(`
    UPDATE posts SET
      title = @title, excerpt = @excerpt, content = @content,
      title_en = @titleEn, excerpt_en = @excerptEn, content_en = @contentEn,
      title_ar = @titleAr, excerpt_ar = @excerptAr, content_ar = @contentAr,
      updated_at = @updatedAt
    WHERE slug = 'etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu'
  `);
  const result = stmt.run({
    title: NEW_TITLE_TR,
    excerpt: NEW_EXCERPT_TR,
    content: NEW_CONTENT_TR,
    titleEn: NEW_TITLE_EN,
    excerptEn: NEW_EXCERPT_EN,
    contentEn: NEW_CONTENT_EN,
    titleAr: NEW_TITLE_AR,
    excerptAr: NEW_EXCERPT_AR,
    contentAr: NEW_CONTENT_AR,
    updatedAt,
  });
  console.log(result.changes > 0 ? 'Yazı güncellendi (ETIAS süresiz erteleme bilgisiyle düzeltildi).' : 'Yazı bulunamadı — güncelleme yapılmadı.');
}

updatePost();
