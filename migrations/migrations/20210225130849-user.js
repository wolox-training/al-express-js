'use strict';

const { UUIDV4 } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
      firstName: { type: Sequelize.STRING, allowNull: true, field: 'first_name' },
      lastName: { type: Sequelize.STRING, allowNull: true, field: 'last_name' },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      createdAt: { allowNull: false, type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { allowNull: false, type: Sequelize.DATE, field: 'updated_at' }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  }
};
