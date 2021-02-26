const { internalError } = require('../helpers/error');

const AXIOS_ERROR = 'axios_error';

module.exports = {
  AXIOS_ERROR,
  axiosError: message => internalError(message, AXIOS_ERROR)
};
