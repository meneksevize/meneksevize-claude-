// visa_documents tablosunun EN/AR çevirisi (bkz. plan — Faz 3). 39 satırın
// evrak listesi (items) toplamda sadece 99 farklı madde içeriyor (39 ülke/tip
// kombinasyonu aynı evrakları büyük ölçüde paylaşıyor) — bu yüzden 99 maddeyi
// bir kez çevirip her satırın items dizisini bu sözlükten yeniden inşa ediyoruz.
// Notlar (note) satıra özel olduğu için docs_key+type_key ile ayrı çevrildi.
import { db } from './connection.js';

const items = {
  Pasaport: { en: 'Passport', ar: 'جواز السفر' },
  'İş teklifi/sponsorluk belgesi': { en: 'Job offer/sponsorship document', ar: 'عرض عمل/وثيقة كفالة' },
  'İşveren tarafından onaylanmış dilekçe': { en: 'Petition approved by the employer', ar: 'طلب معتمد من صاحب العمل' },
  'DS-160 başvuru formu onay sayfası': { en: 'DS-160 application form confirmation page', ar: 'صفحة تأكيد نموذج طلب DS-160' },
  'Diploma/deneyim belgeleri': { en: 'Diploma/experience documents', ar: 'شهادات الدبلوم/الخبرة' },
  'Fotoğraf (5x5 cm)': { en: 'Photo (5x5 cm)', ar: 'صورة (5×5 سم)' },
  'I-20 formu': { en: 'I-20 form', ar: 'نموذج I-20' },
  'SEVIS ücret dekontu (I-901)': { en: 'SEVIS fee receipt (I-901)', ar: 'إيصال رسوم SEVIS (I-901)' },
  'Mali yeterlilik belgesi': { en: 'Proof of financial sufficiency', ar: 'وثيقة الكفاية المالية' },
  'Akademik geçmiş belgeleri': { en: 'Academic background documents', ar: 'وثائق السجل الأكاديمي' },
  "Pasaport (ABD çıkış tarihinizden itibaren en az 6 ay geçerli)": { en: 'Passport (valid for at least 6 months from your intended date of departure from the US)', ar: 'جواز السفر (ساري لمدة 6 أشهر على الأقل من تاريخ مغادرتك المقرر من الولايات المتحدة)' },
  'DS-160 başvuru formu onay sayfası (barkodlu)': { en: 'DS-160 application form confirmation page (with barcode)', ar: 'صفحة تأكيد نموذج DS-160 (مع الرمز الشريطي)' },
  'Fotoğraf (5x5 cm, son 6 ay içinde, beyaz fon)': { en: 'Photo (5x5 cm, taken within the last 6 months, white background)', ar: 'صورة (5×5 سم، مأخوذة خلال آخر 6 أشهر، بخلفية بيضاء)' },
  'MRV vize başvuru ücreti ödeme dekontu': { en: 'MRV visa application fee payment receipt', ar: 'إيصال دفع رسوم طلب تأشيرة MRV' },
  'Mülakat randevu teyit sayfası': { en: 'Interview appointment confirmation page', ar: 'صفحة تأكيد موعد المقابلة' },
  'Şirket/iş ortağı daveti mektubu': { en: 'Invitation letter from the company/business partner', ar: 'خطاب دعوة من الشركة/الشريك التجاري' },
  'Şirket faaliyet belgesi': { en: 'Company activity certificate', ar: 'شهادة نشاط الشركة' },
  'Banka hesap özeti': { en: 'Bank statement', ar: 'كشف حساب مصرفي' },
  'Çalışma/maaş belgesi': { en: 'Employment/salary document', ar: 'وثيقة العمل/الراتب' },
  'Seyahat planı özeti': { en: 'Travel plan summary', ar: 'ملخص خطة السفر' },
  'Pasaport (en az 6 ay geçerli)': { en: 'Passport (valid for at least 6 months)', ar: 'جواز السفر (ساري لمدة 6 أشهر على الأقل)' },
  'Online vize başvuru formu (Subclass 600)': { en: 'Online visa application form (Subclass 600)', ar: 'نموذج طلب التأشيرة عبر الإنترنت (الفئة 600)' },
  'Biyometrik kayıt (parmak izi ve fotoğraf — vize başvuru merkezinde)': { en: 'Biometric enrollment (fingerprints and photo — at the visa application center)', ar: 'التسجيل البيومتري (بصمات الأصابع والصورة — في مركز طلبات التأشيرة)' },
  'Banka hesap özeti / mali yeterlilik belgesi': { en: 'Bank statement / proof of financial sufficiency', ar: 'كشف حساب مصرفي / وثيقة الكفاية المالية' },
  "Türkiye'ye bağlılığınızı gösteren belgeler (iş, mülk, aile)": { en: 'Documents showing your ties to Turkey (job, property, family)', ar: 'وثائق تُظهر ارتباطك بتركيا (العمل، الملكية، العائلة)' },
  'Sağlık ve karakter beyanı (gerekirse ek sağlık raporu istenebilir)': { en: 'Health and character declaration (an additional health report may be requested if needed)', ar: 'إفصاح صحي وأخلاقي (قد يُطلب تقرير صحي إضافي عند الحاجة)' },
  'Vesikalık fotoğraf': { en: 'Passport-size photo', ar: 'صورة شخصية' },
  'Çinli iş ortağından davet mektubu': { en: 'Invitation letter from the Chinese business partner', ar: 'خطاب دعوة من الشريك التجاري الصيني' },
  'Seyahat planı': { en: 'Travel plan', ar: 'خطة السفر' },
  'Uçak-otel rezervasyonu': { en: 'Flight-hotel reservation', ar: 'حجز الطائرة والفندق' },
  'Pasaport (en az 6 ay geçerli, en az 2 boş sayfa)': { en: 'Passport (valid for at least 6 months, with at least 2 blank pages)', ar: 'جواز السفر (ساري لمدة 6 أشهر على الأقل، مع صفحتين فارغتين على الأقل)' },
  'Doldurulmuş vize başvuru formu': { en: 'Completed visa application form', ar: 'نموذج طلب التأشيرة معبأ' },
  'Seyahat planı / otel rezervasyonu': { en: 'Travel plan / hotel reservation', ar: 'خطة السفر / حجز الفندق' },
  'Uçak bileti rezervasyonu': { en: 'Flight ticket reservation', ar: 'حجز تذكرة الطائرة' },
  'Pasaport taraması': { en: 'Passport scan', ar: 'مسح جواز السفر' },
  'Vesikalık fotoğraf (dijital)': { en: 'Passport-size photo (digital)', ar: 'صورة شخصية (رقمية)' },
  "BAE'de geçerli seyahat sağlık sigortası": { en: 'Travel health insurance valid in the UAE', ar: 'تأمين صحي للسفر ساري المفعول في الإمارات' },
  'Pasaport (48 saatlik vize için en az 3 ay, 96 saatlik vize için en az 6 ay geçerli)': { en: 'Passport (valid for at least 3 months for the 48-hour visa, or at least 6 months for the 96-hour visa)', ar: 'جواز السفر (ساري لمدة 3 أشهر على الأقل لتأشيرة 48 ساعة، أو 6 أشهر على الأقل لتأشيرة 96 ساعة)' },
  'Devam uçuş bileti (üçüncü bir ülkeye)': { en: 'Onward flight ticket (to a third country)', ar: 'تذكرة الرحلة التالية (إلى دولة ثالثة)' },
  '24 saati aşan aktarmalarda konaklama kanıtı (otel rezervasyonu veya davet eden kişi bilgisi)': { en: 'Proof of accommodation for layovers exceeding 24 hours (hotel reservation or host\'s information)', ar: 'إثبات الإقامة للتوقفات التي تتجاوز 24 ساعة (حجز فندق أو معلومات المستضيف)' },
  'Uçak bileti rezervasyonu (gidiş-dönüş)': { en: 'Flight ticket reservation (round trip)', ar: 'حجز تذكرة الطائرة (ذهاب وعودة)' },
  'Otel rezervasyonu': { en: 'Hotel reservation', ar: 'حجز الفندق' },
  'Davet mektubu (iş ortağı)': { en: 'Invitation letter (business partner)', ar: 'خطاب دعوة (شريك تجاري)' },
  'Güzergaha göre sarı humma aşı sertifikası (gerekiyorsa)': { en: 'Yellow fever vaccination certificate depending on itinerary (if required)', ar: 'شهادة تطعيم الحمى الصفراء حسب المسار (إن لزم الأمر)' },
  'Çocuklu seyahatlerde doğum belgesi ve velayet belgesi': { en: 'Birth certificate and custody document for travel with children', ar: 'شهادة الميلاد ووثيقة الحضانة للسفر مع الأطفال' },
  'Davet mektubu (iş ortağı/fuar)': { en: 'Invitation letter (business partner/trade fair)', ar: 'خطاب دعوة (شريك تجاري/معرض)' },
  'Detaylı seyahat planı': { en: 'Detailed travel plan', ar: 'خطة سفر مفصلة' },
  'Otel/konaklama rezervasyonu': { en: 'Hotel/accommodation reservation', ar: 'حجز الفندق/الإقامة' },
  'Banka hesap özeti (son 3 ay)': { en: 'Bank statement (last 3 months)', ar: 'كشف حساب مصرفي (آخر 3 أشهر)' },
  'Dijital vesikalık fotoğraf': { en: 'Digital passport-size photo', ar: 'صورة شخصية رقمية' },
  'Online e-Vize başvuru formu': { en: 'Online e-Visa application form', ar: 'نموذج طلب التأشيرة الإلكترونية عبر الإنترنت' },
  'İlişki/akrabalık belgesi': { en: 'Relationship/kinship document', ar: 'وثيقة العلاقة/القرابة' },
  'Davet eden kişinin ikamet belgesi': { en: "Inviting person's residence document", ar: 'وثيقة إقامة الشخص الداعي' },
  'Konaklama kanıtı': { en: 'Proof of accommodation', ar: 'إثبات الإقامة' },
  'CAS (Confirmation of Acceptance for Studies) belgesi': { en: 'CAS (Confirmation of Acceptance for Studies) document', ar: 'وثيقة CAS (تأكيد قبول الدراسة)' },
  'İngilizce yeterlilik belgesi': { en: 'English language proficiency certificate', ar: 'شهادة إجادة اللغة الإنجليزية' },
  'Pasaport (kalış süresi boyunca geçerli)': { en: 'Passport (valid for the duration of stay)', ar: 'جواز السفر (ساري طوال مدة الإقامة)' },
  'Biyometrik fotoğraf': { en: 'Biometric photo', ar: 'صورة بيومترية' },
  'Banka hesap özeti (son 6 ay)': { en: 'Bank statement (last 6 months)', ar: 'كشف حساب مصرفي (آخر 6 أشهر)' },
  "Seyahat amacı ve Türkiye'ye bağlılığınızı gösteren belgeler": { en: 'Documents showing your travel purpose and ties to Turkey', ar: 'وثائق تُظهر غرض سفرك وارتباطك بتركيا' },
  'Davet mektubu (iş ortağı/fuar organizatörü)': { en: 'Invitation letter (business partner/fair organizer)', ar: 'خطاب دعوة (شريك تجاري/منظم المعرض)' },
  'Vesikalık fotoğraf (son 6 ay)': { en: 'Passport-size photo (last 6 months)', ar: 'صورة شخصية (آخر 6 أشهر)' },
  'Günlük bazda hazırlanmış detaylı seyahat planı': { en: 'Detailed day-by-day travel plan', ar: 'خطة سفر مفصلة يوميًا' },
  'Otel/konaklama rezervasyonu (her gecelemenin ayrı belirtilmesi gerekir)': { en: 'Hotel/accommodation reservation (each night must be specified separately)', ar: 'حجز الفندق/الإقامة (يجب تحديد كل ليلة بشكل منفصل)' },
  'İş teklifi/LMIA belgesi (varsa)': { en: 'Job offer/LMIA document (if any)', ar: 'عرض عمل/وثيقة LMIA (إن وجدت)' },
  'Vize başvuru formu (IMM 5257)': { en: 'Visa application form (IMM 5257)', ar: 'نموذج طلب التأشيرة (IMM 5257)' },
  "Gebelik durumunuzu ve Kanada'da doğum yapma niyetinizi açıkça belirten beyan/dilekçe": { en: 'A statement/letter clearly declaring your pregnancy status and your intent to give birth in Canada', ar: 'بيان/طلب يوضح بوضوح حالة الحمل ونيتك في الولادة في كندا' },
  'Doğum yapılacak hastaneden yazılı kabul/randevu belgesi': { en: 'Written admission/appointment document from the hospital where you will give birth', ar: 'وثيقة قبول/موعد خطية من المستشفى الذي ستلدين فيه' },
  'Doğum ve olası komplikasyon masraflarını kapsayan özel sağlık sigortası': { en: 'Private health insurance covering delivery and possible complication costs', ar: 'تأمين صحي خاص يغطي تكاليف الولادة والمضاعفات المحتملة' },
  'Hastane depozitosu ve toplam maliyeti karşılayacak mali yeterlilik kanıtı': { en: 'Proof of financial sufficiency to cover the hospital deposit and total cost', ar: 'إثبات كفاية مالية لتغطية تأمين المستشفى والتكلفة الإجمالية' },
  'Doktor onaylı güncel hamilelik/sağlık raporu': { en: 'Current doctor-certified pregnancy/health report', ar: 'تقرير حمل/صحي حديث معتمد من الطبيب' },
  'Havayoluna göre değişen uçuşa uygunluk (fit-to-fly) belgesi': { en: 'Fit-to-fly certificate, which varies by airline', ar: 'شهادة اللياقة للسفر (fit-to-fly)، تختلف حسب شركة الطيران' },
  'Dönüş bileti': { en: 'Return ticket', ar: 'تذكرة العودة' },
  "Türkiye'ye bağlılığınızı gösteren belgeler": { en: 'Documents showing your ties to Turkey', ar: 'وثائق تُظهر ارتباطك بتركيا' },
  'Banka hesap özeti (son 3-6 ay)': { en: 'Bank statement (last 3-6 months)', ar: 'كشف حساب مصرفي (آخر 3-6 أشهر)' },
  'Mali yeterlilik kanıtı (kalış süresine göre değişir)': { en: 'Proof of financial sufficiency (varies by length of stay)', ar: 'إثبات الكفاية المالية (يختلف حسب مدة الإقامة)' },
  'Geçerli ABD/Kanada/İngiltere/Schengen vizesi veya oturum izni (muafiyet için)': { en: 'A valid US/Canada/UK/Schengen visa or residence permit (for exemption)', ar: 'تأشيرة أمريكية/كندية/بريطانية/شنغن سارية أو إذن إقامة (للإعفاء)' },
  'Bu şartları taşımıyorsanız: standart vize başvuru formu ve banka hesap özeti': { en: "If you don't meet these conditions: standard visa application form and bank statement", ar: 'إذا لم تستوفِ هذه الشروط: نموذج طلب التأشيرة القياسي وكشف الحساب المصرفي' },
  'Pasaport (makine okunabilir, en az 6 ay geçerli)': { en: 'Passport (machine-readable, valid for at least 6 months)', ar: 'جواز السفر (قابل للقراءة الآلية، ساري لمدة 6 أشهر على الأقل)' },
  'Davet mektubu (varsa)': { en: 'Invitation letter (if any)', ar: 'خطاب دعوة (إن وجد)' },
  'Seyahat sağlık sigortası (zorunlu değil, önerilir)': { en: 'Travel health insurance (not mandatory, but recommended)', ar: 'تأمين صحي للسفر (غير إلزامي، ولكنه مُوصى به)' },
  'Pasaport (makine okunabilir, başvuru tarihinden itibaren en az 6 ay geçerli)': { en: 'Passport (machine-readable, valid for at least 6 months from the application date)', ar: 'جواز السفر (قابل للقراءة الآلية، ساري لمدة 6 أشهر على الأقل من تاريخ التقديم)' },
  'Seyahat sağlık sigortası (Türk vatandaşları için zorunlu değil, önerilir)': { en: 'Travel health insurance (not mandatory for Turkish citizens, but recommended)', ar: 'تأمين صحي للسفر (غير إلزامي للمواطنين الترك، ولكنه مُوصى به)' },
  'Davetiye/ikametgah belgesi': { en: 'Invitation/residence document', ar: 'وثيقة الدعوة/الإقامة' },
  'Akrabalık belgesi': { en: 'Kinship document', ar: 'وثيقة القرابة' },
  'Seyahat sağlık sigortası': { en: 'Travel health insurance', ar: 'تأمين صحي للسفر' },
  'Seyahat sağlık sigortası (min. 30.000 €)': { en: 'Travel health insurance (minimum €30,000)', ar: 'تأمين صحي للسفر (بحد أدنى 30,000 يورو)' },
  'Devam uçuş bileti': { en: 'Onward flight ticket', ar: 'تذكرة الرحلة التالية' },
  'Hedef ülke vizesi (varsa)': { en: 'Destination country visa (if any)', ar: 'تأشيرة الدولة الوجهة (إن وجدت)' },
  'Pasaport (son 10 yıl içinde düzenlenmiş, dönüş tarihinden sonra en az 3 ay geçerli, en az 2 boş sayfa)': { en: 'Passport (issued within the last 10 years, valid for at least 3 months after your return date, with at least 2 blank pages)', ar: 'جواز السفر (صادر خلال آخر 10 سنوات، ساري لمدة 3 أشهر على الأقل بعد تاريخ العودة، مع صفحتين فارغتين على الأقل)' },
  'Biyometrik fotoğraf (son 6 ay içinde çekilmiş)': { en: 'Biometric photo (taken within the last 6 months)', ar: 'صورة بيومترية (مأخوذة خلال آخر 6 أشهر)' },
  'Doldurulmuş Schengen vize başvuru formu': { en: 'Completed Schengen visa application form', ar: 'نموذج طلب تأشيرة شنغن معبأ' },
  'Seyahat sağlık sigortası (min. 30.000 € teminatlı)': { en: 'Travel health insurance (with a minimum coverage of €30,000)', ar: 'تأمين صحي للسفر (بتغطية لا تقل عن 30,000 يورو)' },
  'Tam tekmil vukuatlı nüfus kayıt örneği': { en: 'Full civil registry record with family details', ar: 'سجل نفوس كامل بالتفاصيل العائلية' },
  'Yetkili ajans üzerinden başvuru formu': { en: 'Application form through an authorized agency', ar: 'نموذج طلب عبر وكالة معتمدة' },
  'Online ETA başvuru formu': { en: 'Online ETA application form', ar: 'نموذج طلب ETA عبر الإنترنت' },
  'Dönüş uçak bileti': { en: 'Return flight ticket', ar: 'تذكرة طيران العودة' },
  'Pasaport (en az 3 ay geçerli)': { en: 'Passport (valid for at least 3 months)', ar: 'جواز السفر (ساري لمدة 3 أشهر على الأقل)' },
  'Online ziyaretçi vizesi başvuru formu': { en: 'Online visitor visa application form', ar: 'نموذج طلب تأشيرة الزائر عبر الإنترنت' },
};

