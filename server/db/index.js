const { Pool } = require('pg');

const pool = new Pool({
  host: '/var/run/postgresql',
  user: 'postgres',
  password: 'p4j4m4sII!',
  database: 'product_details',
});
pool
  .connect()
  .then(() => console.log('Connected after grays'))
  .catch((err) => console.error('connection error', err.stack));

module.exports = {
  query: (text, params) => pool.query(text, params),
};
