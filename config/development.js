exports.config = {
  environment: 'development',
  common: {
    database: {
      name: process.env.DB_NAME_DEV
    },
    jsonPlaceHolderApi: {
      baseUrl: process.env.JSON_PLACE_HOLDER_API_BASE_URL
    },
    encryption: {
      passwordSalt: process.env.PASSWORD_SALT
    }
  },
  isDevelopment: true
};
