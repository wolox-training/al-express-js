// COUNTRY CODES
exports.DOMAIN_ARGENTINA = 'com.ar';
exports.DOMAIN_COLOMBIA = 'co';
exports.DOMAIN_CHILE = 'cl';
exports.DOMAIN_MEXICO = 'com.mx';

// DOMAINS
exports.DOMAIN_WOLOX_AR = `wolox.${exports.DOMAIN_ARGENTINA}`;
exports.DOMAIN_WOLOX_CO = `wolox.${exports.DOMAIN_COLOMBIA}`;
exports.DOMAIN_WOLOX_CL = `wolox.${exports.DOMAIN_CHILE}`;
exports.DOMAIN_WOLOX_MX = `wolox.${exports.DOMAIN_MEXICO}`;

// EMAILS
exports.EMAIL_WOLOX_AR = `@${exports.DOMAIN_WOLOX_AR}`;
exports.EMAIL_WOLOX_CO = `@${exports.DOMAIN_WOLOX_CO}`;
exports.EMAIL_WOLOX_CL = `@${exports.DOMAIN_WOLOX_CL}`;
exports.EMAIL_WOLOX_MX = `@${exports.DOMAIN_WOLOX_MX}`;

// PASSWORDS
exports.PASSWORD_MIN_LENGTH = 8;
exports.PASSWORD_SALT = 8;

// REGEX
exports.ALPHANUMERICAL_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
exports.EMAIL_WOLOX_REGEX = new RegExp(
  `^[A-Za-z0-9._%+-]+(@wolox.(${exports.DOMAIN_ARGENTINA}|${exports.DOMAIN_COLOMBIA}|${exports.DOMAIN_CHILE}|${exports.DOMAIN_MEXICO}|))$`
);
