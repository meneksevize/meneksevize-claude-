// Tek seferlik güncelleme: mevcut "Çoklu Giriş Schengen Vizesi" yazısı doğru
// mekanizmayı anlatıyordu ama AB Komisyonu'nun resmi "Cascade Kuralı" adını
// hiç kullanmıyordu ve aşama sıralaması (1yıl->2yıl->5yıl) AB'nin kendi resmi
// açıklamasıyla (ilk vize->6ay/90gün->1yıl->3yıl->5yıl) tam örtüşmüyordu —
// "2 yıllık" aşaması kaynakta yok. Yeni bir yazı açmak yerine (tekrar/ince
// içerik riski) mevcut yazı doğru terminoloji ve doğru aşamalarla güncellendi.
// Kaynak: eeas.europa.eu (AB Dışişleri Servisi Türkiye Temsilciliği), karar
// tarihi 15 Temmuz 2025.
import { db } from './connection.js';

const NEW_TITLE_TR = 'Çoklu Giriş Schengen Vizesi ve Cascade Kuralı Nasıl İşler?';
const NEW_EXCERPT_TR = 'AB Komisyonu\'nun 15 Temmuz 2025 kararıyla Türk vatandaşları için resmileşen "Cascade Kuralı", çok girişli Schengen vizesinin aşamalarını netleştiriyor.';
const NEW_CONTENT_TR = `Schengen bölgesine sık seyahat eden başvuru sahipleri için tek giriş yerine **çoklu giriş (multiple-entry)** vize almak, her seyahat öncesi yeniden başvuru yapma zorunluluğunu ortadan kaldırır. Avrupa Komisyonu'nun 15 Temmuz 2025 tarihli kararıyla, Türk vatandaşları için bu sürecin resmi adı **"Cascade Kuralı"** (kademeli vize kuralı) oldu — bu yazıda hem genel mantığı hem de güncel resmi aşamaları derledik.

## Cascade Kuralı Nedir?

Cascade Kuralı, Avrupa Komisyonu'nun kabul ettiği; Türkiye'de ikamet eden, kısa süreli Schengen vizesine başvuran ve güvenilir bir seyahat geçmişine sahip Türk vatandaşları için geçerli kademeli bir çok girişli vize sistemidir (tır şoförleri bu kapsamın dışındadır).

## Aşamalar Tam Olarak Nasıl İlerliyor?

Avrupa Birliği'nin resmi açıklamasına göre ilerleme şu şekildedir:

1. **İlk vize:** Planlanan seyahati kapsayan süre (tek veya çok girişli)
2. **İkinci vize:** 6 aylık dönemde 90 gün geçerli çok girişli vize
3. **Üçüncü vize:** 1 yıl geçerli çok girişli vize
4. **Sonraki vizeler:** 3 yıllık, ardından 5 yıllık çok girişli vize

## Hangi Şartları Taşımanız Gerekiyor?

Önceki 3 yıl içinde en az 2 Schengen vizesi almış olmanız ve bunları kurallara uygun şekilde — süresini aşmadan, belirtilen amaca uygun — kullanmış olmanız gerekiyor.

## Kalış Süresi Kuralı Hâlâ Geçerli

Çoklu giriş vizesi olsa dahi, her 180 günlük dönemde Schengen bölgesinde toplam **90 günden fazla** kalınamaz. Bu kural, EES sisteminin devreye girmesiyle artık dijital olarak otomatik takip ediliyor.

## İlk Kez Başvuranlar İçin

Daha önce Schengen vizesi almamış başvuru sahiplerine genellikle önce tek giriş veya kısa süreli çoklu giriş vizesi verilir; seyahat geçmişi arttıkça bir sonraki başvuruda Cascade Kuralı'nın bir sonraki aşamasına geçmek mümkün hale gelir.

## Bizim Yaklaşımımız

Sık seyahat planlıyorsanız, önceki vizelerinizi süresi içinde ve kurallara uygun şekilde kullanmış olmanız bir sonraki başvuruda daha uzun süreli çoklu giriş vizesi almanız için en güçlü kanıttır. Ön görüşmemizde seyahat geçmişinizi değerlendirip başvurunuzu bu yönde en güçlü şekilde hazırlıyoruz. [Hizmetlerimiz sayfamızdan](/hizmetler) çoklu giriş başvurunuz için doğru güzergah ve evrak stratejisini inceleyebilir, durumunuza özel bir değerlendirme için [ücretsiz ön görüşme](/on-degerlendirme) talep edebilirsiniz.`;

