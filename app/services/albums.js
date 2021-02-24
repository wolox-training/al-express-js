const request = require('../helpers/request');
const logger = require('../logger');

const JPH_API_PATH = process.env.JSON_PLACE_HOLDER_API_PATH;

exports.getAlbums = () => {
  logger.info('Requesting albums to JsonPlaceHolder API...');

  return request({
    url: JPH_API_PATH,
    method: 'GET',
    path: '/albums'
  });
};

exports.getPhotos = () => {
  logger.info('Requesting photos to JsonPlaceHolder API...');

  return request({
    url: JPH_API_PATH,
    method: 'GET',
    path: '/photos'
  });
};
