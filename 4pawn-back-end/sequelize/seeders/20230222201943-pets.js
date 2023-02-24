'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Pets', [
      {
        id: '7fa08c59-1e73-402e-9545-0b039a76b4c3',
        name: 'Troco',
        age: 1,
        image:
          'https://conteudo.imguol.com.br/c/entretenimento/28/2022/10/28/gato-preto-1666974144631_v2_3x4.jpg',
        weight: 2,
        color: 'black',
        adopted: false,
      },
      {
        id: '0ba80dba-80c9-4f5a-bb96-7b6a79d8f684',
        name: 'Dendê',
        age: 1,
        image:
          'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
        weight: 3,
        color: 'tabby',
        adopted: false,
      },
      {
        id: '655abccc-8095-4a61-b66b-92b51d960898',
        name: 'Lina',
        age: 3,
        image:
          'https://recursos.tudodebicho.com.br/i/guiaderacas/gato-siames/gato-siames-jovem.jpg',
        weight: 4,
        color: 'siamese',
        adopted: false,
      },
      {
        id: 'f5d5a67f-0997-4441-a4bf-07b61fee4497',
        name: 'Morgana',
        age: 1,
        image:
          'https://www.premierpet.com.br/wp-content/uploads/2020/10/banner-gato-3.jpg',
        weight: 3,
        color: 'gray',
        adopted: true,
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Pets', null, {});
  },
};
