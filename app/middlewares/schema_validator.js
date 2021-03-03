const { checkSchema, validationResult } = require('express-validator');
const { schemaError } = require('../errors');
const logger = require('../logger');

exports.validateSchema = schema => [
  checkSchema(schema),
  (req, _, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) next();
    else {
      logger.error('Has occurred an error with the given schema');
      next(schemaError(errors));
    }
  }
];
