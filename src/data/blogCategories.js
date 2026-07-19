export const BLOG_CATEGORIES = [
  { key: 'basvuru-rehberleri', label: 'Başvuru Rehberleri' },
  { key: 'ulkelerde-yasam', label: 'Ülkelerde Yaşam & Eğitim' },
  { key: 'vize-reddi', label: 'Vize Reddi & Çözümleri' },
  { key: 'genel', label: 'Genel & Güncel' },
];

export function getCategoryLabel(key) {
  return BLOG_CATEGORIES.find((c) => c.key === key)?.label || key;
}
