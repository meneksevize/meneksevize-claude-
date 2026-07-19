import { db } from './connection.js';

const CATEGORY_BY_TITLE = {
  'Schengen Vizesi Reddi: En Sık Karşılaşılan 7 Neden ve Nasıl Önlenir': 'vize-reddi',
  'Vize Başvurusu Reddedildi, Şimdi Ne Yapmalı?': 'vize-reddi',

  'Yurt Dışı Eğitim İçin Öğrenci Vizesi Başvurusunda Dikkat Edilmesi Gerekenler': 'ulkelerde-yasam',
  "Kanada'da Doğum Yapmak: Süreç, Maliyet ve Bilinmesi Gerekenler": 'ulkelerde-yasam',
  'Aile Birleşimi Vizesi Başvurusunda Dikkat Edilmesi Gerekenler': 'ulkelerde-yasam',

  'Schengen Ülkeleri Arasından Hangisine Başvurmalıyım?': 'genel',
  "İngiltere'nin ETA Sistemi Tam Yürürlükte: Türk Vatandaşlarını Etkiliyor mu?": 'genel',
  'Kanada Ziyaretçi Vizesinde 2026 Değişiklikleri: Daha Uzun Kalış, Daha Sıkı İnceleme': 'genel',
  "AB'nin Yeni Giriş-Çıkış Sistemi (EES) Devrede: Schengen Seyahatinde Değişen Ne?": 'genel',
  'ABD\'de Yeni 250 Dolarlık "Visa Integrity Fee": Kimleri Kapsıyor?': 'genel',
  "Schengen Vize Ücreti 90 Euro'ya Yükseldi: Bilmeniz Gerekenler": 'genel',
  "ETIAS 2026'nın Sonunda Başlıyor: Türk Vatandaşlarını Etkiliyor mu?": 'genel',
  'Güvenilir Bir Vize Danışmanlığı Nasıl Seçilir? Dikkat Edilmesi Gerekenler': 'genel',
};

function categorize() {
  const rows = db.prepare('SELECT id, title, category FROM posts').all();
  const update = db.prepare('UPDATE posts SET category = ? WHERE id = ?');
  let updated = 0;
  rows.forEach((row) => {
    const category = CATEGORY_BY_TITLE[row.title] || 'basvuru-rehberleri';
    if (row.category !== category) {
      update.run(category, row.id);
      updated += 1;
    }
  });
  console.log(`${updated} yazının kategorisi güncellendi (${rows.length} toplam yazı).`);
}

categorize();
