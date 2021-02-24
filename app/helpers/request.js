const axios = require('axios');
const { errors } = require('../errors');

const buildRequest = ({ url, path = '', method, headers, data, params }) => ({
  method,
  url: `${url}${path}`,
  headers,
  data,
  params
});

module.exports = options =>
  axios(buildRequest(options))
    .then(info => info.data)
    .catch(error => {
      const { statusText } = error.response;
      const message = error.response.data.error;
      throw errors.axiosError(message, statusText);
    });
