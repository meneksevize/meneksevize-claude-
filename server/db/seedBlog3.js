import { db } from './connection.js';
import { photos } from '../../src/data/photos.js';

const cover = Object.values(photos);

export const posts = [
  {
    slug: 'almanya-vizesi-nasil-alinir-adim-adim-rehber',
    title: 'Almanya Vizesi Nasıl Alınır? Adım Adım Başvuru Rehberi',
    excerpt: 'Almanya, Türkiye\'den en çok başvuru alan Schengen ülkesi. Turistik, ticari ve aile ziyareti vizesi süreci adım adım.',
    publishedAt: '2026-03-03T09:00:00.000Z',
    content: `Almanya, güçlü ekonomisi, geniş Türk topluluğu ve Avrupa'nın merkezi konumu sayesinde Türkiye'den en yoğun vize başvurusu alan Schengen ülkelerinden biridir. Bu yazıda turistik, ticari ve aile ziyareti amaçlı Almanya vizesi sürecini adım adım ele alıyoruz.

## Hangi Vize Türüne İhtiyacınız Var?

Almanya, tek bir Schengen vizesi altında farklı seyahat amaçlarını kapsar:

- **Turistik vize**: Tatil, gezi amaçlı kısa süreli ziyaretler
- **Ticari vize**: Fuar, iş görüşmesi, iş ortaklığı ziyaretleri
- **Aile ziyareti vizesi**: Almanya'da yaşayan aile üyelerini ziyaret

## Başvuru Süreci

1. **Ön hazırlık**: Seyahat amacınızı ve tarihlerinizi netleştirin
2. **Randevu**: Konsolosluk veya yetkili vize başvuru merkezinden randevu alın
3. **Evrak toplama**: Pasaport, biyometrik fotoğraf, seyahat sağlık sigortası, konaklama ve uçak rezervasyonu, mali yeterlilik belgeleri
4. **Başvuru teslimi**: Evraklarınızı randevu gününde eksiksiz teslim edin
5. **Sonuç takibi**: Değerlendirme süresi başvuru yoğunluğuna göre değişir

## Sık Yapılan Hatalar

En sık karşılaşılan sorunlardan biri, davet mektubu ile seyahat planının tutarsız olmasıdır — örneğin davet mektubunda belirtilen tarihlerle uçak rezervasyonundaki tarihlerin uyuşmaması. Bir diğer önemli nokta, Almanya'da yaşayan Türk topluluğu nedeniyle aile ziyareti başvurularında akrabalık belgelerinin eksiksiz ve güncel olmasıdır.

## Bizim Yaklaşımımız

[Almanya vizesi sayfamızda](/ulkeler/almanya) bu ülkeye özel güncel bilgi kutularını ve gerekli evrak listesini detaylı olarak bulabilirsiniz; [turistik](/ulkeler/almanya/turistik) ve [ticari](/ulkeler/almanya/ticari) vize türleri için ayrı evrak listelerimiz de mevcut. Ön görüşmede seyahat amacınızı dinleyip size özel bir evrak checklist'i hazırlıyoruz.`,
  },
  {
    slug: 'fransa-vizesi-paris-gezisi-icin-bilinmesi-gerekenler',
    title: 'Fransa Vizesi: Paris ve Fransa Gezisi İçin Bilmeniz Gerekenler',
    excerpt: 'Fransa, sanat ve kültür turizminde en çok tercih edilen Schengen ülkelerinden biri. Vize sürecinde dikkat edilmesi gerekenler.',
    publishedAt: '2026-03-10T09:00:00.000Z',
    content: `Fransa, Paris başta olmak üzere sanat, moda ve gastronomi alanındaki itibarıyla Türk gezginlerin en çok tercih ettiği Schengen destinasyonlarından biridir. Bu yazıda Fransa vizesi başvurusunda dikkat edilmesi gereken noktaları derledik.

## Turistik Başvurularda Öne Çıkan Noktalar

Paris, Fransız Rivierası ve Loire Vadisi gibi rotalar turistik başvuruların büyük çoğunluğunu oluşturur. Konaklama rezervasyonlarınızın ve seyahat planınızın güzergahla tutarlı olması, başvurunuzun değerlendirilmesinde önemli bir kolaylık sağlar.

## Ticari Ziyaretlerde Dikkat Edilmesi Gerekenler

Moda ve perakende sektöründeki fuarlar (özellikle Paris merkezli), ticari vize başvurularının önemli bir bölümünü oluşturur. Bu tür başvurularda:

- Fuar/iş ortağı davet mektubu güncel ve net olmalı
- Şirket faaliyet belgeniz başvuru tarihine yakın düzenlenmiş olmalı
- Seyahat programınız (toplantı tarihleri, fuar günleri) davet mektubuyla örtüşmeli

## Sezon Önerisi

Yaz ayları ve okul tatilleri döneminde konsolosluk randevu yoğunluğu belirgin şekilde artar. Seyahat tarihiniz netleşir netleşmez başvuru sürecini başlatmanız, randevu bulma konusunda avantaj sağlar.

## Bizim Yaklaşımımız

[Fransa vizesi sayfamızda](/ulkeler/fransa) ülkeye özel bilgi kutularını bulabilirsiniz; [turistik](/ulkeler/fransa/turistik) ve [ticari](/ulkeler/fransa/ticari) vize türleri için evrak listelerimiz ayrı ayrı hazır. Süreci ön görüşmeden sonuç takibine kadar birlikte yönetiyoruz.`,
  },
  {
    slug: 'yunanistan-vizesi-yaz-sezonunda-erken-basvuru',
    title: 'Yunanistan Vizesi: Yaz Sezonunda Erken Başvurmanın Önemi',
    excerpt: 'Yunanistan, Türkiye\'ye yakınlığı ve adalarıyla en çok tercih edilen Schengen ülkelerinden. Yaz sezonunda başvuru zamanlaması kritik.',
    publishedAt: '2026-03-17T09:00:00.000Z',
    content: `Yunanistan, Ege kıyısındaki adaları ve Türkiye'ye yakınlığı sayesinde her yıl en yoğun başvuru alan Schengen ülkelerinin başında gelir. Özellikle yaz aylarında başvuru zamanlaması, sürecin sorunsuz ilerlemesi açısından kritik önem taşır.

## Neden Yaz Ayları Bu Kadar Yoğun?

Santorini, Mikonos ve Girit gibi adalara yönelik tatil planları, Mayıs-Eylül arasında yoğunlaşır. Bu dönemde:

- Konsolosluk randevu kapasitesi dolabilir
- Değerlendirme süreleri uzayabilir
- Konaklama fiyatları ve doluluk oranı artar

## Ne Zaman Başvurmalı?

Seyahat tarihiniz netleştiği anda, mümkünse seyahatinizden 6-8 hafta önce başvuru sürecini başlatmanızı öneririz. Bu, hem randevu bulma hem de olası ek evrak taleplerine zaman tanıma açısından avantaj sağlar.

## Ada Turlarında Evrak Planlaması

Birden fazla adayı kapsayan bir güzergah planlıyorsanız, feribot/uçak rezervasyonlarınızın ve konaklama planınızın tüm güzergahı net şekilde yansıtması önemlidir. Parça parça, tutarsız bir seyahat planı değerlendirme sürecini karmaşıklaştırabilir.

## Bizim Yaklaşımımız

[Yunanistan vizesi sayfamızda](/ulkeler/yunanistan) ülkeye özel bilgileri, [turistik vize evrak listesini](/ulkeler/yunanistan/turistik) ise ayrı sayfamızda bulabilirsiniz. Yaz sezonu yoğunluğunu yakından takip ediyor, başvurunuzu zamanında ve eksiksiz hazırlamanıza yardımcı oluyoruz.`,
  },
  {
    slug: 'italya-vizesi-basvurusunda-dikkat-edilmesi-gerekenler',
    title: 'İtalya Vizesi Başvurusunda Dikkat Edilmesi Gerekenler',
    excerpt: 'Roma, Venedik, Floransa gibi rotalarla İtalya, Schengen bölgesinin en çok ziyaret edilen ülkelerinden. Başvuru sürecinde önemli noktalar.',
    publishedAt: '2026-03-24T09:00:00.000Z',
    content: `İtalya, tarih ve sanat mirasıyla Roma, Venedik ve Floransa gibi rotalarda yoğun turistik ilgi görürken, Milano'daki moda ve tasarım sektörü fuarları da ticari başvuruların önemli bir kısmını oluşturur.

## Çok Şehirli Güzergahlarda Planlama

İtalya'yı ziyaret eden gezginlerin büyük çoğunluğu birden fazla şehri kapsayan bir rota izler. Böyle bir planınız varsa:

- Şehirler arası ulaşım (tren/uçak) rezervasyonlarınızı önceden hazırlayın
- Konaklama rezervasyonlarınızın güzergahla tarih olarak örtüştüğünden emin olun
- Seyahat planınızı başvuru formunuzla tutarlı şekilde sunun

## Ticari Vize İçin Moda Sektörü Fuarları

Milano merkezli moda haftaları ve fuarlar, ticari vize başvurularında sık karşılaşılan bir kategoridir. Bu başvurularda davet mektubunun fuar/etkinlik tarihleriyle uyumlu olması ve şirket belgelerinin güncel olması beklenir.

## Bizim Yaklaşımımız

[İtalya vizesi sayfamızda](/ulkeler/italya) ülkeye özel bilgileri bulabilirsiniz; [turistik](/ulkeler/italya/turistik) ve [ticari](/ulkeler/italya/ticari) vize türleri için ayrı evrak listelerimiz mevcut. Çok şehirli seyahat planlarında evrak tutarlılığını birlikte kontrol ediyor, başvurunuzu güçlü bir şekilde hazırlıyoruz.`,
  },
  {
    slug: 'dubai-bae-e-vizesi-en-hizli-vize-sureci',
    title: 'Dubai/BAE E-Vizesi: En Hızlı Vize Süreçlerinden Biri Nasıl İşler?',
    excerpt: 'Birleşik Arap Emirlikleri, tamamen online başvurulan e-vize sistemiyle Türk vatandaşları için en hızlı sonuçlanan destinasyonlardan.',
    publishedAt: '2026-03-31T09:00:00.000Z',
    content: `Birleşik Arap Emirlikleri (Dubai/BAE), tamamen online yürütülen e-vize sistemi sayesinde Türk vatandaşları için en hızlı sonuçlanan vize süreçlerinden birine sahiptir. Bu yazıda e-vize sürecinin nasıl işlediğini özetliyoruz.

## E-Vize Süreci Nasıl İşler?

Başvuru tamamen dijital ortamda yürütülür:

1. Pasaport taraması ve dijital vesikalık fotoğraf hazırlanır
2. Online başvuru formu doldurulur
3. Uçak bileti rezervasyonu ve BAE'de geçerli seyahat sağlık sigortası eklenir
4. Başvuru genellikle birkaç iş günü içinde sonuçlanır

## Turistik ve Ticari Ziyaretler

Dubai ve Abu Dabi, hem turizm hem de fuar/iş dünyası açısından yoğun ilgi görür. Vize tipine göre kalış süresi genellikle 30 veya 90 gün olarak belirlenir.

## Transit Yolculuklarda Kısa Süreli Seçenekler

Uzun bir aktarma söz konusuysa, 48 veya 96 saatlik transit vize seçenekleri de mevcuttur; bu vizeler sizi taşıyan havayolu tarafından sponsor edilir ve seyahat öncesi ayarlanması gerekir.

## Bizim Yaklaşımımız

[Dubai/BAE vizesi sayfamızda](/ulkeler/dubai) güncel bilgileri, [e-vize evrak listesini](/ulkeler/dubai/e-vize) ise ayrı sayfamızda bulabilirsiniz. E-vize başvurunuzun eksiksiz ve doğru şekilde hazırlanmasına yardımcı oluyoruz.`,
  },
  {
    slug: 'avustralya-vizesi-subclass-600-turk-vatandaslari',
    title: 'Avustralya Vizesi (Subclass 600): Türk Vatandaşları İçin Süreç',
    excerpt: 'Türkiye eTA kapsamında olmadığı için Avustralya başvuruları tam Ziyaretçi Vizesi (Subclass 600) kapsamında değerlendirilir.',
    publishedAt: '2026-04-07T09:00:00.000Z',
    content: `Avustralya, Türk vatandaşlarına elektronik seyahat izni (eTA) sunmadığından, başvurular tam Ziyaretçi Vizesi (Subclass 600) kapsamında değerlendirilir. Bu durum süreci bazı diğer ülkelere göre biraz daha uzun ve detaylı kılar.

## Biyometrik Randevu Zorunluluğu

Subclass 600 başvurularında, vize başvuru merkezinde biyometrik kayıt (parmak izi ve fotoğraf) alınması gerekir. Bu adım, e-vize sistemine sahip ülkelerden farklı olarak fiziksel bir randevu gerektirir.

## Süreç Ne Kadar Sürer?

İşlem süresi genellikle 4-8 hafta arasında değişir. Bu nedenle seyahat tarihinizden yeterince önce (mümkünse 2-3 ay öncesinden) başvuru sürecini başlatmanızı öneririz.

## Değerlendirmede Önemli Unsurlar

- Banka hesap özeti ve mali yeterlilik belgeleri
- Türkiye'ye bağlılığınızı gösteren belgeler (iş, mülk, aile bağları)
- Net ve tutarlı bir seyahat planı
- Sağlık ve karakter beyanı (gerekirse ek sağlık raporu istenebilir)

## Bizim Yaklaşımımız

[Avustralya vizesi sayfamızda](/ulkeler/avustralya) güncel bilgileri, [turistik vize evrak listesini](/ulkeler/avustralya/turistik) ise ayrı sayfamızda bulabilirsiniz. Biyometrik randevudan sonuca kadar süreci sizinle birlikte yönetiyoruz.`,
  },
  {
    slug: 'schengen-ulkelerinden-hangisine-basvurmaliyim',
    title: 'Schengen Ülkeleri Arasından Hangisine Başvurmalıyım?',
    excerpt: 'Birden fazla Schengen ülkesi ziyaret edecekseniz, başvurunuzu hangi ülkeye yapmanız gerektiği net kurallara bağlıdır.',
    publishedAt: '2026-04-14T09:00:00.000Z',
    content: `Schengen bölgesindeki 29 ülke aynı vizeyle ziyaret edilebildiği için, birden fazla ülkeyi kapsayan bir seyahat planlıyorsanız "hangi ülkeye başvurmalıyım?" sorusu sıkça karşımıza çıkıyor. Cevap aslında net kurallara bağlı.

## Tek Ülke Ziyareti

Sadece bir Schengen ülkesini ziyaret edecekseniz, başvuru doğrudan o ülkenin Türkiye'deki temsilciliğine (konsolosluk veya yetkili vize başvuru merkezi) yapılır.

## Birden Fazla Ülke Ziyareti

Seyahatiniz birden fazla Schengen ülkesini kapsıyorsa iki temel kural geçerlidir:

1. **En uzun süre kalınacak ülke**: Seyahatinizin çoğunluğunu hangi ülkede geçireceksiniz, başvuru o ülkeye yapılır
2. **Eşit süre durumunda ilk giriş ülkesi**: Süreler eşitse, Schengen bölgesine ilk giriş yapacağınız ülkeye başvurulur

## Neden Bu Kural Önemli?

Yanlış ülkeye yapılan başvurular reddedilme veya işlem gecikmesi riskini artırabilir. Seyahat planınızı netleştirdikten sonra bu kurala göre doğru temsilciliği belirlemek, sürecin sorunsuz ilerlemesi için kritik bir adımdır.

## Bizim Yaklaşımımız

Seyahat güzergahınızı birlikte değerlendirip doğru ülkeye başvuru yapmanızı sağlıyoruz. [Hizmetlerimiz sayfamızdan](/hizmetler) tüm Schengen ülkelerine ilişkin bilgilere ulaşabilirsiniz.`,
  },
  {
    slug: 'rusya-e-vizesi-turk-vatandaslari-hizli-basvuru',
    title: 'Rusya E-Vizesi: Türk Vatandaşları İçin Hızlı Başvuru Süreci',
    excerpt: 'Rusya, birleşik e-Vize sistemiyle Türk vatandaşlarına tamamen online, ortalama 4 günde sonuçlanan bir başvuru süreci sunuyor.',
    publishedAt: '2026-04-21T09:00:00.000Z',
    content: `Rusya, Türk vatandaşlarına birleşik e-Vize sistemi üzerinden tamamen online bir başvuru süreci sunar. Bu yazıda sürecin nasıl işlediğini ve dikkat edilmesi gereken noktaları özetliyoruz.

## E-Vize Başvuru Süreci

Başvuru, makine okunabilir pasaport, dijital vesikalık fotoğraf ve online form ile tamamen elektronik ortamda yapılır. Süreç ortalama 4 gün içinde sonuçlanır.

## Kalış Süresi Sınırlaması

e-Vize 120 gün geçerlidir ancak tek girişte en fazla 30 gün kalışa izin verir. Bu süre sınırını aşan planlarınız varsa farklı bir vize kategorisi değerlendirilmelidir.

## Turistik ve Ticari Ziyaretler

Moskova ve Saint Petersburg başta olmak üzere hem turistik hem ticari ziyaretlerde aynı e-Vize sistemi kullanılır. Ticari ziyaretlerde davet mektubu süreci hızlandıran ama zorunlu olmayan bir belgedir.

## Bizim Yaklaşımımız

[Rusya vizesi sayfamızda](/ulkeler/rusya) güncel bilgileri, [e-vize evrak listesini](/ulkeler/rusya/e-vize) ise ayrı sayfamızda bulabilirsiniz. E-vize başvurunuzun hızlı ve sorunsuz ilerlemesi için yanınızdayız.`,
  },
  {
    slug: 'vize-basvurusunda-seyahat-sigortasi-konaklama-tutarliligi',
    title: 'Vize Başvurusunda Seyahat Sigortası ve Konaklama Rezervasyonu Neden Tutarlı Olmalı?',
    excerpt: 'Schengen başvurularında en sık gözden kaçan detay: sigorta, konaklama ve uçak rezervasyonu tarihlerinin birbiriyle uyuşması.',
    publishedAt: '2026-04-28T09:00:00.000Z',
    content: `Schengen vize başvurularında değerlendirmeyi olumsuz etkileyen en sık hatalardan biri, sunulan belgeler arasındaki tarih ve içerik tutarsızlıklarıdır. Bu yazıda en çok karşılaşılan tutarsızlık türlerini ve nasıl önlenebileceğini ele alıyoruz.

## Hangi Belgeler Tutarlı Olmalı?

- **Uçak bileti rezervasyonu**: Gidiş-dönüş tarihleri
- **Otel/konaklama rezervasyonu**: Konaklama süresi ve şehir(ler)
- **Seyahat sağlık sigortası**: Sigortanın kapsadığı tarih aralığı (tüm seyahat süresini ve Schengen bölgesini kapsamalı, minimum 30.000 Euro teminatlı olmalı)
- **Başvuru formu**: Beyan edilen seyahat tarihleri

## Sık Karşılaşılan Hatalar

En yaygın hata, otel rezervasyonunun sadece ilk birkaç gün için yapılıp geri kalan günler için boş bırakılmasıdır. Bir diğer sık hata ise sigorta poliçesinin seyahatin sadece bir kısmını kapsayacak şekilde düzenlenmesidir.

## Neden Bu Kadar Önemli?

Konsolosluk yetkilileri, dosyanızın tutarlılığını seyahat planınızın gerçekliğinin bir göstergesi olarak değerlendirir. Tutarsız belgeler, ek evrak talebine veya değerlendirme sürecinin uzamasına yol açabilir.

## Bizim Yaklaşımımız

Başvurunuzu teslim etmeden önce tüm belgelerinizi birlikte gözden geçiriyor, tarih ve içerik tutarlılığını kontrol ediyoruz. [Evrak Rehberi aracımızla](/evrak-rehberi) kendi checklist'inizi de oluşturabilirsiniz.`,
  },
];

function seedBlogPosts3() {
  const insert = db.prepare(`
    INSERT OR IGNORE INTO posts (slug, title, excerpt, content, cover_image_url, is_published, published_at, updated_at)
    VALUES (@slug, @title, @excerpt, @content, @coverImageUrl, 1, @publishedAt, @publishedAt)
  `);

  const insertMany = db.transaction((rows) => {
    let added = 0;
    rows.forEach((post, index) => {
      const result = insert.run({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content.trim(),
        coverImageUrl: post.coverImageUrl || cover[index % cover.length],
        publishedAt: post.publishedAt,
      });
      if (result.changes > 0) added += 1;
    });
    return added;
  });

  const added = insertMany(posts);
  console.log(`${added} yeni blog yazısı eklendi (toplam ${posts.length} tanımlı yazı bu pakette).`);
}

seedBlogPosts3();
console.log('Üçüncü blog seed paketi tamamlandı.');
