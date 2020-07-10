// noSQL DB: Cassandra
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ })
// create the keyspace (database)
CREATE KEYSPACE IF NOT EXISTS sidecountry
WITH REPLICATION={'class': 'SimpleStrategy', 'replication_factor': '3'};

// create the table
CREATE TABLE products(
  id INT PRIMARY KEY,
  category TEXT,
  default_price VARINT,
  description TEXT,
  name TEXT,
  rating INT,
  slogan TEXT,
);

// when copying data from CSV seed file
COPY sidecountry.products FROM 'productsDBSeed.csv' WITH DELIMITER=',' AND HEADER=TRUE;
// SQL DB: postgres