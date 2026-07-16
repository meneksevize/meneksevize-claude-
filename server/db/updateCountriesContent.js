// Tek seferlik içerik güncelleme scripti: server/db/seed.js sadece countries
// tablosu BOŞSA veri ekler (bkz. seedCountries() içindeki "zaten dolu" kontrolü).
// Production veritabanı ilk kurulumda zaten seed edildiği için, src/data/countries.js
// ve src/data/visaDocuments.js dosyalarındaki içerik güncellemeleri (daha zengin
// intro/overview/quickFacts metinleri, Schengen evrak notları) otomatik olarak
// production'a yansımaz. Bu script var olan satırları id/docsKey eşleşmesine göre
// UPDATE eder; testimonials, blog, faqs, contact_submissions, applications gibi
// admin panelinden yönetilen diğer tablolara dokunmaz. Tekrar çalıştırmak güvenlidir.
//
// Kullanım: node server/db/updateCountriesContent.js
import { db } from './connection.js';
import { countries } from '../../src/data/countries.js';
import { visaData, normalizeVisaEntry } from '../../src/data/visaDocuments.js';

const updateCountry = db.prepare(`
  UPDATE countries SET
    flag = @flag,
    title = @title,
    home_description = @homeDescription,
    services_description = @servicesDescription,
    intro = @intro,
    overview = @overview,
    region = @region,
    docs_key = @docsKey,
    tags = @tags,
    types = @types,
    quick_facts = @quickFacts
  WHERE id = @id
`);

const updateDoc = db.prepare(`
  UPDATE visa_documents SET items = @items, note = @note
  WHERE docs_key = @docsKey AND type_key = @typeKey
`);

const insertDoc = db.prepare(`
  INSERT INTO visa_documents (docs_key, type_key, items, note)
  VALUES (@docsKey, @typeKey, @items, @note)
`);

const run = db.transaction(() => {
  let countryUpdates = 0;
  countries.forEach((country) => {
    const result = updateCountry.run({
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
    });
    if (result.changes > 0) countryUpdates += 1;
  });

  let docUpdates = 0;
  let docInserts = 0;
  Object.entries(visaData).forEach(([docsKey, group]) => {
    Object.entries(group.types).forEach(([typeKey, rawEntry]) => {
      const entry = normalizeVisaEntry(rawEntry);
      const params = {
        docsKey,
        typeKey,
        items: JSON.stringify(entry.items ?? []),
        note: entry.note ?? null,
      };
      const result = updateDoc.run(params);
      if (result.changes > 0) {
        docUpdates += 1;
      } else {
        insertDoc.run(params);
        docInserts += 1;
      }
    });
  });

  console.log(`Ülke içerikleri güncellendi: ${countryUpdates}/${countries.length}`);
  console.log(`Evrak listesi güncellendi: ${docUpdates}, yeni eklendi: ${docInserts}`);
});

run();
console.log('İçerik güncelleme tamamlandı.');
