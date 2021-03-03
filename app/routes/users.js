const { Router } = require('express');
const usersController = require('../controllers/users');
const { validateSchema } = require('../middlewares/schema_validator');
const { signUpSchema, loginSchema, tokenSchema } = require('../utils/schemas');

const router = new Router();

router.get('', [validateSchema(tokenSchema)], usersController.getAll);
router.post('', [validateSchema(signUpSchema)], usersController.signUp);
router.post('/sessions', [validateSchema(loginSchema)], usersController.login);

module.exports = router;
