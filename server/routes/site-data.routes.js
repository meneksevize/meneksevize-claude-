import { Router } from 'express';
import { marked } from 'marked';
import { db } from '../db/connection.js';

const router = Router();

function parseCountryRow(row) {
  return {
    id: row.id,
    flag: row.flag,
    title: row.title,
    homeDescription: row.home_description,
    servicesDescription: row.services_description,
    intro: row.intro,
    region: row.region,
    docsKey: row.docs_key,
    tags: JSON.parse(row.tags),
    types: JSON.parse(row.types),
    quickFacts: JSON.parse(row.quick_facts),
  };
}

router.get('/site-data', (req, res) => {
  const countryRows = db.prepare('SELECT * FROM countries ORDER BY sort_order ASC').all();
  const labelRows = db.prepare('SELECT * FROM visa_type_labels').all();
  const docRows = db.prepare('SELECT * FROM visa_documents').all();
  const settingRows = db.prepare('SELECT * FROM site_settings').all();
  const testimonialRows = db.prepare('SELECT * FROM testimonials WHERE is_published = 1 ORDER BY sort_order ASC').all();
  const faqRows = db.prepare('SELECT * FROM faqs ORDER BY sort_order ASC').all();

  const countries = countryRows.map(parseCountryRow);

  const visaTypeLabels = {};
  labelRows.forEach((row) => { visaTypeLabels[row.key] = row.label; });

  const visaDocuments = {};
  docRows.forEach((row) => {
    visaDocuments[row.docs_key] = visaDocuments[row.docs_key] || {};
    visaDocuments[row.docs_key][row.type_key] = {
      items: JSON.parse(row.items),
      note: row.note,
    };
  });

  const settings = {};
  settingRows.forEach((row) => { settings[row.key] = row.value; });

  const testimonials = testimonialRows.map((row) => ({
    id: row.id,
    name: row.name,
    location: row.location,
    rating: row.rating,
    quote: row.quote,
  }));

  const faqs = faqRows.map((row) => ({
    id: row.id,
    group: row.group_title,
    question: row.question,
    answerHtml: marked.parse(row.answer),
    openDefault: Boolean(row.is_open_default),
  }));

  res.json({
    countries, visaTypeLabels, visaDocuments, settings, testimonials, faqs,
  });
});

export default router;
