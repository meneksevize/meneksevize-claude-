import { db } from './connection.js';
import { posts } from './seedBlog4.js';

function addPosts() {
  const existing = new Set(db.prepare('SELECT slug FROM posts').all().map((r) => r.slug));
  const insert = db.prepare(`
    INSERT INTO posts (slug, title, excerpt, content, category, is_published, published_at, updated_at)
    VALUES (@slug, @title, @excerpt, @content, @category, 1, datetime('now'), datetime('now'))
  `);

  let added = 0;
  posts.forEach((post) => {
    if (existing.has(post.slug)) return;
    insert.run({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
    });
    added += 1;
  });
  console.log(`${added} yeni blog yazısı eklendi (${posts.length - added} zaten vardı, atlandı).`);
}

addPosts();
