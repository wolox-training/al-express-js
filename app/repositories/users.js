const errors = require('../errors');
const db = require('../models');
const logger = require('../logger');

const queryBuilder = (attributes, searchOp = 'and') => {
  const { Op } = db.Sequelize;
  const attributesToFilter = {};

  Object.keys(attributes).forEach(key => {
    if (!attributes[key]) return;
    if (key === 'id') attributesToFilter[key] = { [Op.eq]: attributes[key] };
    else attributesToFilter[key] = attributes[key];
  });

  if (Object.keys(attributesToFilter).length > 0) return { [Op[searchOp]]: attributesToFilter };

  return attributesToFilter;
};

class UserRepository {
  constructor() {
    this.User = db.User;
  }

  async save(user) {
    try {
      return (await this.User.create(user)).toJSON();
    } catch (error) {
      logger.error('Error when was trying to create a new user: ', error.message);
      throw errors.databaseError('Unknown error when was trying to create the user');
    }
  }

  async getBy(attributes, searchOp = 'or') {
    const instructions = { ...queryBuilder(attributes, searchOp) };
    return (await this.User.findOne({ where: instructions })).toJSON();
  }

  async existBy(attributes, searchOp = 'or', errIfExists = false) {
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
