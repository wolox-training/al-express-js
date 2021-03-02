exports.config = {
  environment: 'testing',
  isTesting: true,
  common: {
    database: {
      name: process.env.DB_NAME_TEST
    },
    jwt: {
      secretKey: 'aSecret',
      expHours: 1
    },
    jsonPlaceHolderApi: {
      baseUrl: 'dummyUrl'
    },
    encryption: {
      passwordSalt: 1
    }
  }
};