const NEW_TITLE_EN = 'Multiple-Entry Schengen Visas and the Cascade Rule: How It Works';
const NEW_EXCERPT_EN = 'Formalized for Turkish citizens by the EU Commission\'s 15 July 2025 decision, the "Cascade Rule" clarifies the stages of the multiple-entry Schengen visa.';
const NEW_CONTENT_EN = `For applicants who travel frequently to the Schengen area, obtaining a **multiple-entry** visa instead of a single-entry one removes the need to reapply before every trip. Following the European Commission's decision of 15 July 2025, this process now has an official name for Turkish citizens: the **"Cascade Rule."** In this article, we compiled both the general logic and the current official stages.

## What Is the Cascade Rule?

The Cascade Rule is a graduated multiple-entry visa system adopted by the European Commission for Turkish citizens who reside in Turkey, apply for a short-stay Schengen visa, and have a reliable travel history (truck drivers are excluded from this scope).

## How Exactly Do the Stages Progress?

According to the European Union's official statement, progression works as follows:

1. **First visa:** Valid for the duration of the planned trip (single or multiple entry)
2. **Second visa:** A multiple-entry visa valid for 90 days within a 6-month period
3. **Third visa:** A multiple-entry visa valid for 1 year
4. **Subsequent visas:** 3 years, then a 5-year multiple-entry visa

## What Conditions Do You Need to Meet?

You need to have obtained at least 2 Schengen visas in the previous 3 years and have used them in compliance with the rules — without overstaying, and for the stated purpose.

## The Stay-Duration Rule Still Applies

Even with a multiple-entry visa, you cannot stay in the Schengen area for more than **90 days** within any 180-day period. With the EES system now in place, this rule is automatically tracked digitally.

## For First-Time Applicants

Applicants who have not previously held a Schengen visa are generally issued a single-entry or short-duration multiple-entry visa at first; as your travel history grows, it becomes possible to move to the next stage of the Cascade Rule on your next application.

## Our Approach

If you're planning to travel frequently, using your previous visas within their validity and in compliance with the rules is the strongest evidence for obtaining a longer-duration multiple-entry visa on your next application. In our initial consultation, we evaluate your travel history and prepare the strongest possible file for your application in this direction. You can review the right route and document strategy for your multiple-entry application on [our services page](/en/hizmetler), and request [a free pre-assessment](/en/on-degerlendirme) specific to your situation.`;

