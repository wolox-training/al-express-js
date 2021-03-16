'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('albums', {
      id: { type: Sequelize.BIGINT, allowNull: false },
      title: { type: Sequelize.STRING, allowNull: false }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('albums');
  }
};
