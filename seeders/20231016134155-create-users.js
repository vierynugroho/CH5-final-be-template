"use strict";

const { Shop, User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const shops = await Shop.findAll();

    await queryInterface.bulkInsert("Users", [
      {
        name: "Imam",
        address: "Bandung",
        age: 24,
        role: "Owner",
        shopId: shops[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Syifa",
        address: "Yogya",
        age: 34,
        role: "Owner",
        shopId: shops[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jordhy",
        address: "Mars",
        age: 121,
        role: "Owner",
        shopId: shops[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fajrin",
        address: "Komodo Island",
        age: 10,
        role: "Owner",
        shopId: shops[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adella",
        address: "Amerika",
        age: 35,
        role: "Owner",
        shopId: shops[4].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const users = await User.findAll();

    await queryInterface.bulkInsert(
      "Auths",
      [
        {
          email: "imam@mail.com",
          password:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          userId: users[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "syifa@mail.com",
          password:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          userId: users[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jordhy@mail.com",
          password:
            "$2a$12$DEYdP8xu/3y8Gq0fVx1we.IArBAJW8EMEhrzA9mC8M9xOxsb/DrDm",
          userId: users[2].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "fajrin@mail.com",
          password:
            "$2a$12$PSRKkLdltfqePXnr5Q8bLOktu43ob1XxoxHuRqlXbvP6FcgoBMgR2",
          userId: users[3].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "adella@mail.com",
          password:
            "$2a$12$.bra7MxjtVng08xRdnyExerrJ2Znpg2TGMLW9O9zZ3cDR/PFrqoqW",
          userId: users[4].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
