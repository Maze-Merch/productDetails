// seed to an outside file, so that it is just generated once.
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const Faker = require('fakergem');

const SEED_AMOUNT = 10;
let writer = csvWriter();

// how long did the CSV create?
// time before
const timeBefore = new Date().getTime();

// setup of CSV seed
const seedDataGeneration = () => {
  writer.pipe(fs.createWriteStream('productsDBSeed.csv'));
  for (let i = 1; i <= SEED_AMOUNT; i += 1) {
    writer.write({
      id: i,
      name: ,
      slogan: ,
      description: ,
      category: ,
      default_price: ,
      rating: ,
      styles: {
        id: i,
        name: ,
        style_price: ,
        sale_price: ,
        photos: {
          id: i,
          size: ,
          quantity: ,
        },
        skus: {
          id: i,
          thumbnail_url: ,
          photo_url: ,
        },
      },
    })
  }
}


// how long did the CSV create?
// time before
const timeAfter = new Date().getTime();

const timeTaken = timeAfter - timeBefore;
console.log(timeTaken);
