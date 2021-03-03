const userSchemas = require('./users');
const commonSchemas = require('./common');

module.exports = {
  ...commonSchemas,
  ...userSchemas
};
