const { Router } = require('express');
const usersController = require('../controllers/users');
const { validateSchema } = require('../middlewares/schema_validator');
const { signUpSchema } = require('../utils/schemas');

const router = new Router();

router.post('/users', validateSchema(signUpSchema), usersController.signUpAdmin);

module.exports = router;
