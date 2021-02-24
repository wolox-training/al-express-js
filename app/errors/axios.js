const internalError = require('../helpers/error');

module.exports = {
  axiosError: (message, statusText, statusCode) => internalError(message, statusText, statusCode)
};
