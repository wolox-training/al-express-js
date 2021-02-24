exports.albumSerializer = album => ({
  user_id: album.userId,
  id: album.id,
  title: album.title
});

exports.albumsSerializer = albums => albums.map(this.albumSerializer);
