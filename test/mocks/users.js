exports.userMockReq = {
  firstName: 'Andrés',
  lastName: 'López',
  email: 'test1@wolox.co',
  password: 'sasa1234'
};

exports.userMockRes = {
  id: 5,
  firstName: 'Andrés',
  lastName: 'López',
  email: 'test1@wolox.co',
  updatedAt: '2021-03-02T01:31:21.872Z',
  createdAt: '2021-03-02T01:31:21.872Z'
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

exports.mandatoryParamsErrorResponse = {
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
