exports.config = {
  environment: 'production',
  common: {
    database: {
      name: process.env.DB_NAME
    },
    jsonPlaceHolderApi: {
      baseUrl: process.env.JSON_PLACE_HOLDER_API_BASE_URL
    },
    encryption: {
      passwordSalt: process.env.PASSWORD_SALT
    }
  },
  isProduction: true
};
