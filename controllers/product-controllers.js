const Product = require("../models/product");

const { sequelize } = require("../util/database");

const HttpError = require("../models/http-error");

const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.findAll();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find products.",
      500
    );
    return next(error);
  }

  return res.status(200).json({
    code: 200,
    products: products,
  });
};

const getProductByID = async (req, res, next) => {
  const productID = req.params.productID;
  let product;
  try {
    product = await Product.findByPk(productID);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find product",
      500
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      "Could not find product using id provided",
      404
    );
    return next(error);
  }

  return res.status(200).json({
    code: 200,
    product: product,
  });
};

exports.getAllProducts = getAllProducts;
exports.getProductByID = getProductByID;
