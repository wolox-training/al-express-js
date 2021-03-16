const { internalError } = require('../helpers/error');

const ALBUM_ERROR = 'album_error';

module.exports = {
  ALBUM_ERROR,
  albumError: message => internalError(message, ALBUM_ERROR)
};
