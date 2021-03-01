const service = require('../services/albums');

const getAlbums = async (_, res, next) => {
  try {
    const albums = await service.getAlbums();
    res.status(200).send(albums);
  } catch (error) {
    next(error);
  }
};

const getAlbumPhotos = async (req, res, next) => {
  try {
    const albumPhotos = await service.getPhotos(req);
    res.status(200).send(albumPhotos);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlbums,
  getAlbumPhotos
};
