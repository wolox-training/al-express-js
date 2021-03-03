const { internalError } = require('../helpers/error');

const SESSION_ERROR = 'session_error';

module.exports = {
  SESSION_ERROR,
  sessionError: message => internalError(message, SESSION_ERROR)
};
