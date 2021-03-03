module.exports = {
  '/users': {
    get: {
      tags: ['CRUD operations'],
      description: 'Get users',
      operationId: 'getUsers',
      parameters: [
        {
          name: 'page',
          in: 'query',
          schema: {
            type: 'integer',
            default: 1
          },
          required: false
        }
      ],
      responses: {
        200: {
          description: 'Users were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Users'
              }
            }
          }
        }
      }
    },
    post: {
      tags: ['CRUD operations'],
      description: 'Create user',
      operationId: 'createUser',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UserRequest'
            }
          }
        },
        required: true
      },
      responses: {
        201: {
          description: 'User was created!',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User'
              }
            }
          }
        },
        422: {
          description: 'Invalid Schema',
          content: {
            'application/json': {
              schema: {
                oneOf: [
                  { $ref: '#/components/schemas/ParamSchemaError' },
                  { $ref: '#/components/schemas/Error' }
                ]
              },
              examples: {
                invalidParam: {
                  summary: 'Invalid parameter',
                  value: {
                    message: {
                      errors: [
                        {
                          value: 'myPassword',
                          msg: 'password must be Alphanumerical',
                          param: 'password',
                          location: 'body'
                        }
                      ]
                    },
                    internal_code: 'schema_error'
                  }
                },
                emailNotExist: {
                  summary: 'Email not exist',
                  value: {
                    message: 'email already exists',
                    internal_code: 'schema_error'
                  }
                }
              }
            }
          }
        },
        503: {
          description: 'Invalid Schema',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Error' },
              examples: {
                databaseError: {
                  summary: 'Database Error',
                  value: {
                    message: 'Unknown error when was trying to create the user',
                    internal_code: 'database_error'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
