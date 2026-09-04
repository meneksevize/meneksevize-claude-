// Tek seferlik güncelleme: site sahibinin ev adresi yerine gerçek iş yeri
// adresi kullanılıyor artık (bkz. [[pending-workplace-address-change]]
// hafızası — bu değişiklik önceden bekleniyordu).
import { db } from './connection.js';

const NEW_ADDRESS = 'Turan Güneş Bulvarı No 14, Arslanca Pasajı Kat 4 No 11, Çankaya/Ankara';

const upsert = db.prepare(`
  INSERT INTO site_settings (key, value) VALUES (@key, @value)
  ON CONFLICT (key) DO UPDATE SET value = excluded.value
`);

upsert.run({ key: 'address', value: NEW_ADDRESS });

console.log(`address şu değere güncellendi: "${NEW_ADDRESS}"`);
