const { isUndefined } = require('lodash');

exports.internalError = (message, internalCode, statusCode = undefined) => ({
  message,
  internalCode,
  statusCode: isUndefined(statusCode) ? undefined : statusCode
});
