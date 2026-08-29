// Tek seferlik güncelleme: telefon/whatsapp numarasını kullanıcının kendi
// numarasına geri döndürür (site geçici olarak başka bir numara üzerinden
// yayındaydı).
import { db } from './connection.js';

const NEW_PHONE = '+905416500621';

const upsert = db.prepare(`
  INSERT INTO site_settings (key, value) VALUES (@key, @value)
  ON CONFLICT (key) DO UPDATE SET value = excluded.value
`);

const updateMany = db.transaction((entries) => {
  entries.forEach(([key, value]) => upsert.run({ key, value }));
});

updateMany([
  ['phone', NEW_PHONE],
  ['whatsapp', NEW_PHONE],
]);

console.log(`phone ve whatsapp ${NEW_PHONE} olarak güncellendi.`);
