exports.config = {
  environment: 'production',
  common: {
    database: {
      name: process.env.DB_NAME
    },
    session: {
      secret: process.env.SESSION_SECRET,
      expTimeSeconds: parseInt(process.env.SESSION_EXP_TIME_SECONDS)
    },
    jsonPlaceHolderApi: {
      baseUrl: process.env.JSON_PLACE_HOLDER_API_BASE_URL
    },
    availableDomains: process.env.AVAILABLE_DOMAINS
  },
  isProduction: true
};
