// const Router = require('express-promise-router');
const db = require('../db');
// // const model = require('../model/product');

// const router = new Router();
// module.exports = router;

// router.get('/:productID', async (req, res) => {
//   // const { productID } = req.params;
//   // console.log('id', productID);
//   // const { rows } = await db.query('SELECT * FROM public.product WHERE id = $2', [productID]);
//   // res.send(rows[0]);
// });

// const model = require('../model/product');

const getProductById = async (req, res) => {
  const { productID } = req.query;
  const { rows } = await db.query('SELECT * FROM public.product WHERE id = $1', [productID]);
  res.send(rows);
};
module.exports = getProductById;
