import { db } from './connection.js';
import { countries, visaTypeLabels } from '../../src/data/countries.js';
import { visaData, normalizeVisaEntry } from '../../src/data/visaDocuments.js';

const defaultSettings = {
  phone: '0541 650 06 21',
  whatsapp: '+905416500621',
  email: 'meneksevize@gmail.com',
  address: '',
  working_hours: 'Hafta içi 09:00 - 18:00',
  footer_note: 'Schengen ve dünya genelinde vize başvurularınızda şeffaf süreç takibi ve kişiye özel evrak rehberliği sunan danışmanlık hizmeti.',
  whatsapp_button_enabled: 'true',
  email_notifications_enabled: 'false',
};

const defaultFaqs = [
  {
    group: 'Genel',
    question: 'Menekşe Vize ne iş yapar?',
    answer: 'Vize başvurunuzun ön görüşmeden sonuç aşamasına kadar tüm sürecinde danışmanlık veriyoruz: doğru vize tipinin belirlenmesi, evrak hazırlığı, randevu planlama ve süreç takibi.',
    openDefault: true,
  },
  {
    group: 'Genel',
    question: 'Hangi ülkeler için hizmet veriyorsunuz?',
    answer: 'Schengen bölgesi, ABD, İngiltere, Kanada, Rusya, Dubai/BAE ve Avustralya dahil geniş bir ülke yelpazesinde destek sağlıyoruz. Güncel liste için [Hizmetler](/hizmetler) sayfamıza göz atabilirsiniz.',
  },
  {
    group: 'Genel',
    question: 'Vize başvurumun onaylanacağını garanti edebilir misiniz?',
    answer: 'Hayır. Vize kararı tamamen ilgili ülkenin konsolosluğuna/yetkili makamına aittir; hiçbir danışmanlık firması onay garantisi veremez. Biz başvurunuzu eksiksiz ve doğru şekilde hazırlamanıza yardımcı oluruz.',
  },
  {
    group: 'Ücretlendirme',
    question: 'Danışmanlık ücretiniz ne kadar?',
    answer: 'Ücret; ülke, vize tipi ve başvurunuzun kapsamına göre değişir. Ön görüşmede ihtiyacınızı netleştirdikten sonra size net bir teklif sunuyoruz.',
  },
  {
    group: 'Ücretlendirme',
    question: 'Ön görüşme ücretli mi?',
    answer: 'Hayır, ön görüşme tamamen ücretsizdir.',
  },
  {
    group: 'Ücretlendirme',
    question: 'Konsolosluk/vize merkezi harcı danışmanlık ücretine dahil mi?',
    answer: 'Hayır. Resmi konsolosluk/vize başvuru merkezi harcı, danışmanlık ücretimizden ayrıdır ve doğrudan ilgili resmi kuruma ödenir.',
  },
  {
    group: 'Evrak',
    question: 'Evrak listesini nereden görebilirim?',
    answer: '[Evrak Rehberi](/evrak-rehberi) sayfamızdan ülke ve vize tipinizi seçerek anında kişiselleştirilmiş bir liste görüntüleyebilir, isterseniz yazdırabilirsiniz.',
  },
  {
    group: 'Evrak',
    question: 'Evraklarım eksikse ne olur?',
    answer: 'Başvuru öncesinde evrak listenizi birlikte kontrol ediyoruz; eksik veya hatalı bir belge varsa başvurudan önce tamamlamanıza yardımcı oluyoruz.',
  },
  {
    group: 'Evrak',
    question: 'Belgelerimin tercümesi gerekiyor mu?',
    answer: 'Bazı ülkeler ve belge türleri için yeminli tercüme gerekebilir. Bu durum ön görüşmede sizin özel durumunuza göre netleştirilir.',
  },
  {
    group: 'Randevu & Mülakat',
    question: 'Randevu tarihini kim belirliyor?',
    answer: 'Randevu planlamasını sizin uygunluğunuza göre biz yapıyoruz; ancak nihai tarih, ilgili konsolosluk/vize merkezinin sistem üzerindeki uygun slotlarına bağlıdır.',
  },
  {
    group: 'Randevu & Mülakat',
    question: 'Mülakata ben mi katılıyorum?',
    answer: 'Evet, bazı vize tiplerinde mülakat gerekebilir ve başvuru sahibinin bizzat katılması gerekir. Biz sizi olası sorular ve doğru yaklaşım konusunda önceden hazırlıyoruz.',
  },
  {
    group: 'İptal & İade',
    question: 'Sürecim iptal olursa ücret iade edilir mi?',
    answer: 'Resmi konsolosluk/vize merkezi harçları genellikle iade edilmez, çünkü bu ödemeler doğrudan ilgili resmi kuruma yapılır. Danışmanlık ücretine ilişkin iade koşulları, ön görüşme sonrası paylaşılan teklifte açıkça belirtilir.',
  },
];

const defaultTestimonials = [
  {
    name: 'Elif Y.',
    location: 'Schengen Vizesi',
    rating: 5,
    quote: 'Süreç boyunca her adımda nerede olduğumu tam olarak biliyordum. Evrak listesi o kadar netti ki hiç ekstra soru sormama gerek kalmadı.',
  },
  {
    name: 'Murat K.',
    location: 'ABD Vizesi',
    rating: 5,
    quote: 'Mülakat öncesi hazırlık gerçekten işe yaradı. Şeffaf ve dürüst bir danışmanlık deneyimiydi, kesinlikle tavsiye ederim.',
  },
  {
    name: 'Zeynep A.',
    location: 'Kanada Vizesi',
    rating: 5,
    quote: 'Doğum vizesi konusunda hem hukuki hem pratik her detayı açık şekilde anlattılar. Kendimi güvende hissettim.',
  },
];

