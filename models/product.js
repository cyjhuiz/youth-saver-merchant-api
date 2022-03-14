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
    name: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    price: {
      type: FLOAT,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    description: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    imageUrl: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
    merchant: {
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
    websiteUrl: {
      type: STRING,
      autoIncrement: false,
      allowNull: false,
      primaryKey: false,
    },
  },
  sequelizeConfig
);

module.exports = Product;
