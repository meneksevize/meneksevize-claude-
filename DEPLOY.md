# Deploy Rehberi — meneksevize.com

Bu dosya, meneksevize.com'un (React 18 + Vite SPA, Express + better-sqlite3 backend)
üretim sunucusunda nasıl build/deploy/bakım yapıldığını anlatır. **Hiçbir şifre,
API anahtarı, token veya `.env` değeri içermez** — bunlar yalnızca sunucudaki
`.env` dosyasında tutulur ve asla git'e commit edilmez (bkz. `.gitignore`).

## Sunucu Bilgileri

- **Alan adı:** meneksevize.com (ve www.meneksevize.com, apex'e 301 yönleniyor)
- **Sunucu IP:** 141.147.36.206 (Oracle Cloud)
- **SSH kullanıcısı:** `opc`
- **SSH portu:** 22 (varsayılan)
- **Uygulama klasörü:** `/var/www/meneksevize`
- **Node sürümü:** v20.18.1 (`/usr/local/bin/node`)
- **İşletim sistemi:** Oracle Linux (dnf/yum tabanlı), nginx 1.20.1

Bağlantı örneği (özel SSH anahtarınızla):
```
ssh -i <özel-anahtarınız> opc@141.147.36.206
```
`opc` kullanıcısının sudo yetkisi var (nginx/certbot gibi root gerektiren işler için).

## Kod Nasıl Sunucuya Gidiyor

Dosya kopyalama **yok** — sunucu GitHub'daki `main` dalını `git pull` ile çeker.
Üretim deposu bu depo ile aynı kod tabanı (`meneksevize/meneksevize-site` veya
mevcut özel depo — hangisi sunucuda `origin` olarak tanımlıysa).

**Standart deploy adımları** (sunucuda, `/var/www/meneksevize` içinde):
```bash
git checkout -- package-lock.json   # sunucunun kendi install'ının değiştirdiği lockfile'ı at
git pull
npm install
npm run build                       # Vite build → dist/
pm2 restart meneksevize
```

Notlar:
- `git checkout -- package-lock.json` adımı önemli: sunucuda `npm install` lockfile'ı
  hafifçe değiştirebiliyor, bu da bir sonraki `git pull`'u engelleyebiliyor — her
  deploy öncesi bu satırla sıfırlanıyor.
- `npm run build` komutu `dist/` klasörünü yeniden üretir; Express bu klasörü
  (statik varlıklar + SPA shell) servis eder.
- Build + `pm2 restart` arka arkaya birkaç saniye sürebilir; **bu ikisini**
  `npm run sitemap:generate` **ile aynı `&&` zincirine koymayın** (aşağıda
  "Sitemap ve IndexNow" bölümüne bakın — restart bitmeden çalıştırılırsa
  sitemap'ten blog yazıları sessizce düşebilir).

## Uygulama Nasıl Çalışıyor / Yeniden Başlıyor

- **Süreç yöneticisi:** PM2
- **PM2 uygulama adı:** `meneksevize`
- **Script:** `/var/www/meneksevize/server/index.js` (Node, ESM — `package.json`'da `"type": "module"`)
- **Çalıştığı kullanıcı:** `opc`
- **Port:** `4000` (nginx bunu ters proxy ile 443'e bağlıyor)
- **Reboot sonrası otomatik başlama:** PM2 systemd servisi (`pm2-opc`) etkin — sunucu
  yeniden başlarsa uygulama da otomatik ayağa kalkıyor.

Komutlar:
```bash
pm2 restart meneksevize   # deploy sonrası
pm2 status                # durum/uptime/restart sayısı
pm2 logs meneksevize      # canlı log
```

## Veritabanı

- **Tür:** SQLite (better-sqlite3)
- **Yol:** `/var/www/meneksevize/server/data/app.db` (yoksa/`.env`'de `DB_PATH` boşsa
  bu varsayılan kullanılır)
- **Önemli:** Yerel geliştirme veritabanı ile üretim veritabanı **farklı satır
  sayılarına** sahip, uzun süredir ayrışmış durumda. Üretimde çalıştırılacak her
  script, satırları **doğal anahtarla** (slug, isim, soru metni) eşleştirmeli —
  asla row id veya "satır sayıları aynıdır" varsayımıyla değil.

**Otomatik günlük yedek** — `opc` kullanıcısının crontab'ında tanımlı:
```
30 3 * * * cd /var/www/meneksevize && /usr/local/bin/node server/scripts/backup-db.js >> /home/opc/meneksevize-backup.log 2>&1
```
`server/scripts/backup-db.js`, better-sqlite3'ün native `backup()` API'siyle (WAL-güvenli,
uygulama çalışırken de tutarlı) `server/data/backups/app-<timestamp>.db` dosyasını
üretir ve 14 günden eski yedekleri otomatik siler.

Elle yedek almak için aynı komutu istediğiniz an çalıştırabilirsiniz:
```bash
cd /var/www/meneksevize && node server/scripts/backup-db.js
```

## Sunucuda Tek Seferlik Script Çalıştırma (`server/db/*.js`)

İçerik/veri güncellemeleri (örn. bir blog yazısını düzeltme, yeni ülke ekleme,
çeviri ekleme) `server/db/` altında tek seferlik Node script'leri olarak yazılır
ve **önce yerelde test edilip**, sonra sunucuda elle çalıştırılır:

```bash
cd /var/www/meneksevize
node server/db/<script-adı>.js
```

- Bu script'ler `server/db/connection.js`'teki paylaşılan `db` bağlantısını kullanır
  (ESM `import`, `require` değil — VPS'in `package.json`'ı `"type": "module"`).
- `server/db/connection.js`'e eklenen şema migration'ları (yeni kolon vb.) PM2
  her yeniden başladığında **otomatik** çalışır (modül import edilirken tetiklenir).
  Ama `server/db/updateX.js` / `seedBlogN.js` gibi tek seferlik veri script'leri
  **otomatik çalışmaz** — her birini elle, bir kez çalıştırmanız gerekir.
- Bir script `posts.updated_at` alanını değiştiriyorsa (yeni yazı, içerik düzeltmesi,
  link düzeltmesi fark etmez), çalıştırdıktan sonra **sitemap'i yeniden üretin**
  (aşağıya bakın) — aksi halde canlı sitemap'teki `<lastmod>` eski kalır.

## Sitemap ve IndexNow

```bash
cd /var/www/meneksevize
npm run sitemap:generate
```

- Çalıştırdığı script: `server/scripts/generateSitemap.js`
- `public/sitemap.xml` dosyasını yeniden üretir; bu dosya **git'e commit edilmez**
  (`.gitignore`'da), doğrudan `public/`'ten Express route'uyla servis edilir —
  yani build gerektirmez, çalıştırır çalıştırmaz canlıya yansır.
- Script `${SITE_URL}/api/blog`'u **ağ üzerinden** çağırarak blog yazılarını
  sitemap'e ekler — yani sunucunun o an ayakta ve cevap veriyor olması lazım.
  **`pm2 restart` ile aynı komut zincirine koymayın**; restart'tan hemen sonra
  çalıştırırsanız (sunucu henüz tam ayağa kalkmadan) blog yazıları sessizce
  sitemap'ten düşebilir, script yine de "başarılı" görünür. Önce
  `curl -s -o /dev/null -w '%{http_code}' https://meneksevize.com/api/blog`
  komutuyla 200 döndüğünü doğrulayın, sonra `sitemap:generate`'i çalıştırın.
- Aynı script, sitemap'teki tüm URL'leri otomatik olarak **IndexNow** (Bing +
  Yandex anlık indeksleme — Google bu protokolü desteklemiyor) üzerinden de
  gönderir. Doğrulama anahtar dosyası `public/`'te bulunuyor (adı
  `server/scripts/generateSitemap.js`'teki `key` alanıyla eşleşmeli) — bu dosyayı
  silmeyin/yeniden adlandırmayın.
- IndexNow isteği, anahtar dosyası yeni deploy edildiyse bir kez 403 dönebilir —
  gerçek bir hata değil, `sitemap:generate`'i tekrar çalıştırmak yeterli.

## nginx

- **Config dosyası:** `/etc/nginx/conf.d/meneksevize.conf`
- **3 server block:** `meneksevize.com` (443, uygulamayı servis eder, ters proxy
  → `127.0.0.1:4000`), `www.meneksevize.com` (443, apex'e 301), ve 80 portu
  (her iki host adını da https'e ve apex'e yönlendirir).
- nginx eski bir sürüm (1.20.1) olduğu için HTTP/2, yeni `http2 on;` yönergesi
  yerine eski birleşik `listen 443 ssl http2;` söz dizimini kullanıyor.
- **Her config değişikliğinden önce yedek alın:**
  ```bash
  sudo cp /etc/nginx/conf.d/meneksevize.conf /etc/nginx/conf.d/meneksevize.conf.bak-$(date +%Y%m%d-%H%M%S)
  ```
- **Her zaman önce test edin, sonra reload edin** (restart değil — reload
  kesintisiz, syntax hatası varsa `nginx -t` onu canlıya yansıtmadan yakalar):
  ```bash
  sudo nginx -t && sudo systemctl reload nginx
  ```
  nginx config'inde bir syntax hatası, PM2/app seviyesindeki bir hatanın aksine
  **git ile geri alınabilir değildir** ve tüm siteyi anında düşürebilir —
  burada dikkatli olun.

## SSL (Let's Encrypt / certbot)

- Sertifika `meneksevize.com` ve `www.meneksevize.com`'u tek bir sertifikada kapsar.
- **Otomatik yenileme:** `/etc/cron.d/certbot-renew`, her gün saat 03:15'te root
  olarak çalışır:
  ```
  PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
  15 3 * * * root certbot renew --quiet --deploy-hook "systemctl reload nginx" >> /var/log/certbot-renew.log 2>&1
  ```
  **`PATH=` satırı kritik** — 2026-10-15'te bu satır eksik olduğu için certbot
  `nginx` programını bulamadı, yenileme ~1 ay boyunca **sessizce** başarısız
  oldu ve sertifika süresi dolup site ~46 saat erişilemez kaldı. Bu dosyaya
  dokunursanız `PATH=` satırını koruyun.
- **İkinci güvenlik ağı:** `/etc/cron.d/ssl-cert-check`, her gün 08:00'de root
  olarak `server/scripts/checkCertExpiry.js`'yi çalıştırır — canlı sertifikanın
  süresine bakar, 14 günden az kaldıysa veya siteye hiç bağlanılamıyorsa
  (mevcut Resend tabanlı e-posta altyapısı üzerinden) site sahibine uyarı
  e-postası gönderir.
- Elle kontrol/yenileme:
  ```bash
  sudo certbot certificates                                        # mevcut sertifikanın bitiş tarihi
  sudo certbot renew --deploy-hook "systemctl reload nginx"         # elle yenile
  sudo tail -50 /var/log/certbot-renew.log                          # son yenileme denemeleri
  ```
- **Genel ders:** Bu sunucudaki `/etc/cron.d/*` dosyalarının (root crontab'ı
  boş — `crontab -l` için root hiçbir şey döndürmez, tüm zamanlanmış root
  görevleri `/etc/cron.d/` altında) `PATH=` tanımlamayan HERHANGİ biri, aynı
  şekilde sessizce başarısız olabilir. Yeni bir cron.d görevi eklerken mutlaka
  `PATH=` satırı ekleyin ve ilk çalışmasından sonra gerçekten log/çıktı
  ürettiğini doğrulayın. Ayrıca `/var/log` kök dizini `opc` kullanıcısına kapalı
  (root:root 755) — `opc` olarak çalışan bir cron görevi oraya doğrudan log
  yazamaz (bu yüzden backup cron'u `/home/opc/meneksevize-backup.log`'a yazıyor,
  `/var/log/`'a değil); root olarak çalışan görevler (`certbot-renew`,
  `ssl-cert-check`) `/var/log/`'a yazabiliyor.

## Genel Deploy Kontrol Listesi

1. Yerelde `npx vite build` ile build hatası olmadığını doğrula.
2. Değişiklikleri commit edip `main` dalına push et.
3. Sunucuda: `git checkout -- package-lock.json && git pull && npm install && npm run build && pm2 restart meneksevize`
4. Bir DB script'i varsa: ayrı adımda `node server/db/<script>.js` çalıştır.
5. `curl -s -o /dev/null -w '%{http_code}' https://meneksevize.com/api/blog` ile sunucunun ayakta olduğunu doğrula.
6. Blog/içerik etkileyen bir değişiklikse: `npm run sitemap:generate`.
7. `curl` ile canlı URL'leri (ve varsa yeni eklenen sayfaları) tek tek doğrula.

## İlişkili

Bu dosya, `meneksevize/meneksevize-site` deposundaki özel Claude Code oturumlarının
hafıza notlarından (`deploy-workflow` adlı not) derlenmiştir — orijinal notlar daha
fazla tarihsel ayrıntı (ne zaman, hangi oturumda bulunduğu) içerir, bu dosya ise
sürekli güncel kalması gereken "şu an doğru olan" bilgiyi özetler.
