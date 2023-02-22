'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: '00150416-6d77-4912-8e4f-118f49c70970',
        full_name: 'John Lenon',
        username: 'john123',
        email: 'john123@gmail.com',
        password: '1234567s',
        role: 'admin',
      },
      {
        id: '2e915013-5ba5-4cfe-9b40-b98f8c814af4',
        full_name: 'Beatriz Rasmus',
        username: 'beatriz99',
        email: 'beatriz_rasmus@gmail.com',
        password: 'finland1994',
        role: 'user',
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
