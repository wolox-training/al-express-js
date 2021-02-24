const service = require('../services/albums');
const errors = require('../errors');

const getAlbums = async (_, res, next) => {
  try {
    const albums = await service.getAlbums();
    res.status(200).send(albums);
  } catch (e) {
    next(errors.defaultError(e.message));
  }
};

const getAlbumPhotos = async (req, res, next) => {
  try {
    const albumPhotos = await service.getPhotos(req);
    res.status(200).send(albumPhotos);
  } catch (e) {
    next(errors.defaultError(e.message));
  }
};

module.exports = {
  getAlbums,
  getAlbumPhotos
};
