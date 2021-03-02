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
    this.User = db.users;
  }

  async save(user) {
    try {
      return (await this.User.create(user)).toJSON();
    } catch (error) {
      logger.error('Error when was trying to create a new user: ', error.message);
      throw errors.databaseError('Unknown when was trying to create the user');
    }
  }

  async existBy(attributes, searchOp, errIfExists = false) {
    const instructions = { ...queryBuilder(attributes, searchOp) };
    const exists = (await this.User.count({ where: instructions })) !== 0;
    if (errIfExists && exists) {
      const messageAttributes = Object.keys(attributes).join(', or ');
      logger.error(`${messageAttributes} already exist`);
      throw errors.schemaError(`${messageAttributes} already exist`);
    }
    return exists;
  }
}

module.exports = UserRepository;
