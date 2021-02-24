const internalError = require('../helpers/error');
const { DATABASE_ERROR } = require('./constants');

module.exports = {
  databaseError: message => internalError(message, DATABASE_ERROR)
};
