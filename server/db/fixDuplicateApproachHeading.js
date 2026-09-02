// Düzeltme: addInternalLinks.js'in eklediği "## Bizim Yaklaşımımız" / "## Our
// Approach" / "## نهجنا" kapanışı, zaten kendi "Bizim Yaklaşımımız" bölümü
// olan 12 eski yazıda art arda İKİ AYNI BAŞLIK oluşturdu. İkinci (son)
// başlığı kaldırıp paragrafını ilk bölümün altına birleştiriyoruz — içerik
// kaybı yok, sadece tekrarlanan başlık satırı siliniyor.
import { db } from './connection.js';

const AFFECTED_SLUGS = [
  'vize-basvurusunda-niyet-mektubu-nasil-yazilir',
  'vize-mulakatina-hazirlik-sik-sorulan-sorular',
  'kanadada-dogum-yapmak-surec-maliyet-bilinmesi-gerekenler',
  'aile-birlesimi-vizesi-basvurusunda-dikkat-edilmesi-gerekenler',
  'etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu',
  'yurt-disi-egitim-ogrenci-vizesi-basvuru-rehberi',
  'ticari-vize-basvurusunda-davet-mektubu-ve-firma-belgeleri',
  'ingiltere-eta-sistemi-turk-vatandaslarini-etkiliyor-mu',
  'cocuklu-ailelerin-vize-basvurusunda-ekstra-belgeler',
  'guvenilir-vize-danismanligi-nasil-secilir-dikkat-edilmesi-gerekenler',
  'kanada-ziyaretci-vizesinde-2026-degisiklikleri',
  'vize-basvurusu-reddedildi-simdi-ne-yapmali',
];

const HEADINGS = {
  content: 'Bizim Yaklaşımımız',
  content_en: 'Our Approach',
  content_ar: 'نهجنا',
};

function collapseDuplicateHeading(text, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(## ${escaped}[\\s\\S]*?)\\n\\n## ${escaped}\\n\\n`);
  if (!pattern.test(text)) return { text, changed: false };
  return { text: text.replace(pattern, '$1\n\n'), changed: true };
}

function run() {
  const getStmt = db.prepare('SELECT slug, content, content_en, content_ar FROM posts WHERE slug = ?');
  const updateStmt = db.prepare('UPDATE posts SET content = @content, content_en = @content_en, content_ar = @content_ar WHERE slug = @slug');

  let fixed = 0;
  AFFECTED_SLUGS.forEach((slug) => {
    const row = getStmt.get(slug);
    if (!row) {
      console.log(`Atlandı (bulunamadı): ${slug}`);
      return;
    }
    const result = { slug };
    let anyChanged = false;
    Object.entries(HEADINGS).forEach(([field, heading]) => {
      const { text, changed } = collapseDuplicateHeading(row[field] || '', heading);
      result[field] = text;
      if (changed) anyChanged = true;
    });
    if (anyChanged) {
      updateStmt.run(result);
      fixed += 1;
      console.log(`Düzeltildi: ${slug}`);
    } else {
      console.log(`Değişiklik gerekmedi: ${slug}`);
    }
  });

  console.log(`${fixed}/${AFFECTED_SLUGS.length} yazı düzeltildi.`);
}

run();
