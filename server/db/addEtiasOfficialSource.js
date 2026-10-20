// Tek seferlik güncelleme: ETIAS yazısındaki "Türk vatandaşlarını doğrudan
// etkilemiyor" iddiasına, AB'nin Türkiye Temsilciliği'nin resmi açıklama
// sayfasına (eeas.europa.eu) link vererek otorite/güven sinyali eklendi —
// E-E-A-T açısından, ikincil haber kaynakları yerine birincil/resmi kaynağa
// atıf yapmak önemli. Bu bir web araştırmasıyla doğrulandı (2026-10-20):
// sayfa açıkça "Türkiye ETIAS'ın bir parçası OLMAYACAK" diyor.
import { db } from './connection.js';

const FIXES = [
  {
    slug: 'etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu',
    field: 'content',
    from: 'standart Schengen vizesi başvurusu şeklinde devam ediyor — gecikme de bu açıdan bir değişiklik yaratmıyor.',
    to: 'standart Schengen vizesi başvurusu şeklinde devam ediyor — gecikme de bu açıdan bir değişiklik yaratmıyor. AB\'nin Türkiye Temsilciliği de bunu resmi olarak doğruluyor: [Türkiye ETIAS\'ın bir parçası olmayacak](https://www.eeas.europa.eu/delegations/turkiye/clarification-regarding-european-travel-information-and-authorisation-system-etias_tr).',
  },
  {
    slug: 'etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu',
    field: 'content_en',
    from: 'in the form of a standard Schengen visa application — and the delay doesn\'t change that.',
    to: 'in the form of a standard Schengen visa application — and the delay doesn\'t change that. This is also officially confirmed by the EU Delegation to Turkey: [Turkey will not be part of ETIAS](https://www.eeas.europa.eu/delegations/turkiye/clarification-regarding-european-travel-information-and-authorisation-system-etias_tr).',
  },
];

function run() {
  let n = 0;
  FIXES.forEach(({
    slug, field, from, to,
  }) => {
    const row = db.prepare(`SELECT ${field} AS val FROM posts WHERE slug = ?`).get(slug);
    if (!row) {
      console.log(`Yazı bulunamadı: ${slug}`);
      return;
    }
    if (!row.val || !row.val.includes(from)) {
      console.log(`Beklenen metin bulunamadı (${field}), atlandı: ${slug}`);
      return;
    }
    const updated = row.val.split(from).join(to);
    db.prepare(`UPDATE posts SET ${field} = ?, updated_at = ? WHERE slug = ?`).run(updated, new Date().toISOString(), slug);
    n += 1;
    console.log(`Eklendi (${field}): ${slug}`);
  });
  console.log(`${n} alan güncellendi.`);
}

run();
