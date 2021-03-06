'use strict';
require('dotenv').config();

const bcrypt = require('bcryptjs');
const bcryptSalt = process.env.BCRYPT_SALT;

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', { id: 1 }, {});
    let adminPassword = '123';
    adminPassword = await bcrypt.hash(adminPassword, Number(bcryptSalt));

    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'SuperAdmin',
          email: 'admin@gmail.com',
          password: adminPassword,
          mobile: '7980657255',
        },
        {
          id: 2,
          name: 'User',
          email: 'demo@gmail.com',
          password: adminPassword,
          mobile: '8758566854',
        },
        {
          id: 3,
          name: 'Dishen',
          email: 'dishen@gmail.com',
          password: adminPassword,
          mobile: '8758566854',
        },
        {
          id: 4,
          name: 'Darsh',
          email: 'darsh@gmail.com',
          password: adminPassword,
          mobile: '8758566854',
        },
        {
          id: 5,
          name: 'Deep',
          email: 'deep@gmail.com',
          password: adminPassword,
          mobile: '8758566854',
        },
        {
          id: 6,
          name: 'D',
          email: 'd@gmail.com',
          password: adminPassword,
          mobile: '8758566854',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
