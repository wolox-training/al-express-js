const { internalError } = require('../helpers/error');

const SCHEMA_ERROR = 'schema_error';

module.exports = {
  SCHEMA_ERROR,
  schemaError: message => internalError(message, SCHEMA_ERROR)
};
