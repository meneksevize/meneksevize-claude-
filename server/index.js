import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import session from 'express-session';

import { db } from './db/connection.js';
import { SQLiteSessionStore } from './db/sessionStore.js';
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

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set('trust proxy', 1);
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

const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      next();
      return;
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Menekşe Vize API ${PORT} portunda çalışıyor.`);
  console.log(`Veritabanı: ${db.name}`);
});
