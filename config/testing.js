exports.config = {
  environment: 'testing',
  isTesting: true,
  common: {
    database: {
      name: process.env.DB_NAME_TEST
    },
    session: {
      secret: 'aSecret',
      expHours: 1
    },
    jsonPlaceHolderApi: {
      baseUrl: 'dummyUrl'
    }
  }
};
