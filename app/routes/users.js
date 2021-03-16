const { Router } = require('express');
const usersController = require('../controllers/users');
const { validateSchema } = require('../middlewares/schema_validator');
const session = require('../middlewares/session');
const { signUpSchema, loginSchema, tokenSchema } = require('../utils/schemas');

const router = new Router();

router
  .get('', validateSchema(tokenSchema), session.verifyToken, usersController.getAll)
  .post('', validateSchema(signUpSchema), usersController.signUp);

router.post('/sessions', validateSchema(loginSchema), usersController.login);

router.post('/albums/:id', [validateSchema(tokenSchema), session.verifyToken], usersController.addAlbum);

module.exports = router;
