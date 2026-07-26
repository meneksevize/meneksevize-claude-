// updateFaqs.js ile aynı desen: yeni bir "Güncel Değişiklikler" grubu altında,
// zaten yayınlanmış blog yazılarına (ETİAS, İngiltere ETA, ABD Visa Integrity
// Fee, Schengen ücret artışı) karşılık gelen SSS maddeleri ekler. Soru
// metnine göre eksik olanları ekler, tekrar çalıştırmak güvenlidir.
import { db } from './connection.js';

const newFaqs = [
  {
    group: 'Güncel Değişiklikler',
    question: 'ETİAS sistemi Türk vatandaşlarını etkiliyor mu?',
    answer: 'Hayır, doğrudan etkilemiyor. Türk vatandaşları Schengen bölgesine zaten vizesiz giremediği için ETİAS\'ın kapsadığı vize muafiyetli ülkeler listesinde yer almıyor; standart Schengen vizesi süreciniz aynen devam ediyor. Detaylar için [ETİAS yazımıza](/blog/etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu) göz atabilirsiniz.',
  },
  {
    group: 'Güncel Değişiklikler',
    question: 'İngiltere\'nin ETA sistemi Türk vatandaşları için vizeyi kaldırıyor mu?',
    answer: 'Hayır. İngiltere\'nin ETA sistemi yalnızca vizesiz seyahat eden ülke vatandaşlarını kapsıyor; Türkiye bu listede yer almadığı için İngiltere\'ye seyahatte standart vize başvurusuna devam ediyorsunuz. Detaylar için [İngiltere ETA yazımıza](/blog/ingiltere-eta-sistemi-turk-vatandaslarini-etkiliyor-mu) bakabilirsiniz.',
  },
  {
    group: 'Güncel Değişiklikler',
    question: 'ABD vizesindeki yeni 250 dolarlık ücret kimleri kapsıyor?',
    answer: 'ABD\'nin yeni "Visa Integrity Fee" ücreti B1/B2, F1, H-1B gibi çoğu göçmen olmayan vize kategorisi için geçerli ve mevcut başvuru ücretine ek olarak tahsil ediliyor. Vize Muafiyet Programı kapsamındakiler muaf, ancak Türk vatandaşları genellikle bu muafiyetin dışında kalıyor. Detaylar için [yazımıza](/blog/abd-yeni-250-dolar-visa-integrity-fee-kimleri-kapsiyor) göz atabilirsiniz.',
  },
  {
    group: 'Güncel Değişiklikler',
    question: 'Schengen vize ücreti neden arttı?',
    answer: 'Avrupa Birliği, standart Schengen vize başvuru ücretini 11 Haziran 2026 itibarıyla 80 Euro\'dan 90 Euro\'ya çıkardı. Bu artış AB tarafından belirlenen resmi bir harçtır, danışmanlık ücretimizden bağımsızdır. Detaylar için [yazımıza](/blog/schengen-vize-ucreti-90-euroya-yukseldi) bakabilirsiniz.',
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
