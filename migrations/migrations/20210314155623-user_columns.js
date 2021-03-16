'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'role_id', {
      type: Sequelize.BIGINT,
      references: {
        model: 'roles',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('users', 'role_id');
  }
};
