const axios = require('axios');
const errors = require('../errors');

const buildRequest = ({ baseUrl, path = '', method, headers, data, params }) => ({
  method,
  url: `${baseUrl}${path}`,
  headers,
  data,
  params
});

module.exports = options =>
  axios(buildRequest(options))
    .then(info => info.data)
    .catch(error => {
      throw errors.axiosError(error.message);
    });
