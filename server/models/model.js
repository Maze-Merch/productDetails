const cassandra = require('cassandra-driver');
// Addresses for clusters (currently 3)
const contactPoints = ['localhost', 'localhost', 'localhost', 'localhost', 'localhost'];
const client = new cassandra.Client({ contactPoints, localDataCenter: 'datacenter1', keyspace: 'sidecountry' });

// EXAMPLE ONLY ! DB QUERY TO ADD/INSERT RECORD
const addProduct = (params, cb) => {
  const query = `INSERT INTO sidecountry.products ${params} VALUES (id, name, etc.)`;
  client.execute(query, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows);
    }
  });
};

// DB QUERY TO GET ALL PRODUCTS
const getProducts = (cb) => {
  const query = 'SELECT * FROM sidecountry.products';
  client.execute(query, (err, results) => {
    if (err) {
      cb(err);
    } else {
      // console.log(results.rows);
      cb(null, results.rows);
    }
  });
};

// DB QUERY TO GET PRODUCT
const getProduct = (params, cb) => {
  const query = `SELECT * FROM sidecountry.products WHERE id=${params}`;
  client.execute(query, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows);
    }
  });
};

// DB QUERY TO GET STYLE & PHOTOS
const getProductStyle = (params, cb) => {
  const query = `SELECT * FROM sidecountry.photos WHERE id=${params}`;
  client.execute(query, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows);
    }
  });
};

// EXAMPLE ONLY ! DB QUERY TO UPDATE RECORD
const editProduct = (params, cb) => {
  const query = `UPDATE sidecountry.products SET id = ${params + 5} WHERE id=${params}`;
  client.execute(query, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows);
    }
  });
};

// EXAMPLE ONLY ! DB QUERY TO DELETE RECORD
const removeProduct = (params, cb) => {
  const query = `DELETE * FROM sidecountry.products WHERE id=${params}`;
  client.execute(query, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows);
    }
  });
};

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  getProductStyle,
  editProduct,
  removeProduct,
};
