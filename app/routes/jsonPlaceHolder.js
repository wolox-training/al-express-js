const { Router } = require('express');
const albumsController = require('../controllers/albums');

const router = new Router();

router.get('/albums', albumsController.getAlbums);
router.get('/albums/:id/photos', albumsController.getAlbumPhotos);

module.exports = router;
