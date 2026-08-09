// 25 SSS maddesinin EN/AR çevirisi (bkz. plan — Faz 3). Soru metnine göre
// eşleştirilir (id'ler ortamlar arasında farklılaşabiliyor). Tekrar
// çalıştırmak güvenlidir.
import { db } from './connection.js';

const groupTitles = {
  Genel: { en: 'General', ar: 'عام' },
  Ücretlendirme: { en: 'Pricing', ar: 'التسعير' },
  Evrak: { en: 'Documents', ar: 'الوثائق' },
  'Randevu & Mülakat': { en: 'Appointment & Interview', ar: 'الموعد والمقابلة' },
  'İptal & İade': { en: 'Cancellation & Refund', ar: 'الإلغاء والاسترداد' },
  'Başvuru Takip': { en: 'Application Tracking', ar: 'تتبع الطلب' },
  'Aile & Özel Durumlar': { en: 'Family & Special Cases', ar: 'العائلة والحالات الخاصة' },
  'Güncel Değişiklikler': { en: 'Recent Changes', ar: 'التطورات الحالية' },
};

const faqs = [
  {
    tr: 'Menekşe Vize ne iş yapar?',
    en: { q: 'What does Menekşe Vize do?', a: 'We provide consultancy throughout your entire visa application process, from the initial consultation to the result: determining the right visa type, document preparation, appointment scheduling, and process tracking.' },
    ar: { q: 'ما الذي تقدمه Menekşe Vize؟', a: 'نقدم استشارات خلال عملية طلب تأشيرتك بالكامل، من الاستشارة الأولى إلى النتيجة: تحديد نوع التأشيرة المناسب، وتحضير الوثائق، وتحديد المواعيد، وتتبع الإجراءات.' },
  },
  {
    tr: 'Hangi ülkeler için hizmet veriyorsunuz?',
    en: { q: 'Which countries do you provide services for?', a: 'We provide support for a wide range of countries, including the Schengen area, the US, the UK, Canada, Russia, Dubai/UAE, and Australia. You can check our [Services](/hizmetler) page for the current list.' },
    ar: { q: 'لأي دول تقدمون خدماتكم؟', a: 'نقدم الدعم لمجموعة واسعة من الدول، بما في ذلك منطقة شنغن والولايات المتحدة وبريطانيا وكندا وروسيا ودبي/الإمارات وأستراليا. يمكنك مراجعة صفحة [خدماتنا](/hizmetler) للقائمة الحالية.' },
  },
  {
    tr: 'Vize başvurumun onaylanacağını garanti edebilir misiniz?',
    en: { q: 'Can you guarantee my visa application will be approved?', a: 'No. The visa decision belongs entirely to the relevant country\'s consulate/authority; no consultancy firm can guarantee approval. We help you prepare your application completely and correctly.' },
    ar: { q: 'هل يمكنكم ضمان الموافقة على طلب تأشيرتي؟', a: 'لا. يعود قرار التأشيرة بالكامل إلى قنصلية أو سلطة الدولة المعنية؛ ولا يمكن لأي شركة استشارية ضمان الموافقة. نساعدك على تحضير طلبك بشكل كامل وصحيح.' },
  },
  {
    tr: 'Danışmanlık ücretiniz ne kadar?',
    en: { q: 'How much is your consultancy fee?', a: 'The fee varies depending on the country, visa type, and the scope of your application. We give you a clear quote after clarifying your needs during the initial consultation.' },
    ar: { q: 'كم تبلغ رسوم استشارتكم؟', a: 'تختلف الرسوم حسب الدولة ونوع التأشيرة ونطاق طلبك. نقدم لك عرضًا واضحًا بعد توضيح حاجتك خلال الاستشارة الأولية.' },
  },
  {
    tr: 'Ön görüşme ücretli mi?',
    en: { q: 'Is the initial consultation paid?', a: 'No, the initial consultation is completely free.' },
    ar: { q: 'هل الاستشارة الأولى مدفوعة؟', a: 'لا، الاستشارة الأولى مجانية تمامًا.' },
  },
  {
    tr: 'Konsolosluk/vize merkezi harcı danışmanlık ücretine dahil mi?',
    en: { q: 'Is the consulate/visa center fee included in the consultancy fee?', a: 'No. The official consulate/visa application center fee is separate from our consultancy fee and is paid directly to the relevant official institution.' },
    ar: { q: 'هل رسوم القنصلية/مركز التأشيرات مشمولة في رسوم الاستشارة؟', a: 'لا. رسوم القنصلية الرسمية/مركز طلبات التأشيرة منفصلة عن رسوم استشارتنا وتُدفع مباشرة للجهة الرسمية المعنية.' },
  },
  {
    tr: 'Evrak listesini nereden görebilirim?',
    en: { q: 'Where can I see the document list?', a: 'You can select your country and visa type on our [Document Guide](/evrak-rehberi) page to instantly view a personalized list, and print it if you like.' },
    ar: { q: 'من أين يمكنني رؤية قائمة الوثائق؟', a: 'يمكنك اختيار دولتك ونوع تأشيرتك في صفحة [دليل الوثائق](/evrak-rehberi) لعرض قائمة مخصصة فورًا، وطباعتها إذا أردت.' },
  },
  {
    tr: 'Evraklarım eksikse ne olur?',
    en: { q: 'What happens if my documents are incomplete?', a: 'We check your document list together before the application; if a document is missing or incorrect, we help you complete it before submitting.' },
    ar: { q: 'ماذا يحدث إذا كانت وثائقي ناقصة؟', a: 'نتحقق من قائمة وثائقك معًا قبل التقديم؛ إذا كانت هناك وثيقة ناقصة أو خاطئة، نساعدك على استكمالها قبل التقديم.' },
  },
  {
    tr: 'Belgelerimin tercümesi gerekiyor mu?',
    en: { q: 'Do my documents need to be translated?', a: 'Sworn translation may be required for certain countries and document types. This is clarified based on your specific situation during the initial consultation.' },
    ar: { q: 'هل تحتاج وثائقي إلى ترجمة؟', a: 'قد تتطلب بعض الدول وأنواع الوثائق ترجمة معتمدة. يتم توضيح ذلك حسب حالتك الخاصة خلال الاستشارة الأولية.' },
  },
  {
    tr: 'Randevu tarihini kim belirliyor?',
    en: { q: 'Who determines the appointment date?', a: "We schedule the appointment based on your availability; however, the final date depends on the available slots in the relevant consulate/visa center's system." },
    ar: { q: 'من يحدد تاريخ الموعد؟', a: 'نحدد الموعد بناءً على توفرك؛ لكن التاريخ النهائي يعتمد على الفترات المتاحة في نظام القنصلية/مركز التأشيرات المعني.' },
  },
  {
    tr: 'Mülakata ben mi katılıyorum?',
    en: { q: 'Do I attend the interview myself?', a: 'Yes, some visa types may require an interview, and the applicant must attend in person. We prepare you in advance on likely questions and the right approach.' },
    ar: { q: 'هل أحضر المقابلة بنفسي؟', a: 'نعم، قد تتطلب بعض أنواع التأشيرات مقابلة، ويجب أن يحضرها مقدم الطلب شخصيًا. نُحضّرك مسبقًا للأسئلة المحتملة والنهج الصحيح.' },
  },
  {
    tr: 'Sürecim iptal olursa ücret iade edilir mi?',
    en: { q: 'If my process is cancelled, will the fee be refunded?', a: 'Official consulate/visa center fees are generally not refundable, since these payments are made directly to the relevant official institution. The refund terms for the consultancy fee are clearly stated in the quote shared after the initial consultation.' },
    ar: { q: 'إذا أُلغيت عمليتي، هل تُسترد الرسوم؟', a: 'رسوم القنصلية/مركز التأشيرات الرسمية غير قابلة للاسترداد عمومًا، لأن هذه المدفوعات تُسدد مباشرة للجهة الرسمية المعنية. تُوضَّح شروط استرداد رسوم الاستشارة بوضوح في العرض المُقدَّم بعد الاستشارة الأولية.' },
  },
  {
    tr: 'Başvuru için ofisinize gelmem gerekiyor mu?',
    en: { q: 'Do I need to come to your office to apply?', a: 'No. We provide our consultancy remotely via phone, WhatsApp, and email; you can share your documents digitally and manage the process without visiting an office.' },
    ar: { q: 'هل يجب أن أحضر إلى مكتبكم للتقديم؟', a: 'لا. نقدم استشارتنا عن بُعد عبر الهاتف وواتساب والبريد الإلكتروني؛ يمكنك مشاركة وثائقك رقميًا وإدارة العملية دون زيارة مكتب.' },
  },
  {
    tr: 'Vize süreci ortalama ne kadar sürer?',
    en: { q: 'How long does the visa process usually take?', a: 'It varies depending on the country and visa type — some e-visa systems are resolved within a few business days, while in some countries it can take up to a few weeks. You can find the "Processing Time" information on each country page.' },
    ar: { q: 'كم تستغرق عملية التأشيرة في المتوسط؟', a: 'يختلف حسب الدولة ونوع التأشيرة — بعض أنظمة التأشيرة الإلكترونية تُحل في غضون أيام عمل قليلة، بينما قد تستغرق بعض الدول عدة أسابيع. يمكنك إيجاد معلومات "مدة الإجراء" في صفحة كل دولة.' },
  },
  {
    tr: 'Vize başvurum reddedilirse ne yapmalıyım?',
    en: { q: 'What should I do if my visa application is refused?', a: 'We assess the refusal reason together and plan the reapplication process by correcting any missing or incorrect points. We covered this topic in detail in our [blog post](/blog/vize-basvurusu-reddedildi-simdi-ne-yapmali).' },
    ar: { q: 'ماذا أفعل إذا رُفض طلب تأشيرتي؟', a: 'نُقيّم سبب الرفض معًا ونخطط لعملية إعادة التقديم من خلال تصحيح النقاط الناقصة أو الخاطئة. تناولنا هذا الموضوع بالتفصيل في [مقالة مدونتنا](/blog/vize-basvurusu-reddedildi-simdi-ne-yapmali).' },
  },
  {
    tr: 'Evrak Rehberi aracı ücretsiz mi?',
    en: { q: 'Is the Document Guide tool free?', a: 'Yes, our [Document Guide](/evrak-rehberi) tool is completely free and does not require membership.' },
    ar: { q: 'هل أداة دليل الوثائق مجانية؟', a: 'نعم، أداة [دليل الوثائق](/evrak-rehberi) مجانية تمامًا ولا تتطلب عضوية.' },
  },
  {
    tr: 'Banka hesap özetimde yeterli bakiye görünmüyor, yine de başvurabilir miyim?',
    en: { q: "My bank statement doesn't show a sufficient balance — can I still apply?", a: 'Financial sufficiency can be shown in different ways (sponsor/guarantor statement, additional income documents, etc.); we assess your situation together during the initial consultation and determine the best approach.' },
    ar: { q: 'لا يُظهر كشف حسابي المصرفي رصيدًا كافيًا، هل يمكنني التقديم مع ذلك؟', a: 'يمكن إثبات الكفاية المالية بطرق مختلفة (بيان ضامن/كفيل، وثائق دخل إضافية، إلخ)؛ نُقيّم حالتك معًا خلال الاستشارة الأولية ونحدد الطريقة الأنسب.' },
  },
  {
    tr: 'Başvurumun durumunu nasıl takip edebilirim?',
    en: { q: 'How can I track the status of my application?', a: 'You can instantly see the current stage of your application on our [Application Tracking](/takip) page using the tracking code we gave you and your surname.' },
    ar: { q: 'كيف يمكنني تتبع حالة طلبي؟', a: 'يمكنك رؤية المرحلة الحالية لطلبك فورًا في صفحة [تتبع الطلب](/takip) باستخدام رمز التتبع الذي زودناك به واسم عائلتك.' },
  },
  {
    tr: 'Takip kodumu kaybettim, ne yapmalıyım?',
    en: { q: 'I lost my tracking code, what should I do?', a: 'Contact us by phone, WhatsApp, or email; after identity verification, we can send you your tracking code again.' },
    ar: { q: 'فقدت رمز التتبع الخاص بي، ماذا أفعل؟', a: 'تواصل معنا عبر الهاتف أو واتساب أو البريد الإلكتروني؛ بعد التحقق من هويتك، يمكننا إعادة إرسال رمز التتبع إليك.' },
  },
  {
    tr: 'Çocuğum için ayrı bir vize başvurusu gerekiyor mu?',
    en: { q: 'Does my child need a separate visa application?', a: 'Yes, children also need a separate passport and visa application. Minor applicants are usually also required to provide additional parental consent.' },
    ar: { q: 'هل يحتاج طفلي إلى طلب تأشيرة منفصل؟', a: 'نعم، يحتاج الأطفال أيضًا إلى جواز سفر وطلب تأشيرة منفصلين. يُطلب عادةً من مقدمي الطلبات القاصرين تقديم موافقة الوالدين إضافيًا.' },
  },
  {
    tr: 'Reşit olmayan biri ailesinden ayrı seyahat edebilir mi?',
    en: { q: 'Can a minor travel separately from their family?', a: 'This depends on the country and the type of travel; a notarized consent letter and additional documents are usually required. We clarify your situation together during the initial consultation.' },
    ar: { q: 'هل يمكن للقاصر السفر بمفرده دون عائلته؟', a: 'يختلف هذا حسب الدولة ونوع السفر؛ وتُطلب عادةً موافقة موثقة ووثائق إضافية. نوضح حالتك معًا خلال الاستشارة الأولية.' },
  },
  {
    tr: 'ETİAS sistemi Türk vatandaşlarını etkiliyor mu?',
    en: { q: 'Does the ETIAS system affect Turkish citizens?', a: "No, it doesn't affect them directly. Since Turkish citizens already cannot enter the Schengen area without a visa, they are not on ETIAS's list of visa-exempt countries; your standard Schengen visa process continues unchanged. You can check our [ETIAS post](/blog/etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu) for details." },
    ar: { q: 'هل يؤثر نظام ETIAS على المواطنين الترك؟', a: 'لا، لا يؤثر عليهم مباشرة. بما أن المواطنين الترك لا يمكنهم دخول منطقة شنغن بدون تأشيرة أصلاً، فهم غير مدرجين في قائمة الدول المعفاة من التأشيرة التي يشملها ETIAS؛ تستمر عملية تأشيرة شنغن القياسية دون تغيير. يمكنك مراجعة [مقالتنا حول ETIAS](/blog/etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu) للتفاصيل.' },
  },
  {
    tr: "İngiltere'nin ETA sistemi Türk vatandaşları için vizeyi kaldırıyor mu?",
    en: { q: "Does the UK's ETA system remove the visa requirement for Turkish citizens?", a: 'No. The UK\'s ETA system only covers citizens of countries that travel visa-free; since Turkey is not on this list, you continue to apply for a standard visa when traveling to the UK. You can check our [UK ETA post](/blog/ingiltere-eta-sistemi-turk-vatandaslarini-etkiliyor-mu) for details.' },
    ar: { q: 'هل يُزيل نظام ETA البريطاني شرط التأشيرة للمواطنين الترك؟', a: 'لا. يشمل نظام ETA البريطاني فقط مواطني الدول التي تسافر بدون تأشيرة؛ وبما أن تركيا غير مدرجة في هذه القائمة، تستمر في التقديم على تأشيرة قياسية للسفر إلى بريطانيا. يمكنك مراجعة [مقالتنا حول ETA البريطاني](/blog/ingiltere-eta-sistemi-turk-vatandaslarini-etkiliyor-mu) للتفاصيل.' },
  },
  {
    tr: 'ABD vizesindeki yeni 250 dolarlık ücret kimleri kapsıyor?',
    en: { q: 'Who does the new $250 fee on US visas cover?', a: 'The US\'s new "Visa Integrity Fee" applies to most nonimmigrant visa categories such as B1/B2, F1, and H-1B, and is charged in addition to the existing application fee. Those under the Visa Waiver Program are exempt, but Turkish citizens generally fall outside this exemption. You can check our [post](/blog/abd-yeni-250-dolar-visa-integrity-fee-kimleri-kapsiyor) for details.' },
    ar: { q: 'من تشمله الرسوم الجديدة البالغة 250 دولارًا على تأشيرة الولايات المتحدة؟', a: 'تنطبق رسوم "سلامة التأشيرة" الجديدة في الولايات المتحدة على معظم فئات التأشيرات غير الهجرة مثل B1/B2 وF1 وH-1B، وتُفرض بالإضافة إلى رسوم التقديم الحالية. المعفيون بموجب برنامج الإعفاء من التأشيرة مستثنون، لكن المواطنين الترك يقعون عمومًا خارج هذا الاستثناء. يمكنك مراجعة [مقالتنا](/blog/abd-yeni-250-dolar-visa-integrity-fee-kimleri-kapsiyor) للتفاصيل.' },
  },
  {
    tr: 'Schengen vize ücreti neden arttı?',
    en: { q: 'Why did the Schengen visa fee increase?', a: 'The European Union raised the standard Schengen visa application fee from €80 to €90, effective June 11, 2026. This increase is an official fee set by the EU and is independent of our consultancy fee. You can check our [post](/blog/schengen-vize-ucreti-90-euroya-yukseldi) for details.' },
    ar: { q: 'لماذا ارتفعت رسوم تأشيرة شنغن؟', a: 'رفع الاتحاد الأوروبي رسوم طلب تأشيرة شنغن القياسية من 80 يورو إلى 90 يورو، اعتبارًا من 11 يونيو 2026. هذه الزيادة رسم رسمي يحدده الاتحاد الأوروبي، ومستقلة عن رسوم استشارتنا. يمكنك مراجعة [مقالتنا](/blog/schengen-vize-ucreti-90-euroya-yukseldi) للتفاصيل.' },
  },
];

const updateGroup = db.prepare('UPDATE faqs SET group_title_en = @en, group_title_ar = @ar WHERE group_title = @tr');
let groupCount = 0;
Object.entries(groupTitles).forEach(([tr, { en, ar }]) => {
  groupCount += updateGroup.run({ tr, en, ar }).changes;
});
console.log(`${groupCount} SSS grup başlığı çevrildi (satır bazında, tekrar edenler dahil).`);

const updateFaq = db.prepare('UPDATE faqs SET question_en = @qEn, question_ar = @qAr, answer_en = @aEn, answer_ar = @aAr WHERE question = @tr');
let faqCount = 0;
faqs.forEach(({ tr, en, ar }) => {
  const result = updateFaq.run({ tr, qEn: en.q, qAr: ar.q, aEn: en.a, aAr: ar.a });
  if (result.changes === 0) console.warn(`Eşleşmeyen SSS: ${tr}`);
  faqCount += result.changes;
});
console.log(`${faqCount} SSS maddesi çevrildi.`);
