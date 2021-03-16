const request = require('../helpers/request');
const logger = require('../logger');
const config = require('../../config');
const { albumsSerializer, photosSerializer, albumSerializer } = require('../serializers/albums');

const JPH_API_BASE_URL = config.common.jsonPlaceHolderApi.baseUrl;

exports.getAlbums = () => {
  logger.info('Requesting albums to JsonPlaceHolder API...');
  return request({
    baseUrl: JPH_API_BASE_URL,
    method: 'GET',
    path: '/albums'
  }).then(albumsSerializer);
};

exports.getAlbumById = id => {
  logger.info('Requesting albumById to JsonPlaceHolder API...');
  return request({
    baseUrl: JPH_API_BASE_URL,
    method: 'GET',
    path: `/albums/${id}`
  }).then(albumSerializer);
};

exports.getPhotos = id => {
  logger.info('Requesting photos to JsonPlaceHolder API...');

  return request({
    baseUrl: JPH_API_BASE_URL,
    method: 'GET',
    path: `/albums/${id}/photos`
  }).then(photosSerializer);
};
