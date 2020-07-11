const db = require('../db');

// module.exports = {
//   app.get('api/products/:product_id', async (req, res) => {
//     const { product_id } = req.params;
//     const { rows } = await db.query('SELECT * FROM product WHERE id = $1', [product_id]);
//     res.send(rows[0]);
//   });
// };

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM product WHERE id = $1', [id]);
  res.send(rows[0]);
};

module.exports = getProductsById;
