const bcrypt = require('bcryptjs');
const logger = require('../logger');
const errors = require('../errors');
const UserRepository = require('../repositories/users');
const { userSerializer } = require('../serializers/users');
const { passwordSalt } = require('../../config').encryption;

const userRepository = new UserRepository();

const signUp = async body => {
  try {
    await userRepository.existBy({ email: body.email }, 'and', true);

    // eslint-disable-next-line require-atomic-updates
    body.password = bcrypt.hashSync(body.password, passwordSalt);

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

module.exports = {
  signUp
};
