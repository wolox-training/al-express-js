const defaultErrors = require('./default');
const databaseErrors = require('./database');
const axiosErrors = require('./axios');

module.exports = {
  ...defaultErrors,
  ...databaseErrors,
  ...axiosErrors
};
