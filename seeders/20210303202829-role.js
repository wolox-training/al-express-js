'use strict';

const { roles } = require('./seed/roles');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('roles', roles);
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
