module.exports = {
  id: {
    type: 'integer',
    example: 5
  },
  firstName: {
    type: 'string',
    example: 'Pepe'
  },
  lastName: {
    type: 'string',
    example: 'López'
  },
  email: {
    type: 'string',
    example: 'pepe.lopez@wolox.com.ar'
  },
  password: {
    type: 'string',
    example: 'myPassword123'
  },
  createdAt: {
    type: 'date',
    example: '2021-01-23T20:04:02.000Z'
  },
  updatedAt: {
    type: 'date',
    example: '2021-01-23T20:04:02.000Z'
  },
  deletedAt: {
    type: 'date',
    example: '2021-01-23T20:04:02.000Z'
  },
  UserRequest: {
    type: 'object',
    properties: {
      firstName: {
        $ref: '#/components/schemas/firstName'
      },
      lastName: {
        $ref: '#/components/schemas/lastName'
      },
      email: {
        $ref: '#/components/schemas/email'
      },
      password: {
        $ref: '#/components/schemas/password'
      }
    }
  },
  User: {
    type: 'object',
    properties: {
      id: {
        $ref: '#/components/schemas/id'
      },
      firstName: {
        $ref: '#/components/schemas/firstName'
      },
      lastName: {
        $ref: '#/components/schemas/lastName'
      },
      email: {
        $ref: '#/components/schemas/email'
      },
      createdAt: {
        $ref: '#/components/schemas/createdAt'
      },
      updatedAt: {
        $ref: '#/components/schemas/updatedAt'
      }
    }
  },
  Users: {
    type: 'object',
    properties: {
      users: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/User'
        }
      }
    }
  }
};
