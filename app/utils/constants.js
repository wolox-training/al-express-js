const { availableDomains } = require('../../config').common;

// DOMAINS
exports.DOMAIN_WOLOX_AR = 'wolox.com.ar';
exports.DOMAIN_WOLOX_CO = 'wolox.co';
exports.DOMAIN_WOLOX_CL = 'wolox.cl';
exports.DOMAIN_WOLOX_MX = 'wolox.com.mx';

// EMAILS
exports.EMAIL_WOLOX_AR = `@${exports.DOMAIN_WOLOX_AR}`;
exports.EMAIL_WOLOX_CO = `@${exports.DOMAIN_WOLOX_CO}`;
exports.EMAIL_WOLOX_CL = `@${exports.DOMAIN_WOLOX_CL}`;
exports.EMAIL_WOLOX_MX = `@${exports.DOMAIN_WOLOX_MX}`;

// PASSWORDS
exports.PASSWORD_MIN_LENGTH = 8;
exports.PASSWORD_SALT = 8;

// PAGINATION
exports.DEFAULT_OFFSET = 0;
exports.DEFAULT_LIMIT = 50;

// ROLES
exports.ROLE_ID_ADMIN = 1;
exports.ROLE_ID_REGULAR = 2;

// REGEX
exports.ALPHANUMERICAL_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
exports.EMAIL_WOLOX_REGEX = new RegExp(`^[A-Za-z0-9._%+-]+(@wolox.(${availableDomains}|))$`);
