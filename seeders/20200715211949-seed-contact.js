'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Contacts',[
          {
            firstname: 'Nelson',
            lastname: 'Carabali',
            phone: '203 202 120',
            email: 'ncara@int.com.co',
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString()
          },
          {
            firstname: 'Alejo',
            lastname: 'Diaz',
            phone: '203 567 123',
            email: 'adiaz@int.com.co',
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString()
          }


      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
