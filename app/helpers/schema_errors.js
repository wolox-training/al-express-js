exports.keyNotExist = key => `Key ${key} must exist`;
exports.invalidMinLength = (key, minLength) => `${key} must have a minimum length of ${minLength}`;
exports.invalidEmail = (...domainOptions) =>
  `Email must be valid and belong to ${domainOptions.join(' or ')} domain`;
exports.typeError = (key, type) => `key '${key}' must be ${type}`;
exports.notAlphanumerical = key => `${key} must be Alphanumerical`;
