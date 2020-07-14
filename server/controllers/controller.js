const model = require('../models/model.js');

// INSERT/ADD PRODUCT
const addProduct = (req, res) => {
  model.addProduct(req.query.productID, (err, results) => {
    if (err) {
      res.status(500).send({ mes: err });
    } else {
      res.status(200).json({
        results,
      });
    }
  });
};

// GET ALL PRODUCTS
const getProducts = (req, res) => {
  model.getProducts((err, results) => {
    if (err) {
      res.status(500).send({ mes: err });
    } else {
      res.status(200).json({
        results,
      });
    }
  });
};

// GET SINGLE PRODUCT
const getProduct = (req, res) => {
  model.getProduct(req.query.productID, (err, results) => {
    if (err) {
      res.status(500).send({ mes: err });
    } else {
      res.status(200).json({
        results,
      });
    }
  });
};

// GET SINGLE PRODUCT STYLE (pictures)
const getProductStyle = (req, res) => {
  model.getProductStyle(req.query.productID, (err, results) => {
    if (err) {
      res.status(500).send({ mes: err });
    } else {
      res.status(200).json({
        results,
      });
    }
  });
};

// UPDATE PRODUCT
const editProduct = (req, res) => {
  model.editProduct(req.query.productID, (err, results) => {
    if (err) {
      res.status(500).send({ mes: err });
    } else {
      res.status(200).json({
        results,
      });
    }
  });
};

// DELETE/REMOVE PRODUCT
const removeProduct = (req, res) => {
  model.removeProduct(req.query.productID, (err, results) => {
    if (err) {
      res.status(500).send({ mes: err });
    } else {
      res.status(200).json({
        results,
      });
    }
  });
};

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  getProductStyle,
  editProduct,
  removeProduct,
};
