const router = require('express').Router();
const productControllers = require('../controller/pgController');

router.get('/', productControllers.getProductById);

module.exports = router;
