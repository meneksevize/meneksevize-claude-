// Tek seferlik ekleme: "Güncel Değişiklikler" SSS grubunda ETIAS/ETA/ABD
// ücreti/Schengen ücreti maddeleri var ama Karadağ'ın 1 Kasım 2026'dan
// itibaren vize istemeye başlaması (zaten ülke sayfası + blog yazısı olarak
// işlendi — bkz. addMontenegro.js, seedBlog16.js) için bir SSS maddesi
// hiç eklenmemişti — tutarsızlık, bu script kapatıyor.
import { db } from './connection.js';

function run() {
  const existing = db.prepare("SELECT id FROM faqs WHERE question LIKE 'Karadağ%vize%'").get();
  if (existing) {
    console.log('Zaten var, atlandı.');
    return;
  }
  const { maxGroup } = db.prepare("SELECT MAX(sort_order) AS maxGroup FROM faqs WHERE group_title = 'Güncel Değişiklikler'").get();
  const { maxAll } = db.prepare('SELECT MAX(sort_order) AS maxAll FROM faqs').get();
  const sortOrder = (maxGroup ?? maxAll ?? -1) + 1;

  db.prepare(`
    INSERT INTO faqs (group_title, question, answer, sort_order, is_open_default, group_title_en, question_en, answer_en)
    VALUES (@groupTitle, @question, @answer, @sortOrder, 0, @groupTitleEn, @questionEn, @answerEn)
  `).run({
    groupTitle: 'Güncel Değişiklikler',
    question: "Karadağ'a gitmek için vize gerekiyor mu?",
    answer: "1 Kasım 2026'dan itibaren evet — Karadağ, AB vize politikasına uyum kapsamında Türk vatandaşlarından vize istemeye başladı (önceden vizesiz giriş mümkündü). Geçerli bir Schengen, ABD, İngiltere veya İrlanda vizesi/oturum izniniz varsa bu belgeyle 30 güne kadar vizesiz giriş yapabilirsiniz; aksi halde Ankara'daki Karadağ Büyükelçiliği veya İstanbul Başkonsolosluğu üzerinden önceden vize başvurusu yapmanız gerekiyor. Detaylar için [Karadağ sayfamıza](/ulkeler/karadag) göz atabilirsiniz.",
    sortOrder,
    groupTitleEn: 'Recent Changes',
    questionEn: 'Do I need a visa to go to Montenegro?',
    answerEn: "Yes, as of November 1, 2026 — as part of aligning its visa policy with the EU, Montenegro started requiring a visa from Turkish citizens (previously visa-free entry was possible). If you hold a valid Schengen, US, UK, or Ireland visa or residence permit, you can enter visa-free for up to 30 days with that document; otherwise you'll need to apply for a visa in advance through the Montenegrin Embassy in Ankara or the Consulate General in Istanbul. See our [Montenegro page](/en/ulkeler/karadag) for details.",
  });
  console.log(`Eklendi (sort_order: ${sortOrder}).`);
}

run();
