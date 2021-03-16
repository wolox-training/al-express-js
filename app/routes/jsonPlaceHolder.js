const { Router } = require('express');
const albumsController = require('../controllers/albums');

const router = new Router();

router.get('', albumsController.getAlbums);
router.get('/:id', albumsController.getAlbumById);
router.get('/:id/photos', albumsController.getAlbumPhotos);

module.exports = router;
