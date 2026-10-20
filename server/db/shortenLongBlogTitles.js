// Tek seferlik düzeltme: kapsamlı bir SEO denetiminde, blog yazısı title
// etiketinin (post.title + " | Menekşe Vize" soneki) 79 yazının TAMAMINDA
// 60 karakteri aştığı, 8 yazıda ise 75+ karaktere (en uzunu 84) çıktığı
// tespit edildi — Google SERP'te bunları kesip gösteriyor. Yalnızca en
// uzun 8 yazının title/title_en alanı, anlamı koruyarak kısaltıldı; slug,
// excerpt ve content'e dokunulmadı (URL/meta description sabit kalıyor,
// H1 de aynı alanı kullandığı için otomatik güncelleniyor). Toplu/mekanik
// bir "tüm 79 yazıyı kısalt" girişimi yerine en kritik olanlarla
// sınırlandırıldı — geri kalanı (51-75 karakter aralığı) kabul edilebilir
// sınırlarda.
import { db } from './connection.js';

const TITLES = {
  'ticari-vize-basvurusunda-davet-mektubu-ve-firma-belgeleri': {
    tr: 'Ticari Vizede Davet Mektubu ve Firma Belgeleri Nasıl Hazırlanır?',
    en: 'Invitation Letter and Company Documents for a Business Visa',
  },
  'ingiltere-ogrenci-vizesi-cas-belgesi-basvuru-sureci': {
    tr: 'İngiltere Öğrenci Vizesinde CAS Belgesi ve Başvuru Süreci',
    en: 'UK Student Visa: The CAS Document and How the Process Works',
  },
  'vize-basvurusunda-seyahat-sigortasi-konaklama-tutarliligi': {
    tr: 'Seyahat Sigortası ve Konaklama Rezervasyonu Neden Tutarlı Olmalı?',
    en: 'Why Travel Insurance and Accommodation Must Match in a Visa Application',
  },
  'kanada-ziyaretci-vizesinde-2026-degisiklikleri': {
    tr: 'Kanada Ziyaretçi Vizesinde 2026 Değişiklikleri',
    en: "2026 Changes to Canada's Visitor Visa",
  },
  'ab-yeni-giris-cikis-sistemi-ees-schengen-seyahatinde-degisen': {
    tr: "AB'nin Yeni Giriş-Çıkış Sistemi (EES): Schengen'de Değişen Ne?",
    en: "The EU's New Entry-Exit System (EES): What's Changing for Schengen Travel?",
  },
  'karadag-vize-zorunlulugu-1-kasim-2026': {
    tr: "Karadağ Vizesi Zorunlu Oluyor: 1 Kasım 2026'da Neler Değişiyor?",
    en: 'Montenegro Visa Requirement: What Changes From November 1, 2026?',
  },
  'yurt-disi-egitim-ogrenci-vizesi-basvuru-rehberi': {
    tr: 'Yurt Dışı Öğrenci Vizesi Başvurusunda Dikkat Edilmesi Gerekenler',
    en: 'What to Know When Applying for a Student Visa to Study Abroad',
  },
  'abd-ogrenci-vizesi-f1-basvuru-sureci': {
    tr: "ABD Öğrenci Vizesi (F1): I-20'den SEVIS Ücretine Adım Adım Süreç",
    en: "US Student Visa (F1): Step-by-Step From I-20 to the SEVIS Fee",
  },
};

function run() {
  const update = db.prepare('UPDATE posts SET title = @title, title_en = @titleEn, updated_at = @updatedAt WHERE slug = @slug');
  const updatedAt = new Date().toISOString();
  let n = 0;
  Object.entries(TITLES).forEach(([slug, { tr, en }]) => {
    const result = update.run({
      title: tr, titleEn: en, updatedAt, slug,
    });
    if (result.changes > 0) {
      n += 1;
      console.log(`Kısaltıldı: ${slug} (${tr.length} char TR / ${en.length} char EN)`);
    } else {
      console.log(`Yazı bulunamadı: ${slug}`);
    }
  });
  console.log(`${n} yazının başlığı kısaltıldı.`);
}

run();
