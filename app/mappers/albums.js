exports.albumMapper = (album, userId) => ({
  id: album.id,
  title: album.title,
  userId
});
