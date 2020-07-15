const router = require('express').Router();
const productControllers = require('../controller/pgController');

router.get('/products', productControllers.getProductById);
router.get('/products/styles', productControllers.getImagesById);
router.get('/reviews', productControllers.getReviewsById);

module.exports = router;
