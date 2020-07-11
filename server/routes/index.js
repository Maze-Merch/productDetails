const Router = require('express-promise-router');
const controller = require('../controller/productController');

// const model = require('../model/product');

const router = new Router();

router.get('/:productID', controller.getProductById);
module.exports = router;
