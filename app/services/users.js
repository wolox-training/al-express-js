const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const logger = require('../logger');
const errors = require('../errors');
const UserRepository = require('../repositories/users');
const { secretKey, expHours } = require('../../config').common.jwt;
const { addHours, timestamp } = require('../helpers/timestamp');
const { userSerializer } = require('../serializers/users');
const { passwordSalt } = require('../../config').common.encryption;

const userRepository = new UserRepository();

const signUp = async body => {
  try {
    await userRepository.existBy({ email: body.email }, 'and', true);
    // eslint-disable-next-line require-atomic-updates
    body.password = bcrypt.hashSync(body.password, parseInt(passwordSalt));

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
    const token = jwt.encode({ sub: user.id, iat, exp }, secretKey);

    return {
      ...userSerializer(user),
      accessToken: token
    };
  } catch (error) {
    logger.error('Error when was trying to login: ', error.message);
    throw error;
  }
};

module.exports = {
  signUp,
  login
};
