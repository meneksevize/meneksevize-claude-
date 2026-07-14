import { Router } from 'express';
import bcrypt from 'bcryptjs';

const router = Router();

const MAX_ATTEMPTS = 10;
const WINDOW_MS = 15 * 60 * 1000;
const loginAttempts = new Map();

function isRateLimited(ip) {
  const entry = loginAttempts.get(ip);
  if (!entry) return false;
  if (Date.now() > entry.resetAt) {
    loginAttempts.delete(ip);
    return false;
  }
  return entry.count >= MAX_ATTEMPTS;
}

function recordFailedAttempt(ip) {
  const entry = loginAttempts.get(ip) ?? { count: 0, resetAt: Date.now() + WINDOW_MS };
  entry.count += 1;
  loginAttempts.set(ip, entry);
}

router.post('/login', (req, res) => {
  if (isRateLimited(req.ip)) {
    res.status(429).json({ error: 'Çok fazla başarısız deneme. Lütfen daha sonra tekrar deneyin.' });
    return;
  }

  const { username, password } = req.body ?? {};
  const validUsername = Boolean(username) && username === process.env.ADMIN_USERNAME;
  const validPassword = Boolean(password) && Boolean(process.env.ADMIN_PASSWORD_HASH)
    && bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH);

  if (!validUsername || !validPassword) {
    recordFailedAttempt(req.ip);
    res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı.' });
    return;
  }

  req.session.isAdmin = true;
  res.json({ authenticated: true });
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ authenticated: false });
  });
});

router.get('/me', (req, res) => {
  res.json({ authenticated: Boolean(req.session?.isAdmin) });
});

export default router;
