const errors = require('../errors');
const db = require('../models');
const logger = require('../logger');

class AlbumRepository {
  constructor() {
    this.Album = db.Album;
    this.User = db.User;
  }

  async save(album) {
    try {
      return (await this.Album.create(album)).toJSON();
    } catch (error) {
      logger.error('Error when was trying to create a new album for an user: ', error.message);
      throw errors.databaseError('Unknown error when was trying to create a new album for an user');
    }
  }
}

module.exports = AlbumRepository;
