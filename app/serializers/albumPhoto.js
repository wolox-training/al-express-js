exports.albumPhotoSerializer = albumPhoto => ({
  album_id: albumPhoto.albumId,
  id: albumPhoto.id,
  title: albumPhoto.title,
  url: albumPhoto.url,
  thumbnail_url: albumPhoto.thumbnailUrl
});

exports.albumPhotosSerializer = albumPhotos => albumPhotos.map(this.albumPhotoSerializer);
