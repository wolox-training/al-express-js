'use strict';

const { UUIDV4 } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
      firstName: { type: Sequelize.STRING, allowNull: true },
      lastName: { type: Sequelize.STRING, allowNull: true },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  }
};
