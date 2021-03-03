const user = require('./user');

module.exports = {
  ...user,
  Error: {
    type: 'object',
    properties: {
      message: {
        type: 'string'
      },
      internal_code: {
        type: 'string'
      }
    }
  },
  ParamSchemaError: {
    type: 'object',
    properties: {
      message: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                msg: {
                  type: 'string',
                  example: 'password must be Alphanumerical'
                },
                param: {
                  type: 'string',
                  example: 'password'
                },
                location: {
                  type: 'string',
                  example: 'body'
                }
              }
            }
          }
        }
      },
      internalCode: {
        type: 'string',
        example: 'schema_error'
      }
    }
  }
};
