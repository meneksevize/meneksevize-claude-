// Unsplash License altında ücretsiz kullanılabilen seyahat/vize temalı fotoğraflar.
// Üçüncü taraf CDN bağımlılığını (ve fotoğrafın kaynakta silinme riskini) ortadan
// kaldırmak için WebP olarak indirilip kendi sunucumuzdan (public/photos) sunulur.

// Blog kapakları w=1600 ile kaydedilir (yazı sayfası + og:image için); kart
// boyutunda gösterilirken Unsplash URL'lerinde genişlik yarıya indirilir.
export function cardCover(url) {
  if (!url) return url;
  return url.includes('images.unsplash.com') ? url.replace('w=1600', 'w=800') : url;
}

export const photos = {
  heroPlaneWindow: '/photos/hero-plane-window.webp',
  passportBoardingPass: '/photos/passport-boarding-pass.webp',
  worldMap: '/photos/world-map.webp',
  planningNotebook: '/photos/planning-notebook.webp',
  cameraPassportFlatlay: '/photos/camera-passport-flatlay.webp',
  mapWithPins: '/photos/map-with-pins.webp',
};

// `sips -g pixelWidth -g pixelHeight` ile ölçülen gerçek piksel boyutları —
// server/lib/seo.js bunları og:image:width/height meta etiketleri için
// kullanır (WhatsApp/Facebook'un önizleme kartını oluşturmadan önce görseli
// indirip ölçmesini beklemeden hızlı render etmesini sağlar). Not:
// heroPlaneWindow dikey (0.64 oranı) — standart OG oranı (~1.91:1) değil,
// paylaşım kartlarında dar/kırpılmış görünebilir; bilinçli bir tasarım
// tercihiyse dokunulmadı, aksi halde ayrı bir yatay OG görseli düşünülebilir.
export const photoDimensions = {
  [photos.heroPlaneWindow]: { width: 1600, height: 2508 },
  [photos.passportBoardingPass]: { width: 1200, height: 696 },
  [photos.worldMap]: { width: 1400, height: 930 },
  [photos.planningNotebook]: { width: 1600, height: 1065 },
  [photos.cameraPassportFlatlay]: { width: 1400, height: 896 },
  [photos.mapWithPins]: { width: 1600, height: 1067 },
};
