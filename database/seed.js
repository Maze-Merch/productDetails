// seed to an outside file, so that it is just generated once.
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const { Faker } = require('fakergem');

const SEED_AMOUNT = 1e2;
const writer = csvWriter();
let i = 0;

// how long did the CSV take to create?
const timeBefore = new Date().getTime(); // time before

// setup of CSV seed
const seedDataGeneration = () => {
  writer.pipe(fs.createWriteStream('productsDBSeed.csv'));
  function writing() {
    let heapy = true;
    while (i < SEED_AMOUNT && heapy) {
      i += 1;
      heapy = writer.write({
        id: i,
        category: Faker.Commerce.department(1),
        default_price: Faker.Number.between(5, 380),
        description: Faker.Hipster.sentence(),
        name: Faker.Commerce.productName(),
        rating: Faker.Number.between(1, 10),
        slogan: faker.company.catchPhrase(),
        // styles: [
        //   // id: i,
        //   Faker.Hipster.word(),
        //   Faker.Commerce.price({ min: 5, max: 380 }),
        //   Faker.Commerce.price({ min: 0, max: 190 }),
        //   [
        //     // id: i,
        //     Faker.LoremFlickr.image('300x300', ['clothes']),
        //     Faker.LoremFlickr.image('50x50', ['clothes']),
        //   ],
        //   [
        //     // id: i,
        //     Faker.Random.element(['XXS', 'XS', 'SM', 'MD', 'LG', 'XL', 'XXL']),
        //     Faker.Number.number({ min: 0, max: 28 }),
        //   ],
        // ],
      });
    }
    writer.once('drain', writing);
    if (i === SEED_AMOUNT) {
      writer.end();
      // stop writing already
      const timeAfter = new Date().getTime(); // time afeter
      const timeTaken = timeAfter - timeBefore; // run-time difference
      console.log(`TIME to write CSV data: ${timeTaken / 1000} seconds.`);
    }
  }
  writing();
};

seedDataGeneration();
