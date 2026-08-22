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
