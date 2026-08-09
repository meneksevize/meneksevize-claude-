export const BLOG_CATEGORIES = [
  { key: 'basvuru-rehberleri', label: 'Başvuru Rehberleri', i18nKey: 'blogCategories.applicationGuides' },
  { key: 'ulkelerde-yasam', label: 'Ülkelerde Yaşam & Eğitim', i18nKey: 'blogCategories.lifeAbroad' },
  { key: 'vize-reddi', label: 'Vize Reddi & Çözümleri', i18nKey: 'blogCategories.visaRejection' },
  { key: 'genel', label: 'Genel & Güncel', i18nKey: 'blogCategories.general' },
];

// `t` verilirse (LocaleContext'ten) çeviriyi döner; verilmezse (ör. admin
// panelinde, her zaman Türkçe) orijinal Türkçe etiketi döner.
export function getCategoryLabel(key, t) {
  const category = BLOG_CATEGORIES.find((c) => c.key === key);
  if (!category) return key;
  return t ? t(category.i18nKey) : category.label;
}
