const request = require('../helpers/request');
const logger = require('../logger');

const JPHApiPath = 'https://jsonplaceholder.typicode.com';

exports.getAlbums = () => {
  logger.info('Requesting albums to JsonPlaceHolder API...');

  return request({
    url: JPHApiPath,
    method: 'GET',
    path: '/albums'
  });
};

exports.getPhotos = () => {
  logger.info('Requesting photos to JsonPlaceHolder API...');

  return request({
    url: JPHApiPath,
    method: 'GET',
    path: '/photos'
  });
};
