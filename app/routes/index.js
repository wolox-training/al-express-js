const healthCheckRoutes = require('./healthCheck');
const jsonPlaceHolderRoutes = require('./jsonPlaceHolder');
const userRoutes = require('./users');
const adminRoutes = require('./admin');
const session = require('../middlewares/session');
const { validateSchema } = require('../middlewares/schema_validator');
const { tokenSchema } = require('../utils/schemas');

exports.init = app => {
  app.use('/health', healthCheckRoutes);
  app.use('/albums', jsonPlaceHolderRoutes);
  app.use('/users', userRoutes);
  app.use('/admin', [validateSchema(tokenSchema), session.verifyToken], adminRoutes);
};
