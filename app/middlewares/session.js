const jwt = require('jsonwebtoken');
const logger = require('../logger');
const errors = require('../errors');
const { secret } = require('../../config').common.session;

const verifyToken = (req, _, next) => {
  logger.info('Session middleware - verifyToken');

  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, secret);

    req.userId = decoded.sub;
    req.token = token;

    next();
  } catch (error) {
    logger.error(`Session error: ${error.message}`);
    throw errors.sessionError(error.message);
  }
};

module.exports = {
  verifyToken
};
