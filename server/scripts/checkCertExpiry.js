// Günlük SSL sertifika süresi kontrolü — 2026-10-15'te yaşanan kesintiden
// sonra eklendi: certbot'un otomatik yenilemesi, cron görevindeki eksik
// PATH yüzünden Eylül ortasından beri her gece sessizce başarısız oluyordu
// ve kimse fark etmeden sertifika süresi doldu, site ~46 saat erişilemez
// kaldı (bkz. deploy-workflow hafıza notu). O yenileme sorunu artık
// düzeltildi, ama "bir daha sessizce başarısız olursa haberim olsun"
// diye ikinci bir güvenlik ağı olarak bu script eklendi.
//
// Disk üzerindeki sertifika dosyasını değil, CANLI sunucunun gerçekten
// sunduğu sertifikayı kontrol eder (TLS bağlantısı kurarak) — böylece
// "yenilendi ama nginx reload olmadı" gibi farklı bir hata sınıfını da
// yakalar. Süre WARN_DAYS'in altına düşerse ya da siteye hiç bağlanılamazsa
// (bu da başlı başına bir kesinti belirtisi olabilir) site_settings.email
// adresine (mevcut iletişim formu bildirim altyapısı — server/lib/mailer.js,
// Resend API) bir uyarı e-postası gönderilir.
//
// cron: /etc/cron.d/ssl-cert-check, her gün 08:00'de opc kullanıcısıyla çalışır.
import 'dotenv/config';
import tls from 'node:tls';
import { sendNotificationEmail } from '../lib/mailer.js';

const HOST = 'meneksevize.com';
const WARN_DAYS = 14;

function getCertExpiry(host) {
  return new Promise((resolve, reject) => {
    const socket = tls.connect(443, host, { servername: host, timeout: 10000 }, () => {
      const cert = socket.getPeerCertificate();
      socket.end();
      if (!cert || !cert.valid_to) {
        reject(new Error('Sertifika bilgisi alınamadı'));
        return;
      }
      resolve(new Date(cert.valid_to));
    });
    socket.on('error', reject);
    socket.on('timeout', () => {
      socket.destroy();
      reject(new Error('Bağlantı zaman aşımına uğradı'));
    });
  });
}

async function main() {
  try {
    const expiry = await getCertExpiry(HOST);
    const daysLeft = Math.floor((expiry.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    console.log(`SSL sertifikası ${expiry.toISOString()} tarihinde doluyor (${daysLeft} gün kaldı).`);
    if (daysLeft <= WARN_DAYS) {
      await sendNotificationEmail(
        `⚠️ meneksevize.com SSL sertifikası ${daysLeft} gün içinde doluyor`,
        `meneksevize.com SSL sertifikası ${expiry.toISOString()} tarihinde doluyor (${daysLeft} gün kaldı).\n\n`
        + 'Otomatik yenileme (her gece 03:15, /etc/cron.d/certbot-renew) normalde süre dolmadan '
        + 'çok önce devreye girer. Bu e-postayı alıyorsanız ya yenileme henüz tetiklenmedi ya da '
        + '(2026-10-15\'te olduğu gibi) sessizce başarısız oluyor olabilir.\n\n'
        + 'Kontrol için VPS\'e girip şunu çalıştırın:\n'
        + 'sudo certbot certificates\n'
        + 'sudo tail -50 /var/log/certbot-renew.log\n\n'
        + 'Gerekirse elle yenileyin:\n'
        + 'sudo certbot renew --deploy-hook "systemctl reload nginx"',
      );
      console.log('Uyarı e-postası gönderildi.');
    }
  } catch (err) {
    console.error('Sertifika kontrolü başarısız:', err.message);
    // Siteye hiç bağlanılamaması da başlı başına endişe verici (aktif bir
    // kesinti olabilir) — bunu da ayrıca bildiriyoruz.
    await sendNotificationEmail(
      '⚠️ meneksevize.com SSL kontrolü başarısız oldu',
      `Günlük SSL sertifika kontrolü siteye bağlanamadı: ${err.message}\n\n`
      + 'Bu, sitenin şu anda erişilemez olduğu anlamına gelebilir — lütfen hemen kontrol edin.',
    );
  }
}

main();
