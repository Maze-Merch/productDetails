const db = require('../db');

module.exports = {

  getProductById: (productID) => {
    const sqlString = 'SELECT id,style_id,name,slogan,description,original_price,sale_price,skus FROM product WHERE id = $1';
    return db.query(sqlString, [productID]);
  },

  getReviewsById: (productID) => {
    const sqlString = 'SELECT reviews FROM product WHERE id = $1';
    return db.query(sqlString, [productID]);
  },

  getImagesById: (productID) => {
    const sqlString = 'SELECT photos FROM product WHERE id = $1';
    return db.query(sqlString, [productID]);
  },
};
