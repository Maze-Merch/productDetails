const products = require('./product');

module.exports = (app) => {
  app.use('/products', products);
};
