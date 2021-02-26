const healthCheckRoutes = require('./healthCheck');
const jsonPlaceHolderRoutes = require('./jsonPlaceHolder');
const userRoutes = require('./users');

exports.init = app => {
  app.use('/health', healthCheckRoutes);
  app.use('/json-place-holder', jsonPlaceHolderRoutes);
  app.use('/users', userRoutes);
};
