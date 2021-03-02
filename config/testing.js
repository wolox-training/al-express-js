exports.config = {
  environment: 'testing',
  isTesting: true,
  common: {
    database: {
      name: process.env.DB_NAME_TEST
    },
    jsonPlaceHolderApi: {
      baseUrl: 'dummyUrl'
    },
    session: {
      secret: 'some-super-secret'
    },
    encryption: {
      passwordSalt: 1
    }
  }
};