const NEW_TITLE_AR = 'التأشيرة المتعددة الدخول لشنغن وقاعدة التسلسل (Cascade): كيف تعمل؟';
const NEW_EXCERPT_AR = 'بموجب قرار المفوضية الأوروبية في 15 يوليو 2025، أصبحت "قاعدة التسلسل" رسمية للمواطنين الأتراك، وتوضح مراحل التأشيرة المتعددة الدخول لشنغن.';
const NEW_CONTENT_AR = `بالنسبة لمقدمي الطلبات الذين يسافرون بشكل متكرر إلى منطقة شنغن، فإن الحصول على تأشيرة **متعددة الدخول** بدلاً من تأشيرة دخول واحد يلغي الحاجة إلى إعادة التقديم قبل كل رحلة. بعد قرار المفوضية الأوروبية الصادر في 15 يوليو 2025، أصبحت هذه العملية تحمل اسمًا رسميًا للمواطنين الأتراك: **"قاعدة التسلسل" (Cascade Rule)**. في هذا المقال، جمعنا المنطق العام والمراحل الرسمية الحالية.

## ما هي قاعدة التسلسل؟

قاعدة التسلسل هي نظام تأشيرة متعددة الدخول متدرج اعتمدته المفوضية الأوروبية للمواطنين الأتراك المقيمين في تركيا والذين يتقدمون بطلب تأشيرة شنغن قصيرة الأمد ولديهم تاريخ سفر موثوق (يُستثنى سائقو الشاحنات من هذا النطاق).

## كيف تتقدم المراحل بالضبط؟

وفقًا للبيان الرسمي للاتحاد الأوروبي، يسير التقدم على النحو التالي:

1. **التأشيرة الأولى:** صالحة لمدة الرحلة المخطط لها (دخول واحد أو متعدد)
2. **التأشيرة الثانية:** تأشيرة متعددة الدخول صالحة لـ 90 يومًا خلال فترة 6 أشهر
3. **التأشيرة الثالثة:** تأشيرة متعددة الدخول صالحة لمدة سنة واحدة
4. **التأشيرات اللاحقة:** 3 سنوات، ثم تأشيرة متعددة الدخول لمدة 5 سنوات

## ما هي الشروط التي يجب أن تستوفيها؟

يجب أن تكون قد حصلت على تأشيرتي شنغن على الأقل في السنوات الثلاث السابقة واستخدمتهما وفقًا للقواعد — دون تجاوز المدة المسموحة وللغرض المحدد.

## قاعدة مدة الإقامة لا تزال سارية

حتى مع تأشيرة متعددة الدخول، لا يمكنك البقاء في منطقة شنغن لأكثر من **90 يومًا** خلال أي فترة 180 يومًا. مع تفعيل نظام EES، يتم الآن تتبع هذه القاعدة تلقائيًا رقميًا.

## بالنسبة لمقدمي الطلبات لأول مرة

يُمنح مقدمو الطلبات الذين لم يحصلوا سابقًا على تأشيرة شنغن عادةً تأشيرة دخول واحد أو تأشيرة متعددة الدخول قصيرة المدة في البداية؛ ومع تزايد تاريخ سفرك، يصبح من الممكن الانتقال إلى المرحلة التالية من قاعدة التسلسل في طلبك القادم.

## نهجنا

إذا كنت تخطط للسفر بشكل متكرر، فإن استخدام تأشيراتك السابقة ضمن مدة صلاحيتها ووفقًا للقواعد هو أقوى دليل للحصول على تأشيرة متعددة الدخول أطول مدة في طلبك القادم. في تقييمنا الأولي، نقيّم تاريخ سفرك ونُعد أقوى ملف ممكن لطلبك في هذا الاتجاه. يمكنك مراجعة المسار الصحيح واستراتيجية الوثائق لطلب الدخول المتعدد الخاص بك في [صفحة خدماتنا](/ar/hizmetler)، وطلب [تقييم مسبق مجاني](/ar/on-degerlendirme) خاص بحالتك.`;

function updatePost() {
  const updatedAt = new Date().toISOString();
  const stmt = db.prepare(`
    UPDATE posts SET
      title = @title, excerpt = @excerpt, content = @content,
      title_en = @titleEn, excerpt_en = @excerptEn, content_en = @contentEn,
      title_ar = @titleAr, excerpt_ar = @excerptAr, content_ar = @contentAr,
      updated_at = @updatedAt
    WHERE slug = 'coklu-giris-schengen-vizesi-nasil-alinir'
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
  console.log(result.changes > 0 ? 'Yazı güncellendi (Cascade Kuralı eklendi).' : 'Yazı bulunamadı — güncelleme yapılmadı.');
}

updatePost();
