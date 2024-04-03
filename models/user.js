"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Auth, {
        foreignKey: {
          name: "userId",
        },
      });

      User.belongsTo(models.Shop, {
        foreignKey: {
          name: "shopId",
        },
      });

      User.hasMany(models.Product, {
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      role: {
        type: DataTypes.ENUM(["Owner", "Staff"]),
        defaultValue: "Staff",
      },
      address: DataTypes.STRING,
      imageUrl: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
      },
      shopId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
