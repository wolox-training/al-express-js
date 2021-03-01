exports.albumSerializer = album => ({
  user_id: album.userId,
  id: album.id,
  title: album.title
});

exports.photoSerializer = photo => ({
  album_id: photo.albumId,
  id: photo.id,
  title: photo.title,
  url: photo.url,
  thumbnail_url: photo.thumbnailUrl
});

exports.albumsSerializer = albums => albums.map(this.albumSerializer);
exports.photosSerializer = photos => photos.map(this.photoSerializer);
