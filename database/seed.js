// seed to an outside file, so that it is just generated once.
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const { Faker } = require('fakergem');

const SEED_AMOUNT = 1e7;
const writeProducts = csvWriter();
const writePhotos = csvWriter();
const writeStyles = csvWriter();
const writeSkus = csvWriter();
let i = 0;

// how long did the CSV take to create?
const timeBefore = new Date().getTime(); // time before

// setup of CSV seed
const seedDataGeneration = () => {
  writeProducts.pipe(fs.createWriteStream('productsDBSeed.csv'));
  writePhotos.pipe(fs.createWriteStream('photosDBSeed.csv'));
  writeStyles.pipe(fs.createWriteStream('stylesDBSeed.csv'));
  writeSkus.pipe(fs.createWriteStream('skusDBSeed.csv'));
  function writing() {
    let heapy = true;
    while (i < SEED_AMOUNT && heapy) {
      i += 1;
      heapy = writeProducts.write({
        id: i,
        category: Faker.Commerce.department(1),
        default_price: Faker.Commerce.price({ min: 5, max: 380 }),
        description: Faker.Hipster.paragraph(),
        name: Faker.Commerce.productName(),
        rating: Faker.Number.between(1, 10),
        slogan: faker.company.catchPhrase(),
      });
      if (i <= 10000) {
        heapy = writeStyles.write({
          id: ((i - 1) % 1000) + 1,
          name: Faker.Hipster.word(),
          price: Faker.Commerce.price({ min: 5, max: 380 }),
          sale_price: Faker.Commerce.price({ min: 0, max: 190 }),
        });
        heapy = writePhotos.write({
          id: ((i - 1) % 1000) + 1,
          full_photo: Faker.LoremFlickr.image('300x300', ['clothes']),
          thumbnail_photo: Faker.LoremFlickr.image('50x50', ['clothes']),
        });
        heapy = writeSkus.write({
          id: ((i - 1) % 1000) + 1,
          L: Faker.Number.between(0, 28),
          M: Faker.Number.between(0, 28),
          S: Faker.Number.between(0, 28),
          XL: Faker.Number.between(0, 28),
          XS: Faker.Number.between(0, 28),
          XXL: Faker.Number.between(0, 28),
          XXXL: Faker.Number.between(0, 28),
        });
      }
    }
    writeProducts.once('drain', writing);
    if (i === SEED_AMOUNT) {
      writeProducts.end();
      writeSkus.end();
      writePhotos.end();
      writeStyles.end();
      // stop writing already
      const timeAfter = new Date().getTime(); // time afeter
      const timeTaken = timeAfter - timeBefore; // run-time difference
      console.log(`TIME to write CSV data: ${timeTaken / 1000} seconds.`);
    }
  }
  writing();
};

seedDataGeneration();
