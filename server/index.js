const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');
const Router = require('./router/index');

const app = express();
const port = 3001;
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());

app.use('/', Router);

app.post('/products', async (req, res) => {
  const { productID } = req.query;
  const { rows } = await db.query('INSERT INTO product(id, slogan) VALUES ($1, cheese)', [productID]);
  res.send(rows);
});

app.delete('/products', async (req, res) => {
  const { productID } = req.query;
  const { rows } = await db.query('DELETE FROM product WHERE id = $1', [productID]);
  res.send(rows);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
