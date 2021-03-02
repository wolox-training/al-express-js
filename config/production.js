exports.config = {
  environment: 'production',
  common: {
    database: {
      name: process.env.DB_NAME
    },
    session: {
      secret: process.env.SESSION_SECRET,
      expHours: process.env.SESSION_EXP_HOURS
    },
    jsonPlaceHolderApi: {
      baseUrl: process.env.JSON_PLACE_HOLDER_API_BASE_URL
    }
  },
  isProduction: true
};
