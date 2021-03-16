'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .addColumn('albums', 'user_id', {
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
      .then(() =>
        queryInterface.addConstraint('albums', ['id', 'user_id'], { type: 'primary key', name: 'albums_pk' })
      );
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('albums', 'user_id');
  }
};
