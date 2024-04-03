"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Shop, {
        foreignKey: {
          name: "shopId",
        },
      });

      Product.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      imageUrl: DataTypes.ARRAY(DataTypes.TEXT),
      userId: {
        type: DataTypes.INTEGER,
      },
      shopId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