function seedCountries() {
  const { count } = db.prepare('SELECT COUNT(*) AS count FROM countries').get();
  if (count > 0) {
    console.log(`countries tablosu zaten dolu (${count} kayıt) — atlanıyor.`);
    return;
  }

  const insert = db.prepare(`
    INSERT INTO countries (id, flag, title, home_description, services_description, intro, overview, region, docs_key, tags, types, quick_facts, sort_order)
    VALUES (@id, @flag, @title, @homeDescription, @servicesDescription, @intro, @overview, @region, @docsKey, @tags, @types, @quickFacts, @sortOrder)
  `);

  const insertMany = db.transaction((rows) => {
    rows.forEach((country, index) => {
      insert.run({
        id: country.id,
        flag: country.flag,
        title: country.title,
        homeDescription: country.homeDescription ?? null,
        servicesDescription: country.servicesDescription ?? null,
        intro: country.intro ?? null,
        overview: country.overview ?? null,
        region: country.region,
        docsKey: country.docsKey ?? null,
        tags: JSON.stringify(country.tags ?? []),
        types: JSON.stringify(country.types ?? []),
        quickFacts: JSON.stringify(country.quickFacts ?? []),
        sortOrder: index,
      });
    });
  });

  insertMany(countries);
  console.log(`${countries.length} ülke eklendi.`);
}

function seedVisaTypeLabels() {
  const { count } = db.prepare('SELECT COUNT(*) AS count FROM visa_type_labels').get();
  if (count > 0) {
    console.log(`visa_type_labels tablosu zaten dolu (${count} kayıt) — atlanıyor.`);
    return;
  }

  const insert = db.prepare('INSERT INTO visa_type_labels (key, label) VALUES (?, ?)');
  const insertMany = db.transaction((entries) => {
    entries.forEach(([key, label]) => insert.run(key, label));
  });

  insertMany(Object.entries(visaTypeLabels));
  console.log(`${Object.keys(visaTypeLabels).length} vize tipi etiketi eklendi.`);
}

function seedVisaDocuments() {
  const { count } = db.prepare('SELECT COUNT(*) AS count FROM visa_documents').get();
  if (count > 0) {
    console.log(`visa_documents tablosu zaten dolu (${count} kayıt) — atlanıyor.`);
    return;
  }

  const insert = db.prepare(`
    INSERT INTO visa_documents (docs_key, type_key, items, note)
    VALUES (@docsKey, @typeKey, @items, @note)
  `);

  const insertMany = db.transaction((entries) => {
    entries.forEach(({
      docsKey, typeKey, items, note,
    }) => {
      insert.run({
        docsKey, typeKey, items: JSON.stringify(items), note: note ?? null,
      });
    });
  });

  const rows = [];
  Object.entries(visaData).forEach(([docsKey, entry]) => {
    Object.entries(entry.types).forEach(([typeKey, rawEntry]) => {
      const { items, note } = normalizeVisaEntry(rawEntry);
      rows.push({
        docsKey, typeKey, items, note,
      });
    });
  });

  insertMany(rows);
  console.log(`${rows.length} evrak listesi eklendi.`);
}

function seedSettings() {
  // Anahtar bazında INSERT OR IGNORE: tablo daha önce doldurulmuş olsa bile
  // yeni eklenen ayar anahtarları (whatsapp_button_enabled vb.) tamamlanır,
  // mevcut admin tarafından değiştirilmiş değerlere dokunulmaz.
  const insert = db.prepare('INSERT OR IGNORE INTO site_settings (key, value) VALUES (?, ?)');
  const insertMany = db.transaction((entries) => {
    let added = 0;
    entries.forEach(([key, value]) => {
      const result = insert.run(key, value);
      if (result.changes > 0) added += 1;
    });
    return added;
  });

  const added = insertMany(Object.entries(defaultSettings));
  console.log(`${added} yeni genel ayar eklendi (toplam ${Object.keys(defaultSettings).length} tanımlı anahtar).`);
}

function seedFaqs() {
  const { count } = db.prepare('SELECT COUNT(*) AS count FROM faqs').get();
  if (count > 0) {
    console.log(`faqs tablosu zaten dolu (${count} kayıt) — atlanıyor.`);
    return;
  }

  const insert = db.prepare(`
    INSERT INTO faqs (group_title, question, answer, sort_order, is_open_default)
    VALUES (@group, @question, @answer, @sortOrder, @openDefault)
  `);

  const insertMany = db.transaction((rows) => {
    rows.forEach((faq, index) => {
      insert.run({
        group: faq.group,
        question: faq.question,
        answer: faq.answer,
        sortOrder: index,
        openDefault: faq.openDefault ? 1 : 0,
      });
    });
  });

  insertMany(defaultFaqs);
  console.log(`${defaultFaqs.length} SSS maddesi eklendi.`);
}

function seedTestimonials() {
  const { count } = db.prepare('SELECT COUNT(*) AS count FROM testimonials').get();
  if (count > 0) {
    console.log(`testimonials tablosu zaten dolu (${count} kayıt) — atlanıyor.`);
    return;
  }

  const insert = db.prepare(`
    INSERT INTO testimonials (name, location, rating, quote, is_published, sort_order)
    VALUES (@name, @location, @rating, @quote, 1, @sortOrder)
  `);

  const insertMany = db.transaction((rows) => {
    rows.forEach((t, index) => {
      insert.run({ ...t, sortOrder: index });
    });
  });

  insertMany(defaultTestimonials);
  console.log(`${defaultTestimonials.length} örnek müşteri yorumu eklendi.`);
}

seedCountries();
seedVisaTypeLabels();
seedVisaDocuments();
seedSettings();
seedFaqs();
seedTestimonials();

console.log('Seed işlemi tamamlandı.');
