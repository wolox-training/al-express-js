const { internalError } = require('../helpers/error');

const DATABASE_ERROR = 'database_error';

module.exports = {
  DATABASE_ERROR,
  databaseError: message => internalError(message, DATABASE_ERROR)
};
