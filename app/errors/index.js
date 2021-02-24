const defaultErrors = require('./default');
const databaseErrors = require('./database');
const axiosErrors = require('./axios');
const constants = require('./constants');

module.exports = {
  constants,
  errors: {
    ...defaultErrors,
    ...databaseErrors,
    ...axiosErrors
  }
};
