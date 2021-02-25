const request = require('../helpers/request');
const logger = require('../logger');
const config = require('../../config');
const { albumsSerializer } = require('../serializers/album');
const { albumPhotosSerializer } = require('../serializers/albumPhoto');

const JPH_API_BASE_URL = config.jsonPlaceHolderApi.baseUrl;

exports.getAlbums = () => {
  logger.info('Requesting albums to JsonPlaceHolder API...');

  return request({
    baseUrl: JPH_API_BASE_URL,
    method: 'GET',
    path: '/albums'
  }).then(albumsSerializer);
};

exports.getPhotos = () => {
  logger.info('Requesting photos to JsonPlaceHolder API...');

  return request({
    baseUrl: JPH_API_BASE_URL,
    method: 'GET',
    path: '/photos'
  }).then(albumPhotosSerializer);
};
