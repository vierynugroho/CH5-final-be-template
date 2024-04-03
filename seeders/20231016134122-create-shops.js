"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shops", [
      {
        name: "Toko Imam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Syifa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Jordhy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Fajrin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Adella",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shops", null, {});
  },
};
