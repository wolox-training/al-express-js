const errors = require('../errors');
const db = require('../models');
const logger = require('../logger');
const { DEFAULT_LIMIT, DEFAULT_OFFSET } = require('../utils/constants');

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
    this.Role = db.Role;
    this.Album = db.Album;
    this.foreignKeyObjects = [
      { model: this.Role, as: 'role' },
      { model: this.Album, as: 'albums' }
    ];
  }

  async save(user) {
    try {
      return (await this.User.create(user)).toJSON();
    } catch (error) {
      logger.error('Error when was trying to create a new user: ', error.message);
      throw errors.databaseError('Unknown error when was trying to create the user');
    }
  }

  async getAll(query) {
    const offset = (parseInt(query.page) - 1) * parseInt(query.size) || DEFAULT_OFFSET;
    const limit = parseInt(query.size) || DEFAULT_LIMIT;
    try {
      return await this.User.findAndCountAll({ offset, limit, include: this.foreignKeyObjects });
    } catch (error) {
      logger.error('Error when was trying to list the users: ', error.message);
      throw errors.databaseError('Unknown error when was trying to list the users');
    }
  }

  async getBy(attributes, searchOp = 'or') {
    const instructions = { ...queryBuilder(attributes, searchOp) };
    const user = await this.User.findOne({ where: instructions, include: this.foreignKeyObjects });
    return user;
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
