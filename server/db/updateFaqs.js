// seed.js'teki seedFaqs() tablo doluysa tamamen atlıyor, bu yüzden yeni eklenen
// SSS maddeleri production'a otomatik yansımaz. Bu script, defaultFaqs
// listesindeki soruları (soru metnine göre) eksik olanları ekler — mevcut
// sorulara dokunmaz, tekrar çalıştırmak güvenlidir.
import { db } from './connection.js';

const newFaqs = [
  {
    group: 'Genel',
    question: 'Başvuru için ofisinize gelmem gerekiyor mu?',
    answer: 'Hayır. Danışmanlığımızı telefon, WhatsApp ve e-posta üzerinden uzaktan sağlıyoruz; evraklarınızı dijital olarak paylaşabilir, süreci ofise gelmeden yönetebilirsiniz.',
  },
  {
    group: 'Randevu & Mülakat',
    question: 'Vize süreci ortalama ne kadar sürer?',
    answer: 'Ülkeye ve vize tipine göre değişir — bazı e-vize sistemleri birkaç iş günü içinde sonuçlanırken, bazı ülkelerde bu süre birkaç haftaya kadar çıkabilir. Her ülke sayfamızda "İşlem Süresi" bilgisini bulabilirsiniz.',
  },
  {
    group: 'Genel',
    question: 'Vize başvurum reddedilirse ne yapmalıyım?',
    answer: 'Ret gerekçesini birlikte değerlendirir, eksik veya hatalı noktaları düzelterek yeniden başvuru sürecini planlarız. [Blog yazımızda](/blog/vize-basvurusu-reddedildi-simdi-ne-yapmali) konuyu detaylı ele aldık.',
  },
  {
    group: 'Evrak',
    question: 'Evrak Rehberi aracı ücretsiz mi?',
    answer: 'Evet, [Evrak Rehberi](/evrak-rehberi) aracımız tamamen ücretsizdir ve üyelik gerektirmez.',
  },
  {
    group: 'Evrak',
    question: 'Banka hesap özetimde yeterli bakiye görünmüyor, yine de başvurabilir miyim?',
    answer: 'Mali yeterlilik farklı şekillerde (sponsor/kefil beyanı, ek gelir belgeleri vb.) gösterilebilir; durumunuzu ön görüşmede birlikte değerlendirip en uygun yolu belirleriz.',
  },
  {
    group: 'Başvuru Takip',
    question: 'Başvurumun durumunu nasıl takip edebilirim?',
    answer: '[Başvuru Takip](/takip) sayfamızdan size verdiğimiz takip kodu ve soyisminizle başvurunuzun güncel aşamasını anında görebilirsiniz.',
  },
  {
    group: 'Başvuru Takip',
    question: 'Takip kodumu kaybettim, ne yapmalıyım?',
    answer: 'Bizimle telefon, WhatsApp veya e-posta üzerinden iletişime geçin; kimlik doğrulamasının ardından takip kodunuzu tekrar iletebiliriz.',
  },
  {
    group: 'Aile & Özel Durumlar',
    question: 'Çocuğum için ayrı bir vize başvurusu gerekiyor mu?',
    answer: 'Evet, çocuklar için de ayrı pasaport ve vize başvurusu gerekir. Reşit olmayan başvuru sahipleri için genellikle ek olarak ebeveyn muvafakatnamesi istenir.',
  },
  {
    group: 'Aile & Özel Durumlar',
    question: 'Reşit olmayan biri ailesinden ayrı seyahat edebilir mi?',
    answer: 'Bu durum ülkeye ve seyahat şekline göre değişir; genellikle noter onaylı muvafakatname ve ek belgeler istenir. Durumunuzu ön görüşmede birlikte netleştiririz.',
  },
];

const { maxOrder } = db.prepare('SELECT MAX(sort_order) AS maxOrder FROM faqs').get();
const existing = new Set(db.prepare('SELECT question FROM faqs').all().map((r) => r.question));

const insert = db.prepare(`
  INSERT INTO faqs (group_title, question, answer, sort_order, is_open_default)
  VALUES (@group, @question, @answer, @sortOrder, 0)
`);

let added = 0;
let nextOrder = (maxOrder ?? -1) + 1;
newFaqs.forEach((faq) => {
  if (existing.has(faq.question)) return;
  insert.run({ ...faq, sortOrder: nextOrder });
  nextOrder += 1;
  added += 1;
});

console.log(`${added} yeni SSS maddesi eklendi (${newFaqs.length - added} zaten vardı, atlandı).`);
