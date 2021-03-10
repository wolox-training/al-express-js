exports.userMockReq = {
  firstName: 'Andrés',
  lastName: 'López',
  email: 'test@wolox.co',
  password: 'sasa1234'
};

exports.userLoginMockReq = {
  email: 'test@wolox.co',
  password: 'sasa1234'
};

exports.userMockRes = {
  id: 5,
  firstName: 'Andrés',
  lastName: 'López',
  email: 'test@wolox.co',
  updatedAt: '2021-03-02T01:31:21.872Z',
  createdAt: '2021-03-02T01:31:21.872Z'
};

exports.usersListResMock = {
  count: 3,
  rows: [
    {
      id: 1,
      firstName: 'Andrés 1',
      lastName: 'López 1',
      email: 'test1@wolox.co',
      role: 'ADMIN',
      createdAt: '2021-03-02T01:48:29.471Z',
      updatedAt: '2021-03-02T01:48:29.471Z'
    },
    {
      id: 2,
      firstName: 'Andrés 2',
      lastName: 'López 2',
      email: 'test2@wolox.co',
      role: 'REGULAR',
      createdAt: '2021-03-02T02:37:47.442Z',
      updatedAt: '2021-03-02T02:37:47.442Z'
    },
    {
      id: 3,
      firstName: 'Andrés 3',
      lastName: 'López 3',
      email: 'test3@wolox.co',
      role: 'ADMIN',
      createdAt: '2021-03-02T11:22:20.015Z',
      updatedAt: '2021-03-02T11:22:20.015Z'
    }
  ]
};

exports.usersGetAllResMock = {
  count: 3,
  rows: [
    {
      id: 1,
      firstName: 'Andrés 1',
      lastName: 'López 1',
      email: 'test1@wolox.co',
      role: { id: 1, name: 'ADMIN' },
      createdAt: '2021-03-02T01:48:29.471Z',
      updatedAt: '2021-03-02T01:48:29.471Z'
    },
    {
      id: 2,
      firstName: 'Andrés 2',
      lastName: 'López 2',
      email: 'test2@wolox.co',
      role: { id: 2, name: 'REGULAR' },
      createdAt: '2021-03-02T02:37:47.442Z',
      updatedAt: '2021-03-02T02:37:47.442Z'
    },
    {
      id: 3,
      firstName: 'Andrés 3',
      lastName: 'López 3',
      email: 'test3@wolox.co',
      role: { id: 1, name: 'ADMIN' },
      createdAt: '2021-03-02T11:22:20.015Z',
      updatedAt: '2021-03-02T11:22:20.015Z'
    }
  ]
};

exports.passwordErrorByAllResponse = value => ({
  message: {
    errors: [
      { value, msg: 'password must be Alphanumerical', param: 'password', location: 'body' },
      { value, msg: 'password must have a minimum length of 8', param: 'password', location: 'body' }
    ]
  },
  internal_code: 'schema_error'
});

exports.passwordErrorByAlphaNumRes = value => ({
  message: {
    errors: [{ value, msg: 'password must be Alphanumerical', param: 'password', location: 'body' }]
  },
  internal_code: 'schema_error'
});

exports.passwordErrorByMinLengthRes = value => ({
  message: {
    errors: [{ value, msg: 'password must have a minimum length of 8', param: 'password', location: 'body' }]
  },
  internal_code: 'schema_error'
});

exports.signUpMandatoryParamsErrorRes = {
  message: {
    errors: [
      { value: '', msg: 'Key email must exist', param: 'email', location: 'body' },
      {
        value: '',
        msg:
          'Email must be valid and belong to @wolox.com.ar or @wolox.co or @wolox.cl or @wolox.com.mx domain',
        param: 'email',
        location: 'body'
      },
      { msg: 'password must be Alphanumerical', param: 'password', location: 'body' },
      { msg: 'password must have a minimum length of 8', param: 'password', location: 'body' },
      { msg: 'Key password must exist', param: 'password', location: 'body' }
    ]
  },
  internal_code: 'schema_error'
};

exports.loginMandatoryParamsErrorRes = {
  message: {
    errors: [
      { value: '', msg: 'Key email must exist', param: 'email', location: 'body' },
      {
        value: '',
        msg:
          'Email must be valid and belong to @wolox.com.ar or @wolox.co or @wolox.cl or @wolox.com.mx domain',
        param: 'email',
        location: 'body'
      },
      { msg: 'password must be Alphanumerical', param: 'password', location: 'body' },
      { msg: 'password must have a minimum length of 8', param: 'password', location: 'body' },
      { msg: 'Key password must exist', param: 'password', location: 'body' }
    ]
  },
  internal_code: 'schema_error'
};

exports.tokenMissingErrorMock = {
  message: {
    errors: [
      {
        value: '',
        msg: 'Key Authorization header for token must exist',
        param: 'authorization',
        location: 'headers'
      },
      {
        value: '',
        msg: 'Key Authorization header for token must exist',
        param: 'authorization',
        location: 'headers'
      }
    ]
  },
  internal_code: 'schema_error'
};

exports.userGetByIdResponseMock = (email = 'test@wolox.co') => ({
  id: 5,
  firstName: 'Andrés',
  lastName: 'López',
  email,
  role: { id: 1, name: 'ADMIN' },
  password: '$2a$08$pM39BJwsvPO6jtpvetg0XOBsBDtkYfZTY4g/oXz47CQXcmnJJJ7ha',
  createdAt: '2021-03-02T01:31:21.872Z',
  updatedAt: '2021-03-02T01:31:21.872Z',
  deletedAt: null
});

exports.tokenMock =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNjE0NjkyNzM1LCJleHAiOm51bGx9.x4fEGfZHJ-eCnqZQoENLbt6Kg3qG6cccJ5Bs4CxqcWY';

exports.userLoginResponseMock = (email = 'test@wolox.co') => ({
  id: 5,
  firstName: 'Andrés',
  lastName: 'López',
  email,
  role: 'ADMIN',
  createdAt: '2021-03-02T01:31:21.872Z',
  updatedAt: '2021-03-02T01:31:21.872Z',
  accessToken: 'a token!'
});
