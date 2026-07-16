// Günlük veritabanı yedeği alır (better-sqlite3'ün native, WAL-güvenli backup()
// API'si ile — dosyayı doğrudan kopyalamaktan farklı olarak sunucu çalışırken de
// tutarlı bir anlık görüntü alır). Son 14 günlük yedek tutulur, daha eskiler silinir.
// Kurulum: crontab'a ekleyin, örn. her gün 03:30'da:
//   30 3 * * * cd /var/www/meneksevize && /usr/local/bin/node server/scripts/backup-db.js >> /var/log/meneksevize-backup.log 2>&1
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = process.env.DB_PATH
  ? path.resolve(process.env.DB_PATH)
  : path.join(__dirname, '..', 'data', 'app.db');

const backupDir = path.join(path.dirname(dbPath), 'backups');
fs.mkdirSync(backupDir, { recursive: true });

const KEEP_DAYS = 14;
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupPath = path.join(backupDir, `app-${timestamp}.db`);

const db = new Database(dbPath, { readonly: true });
await db.backup(backupPath);
db.close();
console.log(`Yedek oluşturuldu: ${backupPath}`);

const cutoff = Date.now() - KEEP_DAYS * 24 * 60 * 60 * 1000;
const removed = [];
fs.readdirSync(backupDir).forEach((file) => {
  if (!file.startsWith('app-') || !file.endsWith('.db')) return;
  const filePath = path.join(backupDir, file);
  if (fs.statSync(filePath).mtimeMs < cutoff) {
    fs.unlinkSync(filePath);
    removed.push(file);
  }
});
if (removed.length > 0) {
  console.log(`${removed.length} eski yedek silindi (${KEEP_DAYS} günden eski).`);
}
