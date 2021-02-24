const internalError = require('../helpers/error');
const { DEFAULT_ERROR } = require('./constants');

module.exports = {
  defaultError: message => internalError(message, DEFAULT_ERROR)
};
