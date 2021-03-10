const bcrypt = require('bcryptjs');
const { PASSWORD_SALT } = require('../../app/utils/constants');

const users = [
  {
    first_name: 'Andrés',
    last_name: 'López',
    email: 'andres.lopez@wolox.co',
    password: bcrypt.hashSync('pass1111', PASSWORD_SALT),
    role_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null
  }
];

module.exports = { users };
