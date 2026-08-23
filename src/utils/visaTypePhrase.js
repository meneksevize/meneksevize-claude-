// Bazı vize tipi etiketleri "vize" kelimesinin kendisini zaten içeriyor
// (E-Vize, Doğum Vizesi / E-Visa, Birth Tourism Visa / تأشيرة إلكترونية,
// تأشيرة الولادة) — diğerleri ise çıplak bir sıfat/isim (Turistik, Ticari…)
// ve tam bir ifade olmak için "vize" kelimesini gerektiriyor. Sitedeki tüm
// şablonlar ("{type} Vizesi", "{type} Visa", "تأشيرة {type}") bu kelimeyi
// koşulsuz eklediği için E-Vize/Doğum Vizesi tipi sayfalarında "E-Vize
// Vizesi" / "E-Visa Visa" / "تأشيرة تأشيرة إلكترونية" gibi tekrarlar
// oluşuyordu (hem sayfa başlıklarında hem SEO meta etiketlerinde).
//
// Bu fonksiyon, hangi şablonun kullanılacağından bağımsız olarak TEK bir
// yerde "tam ve tekrarsız" ifadeyi üretir; tüketen her yer (React sayfaları
// ve server/lib/seo.js) artık kendi başına "Vizesi"/"Visa"/"تأشيرة"
// eklemez — bunun yerine {type} zaten tamamlanmış ifadeyi taşır.
const VISA_WORD = { tr: 'vize', en: 'visa', ar: 'تأشيرة' };

export function visaTypePhrase(typeLabel, locale) {
  const word = VISA_WORD[locale] || VISA_WORD.tr;
  if (typeLabel.toLowerCase().includes(word)) return typeLabel;
  if (locale === 'ar') return `تأشيرة ${typeLabel}`;
  if (locale === 'en') return `${typeLabel} Visa`;
  return `${typeLabel} Vizesi`;
}
