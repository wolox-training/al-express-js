const { Router } = require('express');
const usersController = require('../controllers/users');
const { validateSchema } = require('../middlewares/schema_validator');
const { signUpSchema, loginSchema } = require('../utils/schemas/users');

const router = new Router();

router.post('', [validateSchema(signUpSchema)], usersController.signUp);
router.post('/sessions', [validateSchema(loginSchema)], usersController.login);

module.exports = router;
