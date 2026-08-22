import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import session from 'express-session';
import compression from 'compression';

import { db } from './db/connection.js';
import { SQLiteSessionStore } from './db/sessionStore.js';
import { resolveSeo, renderIndexHtml } from './lib/seo.js';
import authRoutes from './routes/auth.routes.js';
import siteDataRoutes from './routes/site-data.routes.js';
import contactRoutes from './routes/contact.routes.js';
import adminCountriesRoutes from './routes/admin-countries.routes.js';
import adminSettingsRoutes from './routes/admin-settings.routes.js';
import adminTestimonialsRoutes from './routes/admin-testimonials.routes.js';
import adminFaqsRoutes from './routes/admin-faqs.routes.js';
import blogRoutes from './routes/blog.routes.js';
import adminBlogRoutes from './routes/admin-blog.routes.js';
import trackRoutes from './routes/track.routes.js';
import adminApplicationsRoutes from './routes/admin-applications.routes.js';
import paymentsRoutes from './routes/payments.routes.js';
import adminPaymentsRoutes from './routes/admin-payments.routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set('trust proxy', 1);
app.use(compression());
app.use(express.json());

app.use(session({
  store: new SQLiteSessionStore(),
  secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
}));

app.use('/api/auth', authRoutes);
app.use('/api', siteDataRoutes);
app.use('/api', contactRoutes);
app.use('/api', blogRoutes);
app.use('/api', trackRoutes);
app.use('/api/admin/countries', adminCountriesRoutes);
app.use('/api/admin/settings', adminSettingsRoutes);
app.use('/api/admin/testimonials', adminTestimonialsRoutes);
app.use('/api/admin/faqs', adminFaqsRoutes);
app.use('/api/admin/blog', adminBlogRoutes);
app.use('/api/admin/applications', adminApplicationsRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/admin/payments', adminPaymentsRoutes);

const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  // Vite, /assets altındaki dosya adlarına içerik hash'i ekler (örn. index-Ab12Cd.js);
  // içerik değişmeden o dosya adı asla değişmez, bu yüzden sonsuza kadar önbelleklenebilir.
  // Diğer statik dosyalar (index.html, favicon, sitemap.xml vb.) hash içermez ve her
  // deploy'da içerik değişebileceğinden agresif önbelleklenmemelidir.
  app.use('/assets', express.static(path.join(distPath, 'assets'), {
    maxAge: '1y',
    immutable: true,
  }));
  // index: false — kök yol ("/") dahil tüm sayfa istekleri aşağıdaki SEO
  // enjeksiyon katmanından geçsin diye statik middleware'in index.html servis
  // etmesi kapatılır (bkz. server/lib/seo.js).
  app.use(express.static(distPath, {
    index: false,
    maxAge: '1h',
  }));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      next();
      return;
    }
    try {
      const seo = resolveSeo(req.path);
      if (seo.redirect) {
        // Sorgu parametrelerini (gclid vb.) koruyarak kalıcı yönlendirme.
        const query = req.originalUrl.includes('?') ? req.originalUrl.slice(req.originalUrl.indexOf('?')) : '';
        res.redirect(301, `${seo.redirect}${query}`);
        return;
      }
      res.status(seo.status)
        .set('Cache-Control', 'public, max-age=0')
        .type('html')
        .send(renderIndexHtml(seo));
    } catch (err) {
      // Meta enjeksiyonu hiçbir koşulda sayfayı düşürmemeli — hata olursa
      // eski davranışa (düz index.html) geri düşülür.
      console.error('SEO meta enjeksiyonu başarısız, şablon olduğu gibi dönülüyor:', err.message);
      res.sendFile(path.join(distPath, 'index.html'), {
        headers: { 'Cache-Control': 'public, max-age=0' },
      });
    }
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Menekşe Vize API ${PORT} portunda çalışıyor.`);
  console.log(`Veritabanı: ${db.name}`);
});
