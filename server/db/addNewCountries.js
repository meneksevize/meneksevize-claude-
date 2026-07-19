import { db } from './connection.js';
import { countries } from '../../src/data/countries.js';
import { visaData, normalizeVisaEntry } from '../../src/data/visaDocuments.js';

const NEW_COUNTRY_IDS = [
  'japonya', 'guney-kore', 'cin', 'hindistan', 'meksika', 'yeni-zelanda',
  'singapur', 'misir', 'guney-afrika', 'tayland', 'vietnam', 'sri-lanka',
];

function addCountries() {
  const existing = new Set(db.prepare('SELECT id FROM countries').all().map((r) => r.id));
  const { maxOrder } = db.prepare('SELECT MAX(sort_order) AS maxOrder FROM countries').get();
  let nextOrder = (maxOrder ?? -1) + 1;

  const insert = db.prepare(`
    INSERT INTO countries (id, flag, title, home_description, services_description, intro, overview, region, docs_key, tags, types, quick_facts, sort_order)
    VALUES (@id, @flag, @title, @homeDescription, @servicesDescription, @intro, @overview, @region, @docsKey, @tags, @types, @quickFacts, @sortOrder)
  `);

  let added = 0;
  const insertMany = db.transaction(() => {
    NEW_COUNTRY_IDS.forEach((id) => {
      if (existing.has(id)) return;
      const country = countries.find((c) => c.id === id);
      if (!country) return;
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
        sortOrder: nextOrder,
      });
      nextOrder += 1;
      added += 1;
    });
  });
  insertMany();
  console.log(`${added} yeni ülke eklendi (${NEW_COUNTRY_IDS.length - added} zaten vardı, atlandı).`);
}

function addVisaDocuments() {
  const existing = new Set(
    db.prepare('SELECT docs_key, type_key FROM visa_documents').all().map((r) => `${r.docs_key}::${r.type_key}`),
  );

  const insert = db.prepare(`
    INSERT INTO visa_documents (docs_key, type_key, items, note)
    VALUES (@docsKey, @typeKey, @items, @note)
  `);

  let added = 0;
  const insertMany = db.transaction(() => {
    NEW_COUNTRY_IDS.forEach((id) => {
      const entry = visaData[id];
      if (!entry) return;
      Object.entries(entry.types).forEach(([typeKey, rawEntry]) => {
        const key = `${id}::${typeKey}`;
        if (existing.has(key)) return;
        const normalized = normalizeVisaEntry(rawEntry);
        insert.run({
          docsKey: id,
          typeKey,
          items: JSON.stringify(normalized.items),
          note: normalized.note,
        });
        added += 1;
      });
    });
  });
  insertMany();
  console.log(`${added} yeni evrak listesi eklendi.`);
}

addCountries();
addVisaDocuments();
