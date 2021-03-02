const healthCheckRoutes = require('./healthCheck');
const jsonPlaceHolderRoutes = require('./jsonPlaceHolder');
const userRoutes = require('./users');

exports.init = app => {
  app.use('/health', healthCheckRoutes);
  app.use('/albums', jsonPlaceHolderRoutes);
  app.use('/users', userRoutes);
};
