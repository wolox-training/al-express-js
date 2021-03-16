const defaultErrors = require('./default');
const databaseErrors = require('./database');
const axiosErrors = require('./axios');
const schemaErrors = require('./schema');
const sessionErrors = require('./session');
const albumErrors = require('./albums');

module.exports = {
  ...defaultErrors,
  ...databaseErrors,
  ...axiosErrors,
  ...schemaErrors,
  ...sessionErrors,
  ...albumErrors
};
