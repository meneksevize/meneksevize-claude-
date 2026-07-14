// Başvuru Takip portalı ve admin panelindeki aşama seçimi, /surec sayfasındaki
// 6 adımla aynı isimlendirmeyi kullanır (bkz. src/pages/Process.jsx).
export const STAGES = [
  { key: 'on-gorusme', label: 'Ön Görüşme' },
  { key: 'evrak-toplama', label: 'Evrak Toplama' },
  { key: 'randevu-basvuru', label: 'Randevu & Başvuru' },
  { key: 'mulakat', label: 'Mülakat Hazırlığı' },
  { key: 'takip', label: 'Takip' },
  { key: 'sonuc-teslim', label: 'Sonuç & Teslim' },
];

export function getStageIndex(key) {
  return STAGES.findIndex((s) => s.key === key);
}

export function getStageLabel(key) {
  return STAGES.find((s) => s.key === key)?.label || key;
}
