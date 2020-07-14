const express = require('express');
const cors = require('cors');
const router = require('./routes/route.js');

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/products', router);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
