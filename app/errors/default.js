const internalError = require('../helpers/error');

const DEFAULT_ERROR = 'default_error';

module.exports = {
  DEFAULT_ERROR,
  defaultError: message => internalError(message, DEFAULT_ERROR)
};
