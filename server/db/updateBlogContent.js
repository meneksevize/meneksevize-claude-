// Tek seferlik güncelleme: seedBlog3.js'in INSERT OR IGNORE mantığı zaten
// yayınlanmış yazıları güncellemez (slug çakışınca atlanır). Bu script,
// seedBlog3.js'teki güncel içerikleri (ör. yeni iç bağlantılar) slug'a göre
// var olan satırlara UPDATE eder. Tekrar çalıştırmak güvenlidir.
import { db } from './connection.js';
import { posts } from './seedBlog3.js';

const update = db.prepare(`
  UPDATE posts SET content = @content, excerpt = @excerpt, title = @title
  WHERE slug = @slug
`);

let updated = 0;
posts.forEach((post) => {
  const result = update.run({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content.trim(),
  });
  if (result.changes > 0) updated += 1;
});

console.log(`${updated} yazı güncellendi.`);
