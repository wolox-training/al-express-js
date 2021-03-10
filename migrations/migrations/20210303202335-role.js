'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles', {
      id: { type: Sequelize.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false }
    });

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
    await queryInterface.dropTable('roles');
  }
};
