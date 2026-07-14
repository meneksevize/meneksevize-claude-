import { db } from './connection.js';
import { photos } from '../../src/data/photos.js';

const cover = Object.values(photos);

const posts = [
  {
    slug: 'vize-basvurusunda-niyet-mektubu-nasil-yazilir',
    title: 'Vize Başvurusunda Niyet Mektubu (Cover Letter) Nasıl Yazılır?',
    excerpt: 'Niyet mektubu, başvurunuzun neden ve nasıl bir seyahat olduğunu konsolosluğa net şekilde anlatan en önemli belgelerden biridir.',
    publishedAt: '2026-02-10T09:00:00.000Z',
    content: `Niyet mektubu (cover letter), vize başvurunuzda konsolosluk yetkilisinin ilk okuduğu belgelerden biridir ve seyahatinizin amacını, süresini ve Türkiye'ye dönüş bağlarınızı net şekilde ortaya koyar. İyi hazırlanmış bir niyet mektubu, dosyanızın geri kalanını okuma şeklini olumlu yönde etkiler.

## Niyet Mektubunda Neler Olmalı?

- **Kimlik bilgileri**: Ad soyad, pasaport numarası, doğum tarihi
- **Seyahatin amacı**: Turistik, ticari, aile ziyareti gibi net bir tanım
- **Seyahat planı**: Gidiş-dönüş tarihleri, ziyaret edilecek şehirler
- **Türkiye'ye bağlılık kanıtları**: İş durumu, aile, mülkiyet gibi geri dönüş nedenleri
- **Masrafların kim tarafından karşılanacağı**

## Sık Yapılan Hatalar

En sık karşılaşılan hata, niyet mektubunun diğer belgelerle çelişmesidir — örneğin mektupta yazılan tarihlerin uçak/otel rezervasyonuyla uyuşmaması. Bir diğer hata ise gereğinden uzun, duygusal bir anlatıma kaçmaktır; konsolosluk yetkilisi kısa sürede çok sayıda dosya inceler, bu yüzden **net ve öz** bir dil tercih edilmelidir.

## Bizim Yaklaşımımız

Ön görüşmede seyahat amacınızı dinledikten sonra, niyet mektubunuzu sizinle birlikte, başvurduğunuz ülkeye ve vize tipine özel olarak hazırlıyoruz. Şablon bir metin yerine, sizin gerçek durumunuzu yansıtan bir mektup her zaman daha güçlüdür.

Unutmayın: niyet mektubu tek başına onay garantisi vermez, ancak dosyanızın tutarlı ve inandırıcı görünmesine önemli katkı sağlar. Nihai karar her zaman ilgili konsolosluğa aittir.`,
  },
  {
    slug: 'vize-mulakatina-hazirlik-sik-sorulan-sorular',
    title: 'Vize Mülakatına Hazırlık: Sık Sorulan Sorular ve Doğru Yaklaşım',
    excerpt: 'Mülakat gerektiren vize türlerinde en çok sorulan soru kalıplarını ve bunlara doğru şekilde nasıl yanıt verileceğini derledik.',
    publishedAt: '2026-02-24T09:00:00.000Z',
    content: `Bazı vize türlerinde (özellikle ABD B1/B2 vizesi) mülakat başvurunun belirleyici aşamalarından biridir. Mülakat, ezberlenmiş cevaplar değil, tutarlı ve gerçek bilgiler bekler.

## En Sık Sorulan Soru Grupları

1. **Seyahat amacı**: "Neden bu ülkeyi ziyaret etmek istiyorsunuz?"
2. **Mali durum**: "Seyahat masraflarını nasıl karşılayacaksınız?"
3. **Türkiye'ye bağlılık**: "İşiniz nedir, ne zaman döneceksiniz?"
4. **Seyahat geçmişi**: "Daha önce yurt dışına çıktınız mı?"

## Doğru Yaklaşım

Mülakatta en çok değer verilen şey **tutarlılıktır**. Verdiğiniz cevaplar, başvuru formunuzdaki ve evraklarınızdaki bilgilerle birebir örtüşmelidir. Kısa, net ve dürüst cevaplar; uzun, savunmacı açıklamalardan çok daha etkilidir.

## Sık Yapılan Hatalar

- Ezberlenmiş, doğal olmayan cevaplar vermek
- Soruyu tam anlamadan cevaplamaya başlamak
- Belirsiz seyahat planı sunmak ("nereye gideceğimi tam bilmiyorum" gibi)

## Bizim Yaklaşımımız

Randevunuzdan önce, başvurduğunuz vize tipine özel olası soruları birlikte gözden geçiriyor, cevaplarınızın evraklarınızla tutarlı olmasını sağlıyoruz. Amacımız sizi "doğru cevabı ezberletmek" değil, kendi gerçek durumunuzu net ve güvenli şekilde anlatabilmenizi sağlamaktır.

Mülakat sonucu tamamen görüşmeyi yapan yetkiliye bağlıdır; hazırlık, başvurunuzu en güçlü şekilde sunmanıza yardımcı olur ancak onay garantisi anlamına gelmez.`,
  },
  {
    slug: 'seyahat-saglik-sigortasi-secerken-nelere-dikkat-etmeli',
    title: 'Seyahat Sağlık Sigortası Seçerken Nelere Dikkat Etmeli?',
    excerpt: 'Schengen başvurularında zorunlu olan seyahat sağlık sigortasını seçerken teminat tutarı ve kapsam gibi kritik detayları anlatıyoruz.',
    publishedAt: '2026-03-10T09:00:00.000Z',
    content: `Schengen vizesi başvurularında seyahat sağlık sigortası zorunlu evraklardan biridir ve asgari 30.000 € teminat tutarını karşılamalıdır. Ancak her poliçe bu şartı aynı şekilde sağlamaz.

## Poliçede Aranması Gerekenler

- **Teminat tutarı**: Schengen bölgesinin tamamında geçerli, en az 30.000 € tutarında
- **Coğrafi kapsam**: Sadece tek bir ülke değil, tüm Schengen bölgesini kapsamalı
- **Tarih aralığı**: Seyahatinizin tamamını (gidiş-dönüş dahil) kapsamalı
- **Acil tıbbi tahliye**: Ciddi bir sağlık sorununda Türkiye'ye tahliye masraflarını karşılamalı

## Sık Karışan Bir Nokta

Bazı seyahat sigortaları yurt içi sağlık sigortanızın bir uzantısı gibi sunulur ama Schengen vize başvurusu için geçerli kabul edilmez, çünkü vize başvurusunda istenen belgelerin özel bir formatı ve teminat yapısı vardır. Poliçenizin vize başvurusuna uygun olduğunu satın almadan önce mutlaka teyit edin.

## Kanada Doğum Vizesi Gibi Özel Durumlarda

Kanada'da doğum yapmak amacıyla seyahat edecekseniz, standart seyahat sağlık sigortası yeterli değildir — doğum ve komplikasyon masraflarını özel olarak kapsayan bir poliçe gereklidir. Bu konuyu ayrı bir yazımızda detaylıca ele aldık.

Ön görüşmemizde, hedef ülkenize ve vize tipinize uygun sigorta seçeneklerini birlikte değerlendiriyor, başvurunuzun bu şart nedeniyle reddedilmesinin önüne geçiyoruz.`,
  },
  {
    slug: 'banka-hesap-ozeti-ile-mali-yeterlilik-nasil-kanitlanir',
    title: 'Banka Hesap Özeti ile Mali Yeterlilik Nasıl Kanıtlanır?',
    excerpt: 'Vize başvurularında en çok soru işareti yaratan konulardan biri banka hesap özeti — ne kadar bakiye yeterli, hangi hareketler dikkat çeker?',
    publishedAt: '2026-03-24T09:00:00.000Z',
    content: `Vize başvurularında "yeterli bakiye ne kadar olmalı" sorusunun tek bir kesin cevabı yoktur — konsolosluk, seyahat süresi, ülke ve başvuru sahibinin genel profiliyle birlikte değerlendirme yapar. Yine de dikkat edilmesi gereken bazı genel prensipler vardır.

## Konsolosluğun Aradığı Şey

Bakiyenin büyüklüğünden çok, hesabın **düzenli ve açıklanabilir** bir mali geçmiş göstermesi önemlidir. Son 3-6 aylık dönemde ani ve büyük tutarlı, kaynağı belirsiz para yatırma hareketleri şüphe uyandırabilir.

## Dikkat Edilmesi Gerekenler

- Hesap hareketlerinin maaş/gelir düzeninizle tutarlı olması
- Başvurudan hemen önce büyük tutarda "gösterilik" para yatırmaktan kaçınmak
- Hesap özetinin resmi banka kaşesi/onayı taşıması
- Gerekiyorsa ek gelir belgeleriyle (maaş bordrosu, vergi levhası vb.) desteklemek

## Sık Yapılan Bir Hata

Bazı başvuru sahipleri, sadece başvuru için yakın zamanda hesaba yüklü miktar yatırıp hemen sonra çekiyor. Bu durum hesap hareketlerinde açıkça görülür ve konsolosluk tarafından olumsuz değerlendirilebilir.

Ön görüşmede sizin gerçek mali durumunuzu birlikte değerlendiriyor, hangi ek belgelerin dosyanızı güçlendireceğini netleştiriyoruz. Amacımız sizi yanıltıcı bir görünüm oluşturmaya değil, mevcut durumunuzu en doğru ve güçlü şekilde sunmaya yönlendirmektir.`,
  },
  {
    slug: 'kanadada-dogum-yapmak-surec-maliyet-bilinmesi-gerekenler',
    title: "Kanada'da Doğum Yapmak: Süreç, Maliyet ve Bilinmesi Gerekenler",
    excerpt: "Kanada'da doğum yapmayı planlayan aileler için vize süreci, maliyetler ve vatandaşlık konusundaki gerçekler.",
    publishedAt: '2026-04-05T09:00:00.000Z',
    coverImageUrl: photos.passportBoardingPass,
    content: `Kanada, dünyada doğum yeri vatandaşlığı (jus soli) uygulayan ülkelerden biridir — Kanada topraklarında doğan her çocuk, ebeveynlerinin uyruğuna bakılmaksızın otomatik olarak Kanada vatandaşı olur. Bu durum, bazı ailelerin Kanada'da doğum yapmayı tercih etmesine yol açıyor. Ancak sürecin bazı kritik yönlerini bilmek çok önemli.

## Resmi Olarak Ayrı Bir "Doğum Vizesi" Yoktur

Kanada'da doğum yapmak isteyenler, standart **ziyaretçi vizesi (TRV)** ile başvurur. Başvuru sırasında gebelik durumunuzu ve doğum niyetinizi **açıkça beyan etmemeniz**, "yanlış beyan" (misrepresentation) sayılabilir ve 5 yıla kadar Kanada'ya giriş yasağıyla sonuçlanabilir.

## Maliyet Konusunda Gerçekçi Olun

Ziyaretçi statüsünde kamu sağlık sigortası kapsamınız olmadığından doğum masrafları tamamen size aittir. Komplikasyonsuz bir doğumda dahi genellikle 10.000-20.000 CAD arası, komplikasyon durumunda çok daha yüksek maliyetler söz konusu olabilir. Birçok standart seyahat sigortası gebelik ve doğumu kapsamaz — özel olarak doğum teminatlı bir poliçe şarttır.

## Çocuk Vatandaş Olur, Ebeveynler Olmaz

Doğan çocuk otomatik olarak Kanada vatandaşı olsa da, bu durum ebeveynlerin Kanada'da ikamet, çalışma veya vatandaşlık hakkı kazanmasını **sağlamaz**. Ebeveynler ziyaretçi statülerinin süresi dolduğunda Türkiye'ye dönmek zorundadır.

## Bizim Yaklaşımımız

Bu süreç, hukuki ve mali açıdan dikkatli planlama gerektiren hassas bir konudur. Evrak hazırlığından hastane kabul sürecine, sigorta seçiminden beyan metnine kadar her adımda şeffaf ve dürüst bir danışmanlık sunuyoruz — çünkü bu konuda yanlış bilgilendirilmiş bir aile, hem maddi hem hukuki risklerle karşı karşıya kalabilir.`,
  },
  {
    slug: 'ab-yeni-giris-cikis-sistemi-ees-schengen-seyahatinde-degisen',
    title: "AB'nin Yeni Giriş-Çıkış Sistemi (EES) Devrede: Schengen Seyahatinde Değişen Ne?",
    excerpt: 'Avrupa Birliği, pasaport damgalarını dijital kayıtlarla değiştiren yeni sınır sistemini 10 Nisan 2026 itibarıyla tüm Schengen ülkelerinde tam olarak devreye aldı.',
    publishedAt: '2026-04-14T09:00:00.000Z',
    coverImageUrl: photos.worldMap,
    content: `Avrupa Birliği'nin yeni **Giriş-Çıkış Sistemi (Entry/Exit System - EES)**, 12 Ekim 2025'te kademeli olarak başladıktan sonra **10 Nisan 2026** itibarıyla tüm Schengen ülkelerinde tam olarak devreye girdi. Bu, Schengen bölgesine seyahat eden Türk vatandaşları için sınır kapılarındaki deneyimi doğrudan etkileyen önemli bir değişiklik.

## Değişen Ne?

Artık pasaportunuza fiziksel giriş-çıkış damgası basılmıyor; bunun yerine **parmak izi, yüz fotoğrafı ve seyahat belgesi bilgileriniz** dijital olarak kaydediliyor. Sistem, Schengen bölgesine kısa süreli (90/180 gün kuralı kapsamında) giriş yapan üçüncü ülke vatandaşlarının giriş-çıkışlarını otomatik olarak takip ediyor.

## Neden Önemli?

- **90/180 gün kuralı artık otomatik hesaplanıyor** — sistem, ne kadar süre kaldığınızı dijital olarak izliyor, bu yüzden kalış sürenizi kendiniz takip etmeniz eskisinden daha kritik hale geldi.
- İlk geçişlerde biyometrik kayıt işlemi nedeniyle sınır kapılarında **beklenenden uzun sürebilir**; özellikle yoğun dönemlerde bunu seyahat planınıza dahil etmenizi öneririz.
- Üye ülkeler, yoğunluk durumunda geçiş süresince kontrolleri geçici olarak esnetebiliyor (90 güne kadar, gerekirse 60 gün uzatılabilir).

## Vize Başvurunuzu Nasıl Etkiler?

EES, vize başvuru sürecinizi doğrudan değiştirmiyor — evrak listeniz ve başvuru adımlarınız aynı kalıyor. Ancak seyahat planlaması yaparken, özellikle çoklu giriş vizesi kullanan ve sık seyahat eden müşterilerimize, kalış sürelerini bu yeni sistemle uyumlu şekilde takip etmelerini önemle tavsiye ediyoruz.

Güncel gelişmeleri takip ediyor, ön görüşmelerimizde size özel bilgilendirme yapıyoruz.`,
  },
  {
    slug: 'aile-birlesimi-vizesi-basvurusunda-dikkat-edilmesi-gerekenler',
    title: 'Aile Birleşimi Vizesi Başvurusunda Dikkat Edilmesi Gerekenler',
    excerpt: 'Aile birleşimi vizesi başvurularında akrabalık kanıtı, davet eden kişinin belgeleri ve mali yeterlilik gibi kritik noktaları derledik.',
    publishedAt: '2026-04-28T09:00:00.000Z',
    content: `Aile birleşimi vizesi, yurt dışında yaşayan bir aile üyesinin yanına gitmek isteyen başvuru sahipleri için farklı bir evrak ve değerlendirme süreci gerektirir. Bu yazıda en sık karşılaşılan noktaları derledik.

## Akrabalık Kanıtı Neden Bu Kadar Önemli?

Aile birleşimi başvurularında konsolosluk, öncelikle beyan edilen akrabalık ilişkisinin gerçekliğini değerlendirir. Nüfus kayıt örneği, doğum belgesi veya evlilik cüzdanı gibi resmi belgelerin güncel ve eksiksiz olması gerekir.

## Davet Eden Kişinin Belgeleri

Yurt dışındaki aile üyenizin şu belgeleri hazırlaması genellikle istenir:

- İkamet izni veya vatandaşlık belgesi fotokopisi
- Davet mektubu (ziyaretin amacı ve süresi belirtilerek)
- Konaklama ve mali destek beyanı (sizi evinde ağırlıyorsa)

## Sık Yapılan Hatalar

- Akrabalık belgelerinin güncel tarihli olmaması
- Davet mektubunun başvuru formundaki bilgilerle çelişmesi
- Ziyaret süresinin belirsiz veya gerçekçi olmayan şekilde belirtilmesi

## Bizim Yaklaşımımız

Aile birleşimi başvurularında hem sizin hem davet eden aile üyenizin belgelerini birlikte değerlendiriyor, iki taraf arasında tutarlı bir dosya oluşturulmasını sağlıyoruz. Bu tür başvurularda detaylara verilen özen, sürecin sağlıklı ilerlemesi açısından belirleyici olabiliyor.`,
  },
  {
    slug: 'schengen-vizesi-reddi-en-sik-7-neden',
    title: 'Schengen Vizesi Reddi: En Sık Karşılaşılan 7 Neden ve Nasıl Önlenir',
    excerpt: 'Schengen vize başvurularında ret kararına yol açan en yaygın 7 nedeni ve bunlardan nasıl kaçınılacağını anlatıyoruz.',
    publishedAt: '2026-05-12T09:00:00.000Z',
    content: `Schengen vize başvurusu reddedildiğinde çoğu zaman altta yatan neden, tek bir büyük hata değil, birkaç küçük eksikliğin bir araya gelmesidir. En sık karşılaşılan 7 nedeni derledik.

## 1. Seyahat Amacına Dair Şüphe

Başvuru dosyasında seyahat amacınızın net ve tutarlı şekilde ortaya konmaması, en sık ret nedenlerinden biridir.

## 2. Yetersiz veya Tutarsız Mali Belgeler

Banka hesap özetinizin seyahat masraflarınızı karşılamadığı veya hesap hareketlerinin şüpheli görüldüğü durumlarda ret kararı çıkabilir.

## 3. Türkiye'ye Bağlılık Kanıtının Zayıf Olması

Konsolosluk, başvuru sahibinin seyahat sonunda Türkiye'ye döneceğine dair güçlü kanıtlar arar (iş, aile, mülkiyet gibi).

## 4. Eksik veya Geçersiz Seyahat Sağlık Sigortası

Asgari 30.000 € teminat şartını karşılamayan veya Schengen bölgesinin tamamını kapsamayan poliçeler reddedilir.

## 5. Tutarsız veya Çelişkili Belgeler

Niyet mektubu, rezervasyonlar ve başvuru formundaki bilgilerin birbiriyle uyuşmaması ciddi bir kırmızı bayraktır.

## 6. Önceki Bir Schengen İhlali

Daha önceki bir seyahatte vize süresinin aşılmış olması, sonraki başvuruları doğrudan olumsuz etkiler.

## 7. Davet Mektubu veya İşveren Belgesinde Eksiklik

Ticari veya aile ziyareti başvurularında davet eden tarafın belgelerinin eksik/hatalı olması sık karşılaşılan bir sorundur.

## Nasıl Önlenir?

Bu hataların büyük bölümü, başvuru öncesinde dosyanın bir bütün olarak gözden geçirilmesiyle önlenebilir. Ön görüşmemizde dosyanızı bu 7 madde üzerinden birlikte kontrol ediyor, eksik veya tutarsız noktaları başvurudan önce netleştiriyoruz. Yine de belirtmek isteriz: hiçbir danışmanlık firması onay garantisi veremez, nihai karar ilgili konsolosluğa aittir.`,
  },
  {
    slug: 'abd-yeni-250-dolar-visa-integrity-fee-kimleri-kapsiyor',
    title: "ABD'de Yeni 250 Dolarlık \"Visa Integrity Fee\": Kimleri Kapsıyor?",
    excerpt: "ABD, çoğu vize başvuru sahibinden ek 250 dolarlık yeni bir ücret almaya başlıyor. B1/B2, F1 ve H1B başvuru sahiplerini nasıl etkiliyor?",
    publishedAt: '2026-05-26T09:00:00.000Z',
    coverImageUrl: photos.cameraPassportFlatlay,
    content: `Amerika Birleşik Devletleri, göçmen olmayan (nonimmigrant) vize kategorilerinin çoğu için yeni bir **"Visa Integrity Fee" (Vize Bütünlüğü Ücreti)** uygulamaya koyuyor. Bu ek ücret, B1/B2 turistik-ticari vizeden F1 öğrenci vizesine, H-1B çalışma vizesinden J-1 değişim programlarına kadar geniş bir başvuru sahibi grubunu ilgilendiriyor.

## Ücret Ne Kadar ve Ne Zaman Başlıyor?

Yeni ücret **250 ABD doları** olarak belirlendi ve vize onaylandığında (mevcut MRV başvuru ücretine ek olarak) tahsil ediliyor. Yasa 1 Ekim 2025'te yürürlüğe girmiş olsa da, fiili uygulama 2026 mali yılı içinde (30 Eylül 2026'ya kadar) devreye alınıyor ve konsolosluklar arasında uygulamaya geçiş farklılık gösteriyor — yani başvurduğunuz konsolosluğa göre bu ücretin ne zaman tahsil edilmeye başlandığı değişebilir.

## Kimler Muaf?

Vize Muafiyet Programı (Visa Waiver Program) kapsamında seyahat edenler ve göçmen vizesi (immigrant visa) başvuru sahipleri bu ücretten muaf tutuluyor. Ancak Türk vatandaşları ABD'ye genellikle vize ile seyahat ettiğinden, bu muafiyet çoğu müşterimiz için geçerli değil.

## Ücret İade Edilir mi?

Şu ana kadarki bilgilere göre ücretin iade koşulları ve tam uygulama detayları netleşmeye devam ediyor; bu ücret standart MRV harcının yerine geçmiyor, **ek** bir maliyet olarak düşünülmelidir.

## Bizim Önerimiz

Bu tür ücret değişiklikleri sık güncellenen bir alan olduğundan, ABD vizesi başvurusu planlıyorsanız ön görüşmemizde güncel maliyet tablosunu sizinle netleştiriyoruz. Böylece bütçenizi sürpriz bir ek maliyetle karşılaşmadan planlayabilirsiniz.`,
  },
  {
    slug: 'schengen-vize-ucreti-90-euroya-yukseldi',
    title: 'Schengen Vize Ücreti 90 Euro\'ya Yükseldi: Bilmeniz Gerekenler',
    excerpt: "Avrupa Birliği, standart Schengen vize ücretini 11 Haziran 2026 itibarıyla 80 Euro'dan 90 Euro'ya çıkardı.",
    publishedAt: '2026-06-16T09:00:00.000Z',
    coverImageUrl: photos.heroPlaneWindow,
    content: `Avrupa Birliği, Schengen bölgesi için standart vize başvuru ücretini **11 Haziran 2026** tarihinden itibaren **80 Euro'dan 90 Euro'ya** yükseltti. Bu, 29 Schengen üyesi ve ortak ülkenin tamamı için geçerli bir artış.

## Yeni Ücret Tablosu

- **Yetişkin (standart)**: 90 €
- **6-12 yaş arası çocuk**: 45 €
- **6 yaş altı çocuk**: Ücretsiz

Bu artış yaklaşık %12,5'lik bir yükselişe denk geliyor. Önemli bir detay: **11 Haziran 2026'dan önce yapılan başvurular**, eski 80 € tarifesi üzerinden değerlendiriliyor.

## Bu Ücrete Neler Dahil Değil?

Vize başvuru merkezi ücreti (örneğin VFS Global veya TLS Contact gibi hizmet sağlayıcıların aldığı ek hizmet bedeli) bu tutara **dahil değildir** ve değişmeden devam ediyor. Yani toplam başvuru maliyetiniz, resmi vize ücreti + hizmet sağlayıcı ücretinin toplamından oluşuyor.

## Danışmanlık Ücretiyle Karışmasın

Bu ücret tamamen **resmi bir devlet/AB harcıdır** ve doğrudan ilgili konsolosluğa veya vize başvuru merkezine ödenir — Menekşe Vize'nin danışmanlık ücretinden tamamen ayrıdır ve bizim tarafımızdan belirlenmez.

## Bizim Önerimiz

Başvuru zamanlamanızda bu güncel ücreti dikkate alıyor, ön görüşmemizde size toplam maliyet hakkında net ve güncel bilgi veriyoruz. Vize ücretlerindeki değişiklikleri düzenli olarak takip ediyor, güncel tutarları sizinle paylaşıyoruz.`,
  },
  {
    slug: 'vize-basvurusu-reddedildi-simdi-ne-yapmali',
    title: 'Vize Başvurusu Reddedildi, Şimdi Ne Yapmalı?',
    excerpt: 'Vize reddi almak sürecin sonu değildir. Ret gerekçesini anlamak ve doğru adımlarla ilerlemek için pratik bir rehber.',
    publishedAt: '2026-06-30T09:00:00.000Z',
    content: `Bir vize reddi almak kaygı verici olabilir, ancak paniğe kapılmadan önce atılması gereken birkaç net adım var.

## 1. Ret Gerekçesini Dikkatle Okuyun

Ret bildiriminde genellikle bir veya birkaç gerekçe belirtilir (örn. "seyahat amacı yeterince kanıtlanamadı", "mali yeterlilik belgesi yetersiz"). Bu gerekçe, bir sonraki adımınızı belirleyen en önemli bilgidir.

## 2. Aynı Hatayı Tekrarlamayın

Yeni bir başvuru yapmadan önce, ret gerekçesinde belirtilen eksikliği somut şekilde gidermeniz gerekir. Aynı dosyayı, aynı eksikliklerle tekrar sunmak genellikle ikinci bir ret ile sonuçlanır.

## 3. İtiraz Hakkınızı Değerlendirin

Bazı ülkelerde (örneğin Schengen vizelerinde) ret kararına karşı resmi itiraz (appeal) hakkınız bulunur. Bu süreç ülkeye göre değişir ve genellikle belirli bir süre içinde başvurulması gerekir.

## 4. Yeni Başvuru İçin Bekleme Süresi Var mı?

Bazı ülkeler yeni başvuru için minimum bir bekleme süresi öngörebilir; bu bilgiyi başvurduğunuz ülkenin resmi kaynaklarından teyit etmek önemlidir.

## 5. Dosyanızı Yeniden Değerlendirin

Ret sonrası en değerli adım, dosyanızı bir bütün olarak yeniden gözden geçirmektir — sadece belirtilen eksikliği değil, dosyanın genelinde tutarlılığı sağlayacak diğer noktaları da.

## Bizim Yaklaşımımız

Ret kararı alan müşterilerimizle önce ret gerekçesini birlikte analiz ediyor, ardından yeni başvuru için somut bir aksiyon planı çıkarıyoruz. Unutmayın: bir ret kararı, doğru hazırlıkla aşılabilecek bir aşamadır ve nihai karar her zaman ilgili ülkenin yetkili makamına aittir — hiçbir danışmanlık firması ikinci başvuru için de onay garantisi veremez.`,
  },
  {
    slug: 'etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu',
    title: "ETIAS 2026'nın Sonunda Başlıyor: Türk Vatandaşlarını Etkiliyor mu?",
    excerpt: 'Avrupa Seyahat Bilgi ve Yetkilendirme Sistemi (ETIAS) 2026 yılının son çeyreğinde devreye giriyor. Peki bu sistem Türk vatandaşları için ne anlama geliyor?',
    publishedAt: '2026-07-10T09:00:00.000Z',
    coverImageUrl: photos.mapWithPins,
    content: `**ETIAS (European Travel Information and Authorisation System)**, yıllardır ertelenen bir sistem olarak gündemde ve şu an için **2026'nın son çeyreğinde (Ekim-Aralık)** devreye girmesi planlanıyor. Sistem devreye girdikten sonra da yaklaşık 6 aylık bir geçiş sürecinin ardından, tahmini olarak **2027 Nisan** civarında zorunlu hale gelmesi bekleniyor.

## ETIAS Tam Olarak Nedir?

ETIAS, vize muafiyeti bulunan (yani Schengen bölgesine vizesiz girebilen) yaklaşık 60 ülke vatandaşının, seyahat öncesinde online bir seyahat izni almasını zorunlu kılan bir sistemdir — ABD'nin ESTA sistemine benzer şekilde çalışır.

## Peki Türk Vatandaşlarını Etkiliyor mu?

**Kısa cevap: Hayır, doğrudan etkilemiyor.** Türk vatandaşları Schengen bölgesine halihazırda **vizesiz giremediği** için, ETIAS'ın kapsadığı "vize muafiyetli ülkeler" listesinde yer almıyor. Yani Menekşe Vize müşterilerimizin büyük çoğunluğu için süreç bu sistemden bağımsız olarak, standart Schengen vizesi başvurusu şeklinde devam edecek.

## Öyleyse Neden Bilmemiz Gerekiyor?

- Vize muafiyetli bir ülkeden (örneğin ikinci bir vatandaşlığı olan) aile üyeleriniz veya sizinle seyahat edecek arkadaşlarınız varsa, onların ETIAS almaları gerekebilir.
- ETIAS ve daha önce devreye giren EES (Giriş-Çıkış Sistemi) birlikte, AB'nin sınır kontrol altyapısını kapsamlı şekilde dijitalleştiriyor — bu değişim, orta vadede vize süreçlerinin bazı yönlerini de (randevu sistemleri, veri paylaşımı gibi) etkileyebilir.

## Bizim Yaklaşımımız

AB sınır sistemlerindeki gelişmeleri yakından takip ediyor, sizi ve seyahat ettiğiniz grup içindeki farklı uyruklardaki kişileri doğru şekilde bilgilendiriyoruz. ETIAS'ın kesin başlangıç tarihi resmi olarak netleştikçe, güncel bilgileri bu blogdan paylaşmaya devam edeceğiz.`,
  },
];

function seedBlogPosts() {
  const { count } = db.prepare('SELECT COUNT(*) AS count FROM posts').get();
  if (count > 0) {
    console.log(`posts tablosu zaten dolu (${count} kayıt) — atlanıyor.`);
    return;
  }

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
  console.log(`${added} blog yazısı eklendi (toplam ${posts.length} tanımlı yazı).`);
}

seedBlogPosts();
console.log('Blog seed işlemi tamamlandı.');
