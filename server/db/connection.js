import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dbPath = process.env.DB_PATH
  ? path.resolve(process.env.DB_PATH)
  : path.join(__dirname, '..', 'data', 'app.db');

fs.mkdirSync(path.dirname(dbPath), { recursive: true });

export const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
db.exec(schema);

// countries.overview eklendiğinde önceden var olan (schema.sql'in CREATE TABLE IF NOT
// EXISTS'i etkilemediği) veritabanları için güvenli, tekrar çalıştırılabilir migration.
const countryColumns = db.prepare('PRAGMA table_info(countries)').all().map((c) => c.name);
if (!countryColumns.includes('overview')) {
  db.exec('ALTER TABLE countries ADD COLUMN overview TEXT');
}

const postColumns = db.prepare('PRAGMA table_info(posts)').all().map((c) => c.name);
if (!postColumns.includes('category')) {
  db.exec("ALTER TABLE posts ADD COLUMN category TEXT NOT NULL DEFAULT 'genel'");
}

// Çok dilli (EN/AR) site desteği: her çevrilebilir alanın yanına _en/_ar
// kardeş kolonları eklenir (bkz. plan — "Çok Dilli Site" bölümü). Tekrar
// çalıştırmak güvenlidir, sadece eksik kolonlar eklenir.
function ensureColumns(table, columns) {
  const existing = db.prepare(`PRAGMA table_info(${table})`).all().map((c) => c.name);
  columns.forEach((col) => {
    if (!existing.includes(col)) {
      db.exec(`ALTER TABLE ${table} ADD COLUMN ${col} TEXT`);
    }
  });
}

ensureColumns('countries', [
  'title_en', 'title_ar',
  'home_description_en', 'home_description_ar',
  'services_description_en', 'services_description_ar',
  'intro_en', 'intro_ar',
  'overview_en', 'overview_ar',
]);
ensureColumns('visa_type_labels', ['label_en', 'label_ar']);
ensureColumns('visa_documents', ['items_en', 'items_ar', 'note_en', 'note_ar']);
ensureColumns('faqs', ['group_title_en', 'group_title_ar', 'question_en', 'question_ar', 'answer_en', 'answer_ar']);
ensureColumns('testimonials', ['quote_en', 'quote_ar']);
ensureColumns('posts', ['title_en', 'title_ar', 'excerpt_en', 'excerpt_ar', 'content_en', 'content_ar']);
