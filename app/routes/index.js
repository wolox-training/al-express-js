const healthCheckRoutes = require('./healthCheck');
const jsonPlaceHolderRoutes = require('./jsonPlaceHolder');

exports.init = app => {
  app.use('/health', healthCheckRoutes);
  app.use('/json-place-holder', jsonPlaceHolderRoutes);
};
