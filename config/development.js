exports.config = {
  environment: 'development',
  common: {
    database: {
      name: process.env.DB_NAME_DEV
    },
    jwt: {
      secretKey: process.env.JWT_SECRET_KEY,
      expHours: process.env.JWT_EXP_HOURS
    },
    jsonPlaceHolderApi: {
      baseUrl: process.env.JSON_PLACE_HOLDER_API_BASE_URL
    }
  },
  isDevelopment: true
};
