// Unsplash License altında ücretsiz kullanılabilen, seyahat/vize temalı fotoğraflar.
function unsplash(id, width) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;
}

export const photos = {
  heroPlaneWindow: unsplash('photo-1527605158555-853f200063e9', 1600),
  passportBoardingPass: unsplash('photo-1454496406107-dc34337da8d6', 1200),
  worldMap: unsplash('photo-1524661135-423995f22d0b', 1600),
  planningNotebook: unsplash('photo-1499591934245-40b55745b905', 1600),
  cameraPassportFlatlay: unsplash('photo-1578894381163-e72c17f2d45f', 1600),
  mapWithPins: unsplash('photo-1650526087824-163941841b52', 1600),
};
