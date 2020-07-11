const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');

// const router = require('./routes');
// const model = require('./model/product');

const app = express();
const port = 3001;
app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());
app.use(express.static('public'));

// app.use('/products', router);

app.get('/products', async (req, res) => {
  const { productID } = req.query;
  console.log('productID', productID);
  const { rows } = await db.query('SELECT * FROM product WHERE id = $1', [productID]);
  res.send(rows);
});
// app.get('/', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
