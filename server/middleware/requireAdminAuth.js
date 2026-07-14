export function requireAdminAuth(req, res, next) {
  if (req.session?.isAdmin) {
    next();
    return;
  }
  res.status(401).json({ error: 'Yetkisiz erişim. Lütfen giriş yapın.' });
}
