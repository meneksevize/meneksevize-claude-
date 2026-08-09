// Vize tipi etiketleri ve müşteri yorumlarının EN/AR çevirisi (bkz. plan —
// "Çok Dilli Site" Faz 3). Tek seferlik, tekrar çalıştırmak güvenlidir.
import { db } from './connection.js';

const visaTypeLabels = {
  turistik: { en: 'Tourist', ar: 'سياحية' },
  ticari: { en: 'Business', ar: 'تجارية' },
  ogrenci: { en: 'Student', ar: 'دراسية' },
  calisma: { en: 'Work', ar: 'عمل' },
  'aile-birlesimi': { en: 'Family Reunion', ar: 'جمع شمل عائلي' },
  transit: { en: 'Transit', ar: 'عبور' },
  'e-vize': { en: 'E-Visa', ar: 'تأشيرة إلكترونية' },
  dogum: { en: 'Birth Tourism Visa', ar: 'تأشيرة الولادة' },
};

const updateLabel = db.prepare('UPDATE visa_type_labels SET label_en = @en, label_ar = @ar WHERE key = @key');
let labelCount = 0;
Object.entries(visaTypeLabels).forEach(([key, { en, ar }]) => {
  const result = updateLabel.run({ key, en, ar });
  if (result.changes > 0) labelCount += 1;
});
console.log(`${labelCount} vize tipi etiketi çevrildi.`);

// name'e göre eşleştirilir (id'ler ortam arasında farklılaşabiliyor — bkz.
// yerel/production DB senkron farkı bu oturumda birden fazla kez gözlendi).
const testimonials = {
  'Elif Y.': {
    en: 'I knew exactly where I stood at every step throughout the process. The document list was so clear that I never needed to ask an extra question.',
    ar: 'كنت أعرف بالضبط أين أنا في كل خطوة طوال العملية. كانت قائمة الوثائق واضحة جدًا لدرجة أنني لم أحتج لطرح أي سؤال إضافي.',
  },
  'Murat K.': {
    en: 'The pre-interview preparation really paid off. It was a transparent and honest consultancy experience — I definitely recommend it.',
    ar: 'التحضير قبل المقابلة كان مفيدًا حقًا. كانت تجربة استشارية شفافة وصادقة، أنصح بها بشدة.',
  },
  'Zeynep A.': {
    en: 'They clearly explained every legal and practical detail about the birth visa. I felt safe throughout.',
    ar: 'أوضحوا كل التفاصيل القانونية والعملية المتعلقة بتأشيرة الولادة بوضوح. شعرت بالأمان.',
  },
  'İrem B.': {
    en: 'Getting the appointment and everything else was very fast — we sorted everything out within 2 months, thank you so much.',
    ar: 'كان الحصول على الموعد وكل شيء آخر سريعًا جدًا — أنهينا كل شيء في غضون شهرين، شكرًا جزيلاً.',
  },
};

const updateTestimonial = db.prepare('UPDATE testimonials SET quote_en = @en, quote_ar = @ar WHERE name = @name');
let testimonialCount = 0;
Object.entries(testimonials).forEach(([name, { en, ar }]) => {
  const result = updateTestimonial.run({ name, en, ar });
  testimonialCount += result.changes;
});
console.log(`${testimonialCount} yorum çevrildi.`);
