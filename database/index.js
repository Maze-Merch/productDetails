// noSQL DB: Cassandra
const assert = require('assert');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ });

// create the keyspace (database)
DROP KEYSPACE IF EXISTS sidecountry;

CREATE KEYSPACE IF NOT EXISTS sidecountry
WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': '3'};

DROP TABLE sidecountry.products;
DROP TABLE sidecountry.photos;
DROP TABLE sidecountry.skus;
DROP TABLE sidecountry.styles;

// create the tables
CREATE TABLE sidecountry.products(
  id INT PRIMARY KEY,
  category TEXT,
  default_price DECIMAL,
  description TEXT,
  name TEXT,
  rating TINYINT,
  slogan TEXT,
);

CREATE TABLE sidecountry.photos(
  id INT PRIMARY KEY,
  full_photo VARCHAR,
  thumbnail_photo VARCHAR,
);

CREATE TABLE sidecountry.skus(
  id INT PRIMARY KEY,
  L SMALLINT,
  M SMALLINT,
  S SMALLINT,
  XL SMALLINT,
  XS SMALLINT,
  XXL SMALLINT,
  XXXL SMALLINT,
);

CREATE TABLE sidecountry.styles(
  id INT PRIMARY KEY,
  name TEXT,
  price DECIMAL,
  sale_price DECIMAL,
);

// when copying data from CSV seed file
COPY sidecountry.products FROM 'productsDBSeed.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY sidecountry.photos FROM 'photosDBSeed.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY sidecountry.skus FROM 'skusDBSeed.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY sidecountry.styles FROM 'stylesDBSeed.csv' WITH DELIMITER=',' AND HEADER=TRUE;

// SQL DB: postgres
