// Belge listeleri genel bir rehber niteliğindedir; resmi kaynaklar (ilgili ülkenin
// büyükelçilik/konsolosluk veya göçmenlik kurumu) esas alınmıştır. Kurallar sık
// değiştiğinden başvuru öncesi güncel durum ön görüşmede birlikte teyit edilir.
export const visaData = {
  schengen: {
    label: 'Schengen Bölgesi',
    types: {
      turistik: {
        items: ['Pasaport (son 10 yıl içinde düzenlenmiş, dönüş tarihinden sonra en az 3 ay geçerli, en az 2 boş sayfa)', 'Biyometrik fotoğraf (son 6 ay içinde çekilmiş)', 'Doldurulmuş Schengen vize başvuru formu', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu', 'Seyahat sağlık sigortası (min. 30.000 € teminatlı)', 'Banka hesap özeti (son 3 ay)', 'Çalışma/maaş belgesi', 'Tam tekmil vukuatlı nüfus kayıt örneği'],
        note: 'Schengen bölgesindeki 29 ülke aynı vize kuralları setini paylaşır: başvuru, ziyaret edeceğiniz ülke Türkiye\'de temsilcilik açmışsa doğrudan o ülkeye, birden fazla ülke ziyaret edilecekse en uzun süre kalınacak ya da ilk giriş yapılacak ülkeye yapılır. Seyahat sağlık sigortası tüm Schengen alanını kapsayacak ve minimum 30.000 Euro teminatlı olacak şekilde düzenlenmelidir; bu şart tüm üye ülkelerde ortaktır.',
      },
      ticari: {
        items: ['Pasaport', 'Biyometrik fotoğraf', 'Davet mektubu (iş ortağı/fuar)', 'Şirket faaliyet belgesi', 'Uçak-otel rezervasyonu', 'Seyahat sağlık sigortası (min. 30.000 €)', 'Banka hesap özeti'],
        note: 'Davet mektubu, ziyaret amacını (fuar, toplantı, iş ortaklığı) ve seyahat tarihlerini net şekilde belirtmelidir; şirketinizin faaliyet belgesiyle tutarlı olması değerlendirme sürecini hızlandırır.',
      },
      'aile-birlesimi': {
        items: ['Pasaport', 'Biyometrik fotoğraf', 'Davetiye/ikametgah belgesi', 'Akrabalık belgesi', 'Seyahat sağlık sigortası', 'Banka hesap özeti'],
        note: 'Davet eden kişinin ilgili ülkedeki ikamet/oturum belgesi ile aranızdaki akrabalık bağını gösteren resmi belge (nüfus kayıt örneği, evlilik cüzdanı vb.) birlikte sunulmalıdır.',
      },
      transit: {
        items: ['Pasaport', 'Biyometrik fotoğraf', 'Devam uçuş bileti', 'Hedef ülke vizesi (varsa)'],
        note: 'Havalimanı transit vizesi, uçağınızdan inmeden bir sonraki uçuşa aktarma yapacağınız durumlarda gerekir; hedef ülkenin vize şartına göre bazı milliyetler için havalimanı transit vizesi (Havalimanı Transit Vizesi - ATV) ayrıca zorunlu olabilir.',
      },
    },
  },
  abd: {
    label: 'Amerika Birleşik Devletleri',
    types: {
      turistik: {
        items: ['Pasaport (ABD çıkış tarihinizden itibaren en az 6 ay geçerli)', 'DS-160 başvuru formu onay sayfası (barkodlu)', 'Fotoğraf (5x5 cm, son 6 ay içinde, beyaz fon)', 'MRV vize başvuru ücreti ödeme dekontu', 'Mülakat randevu teyit sayfası', 'Banka hesap özeti', 'Çalışma/maaş belgesi', 'Seyahat planı özeti'],
        note: 'B1/B2 vizesi hem turistik hem ticari amaçlı seyahatleri kapsayan birleşik bir vizedir. 2026 itibarıyla standart MRV ücretine ek olarak Visa Integrity Fee adında ayrı bir ücret uygulanabilir; güncel tutarı ön görüşmede paylaşırız.',
      },
      ticari: {
        items: ['Pasaport (ABD çıkış tarihinizden itibaren en az 6 ay geçerli)', 'DS-160 başvuru formu onay sayfası (barkodlu)', 'Fotoğraf (5x5 cm, son 6 ay içinde, beyaz fon)', 'MRV vize başvuru ücreti ödeme dekontu', 'Mülakat randevu teyit sayfası', 'Şirket/iş ortağı daveti mektubu', 'Şirket faaliyet belgesi', 'Banka hesap özeti'],
        note: 'B1/B2 vizesi hem turistik hem ticari amaçlı seyahatleri kapsayan birleşik bir vizedir; turistik ve ticari başvuru süreci aynı vize kategorisinde değerlendirilir.',
      },
      ogrenci: ['Pasaport', 'I-20 formu', 'DS-160 başvuru formu onay sayfası', 'SEVIS ücret dekontu (I-901)', 'Mali yeterlilik belgesi', 'Akademik geçmiş belgeleri'],
      calisma: ['Pasaport', 'İş teklifi/sponsorluk belgesi', 'İşveren tarafından onaylanmış dilekçe', 'DS-160 başvuru formu onay sayfası', 'Diploma/deneyim belgeleri', 'Fotoğraf (5x5 cm)'],
    },
  },
  ingiltere: {
    label: 'İngiltere',
    types: {
      turistik: ['Pasaport (kalış süresi boyunca geçerli)', 'Biyometrik fotoğraf', 'Banka hesap özeti (son 6 ay)', 'Çalışma/maaş belgesi', 'Otel/konaklama rezervasyonu', 'Uçak bileti rezervasyonu', 'Seyahat amacı ve Türkiye\'ye bağlılığınızı gösteren belgeler'],
      ogrenci: ['Pasaport', 'CAS (Confirmation of Acceptance for Studies) belgesi', 'Mali yeterlilik belgesi', 'İngilizce yeterlilik belgesi', 'Vesikalık fotoğraf'],
      'aile-birlesimi': ['Pasaport', 'İlişki/akrabalık belgesi', 'Davet eden kişinin ikamet belgesi', 'Mali yeterlilik belgesi', 'Konaklama kanıtı'],
    },
  },
  kanada: {
    label: 'Kanada',
    types: {
      turistik: ['Pasaport (en az 6 ay geçerli)', 'Vize başvuru formu (IMM 5257)', 'Vesikalık fotoğraf', 'Banka hesap özeti (son 3-6 ay)', 'Mali yeterlilik kanıtı (kalış süresine göre değişir)', 'Çalışma/maaş belgesi', 'Seyahat planı özeti', 'Türkiye\'ye bağlılığınızı gösteren belgeler (iş, mülk, aile)'],
      calisma: ['Pasaport', 'İş teklifi/LMIA belgesi (varsa)', 'Diploma/deneyim belgeleri', 'Vesikalık fotoğraf', 'Mali yeterlilik belgesi'],
      dogum: {
        items: [
          'Pasaport (en az 6 ay geçerli)',
          'Vize başvuru formu (IMM 5257)',
          'Vesikalık fotoğraf',
          "Gebelik durumunuzu ve Kanada'da doğum yapma niyetinizi açıkça belirten beyan/dilekçe",
          'Doğum yapılacak hastaneden yazılı kabul/randevu belgesi',
          'Doğum ve olası komplikasyon masraflarını kapsayan özel sağlık sigortası',
          'Hastane depozitosu ve toplam maliyeti karşılayacak mali yeterlilik kanıtı',
          'Doktor onaylı güncel hamilelik/sağlık raporu',
          'Havayoluna göre değişen uçuşa uygunluk (fit-to-fly) belgesi',
          'Dönüş bileti',
          "Türkiye'ye bağlılığınızı gösteren belgeler",
        ],
        note: 'Kanada\'da resmi olarak ayrı bir "doğum vizesi" kategorisi yoktur — bu başvurular standart ziyaretçi vizesi (TRV) kapsamında değerlendirilir. Gebelik ve doğum niyetinizi başvuruda beyan etmemeniz "yanlış beyan" (misrepresentation) sayılabilir ve 5 yıla kadar Kanada\'ya giriş yasağıyla sonuçlanabilir. Ziyaretçi statüsünde kamu sağlık sigortası kapsamınız olmadığından doğum masrafları tamamen size aittir; komplikasyonsuz doğumda dahi genellikle 10.000-20.000+ CAD, komplikasyon durumunda daha yüksek olabilir — birçok standart seyahat sigortası gebelik/doğumu kapsamaz, bu yüzden özel olarak doğum teminatlı bir poliçe gereklidir. Doğan çocuk Kanada vatandaşlık kanunu gereği otomatik olarak Kanada vatandaşı olur, ancak bu durum ebeveynlerin Kanada\'da ikamet, çalışma veya vatandaşlık hakkı kazanmasını sağlamaz.',
      },
    },
  },
  dubai: {
    label: 'Dubai / BAE',
    types: {
      turistik: ['Pasaport (en az 6 ay geçerli)', 'Vesikalık fotoğraf', 'Uçak bileti rezervasyonu (gidiş-dönüş)', 'Otel rezervasyonu', 'BAE\'de geçerli seyahat sağlık sigortası'],
      ticari: ['Pasaport', 'Şirket/iş ortağı daveti mektubu', 'Şirket faaliyet belgesi', 'Uçak-otel rezervasyonu', 'BAE\'de geçerli seyahat sağlık sigortası'],
      'e-vize': ['Pasaport taraması', 'Vesikalık fotoğraf (dijital)', 'Uçak bileti rezervasyonu', 'BAE\'de geçerli seyahat sağlık sigortası'],
      transit: {
        items: ['Pasaport (48 saatlik vize için en az 3 ay, 96 saatlik vize için en az 6 ay geçerli)', 'Devam uçuş bileti (üçüncü bir ülkeye)', '24 saati aşan aktarmalarda konaklama kanıtı (otel rezervasyonu veya davet eden kişi bilgisi)'],
        note: '48 saatlik transit vize ücretsiz, 96 saatlik transit vize ise ücretlidir (AED 50). Her iki vize de sizi taşıyan havayolu tarafından sponsor edilir ve seyahat öncesi ayarlanması gerekir; süresi uzatılamaz.',
      },
    },
  },
  rusya: {
    label: 'Rusya',
    types: {
      turistik: {
        items: ['Pasaport (makine okunabilir, başvuru tarihinden itibaren en az 6 ay geçerli)', 'Dijital vesikalık fotoğraf', 'Online e-Vize başvuru formu', 'Seyahat sağlık sigortası (Türk vatandaşları için zorunlu değil, önerilir)'],
        note: 'Rusya, Türk vatandaşlarına birleşik e-Vize sunar: başvuru tamamen online yapılır, ortalama 4 gün içinde sonuçlanır, 120 gün geçerlidir ve tek girişte en fazla 30 gün kalışa izin verir.',
      },
      ticari: {
        items: ['Pasaport (makine okunabilir, en az 6 ay geçerli)', 'Dijital vesikalık fotoğraf', 'Online e-Vize başvuru formu', 'Davet mektubu (varsa)', 'Seyahat sağlık sigortası (zorunlu değil, önerilir)'],
        note: 'Ticari ziyaretler de aynı birleşik e-Vize sistemi üzerinden başvurulur.',
      },
    },
  },
  avustralya: {
    label: 'Avustralya',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Online vize başvuru formu (Subclass 600)', 'Biyometrik kayıt (parmak izi ve fotoğraf — vize başvuru merkezinde)', 'Banka hesap özeti / mali yeterlilik belgesi', 'Seyahat planı özeti', 'Türkiye\'ye bağlılığınızı gösteren belgeler (iş, mülk, aile)', 'Sağlık ve karakter beyanı (gerekirse ek sağlık raporu istenebilir)'],
        note: 'Avustralya, Türk vatandaşlarına elektronik seyahat izni (eTA) sunmamaktadır. Başvurular tam Ziyaretçi Vizesi (Subclass 600) kapsamında değerlendirilir; bu nedenle vize başvuru merkezinde biyometrik randevu gereklidir. İşlem süresi genellikle 4-8 haftadır.',
      },
    },
  },
  japonya: {
    label: 'Japonya',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli, en az 2 boş sayfa)', 'Vesikalık fotoğraf (son 6 ay)', 'Doldurulmuş vize başvuru formu', 'Günlük bazda hazırlanmış detaylı seyahat planı', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu (her gecelemenin ayrı belirtilmesi gerekir)', 'Banka hesap özeti (son 3 ay)', 'Çalışma/maaş belgesi'],
        note: 'Japonya konsolosluğu, her günün nerede geçirileceğini gösteren detaylı bir seyahat planı talep eder; bu belgenin konaklama rezervasyonlarıyla birebir tutarlı olması değerlendirmeyi hızlandırır.',
      },
      ticari: {
        items: ['Pasaport', 'Vesikalık fotoğraf', 'Davet mektubu (iş ortağı/fuar organizatörü)', 'Şirket faaliyet belgesi', 'Detaylı seyahat planı', 'Uçak-otel rezervasyonu', 'Banka hesap özeti'],
        note: 'Davet mektubunun ziyaret amacını, tarihleri ve ev sahibi firma bilgilerini net şekilde belirtmesi önemlidir.',
      },
    },
  },
  'guney-kore': {
    label: 'Güney Kore',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Vesikalık fotoğraf', 'Doldurulmuş vize başvuru formu', 'Detaylı seyahat planı', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu', 'Banka hesap özeti (son 3 ay)', 'Çalışma/maaş belgesi'],
        note: 'Güney Kore vize değerlendirmesinde seyahat planının tutarlılığı ve mali yeterlilik belgelerinin güncelliği önemli rol oynar.',
      },
      ticari: {
        items: ['Pasaport', 'Vesikalık fotoğraf', 'Davet mektubu (iş ortağı/fuar)', 'Şirket faaliyet belgesi', 'Seyahat planı', 'Uçak-otel rezervasyonu', 'Banka hesap özeti'],
        note: 'Fuar katılımlarında fuar organizatöründen alınan katılımcı belgesi süreci hızlandırır.',
      },
    },
  },
  cin: {
    label: 'Çin',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli, en az 2 boş sayfa)', 'Vesikalık fotoğraf', 'Doldurulmuş vize başvuru formu', 'Seyahat planı / otel rezervasyonu', 'Uçak bileti rezervasyonu', 'Banka hesap özeti'],
        note: 'Turistik vize başvurularında güzergahın (ziyaret edilecek şehirler) net olması değerlendirmeyi kolaylaştırır.',
      },
      ticari: {
        items: ['Pasaport', 'Vesikalık fotoğraf', 'Çinli iş ortağından davet mektubu', 'Şirket faaliyet belgesi', 'Seyahat planı', 'Uçak-otel rezervasyonu'],
        note: 'Davet mektubunun genellikle fuar organizatörü veya iş ortağı firma tarafından düzenlenmiş olması ve başvuru bilgileriyle tutarlı olması gerekir.',
      },
    },
  },
  hindistan: {
    label: 'Hindistan',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Dijital vesikalık fotoğraf', 'Online e-Vize başvuru formu', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu'],
        note: 'Hindistan e-Vize başvurusu online yapılır ve genellikle birkaç iş günü içinde sonuçlanır; pasaport taramasının net ve okunaklı olması önemlidir.',
      },
      ticari: {
        items: ['Pasaport', 'Dijital vesikalık fotoğraf', 'Online e-Vize başvuru formu', 'Davet mektubu (iş ortağı)', 'Şirket faaliyet belgesi'],
        note: 'Ticari e-Vize başvurularında davet mektubunun ziyaret amacını net belirtmesi süreci hızlandırır.',
      },
    },
  },
  meksika: {
    label: 'Meksika',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Geçerli ABD/Kanada/İngiltere/Schengen vizesi veya oturum izni (muafiyet için)', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu', 'Bu şartları taşımıyorsanız: standart vize başvuru formu ve banka hesap özeti'],
        note: 'Geçerli bir ABD, Kanada, İngiltere veya Schengen vizesi/oturumu olan başvuru sahipleri online "yetkilendirme" ile vize muafiyetinden yararlanabilir; bu şartları taşımayanlar standart turistik vize başvurusu yapar.',
      },
    },
  },
  'yeni-zelanda': {
    label: 'Yeni Zelanda',
    types: {
      turistik: {
        items: ['Pasaport (en az 3 ay geçerli)', 'Vesikalık fotoğraf (dijital)', 'Online ziyaretçi vizesi başvuru formu', 'Banka hesap özeti / mali yeterlilik belgesi', 'Seyahat planı özeti', 'Dönüş bileti'],
        note: 'Başvuru tamamen online (Immigration New Zealand üzerinden) yapılır; coğrafi uzaklık nedeniyle işlem süresi diğer destinasyonlara göre daha uzun olabilir.',
      },
    },
  },
  singapur: {
    label: 'Singapur',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Vesikalık fotoğraf', 'Yetkili ajans üzerinden başvuru formu', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu', 'Banka hesap özeti'],
        note: 'Singapur vize başvuruları doğrudan büyükelçilik yerine yetkilendirilmiş yerel ajanslar üzerinden yürütülür; doğru ajans ve güncel evrak seti süreci hızlandırır.',
      },
      ticari: {
        items: ['Pasaport', 'Vesikalık fotoğraf', 'Davet mektubu (iş ortağı)', 'Şirket faaliyet belgesi', 'Yetkili ajans üzerinden başvuru formu'],
        note: 'Ticari başvurularda davet mektubunun ziyaret amacını ve tarihleri net belirtmesi gerekir.',
      },
    },
  },
  misir: {
    label: 'Mısır',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Dijital vesikalık fotoğraf', 'Online e-Vize başvuru formu', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu'],
        note: 'Mısır e-Vize başvurusu online yapılır ve genellikle birkaç iş günü içinde sonuçlanır; bazı tatil beldelerinde varışta vize alma seçeneği de mevcuttur.',
      },
    },
  },
  'guney-afrika': {
    label: 'Güney Afrika',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli, en az 2 boş sayfa)', 'Vesikalık fotoğraf', 'Doldurulmuş vize başvuru formu', 'Banka hesap özeti', 'Seyahat planı / otel rezervasyonu', 'Uçak bileti rezervasyonu', 'Güzergaha göre sarı humma aşı sertifikası (gerekiyorsa)', 'Çocuklu seyahatlerde doğum belgesi ve velayet belgesi'],
        note: 'Bazı güzergahlarda (sarı humma riski taşıyan ülkelerden transit gibi) aşı sertifikası istenebilir; çocuklu seyahatlerde doğum belgesi sunulması yasal bir zorunluluktur.',
      },
      ticari: {
        items: ['Pasaport', 'Vesikalık fotoğraf', 'Davet mektubu (iş ortağı)', 'Şirket faaliyet belgesi', 'Seyahat planı', 'Banka hesap özeti'],
        note: 'Madencilik ve enerji sektörü fuarlarına katılımda fuar organizatöründen alınan belge süreci hızlandırır.',
      },
    },
  },
  tayland: {
    label: 'Tayland',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Dijital vesikalık fotoğraf', 'Online e-Vize başvuru formu', 'Dönüş uçak bileti', 'Otel/konaklama rezervasyonu'],
        note: 'Tayland e-Vize başvurusu online yapılır; dönüş bileti ve konaklama rezervasyonunun net olması onay sürecini kolaylaştırır.',
      },
    },
  },
  vietnam: {
    label: 'Vietnam',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Dijital vesikalık fotoğraf', 'Online e-Vize başvuru formu', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu'],
        note: 'Vietnam e-Vize, havalimanı, kara ve deniz sınırları dahil tüm giriş kapılarında geçerlidir; başvuru genellikle 3 iş günü içinde sonuçlanır.',
      },
    },
  },
  'sri-lanka': {
    label: 'Sri Lanka',
    types: {
      turistik: {
        items: ['Pasaport (en az 6 ay geçerli)', 'Dijital vesikalık fotoğraf', 'Online ETA başvuru formu', 'Dönüş uçak bileti'],
        note: 'Sri Lanka Elektronik Seyahat İzni (ETA) başvurusu online yapılır ve genellikle birkaç dakika-birkaç saat içinde onaylanır; çıktısının seyahatte yanınızda bulunması önerilir.',
      },
    },
  },
};

export function normalizeVisaEntry(entry) {
  if (!entry) return { items: [], note: null };
  if (Array.isArray(entry)) return { items: entry, note: null };
  return { items: entry.items ?? [], note: entry.note ?? null };
}
