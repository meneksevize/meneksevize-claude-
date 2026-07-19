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
