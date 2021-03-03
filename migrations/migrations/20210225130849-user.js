'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
      first_name: { type: Sequelize.STRING, allowNull: true },
      last_name: { type: Sequelize.STRING, allowNull: true },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      created_at: { allowNull: false, type: Sequelize.DATE },
      updated_at: { allowNull: false, type: Sequelize.DATE },
      deleted_at: { allowNull: true, type: Sequelize.DATE }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  }
};