const notes = {
  'abd|ticari': {
    en: 'The B1/B2 visa is a combined visa covering both tourist and business travel purposes; tourist and business applications are evaluated under the same visa category.',
    ar: 'تأشيرة B1/B2 هي تأشيرة موحدة تغطي أغراض السفر السياحية والتجارية؛ تُقيَّم الطلبات السياحية والتجارية ضمن نفس فئة التأشيرة.',
  },
  'abd|turistik': {
    en: "The B1/B2 visa is a combined visa covering both tourist and business travel purposes. As of 2026, a separate fee called the Visa Integrity Fee may apply in addition to the standard MRV fee; we'll share the current amount during the initial consultation.",
    ar: 'تأشيرة B1/B2 هي تأشيرة موحدة تغطي أغراض السفر السياحية والتجارية. اعتبارًا من عام 2026، قد يُطبَّق رسم منفصل يسمى رسم سلامة التأشيرة بالإضافة إلى رسم MRV القياسي؛ سنشارك المبلغ الحالي خلال الاستشارة الأولية.',
  },
  'avustralya|turistik': {
    en: 'Australia does not offer Turkish citizens an electronic travel authorization (eTA). Applications are evaluated fully under the Visitor Visa (Subclass 600); therefore, a biometric appointment at the visa application center is required. Processing time is usually 4-8 weeks.',
    ar: 'لا تقدم أستراليا للمواطنين الترك إذن سفر إلكتروني (eTA). تُقيَّم الطلبات بالكامل ضمن تأشيرة الزائر (الفئة 600)؛ لذلك يلزم تحديد موعد بيومتري في مركز طلبات التأشيرة. تستغرق مدة المعالجة عادةً 4-8 أسابيع.',
  },
  'cin|ticari': {
    en: 'The invitation letter is generally expected to be issued by the trade fair organizer or business partner company and to be consistent with the application information.',
    ar: 'يُتوقع عمومًا أن يكون خطاب الدعوة صادرًا عن منظم المعرض أو الشركة الشريكة وأن يكون متسقًا مع معلومات الطلب.',
  },
  'cin|turistik': {
    en: 'For tourist visa applications, having a clear itinerary (the cities to be visited) makes the evaluation easier.',
    ar: 'بالنسبة لطلبات التأشيرة السياحية، وجود مسار واضح (المدن التي ستُزار) يسهّل التقييم.',
  },
  'dubai|transit': {
    en: 'The 48-hour transit visa is free, while the 96-hour transit visa has a fee (AED 50). Both visas are sponsored by the airline carrying you and must be arranged before travel; the duration cannot be extended.',
    ar: 'تأشيرة العبور لمدة 48 ساعة مجانية، بينما تأشيرة العبور لمدة 96 ساعة برسوم (50 درهمًا إماراتيًا). كلا التأشيرتين تُرعاهما شركة الطيران التي تنقلك ويجب ترتيبهما قبل السفر؛ ولا يمكن تمديد المدة.',
  },
  'guney-afrika|ticari': {
    en: 'For participation in mining and energy sector trade fairs, a document from the fair organizer speeds up the process.',
    ar: 'للمشاركة في معارض قطاع التعدين والطاقة، تُسرّع وثيقة من منظم المعرض العملية.',
  },
  'guney-afrika|turistik': {
    en: 'A vaccination certificate may be requested for certain itineraries (such as transit from countries with yellow fever risk); submitting a birth certificate for travel with children is a legal requirement.',
    ar: 'قد تُطلب شهادة تطعيم لبعض المسارات (مثل العبور من دول تحمل خطر الحمى الصفراء)؛ تقديم شهادة الميلاد للسفر مع الأطفال التزام قانوني.',
  },
  'guney-kore|ticari': {
    en: 'For trade fair participation, a participant document from the fair organizer speeds up the process.',
    ar: 'للمشاركة في المعارض، تُسرّع وثيقة المشارك من منظم المعرض العملية.',
  },
  'guney-kore|turistik': {
    en: 'In South Korea visa evaluation, the consistency of the travel plan and the currency of financial sufficiency documents play an important role.',
    ar: 'في تقييم تأشيرة كوريا الجنوبية، يلعب اتساق خطة السفر وحداثة وثائق الكفاية المالية دورًا مهمًا.',
  },
  'hindistan|ticari': {
    en: 'For business e-Visa applications, having the invitation letter clearly state the purpose of the visit speeds up the process.',
    ar: 'لطلبات التأشيرة الإلكترونية التجارية، توضيح خطاب الدعوة لغرض الزيارة بوضوح يُسرّع العملية.',
  },
  'hindistan|turistik': {
    en: 'The India e-Visa application is made online and is usually resolved within a few business days; having a clear, legible passport scan is important.',
    ar: 'يتم التقديم على التأشيرة الإلكترونية للهند عبر الإنترنت وتُحل عادةً في غضون أيام عمل قليلة؛ من المهم أن يكون مسح جواز السفر واضحًا ومقروءًا.',
  },
  'japonya|ticari': {
    en: "It's important for the invitation letter to clearly state the purpose of the visit, the dates, and the host company's information.",
    ar: 'من المهم أن يوضح خطاب الدعوة بوضوح غرض الزيارة والتواريخ ومعلومات الشركة المستضيفة.',
  },
  'japonya|turistik': {
    en: 'The Japanese consulate requests a detailed travel plan showing where each day will be spent; having this document fully consistent with the accommodation reservations speeds up the evaluation.',
    ar: 'تطلب القنصلية اليابانية خطة سفر مفصلة تُظهر مكان كل يوم؛ اتساق هذه الوثيقة تمامًا مع حجوزات الإقامة يُسرّع التقييم.',
  },
  'kanada|dogum': {
    en: 'There is no officially separate "birth visa" category in Canada — these applications are evaluated under the standard visitor visa (TRV). Failing to declare your pregnancy and intent to give birth in your application can be considered "misrepresentation" and may result in a ban from entering Canada of up to 5 years. Since you are not covered by public health insurance under visitor status, delivery costs are entirely your responsibility; even an uncomplicated birth typically costs CAD 10,000-20,000+, and can be higher with complications — many standard travel insurance policies do not cover pregnancy/childbirth, so a policy with specific maternity coverage is required. The child born automatically becomes a Canadian citizen under Canadian citizenship law, but this does not grant the parents any right to residency, work, or citizenship in Canada.',
    ar: 'لا توجد فئة رسمية منفصلة لـ"تأشيرة الولادة" في كندا — تُقيَّم هذه الطلبات ضمن تأشيرة الزائر القياسية (TRV). عدم الإفصاح عن حملك ونيتك في الولادة في كندا في طلبك يمكن أن يُعتبر "تحريفًا" وقد يؤدي إلى منع دخول كندا لمدة تصل إلى 5 سنوات. بما أنك لا تخضعين للتأمين الصحي العام بصفتك زائرة، فإن تكاليف الولادة تقع بالكامل على عاتقك؛ حتى الولادة دون مضاعفات تكلف عادةً 10,000-20,000+ دولار كندي، وقد تكون أعلى في حال حدوث مضاعفات — لا تغطي كثير من بوالص التأمين القياسية للسفر الحمل/الولادة، لذلك يلزم بوليصة تأمين تغطي الولادة خصيصًا. يصبح الطفل المولود مواطنًا كنديًا تلقائيًا بموجب قانون الجنسية الكندي، لكن هذا لا يمنح الوالدين أي حق في الإقامة أو العمل أو الجنسية في كندا.',
  },
  'meksika|turistik': {
    en: 'Applicants with a valid US, Canada, UK, or Schengen visa/residence permit can benefit from the visa exemption through an online "authorization"; those who don\'t meet these conditions apply for a standard tourist visa.',
    ar: 'يمكن لمقدمي الطلبات الحاصلين على تأشيرة/إقامة أمريكية أو كندية أو بريطانية أو شنغن سارية الاستفادة من الإعفاء من التأشيرة من خلال "تصريح" عبر الإنترنت؛ ومن لا يستوفي هذه الشروط يقدم على تأشيرة سياحية قياسية.',
  },
  'misir|turistik': {
    en: 'The Egypt e-Visa application is made online and is usually resolved within a few business days; a visa-on-arrival option is also available at some resort destinations.',
    ar: 'يتم التقديم على التأشيرة الإلكترونية لمصر عبر الإنترنت وتُحل عادةً في غضون أيام عمل قليلة؛ يتوفر أيضًا خيار الحصول على التأشيرة عند الوصول في بعض المنتجعات السياحية.',
  },
  'rusya|ticari': {
    en: 'Business visits are also applied for through the same unified e-Visa system.',
    ar: 'يُقدَّم طلب الزيارات التجارية أيضًا عبر نظام التأشيرة الإلكترونية الموحدة نفسه.',
  },
  'rusya|turistik': {
    en: 'Russia offers Turkish citizens a unified e-Visa: the application is made entirely online, is usually resolved within 4 days, is valid for 120 days, and allows a stay of up to 30 days per single entry.',
    ar: 'تقدم روسيا للمواطنين الترك تأشيرة إلكترونية موحدة: يتم التقديم بالكامل عبر الإنترنت، وتُحل في غضون 4 أيام في المتوسط، وهي صالحة لمدة 120 يومًا، وتسمح بإقامة تصل إلى 30 يومًا في كل دخول واحد.',
  },
  'schengen|aile-birlesimi': {
    en: "The inviting person's residence/permit document in the relevant country, along with an official document showing your family relationship (civil registry record, marriage certificate, etc.), must be submitted together.",
    ar: 'يجب تقديم وثيقة إقامة/تصريح الشخص الداعي في الدولة المعنية مع وثيقة رسمية تُظهر علاقتك العائلية (سجل النفوس، عقد الزواج، إلخ) معًا.',
  },
  'schengen|ticari': {
    en: "The invitation letter should clearly state the purpose of the visit (trade fair, meeting, business partnership) and the travel dates; being consistent with your company's activity certificate speeds up the evaluation process.",
    ar: 'يجب أن يوضح خطاب الدعوة بوضوح غرض الزيارة (معرض، اجتماع، شراكة تجارية) وتواريخ السفر؛ اتساقه مع شهادة نشاط شركتك يُسرّع عملية التقييم.',
  },
  'schengen|transit': {
    en: 'An airport transit visa is required when you transfer to your next flight without leaving the airport; depending on the destination country\'s visa requirements, an Airport Transit Visa (ATV) may also be mandatory for certain nationalities.',
    ar: 'تأشيرة العبور في المطار مطلوبة عند الانتقال إلى رحلتك التالية دون مغادرة المطار؛ وحسب شروط تأشيرة الدولة الوجهة، قد تكون تأشيرة العبور في المطار (ATV) إلزامية أيضًا لبعض الجنسيات.',
  },
  'schengen|turistik': {
    en: 'The 29 countries in the Schengen area share the same set of visa rules: the application is made directly to the country you will visit if it has a representation in Turkey, or, if you will visit more than one country, to the country where you will stay the longest or which you will enter first. Travel health insurance must cover the entire Schengen area and provide a minimum coverage of €30,000; this requirement is common across all member countries.',
    ar: 'تشترك 29 دولة في منطقة شنغن في نفس مجموعة قواعد التأشيرة: يُقدَّم الطلب مباشرة إلى الدولة التي ستزورها إذا كان لها تمثيل في تركيا، أو إلى الدولة التي ستقيم فيها لأطول فترة أو التي ستدخلها أولاً إذا كنت ستزور أكثر من دولة. يجب أن يغطي التأمين الصحي للسفر منطقة شنغن بالكامل وأن يوفر تغطية لا تقل عن 30,000 يورو؛ وهذا الشرط مشترك بين جميع الدول الأعضاء.',
  },
  'singapur|ticari': {
    en: 'For business applications, the invitation letter must clearly state the purpose of the visit and the dates.',
    ar: 'لطلبات التأشيرة التجارية، يجب أن يوضح خطاب الدعوة بوضوح غرض الزيارة والتواريخ.',
  },
  'singapur|turistik': {
    en: 'Singapore visa applications are processed through authorized local agencies rather than directly through the embassy; the right agency and an up-to-date document set speed up the process.',
    ar: 'تُعالج طلبات تأشيرة سنغافورة عبر وكالات محلية معتمدة بدلاً من السفارة مباشرة؛ الوكالة الصحيحة ومجموعة الوثائق الحديثة تُسرّع العملية.',
  },
  'sri-lanka|turistik': {
    en: "The Sri Lanka Electronic Travel Authorization (ETA) application is made online and is usually approved within a few minutes to a few hours; it's recommended to have a printout with you while traveling.",
    ar: 'يتم التقديم على إذن السفر الإلكتروني (ETA) لسريلانكا عبر الإنترنت ويُعتمد عادةً في غضون دقائق إلى ساعات قليلة؛ يُنصح بحمل نسخة مطبوعة منه معك عند السفر.',
  },
  'tayland|turistik': {
    en: 'The Thailand e-Visa application is made online; having a clear return ticket and accommodation reservation makes the approval process easier.',
    ar: 'يتم التقديم على التأشيرة الإلكترونية لتايلاند عبر الإنترنت؛ وجود تذكرة عودة وحجز إقامة واضحين يُسهّل عملية الموافقة.',
  },
  'vietnam|turistik': {
    en: 'The Vietnam e-Visa is valid at all entry points, including airports, land, and sea borders; the application is usually resolved within 3 business days.',
    ar: 'تصلح التأشيرة الإلكترونية لفيتنام في جميع نقاط الدخول، بما في ذلك المطارات والحدود البرية والبحرية؛ يُحل الطلب عادةً في غضون 3 أيام عمل.',
  },
  'yeni-zelanda|turistik': {
    en: 'The application is made entirely online (through Immigration New Zealand); due to geographic distance, processing time may be longer than for other destinations.',
    ar: 'يتم التقديم بالكامل عبر الإنترنت (من خلال هيئة الهجرة النيوزيلندية)؛ وقد تكون مدة المعالجة أطول من الوجهات الأخرى بسبب المسافة الجغرافية.',
  },
};

function translateItems(itemsJson, lang) {
  const list = JSON.parse(itemsJson);
  return JSON.stringify(list.map((item) => {
    const entry = items[item];
    if (!entry) {
      console.warn(`Çevirisi olmayan evrak maddesi: "${item}"`);
      return item;
    }
    return entry[lang];
  }));
}

const rows = db.prepare('SELECT docs_key, type_key, items, note FROM visa_documents').all();
const update = db.prepare(`
  UPDATE visa_documents SET items_en = @itemsEn, items_ar = @itemsAr, note_en = @noteEn, note_ar = @noteAr
  WHERE docs_key = @docsKey AND type_key = @typeKey
`);

let count = 0;
rows.forEach((row) => {
  const key = `${row.docs_key}|${row.type_key}`;
  const note = notes[key];
  if (row.note && !note) console.warn(`Çevirisi olmayan not: ${key}`);
  update.run({
    docsKey: row.docs_key,
    typeKey: row.type_key,
    itemsEn: translateItems(row.items, 'en'),
    itemsAr: translateItems(row.items, 'ar'),
    noteEn: note ? note.en : null,
    noteAr: note ? note.ar : null,
  });
  count += 1;
});

console.log(`${count} evrak listesi satırı çevrildi.`);
