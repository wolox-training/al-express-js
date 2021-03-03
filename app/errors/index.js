const defaultErrors = require('./default');
const databaseErrors = require('./database');
const axiosErrors = require('./axios');
const schemaErrors = require('./schema');
const sessionErrors = require('./session');

module.exports = {
  ...defaultErrors,
  ...databaseErrors,
  ...axiosErrors,
  ...schemaErrors,
  ...sessionErrors
};
