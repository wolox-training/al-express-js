const { keyNotExist } = require('../../helpers/schema_errors');

exports.tokenSchema = {
  Authorization: {
    in: ['headers'],
    trim: true,
    contains: { options: 'Bearer ' },
    isEmpty: {
      negated: true
    },
    errorMessage: keyNotExist('Authorization header for token')
  }
};
