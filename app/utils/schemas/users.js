const {
  typeError,
  keyNotExist,
  invalidEmail,
  notAlphanumerical,
  invalidMinLength
} = require('../../helpers/schema_errors');

const {
  EMAIL_WOLOX_REGEX,
  EMAIL_WOLOX_AR,
  EMAIL_WOLOX_CO,
  EMAIL_WOLOX_CL,
  EMAIL_WOLOX_MX,
  ALPHANUMERICAL_REGEX,
  PASSWORD_MIN_LENGTH
} = require('../constants');

exports.signUpSchema = {
  id: {
    in: ['body'],
    trim: true,
    isUUID: true,
    optional: { options: { nullable: true } },
    errorMessage: typeError('id', 'UUID')
  },
  firstName: {
    in: 'body',
    trim: true,
    optional: { options: { nullable: true } },
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('firstName')
    }
  },
  lastName: {
    in: 'body',
    trim: true,
    optional: { options: { nullable: true } },
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('lastName')
    }
  },
  email: {
    in: 'body',
    trim: true,
    isString: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('email')
    },
    matches: {
      options: EMAIL_WOLOX_REGEX,
      errorMessage: invalidEmail(EMAIL_WOLOX_AR, EMAIL_WOLOX_CO, EMAIL_WOLOX_CL, EMAIL_WOLOX_MX)
    }
  },
  password: {
    in: 'body',
    matches: {
      options: ALPHANUMERICAL_REGEX,
      errorMessage: notAlphanumerical('password')
    },
    isLength: {
      options: { min: PASSWORD_MIN_LENGTH },
      errorMessage: invalidMinLength('password', PASSWORD_MIN_LENGTH)
    },
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('password')
    }
  },
  createdAt: {
    in: ['body'],
    trim: true,
    isDate: true,
    optional: { options: { nullable: true } },
    errorMessage: typeError('createdAt', 'DATE')
  },
  updatedAt: {
    in: ['body'],
    trim: true,
    isDate: true,
    optional: { options: { nullable: true } },
    errorMessage: typeError('updatedAt', 'DATE')
  },
  deletedAt: {
    in: ['body'],
    trim: true,
    isDate: true,
    optional: { options: { nullable: true } },
    errorMessage: typeError('deletedAt', 'DATE')
  }
};

exports.loginSchema = {
  email: {
    in: 'body',
    trim: true,
    isString: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('email')
    },
    matches: {
      options: EMAIL_WOLOX_REGEX,
      errorMessage: invalidEmail(EMAIL_WOLOX_AR, EMAIL_WOLOX_CO, EMAIL_WOLOX_CL, EMAIL_WOLOX_MX)
    }
  },
  password: {
    in: 'body',
    matches: {
      options: ALPHANUMERICAL_REGEX,
      errorMessage: notAlphanumerical('password')
    },
    isLength: {
      options: { min: PASSWORD_MIN_LENGTH },
      errorMessage: invalidMinLength('password', PASSWORD_MIN_LENGTH)
    },
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('password')
    }
  }
};
