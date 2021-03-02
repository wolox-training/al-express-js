const { forIn, isUndefined, isEqual, isEmpty } = require('lodash');
const errors = require('../errors');
const db = require('../models');
const logger = require('../logger');

const queryBuilder = (attributes, searchOp = 'and') => {
  const { Op } = db.Sequelize;
  const attributesToFilter = {};
  forIn(attributes, (value, key) => {
    if (isUndefined(value)) return;
    if (isEqual(key, 'id')) attributesToFilter[key] = { [Op.eq]: value };
    else attributesToFilter[key] = value;
  });
  if (!isEmpty(attributesToFilter)) return { [Op[searchOp]]: attributesToFilter };
  return attributesToFilter;
};

class UserRepository {
  constructor() {
    this.User = db.User;
  }

  async save(user) {
    try {
      const newUser = await this.User.create(user);
      delete newUser.dataValues.password;
      delete newUser.dataValues.deletedAt;
      return newUser.toJSON();
    } catch (error) {
      logger.error('Error when was trying to create a new user: ', error.message);
      throw errors.databaseError('Unknown error when was trying to create the user');
    }
  }

  async existBy(attributes, searchOp, errIfExists = false) {
    const instructions = { ...queryBuilder(attributes, searchOp) };
    const exists = (await this.User.count({ where: instructions })) !== 0;
    if (errIfExists && exists) {
      const messageAttributes = Object.keys(attributes).join(', or ');
      logger.error(`${messageAttributes} already exist`);
      if (Object.keys(attributes).length === 1) {
        throw errors.schemaError(`${messageAttributes} already exists`);
      }
      throw errors.schemaError(`${messageAttributes} already exist`);
    }
    return exists;
  }
}

module.exports = UserRepository;
