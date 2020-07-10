const Router = require('express-promise-router');

const db = require('../db');

const router = new Router();

module.exports = router;

router.get('api/products/:product_id', async (req, res) => {
  const { product_id } = req.params;
  const { rows } = await db.query('SELECT * FROM product WHERE id = $1', [product_id]);
  res.send(rows[0]);
});
