const { INTEGER, FLOAT, STRING } = require("sequelize");

const { sequelize } = require("../util/database");

const sequelizeConfig = { timestamps: false };

const Product = sequelize.define(
  "product",
  {
    productID: {
      type: INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    productName: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    productPrice: {
      type: FLOAT,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    productDescription: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    productImageUrl: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    productMerchant: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    outletLocation: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    merchantStoreUrl: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
  },
  sequelizeConfig
);

module.exports = Product;
