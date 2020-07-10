const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'p4j4m4sII!',
  database: 'product_details',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
