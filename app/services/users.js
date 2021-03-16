const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logger = require('../logger');
const errors = require('../errors');
const UserRepository = require('../repositories/users');
const AlbumRepository = require('../repositories/albums');
const { secret, expTimeSeconds } = require('../../config').common.session;
const { userSerializer, usersSerializer } = require('../serializers/users');
const { PASSWORD_SALT } = require('../utils/constants');
const { getAlbumById } = require('./albums');
const { albumMapper } = require('../mappers/albums');

const userRepository = new UserRepository();
const albumRepository = new AlbumRepository();

const signUp = async body => {
  try {
    await userRepository.existBy({ email: body.email }, 'and', true);
    // eslint-disable-next-line require-atomic-updates
    body.password = bcrypt.hashSync(body.password, PASSWORD_SALT);

    const user = await userRepository.save(body);
    if (!user) {
      throw errors.databaseError('Unknown error when was attempting to save the user');
    }
    logger.info(`User ${user.firstName} has been created!`);

    return userSerializer(user);
  } catch (error) {
    logger.error('Error when was trying to create the user: ', error.message);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const user = await userRepository.getBy({ email });

    if (!user) {
      logger.error(`User with email ${email} does not exist`);
      throw errors.schemaError('Username or password are incorrect');
    }
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      logger.error('Password is incorrect');
      throw errors.schemaError('Username or password are incorrect');
    }

    const token = jwt.sign({ sub: user.id }, secret, { expiresIn: expTimeSeconds });

    return {
      ...userSerializer(user),
      accessToken: token
    };
  } catch (error) {
    logger.error('Error when was trying to login: ', error.message);
    throw error;
  }
};

const getAll = async query => {
  try {
    const users = await userRepository.getAll(query);
    logger.info('Users list obtained!');

    return await usersSerializer(users);
  } catch (error) {
    logger.error('Error when was trying to list the users: ', error.message);
    throw error;
  }
};
const addAlbum = async req => {
  try {
    const userId = parseInt(req.userId);
    const albumId = parseInt(req.params.id);
    const user = await userRepository.getBy({ id: userId });

    if (!user) {
      logger.error(`User with id ${userId} does not exist`);
      throw errors.schemaError('User does not exist!');
    }

    const alreadySaved = user.toJSON().albums.find(item => parseInt(item.id) === albumId);
    if (alreadySaved) {
      logger.error(`Album '${alreadySaved.title}' already saved!`);
      throw errors.albumError(`Album '${alreadySaved.title}' already saved!`);
    }

    const album = await getAlbumById(albumId);
    if (!album) {
      logger.error('Password is incorrect');
      throw errors.albumError('Album to save does not exist!');
    }

    return await albumRepository.save(albumMapper(album, userId));
  } catch (error) {
    logger.error('Error when was trying to add an album for an user ', error.message);
    throw error;
  }
};

module.exports = {
  signUp,
  login,
  getAll,
  addAlbum
};
