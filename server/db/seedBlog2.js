import { db } from './connection.js';
import { photos } from '../../src/data/photos.js';

const cover = Object.values(photos);

const posts = [
  {
    slug: 'yurt-disi-egitim-ogrenci-vizesi-basvuru-rehberi',
    title: 'Yurt Dışı Eğitim İçin Öğrenci Vizesi Başvurusunda Dikkat Edilmesi Gerekenler',
    excerpt: 'Öğrenci vizesi başvurularında kabul mektubundan mali yeterliliğe kadar en çok soru işareti yaratan noktaları derledik.',
    publishedAt: '2026-01-15T09:00:00.000Z',
    content: `Öğrenci vizesi başvuruları, turistik veya ticari vizelere göre daha uzun süreli bir ikamet planladığı için konsolosluklar tarafından daha detaylı incelenir. En çok soru işareti yaratan noktaları derledik.

## Kabul Mektubu (Letter of Acceptance)

Başvurunun temelini, hedef ülkedeki eğitim kurumundan alınan resmi kabul mektubu oluşturur. Bu belgede programın adı, süresi, başlangıç tarihi ve okulun yetkili makamlarca tanınırlığı net şekilde yer almalıdır.

## Mali Yeterlilik Beklentisi Daha Yüksektir

Öğrenci vizelerinde mali yeterlilik, sadece seyahat masraflarını değil, **eğitim ve yaşam maliyetlerinin tamamını** kapsayacak şekilde değerlendirilir. Burs, aile desteği veya kişisel birikim gibi kaynakların net ve belgelenebilir olması gerekir.

## Eğitim Sonrası Niyet Sorgusu

Konsolosluk yetkilileri, öğrencinin eğitim bitiminde ülkesine dönme niyetini de değerlendirir. Bu nedenle Türkiye'deki aile bağları, eğitim sonrası kariyer planı gibi unsurların niyet mektubunda net şekilde ifade edilmesi önemlidir.

## Sık Yapılan Hatalar

- Kabul mektubu ile başvuru formundaki program bilgilerinin uyuşmaması
- Mali kaynağın kim tarafından, nasıl sağlanacağının belirsiz bırakılması
- Dil yeterliliği belgesinin (varsa) eksik veya süresi geçmiş olması

## Bizim Yaklaşımımız

Öğrenci vizesi süreçlerinde hem kabul sürecinizin hem mali belgelerinizin başvuru şartlarıyla tam uyumlu olmasını sağlıyor, dosyanızı ülkeye özel gereklilikler doğrultusunda hazırlıyoruz. Nihai karar her zaman ilgili ülkenin yetkili makamına aittir.`,
  },
  {
    slug: 'ticari-vize-basvurusunda-davet-mektubu-ve-firma-belgeleri',
    title: 'Ticari (İş) Vizesi Başvurusunda Davet Mektubu ve Firma Belgeleri Nasıl Hazırlanmalı?',
    excerpt: 'İş amaçlı vize başvurularında hem sizin hem de sizi davet eden firmanın belgelerinin nasıl hazırlanması gerektiğini anlatıyoruz.',
    publishedAt: '2026-01-28T09:00:00.000Z',
    content: `Ticari (iş) amaçlı vize başvuruları, turistik başvurulardan farklı olarak hem başvuru sahibinin hem de yurt dışındaki davet eden firmanın belgelerinin bir bütün olarak değerlendirilmesini gerektirir.

## Davet Eden Firmadan İstenen Belgeler

- Firma antetli kağıdına yazılmış resmi davet mektubu (ziyaretin amacı, süresi ve kapsamı belirtilerek)
- Firmanın faaliyet belgesi veya ticaret sicil kaydı
- Varsa iki firma arasındaki iş ilişkisini gösteren yazışma veya sözleşme

## Sizin Firmanızdan İstenen Belgeler

- Şirketinizdeki pozisyonunuzu gösteren resmi yazı
- Şirketin faaliyet belgesi / vergi levhası
- Seyahat masraflarının şirket mi yoksa şahsınız tarafından mı karşılanacağının netleştirilmesi

## Sık Karışan Bir Nokta

Ticari vize, çalışma izni (work permit) ile karıştırılmamalıdır — ticari vize, toplantı, fuar, iş görüşmesi gibi kısa süreli faaliyetler için verilir; hedef ülkede ücretli çalışmaya izin vermez. Başvuru formunda seyahat amacının bu çerçevede net şekilde tanımlanması gerekir.

## Sık Yapılan Hatalar

- Davet mektubunun genel/belirsiz ifadelerle yazılması ("iş görüşmesi için" gibi detaysız ifadeler)
- İki firma arasındaki ilişkiyi gösteren belgenin eksik olması
- Seyahat süresinin planlanan iş programıyla orantısız (çok uzun) görünmesi

## Bizim Yaklaşımımız

Ticari vize dosyalarında hem sizin hem de davet eden firmanın belgelerini birlikte değerlendiriyor, iş amacının net ve tutarlı şekilde ortaya konduğu bir dosya hazırlıyoruz.`,
  },
  {
    slug: 'vize-basvurusunda-biyometrik-fotograf-standartlari',
    title: 'Vize Başvurusunda Biyometrik Fotoğraf Standartları: Sık Yapılan Hatalar',
    excerpt: 'Küçük görünen ama başvuruyu geciktirebilen bir detay: biyometrik fotoğraf standartlarına uymamak. Doğrusunu anlatıyoruz.',
    publishedAt: '2026-02-17T09:00:00.000Z',
    content: `Vize başvurularında en çok küçümsenen ama en sık başvuruyu geciktiren detaylardan biri, biyometrik fotoğraf standartlarına uyulmamasıdır. Uygun olmayan bir fotoğraf, dosyanız eksik kabul edilerek başvurunuzun iade edilmesine yol açabilir.

## Genel Standartlar

- **Boyut**: Genellikle 3,5 x 4,5 cm (ülkeye göre değişebilir)
- **Arka plan**: Düz, açık renkli (genellikle beyaz veya açık gri), gölgesiz
- **Çekim tarihi**: Son 6 ay içinde çekilmiş olmalı
- **Yüz ifadesi**: Nötr ifade, ağız kapalı, doğrudan kameraya bakan

## Sık Yapılan Hatalar

- Gözlük takarken çekilmiş fotoğraf (çoğu ülke artık gözlüksüz çekim istiyor)
- Başörtüsü dışında baş veya yüzü kapatan aksesuar (şapka, saç bandı vb.)
- Gülümseyen veya yan bakan ifadeler
- Fotoğrafın gerekenden eski (1 yıldan fazla) olması
- Rötuşlanmış veya filtre uygulanmış fotoğraflar

## Ülkeye Göre Farklılıklar

Her ülkenin biyometrik fotoğraf gereksinimleri birebir aynı değildir — örneğin bazı ülkeler dijital format + belirli piksel çözünürlüğü isterken bazıları yalnızca baskılı fotoğraf kabul eder. Bu detayı başvuru yapmadan önce mutlaka teyit etmek gerekir.

## Bizim Önerimiz

Fotoğrafınızı profesyonel bir stüdyoda ve "vize/pasaport fotoğrafı" olarak özellikle belirterek çektirmenizi öneriyoruz. Ön görüşmemizde başvurduğunuz ülkenin güncel fotoğraf şartlarını sizinle netleştiriyor, bu küçük ama önemli detay yüzünden başvurunuzun gecikmesinin önüne geçiyoruz.`,
  },
  {
    slug: 'coklu-giris-schengen-vizesi-nasil-alinir',
    title: 'Çoklu Giriş (Multiple-Entry) Schengen Vizesi Nasıl Alınır?',
    excerpt: 'Sık seyahat edenler için büyük kolaylık sağlayan çoklu giriş Schengen vizesini kimlerin alabileceğini ve sürecini anlatıyoruz.',
    publishedAt: '2026-03-17T09:00:00.000Z',
    content: `Schengen bölgesine sık seyahat eden başvuru sahipleri için tek giriş yerine **çoklu giriş (multiple-entry)** vize almak, her seyahat öncesi yeniden başvuru yapma zorunluluğunu ortadan kaldırır. Ancak bu vize türü otomatik olarak verilmez.

## Çoklu Giriş Vizesi Kimlere Verilir?

Konsolosluklar, çoklu giriş vizesi değerlendirmesinde başvuru sahibinin **önceki Schengen seyahat geçmişine** bakar. Genel eğilim şu şekildedir:

- Son 3 yıl içinde en az 2 Schengen vizesi alıp kurallara uygun şekilde kullanmış olanlara **1 yıllık** çoklu giriş
- Önceki 2 yıllık çoklu giriş vizesini sorunsuz kullanmış olanlara **2 yıllık** çoklu giriş
- Önceki 3 yıllık çoklu giriş vizesini sorunsuz kullanmış olanlara **5 yıla kadar** çoklu giriş

## Önemli Bir Şart: Kalış Süresi Kuralı

Çoklu giriş vizesi olsa dahi, her 180 günlük dönemde Schengen bölgesinde toplam **90 günden fazla** kalınamaz. Bu kural, EES sisteminin devreye girmesiyle artık dijital olarak otomatik takip ediliyor.

## İlk Kez Başvuranlar İçin

Daha önce Schengen vizesi almamış başvuru sahiplerine genellikle önce tek giriş veya kısa süreli çoklu giriş vizesi verilir; seyahat geçmişi arttıkça bir sonraki başvuruda daha uzun süreli çoklu giriş vizesi almak mümkün hale gelir.

## Bizim Önerimiz

Sık seyahat planlıyorsanız, önceki vizelerinizi süresi içinde ve kurallara uygun şekilde kullanmanız, bir sonraki başvurunuzda daha uzun süreli çoklu giriş vizesi almanız için en güçlü kanıttır. Ön görüşmemizde seyahat geçmişinizi değerlendirip başvurunuzda bu yönde en güçlü dosyayı hazırlıyoruz.`,
  },
  {
    slug: 'ingiltere-eta-sistemi-turk-vatandaslarini-etkiliyor-mu',
    title: 'İngiltere\'nin ETA Sistemi Tam Yürürlükte: Türk Vatandaşlarını Etkiliyor mu?',
    excerpt: "İngiltere'nin elektronik seyahat izni sistemi ETA, Şubat 2026'dan itibaren tüm vizesiz seyahat eden ülke vatandaşları için zorunlu hale geldi. Peki Türk vatandaşları için durum ne?",
    publishedAt: '2026-04-21T09:00:00.000Z',
    coverImageUrl: photos.mapWithPins,
    content: `İngiltere'nin elektronik seyahat izni sistemi **ETA (Electronic Travel Authorisation)**, 25 Şubat 2026 itibarıyla vizesiz seyahat eden tüm ülke vatandaşları için tam olarak zorunlu hale geldi. ABD'nin ESTA sistemine benzeyen bu uygulama, seyahat öncesi online başvuru ve onay gerektiriyor.

## Türk Vatandaşları İçin Durum Değişmiyor

Önemli bir netleştirme: **ETA sistemi sadece vizesiz seyahat eden yaklaşık 85 ülke vatandaşını kapsıyor** — bu ülkeler arasında AB/AEA üyeleri, ABD, Kanada, Avustralya gibi ülkeler var. Türkiye bu listede **yer almıyor**, çünkü Türk vatandaşları İngiltere'ye halihazırda vize ile seyahat ediyor.

Bu nedenle Menekşe Vize müşterilerimiz için süreç aynen devam ediyor: İngiltere'ye seyahat etmek isteyen Türk vatandaşları, ETA başvurusu yerine standart **İngiltere vizesi (Standard Visitor Visa vb.)** başvurusu yapmaya devam ediyor.

## Peki Bu Haberi Neden Takip Etmeliyiz?

- Karma milliyetli aile veya arkadaş gruplarında (örneğin çifte vatandaşlığı olan veya AB pasaportlu bir aile üyesi varsa) o kişilerin ETA alması gerekebilir — vize süreciyle karıştırılmamalı.
- İngiltere'nin sınır kontrol sistemlerindeki dijitalleşme eğilimi (ETA, gelecekte planlanan ek dijital kontroller), orta vadede vize başvuru ve randevu süreçlerinde de değişikliklere yol açabilir.
- ETA sistemi hakkında internette dolaşan kafa karıştırıcı bilgiler nedeniyle, "Artık İngiltere'ye vizesiz mi gidiliyor?" gibi yanlış bir izlenim oluşabiliyor — bu, Türk vatandaşları için **geçerli değildir**.

## Bizim Yaklaşımımız

İngiltere sınır sistemlerindeki gelişmeleri takip ediyor, sizi doğru vize kategorisi ve güncel süreç hakkında net şekilde bilgilendiriyoruz.`,
  },
  {
    slug: 'cocuklu-ailelerin-vize-basvurusunda-ekstra-belgeler',
    title: 'Çocuklu Ailelerin Vize Başvurusunda Gereken Ekstra Belgeler',
    excerpt: 'Çocuğuyla seyahat eden aileler ve tek ebeveynli seyahatlerde muvafakatname gibi ek belgelerin neden kritik olduğunu anlatıyoruz.',
    publishedAt: '2026-05-19T09:00:00.000Z',
    content: `Çocuğuyla birlikte seyahat eden aileler, standart evrak listesine ek olarak bazı özel belgeler hazırlamak zorundadır. Bu belgelerin eksikliği, özellikle sınır kapısında ciddi sorunlara yol açabilir.

## Muvafakatname Ne Zaman Gerekir?

Çocuk, **sadece bir ebeveyniyle** veya ebeveynleri dışında bir yetişkinle (örneğin büyükanne/büyükbaba, akraba, okul grubu) seyahat ediyorsa, seyahat etmeyen ebeveyn(ler)den noter onaylı bir **muvafakatname (seyahat izin belgesi)** alınması gerekir. Boşanmış ailelerde bu belge özellikle önem kazanır ve velayet durumuna göre şekli değişebilir.

## Genel Olarak İstenen Belgeler

- Çocuğun doğum belgesi / nüfus kayıt örneği
- Anne-babanın kimlik/pasaport fotokopileri
- Çocuğun okula devam ettiğini gösteren belge (uzun süreli seyahatlerde)
- Seyahat sağlık sigortasının çocuğu da kapsadığının teyidi

## Sık Yapılan Hatalar

- Muvafakatnamenin noter onaysız veya güncel tarihli olmaması
- Boşanmış ailelerde velayet durumunu netleştiren mahkeme kararının eklenmemesi
- Çocuğun pasaportunun geçerlilik süresinin seyahat tarihine göre yetersiz kalması

## Bizim Yaklaşımımız

Çocuklu ailelerin başvurularında, aile yapınıza (evli, boşanmış, tek ebeveyn vb.) özel olarak hangi ek belgelerin gerektiğini netleştiriyor, hem sınır kapısında hem konsoloslukta sorun yaşanmaması için dosyanızı eksiksiz hazırlıyoruz.`,
  },
  {
    slug: 'guvenilir-vize-danismanligi-nasil-secilir-dikkat-edilmesi-gerekenler',
    title: 'Güvenilir Bir Vize Danışmanlığı Nasıl Seçilir? Dikkat Edilmesi Gerekenler',
    excerpt: 'Vize danışmanlığı sektöründe "garanti vize" gibi yanıltıcı vaatlere karşı nelere dikkat etmeniz gerektiğini anlatıyoruz.',
    publishedAt: '2026-06-23T09:00:00.000Z',
    content: `Vize danışmanlığı sektörü, maalesef yanıltıcı vaatlerle müşteri kazanmaya çalışan bazı kötü örnekler de barındırıyor. Bu yazıda, bir danışmanlık firması seçerken nelere dikkat etmeniz gerektiğini anlatıyoruz.

## "Garanti Vize" Vaadine Dikkat

Hiçbir danışmanlık firması vize onayını garanti edemez — çünkü nihai karar her zaman ilgili ülkenin konsolosluğuna veya göçmenlik makamına aittir. "Yüzde 100 garanti" veya "kesin onay" gibi vaatlerde bulunan firmalara karşı temkinli olun; bu, ciddi bir danışmanlığın vermeyeceği bir sözdür.

## Sahte Belge veya Yanlış Beyan Önerisine Asla Onay Vermeyin

Bazı kötü niyetli danışmanlar, onay şansını artırmak adına sahte davet mektubu, uydurma iş belgesi veya gerçeği yansıtmayan mali belgeler önerebilir. Bu, sadece etik değil, aynı zamanda **hukuki olarak çok riskli** bir yaklaşımdır — tespit edilmesi durumunda yıllarca sürecek giriş yasaklarına yol açabilir.

## Şeffaflığı Kontrol Edin

Güvenilir bir danışmanlık firması:

- Ücretlerini ve kapsamını başvuru öncesinde net olarak açıklar
- Resmi vize/konsolosluk ücretleriyle kendi danışmanlık ücretini birbirinden ayırır
- Başvurunuzun reddedilme ihtimalini de dürüstçe konuşur
- Belgelerinizin gerçek ve doğrulanabilir olmasına özen gösterir

## Bizim Yaklaşımımız

Menekşe Vize olarak hiçbir zaman onay garantisi vermiyor, sahte belge veya yanlış beyan içeren hiçbir öneride bulunmuyoruz. Amacımız, sizin gerçek durumunuzu en doğru ve güçlü şekilde ilgili makama sunmanıza yardımcı olmaktır — bu, hem etik hem de uzun vadede sizin çıkarınıza olan tek yaklaşımdır.`,
  },
  {
    slug: 'kanada-ziyaretci-vizesinde-2026-degisiklikleri',
    title: 'Kanada Ziyaretçi Vizesinde 2026 Değişiklikleri: Daha Uzun Kalış, Daha Sıkı İnceleme',
    excerpt: "Kanada, 2026'da ziyaretçi vizesi politikalarında önemli değişikliklere gitti: bir yandan daha uzun kalış süreleri, diğer yandan daha sıkı inceleme süreci.",
    publishedAt: '2026-07-13T09:00:00.000Z',
    coverImageUrl: photos.planningNotebook,
    content: `Kanada Göçmenlik, Mülteciler ve Vatandaşlık Bakanlığı (IRCC), 2026 yılı içinde ziyaretçi vizesi politikalarında iki yönlü ve birbiriyle çelişir görünen ama aslında tamamlayıcı iki değişikliğe gitti: daha esnek kalış süreleri ve daha sıkı başvuru incelemesi.

## Daha Uzun Kalış Süresi İmkanı

5 Ocak 2026'dan itibaren, sınır görevlileri yeterli mali kaynağa ve net bir çıkış planına sahip ziyaretçilere, önceki standart 6 aylık süre yerine **1 yıla kadar** kalış izni verebiliyor. Bu, özellikle aile ziyareti amacıyla uzun süreli seyahat planlayan başvuru sahipleri için önemli bir kolaylık.

## Ancak İnceleme Daha Sıkı

Aynı dönemde IRCC, ziyaretçi vizesi başvurularını **münferit (vaka bazlı)** değerlendirmeye geçti — artık otomatik olarak 10 yıllık çoklu giriş vizesi verilmiyor; her başvuru, seyahat amacı, mali durum ve Kanada'ya bağlılık gibi kriterlere göre ayrı ayrı değerlendiriliyor. Yoğun başvuru alan ülkelerden gelen dosyalarda ek doğrulama adımları da uygulanıyor ve ret oranlarının 2025-2026 döneminde yüksek seyrettiği biliniyor.

## Bu Değişiklik Ne Anlama Geliyor?

- Kalış süreniz için "otomatik" bir hak yok — mali yeterlilik ve net bir dönüş/çıkış planı sunmanız artık daha da önemli.
- Dosyanızın **tutarlılığı ve Kanada'ya bağlılık kanıtları** (Türkiye'deki iş, aile, mülkiyet durumu), başvurunun değerlendirilmesinde belirleyici bir rol oynuyor.
- Çoklu giriş vizesi otomatik verilmediği için, önceki seyahat geçmişinizin sorunsuz olması bir sonraki başvurunuzda önemli bir avantaj sağlıyor.

## Bizim Yaklaşımımız

Kanada'nın güncel politika değişikliklerini yakından takip ediyor, başvurunuzu bu yeni vaka-bazlı değerlendirme yapısına uygun, tutarlı ve güçlü bir dosya olarak hazırlıyoruz.`,
  },
];

function seedMorePosts() {
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

seedMorePosts();
console.log('İkinci blog seed paketi tamamlandı.');
