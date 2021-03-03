const { Router } = require('express');
const usersController = require('../controllers/users');
const { validateSchema } = require('../middlewares/schema_validator');
const { signUpSchema } = require('../utils/schemas/users');

const router = new Router();

router.post('', [validateSchema(signUpSchema)], usersController.signUp);

module.exports = router;
