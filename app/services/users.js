const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const logger = require('../logger');
const errors = require('../errors');
const UserRepository = require('../repositories/users');
const { secret, expHours } = require('../../config').common.session;
const { addHours, timestamp } = require('../helpers/timestamp');
const { userSerializer, usersSerializer } = require('../serializers/users');
const { PASSWORD_SALT } = require('../utils/constants');

const userRepository = new UserRepository();

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
      logger.info(`User with email ${email} does not exist`);
      throw errors.schemaError('Username or password are incorrect');
    }
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      logger.error('Password is incorrect');
      throw errors.schemaError('Username or password are incorrect');
    }

    const iat = Math.round(timestamp());
    const exp = Math.round(addHours(expHours));
    const token = jwt.encode({ sub: user.id, iat, exp }, secret);

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
    const users = userRepository.getAll(query);
    logger.info('Users list obtained!');

    return await usersSerializer(users);
  } catch (error) {
    logger.error('Error when was trying to list the users: ', error.message);
    throw error;
  }
};

module.exports = {
  signUp,
  login,
  getAll
};
