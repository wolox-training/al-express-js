exports.config = {
  environment: 'testing',
  isTesting: true,
  common: {
    database: {
      name: process.env.DB_NAME_TEST
    },
    session: {
      secret: 'aSecret',
      expTimeSeconds: 1
    },
    jsonPlaceHolderApi: {
      baseUrl: 'dummyUrl'
    },
    availableDomains: process.env.AVAILABLE_DOMAINS
  }
};
