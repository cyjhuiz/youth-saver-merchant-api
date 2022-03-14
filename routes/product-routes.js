const express = require("express");

const {
  getAllProducts,
  getProductByID,
} = require("../controllers/product-controllers");

const router = express.Router();

router.get("/product", getAllProducts);

router.get("/product/:productID", getProductByID);

module.exports = router;
