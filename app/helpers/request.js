const axios = require('axios');
const https = require('https');
const { errors } = require('../errors');

const buildRequest = ({ url, path = '', method, headers, data, params }) => ({
  method,
  url: `${url}${path}`,
  headers,
  data,
  params,
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

module.exports = options =>
  axios(buildRequest(options))
    .then(info => info.data)
    .catch(e => {
      const { status, statusText } = e.response;
      const message = e.response.data.error;
      throw errors.axiosError(message, statusText, status);
    });
