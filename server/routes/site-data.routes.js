import { Router } from 'express';
import { marked } from 'marked';
import { db } from '../db/connection.js';

const router = Router();

const SUPPORTED_LANGS = new Set(['en', 'ar']);

// Türkçe (tr) her zaman temel kolonlardır. en/ar istenirse ilgili _en/_ar
// kardeş kolonu kullanılır; o alan için çeviri henüz girilmemişse (null/boş)
// sessizce Türkçe'ye düşer — kısmi çeviri asla boş içerik göstermez.
function pick(row, field, lang) {
  if (SUPPORTED_LANGS.has(lang)) {
    const localized = row[`${field}_${lang}`];
    if (localized) return localized;
  }
  return row[field];
}

function parseCountryRow(row, lang) {
  return {
    id: row.id,
    flag: row.flag,
    title: pick(row, 'title', lang),
    homeDescription: pick(row, 'home_description', lang),
    servicesDescription: pick(row, 'services_description', lang),
    intro: pick(row, 'intro', lang),
    overview: pick(row, 'overview', lang),
    region: row.region,
    docsKey: row.docs_key,
    tags: JSON.parse(row.tags),
    types: JSON.parse(row.types),
    quickFacts: JSON.parse(pick(row, 'quick_facts', lang)),
  };
}

router.get('/site-data', (req, res) => {
  const lang = req.query.lang;
  const countryRows = db.prepare('SELECT * FROM countries ORDER BY sort_order ASC').all();
  const labelRows = db.prepare('SELECT * FROM visa_type_labels').all();
  const docRows = db.prepare('SELECT * FROM visa_documents').all();
  const settingRows = db.prepare('SELECT * FROM site_settings').all();
  const testimonialRows = db.prepare('SELECT * FROM testimonials WHERE is_published = 1 ORDER BY sort_order ASC').all();
  const faqRows = db.prepare('SELECT * FROM faqs ORDER BY sort_order ASC').all();

  const countries = countryRows.map((row) => parseCountryRow(row, lang));

  const visaTypeLabels = {};
  labelRows.forEach((row) => { visaTypeLabels[row.key] = pick(row, 'label', lang); });

  const visaDocuments = {};
  docRows.forEach((row) => {
    visaDocuments[row.docs_key] = visaDocuments[row.docs_key] || {};
    const itemsRaw = SUPPORTED_LANGS.has(lang) ? (row[`items_${lang}`] || row.items) : row.items;
    visaDocuments[row.docs_key][row.type_key] = {
      items: JSON.parse(itemsRaw),
      note: pick(row, 'note', lang),
    };
  });

  // site_settings anahtar-değer bir tablo; çeviri şu an yalnızca footer_note
  // için ayrı bir anahtar (footer_note_en/footer_note_ar) olarak tutulur.
  const settings = {};
  settingRows.forEach((row) => { settings[row.key] = row.value; });
  if (SUPPORTED_LANGS.has(lang)) {
    const localizedNote = settings[`footer_note_${lang}`];
    if (localizedNote) settings.footer_note = localizedNote;
  }

  const testimonials = testimonialRows.map((row) => ({
    id: row.id,
    name: row.name,
    location: row.location,
    rating: row.rating,
    quote: pick(row, 'quote', lang),
  }));

  const faqs = faqRows.map((row) => ({
    id: row.id,
    group: pick(row, 'group_title', lang),
    question: pick(row, 'question', lang),
    answerHtml: marked.parse(pick(row, 'answer', lang)),
    openDefault: Boolean(row.is_open_default),
  }));

  res.json({
    countries, visaTypeLabels, visaDocuments, settings, testimonials, faqs,
  });
});

export default router;
