// seed to an outside file, so that it is just generated once.
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const { Faker } = require('fakergem');

const SEED_AMOUNT = 10000000;
const writer = csvWriter();

// how long did the CSV take to create?
// time before
const timeBefore = new Date().getTime();

// setup of CSV seed
const seedDataGeneration = () => {
  writer.pipe(fs.createWriteStream('productsDBSeed.csv'));
  console.log('COMPUTER: Starting CSV writing, start the timer!');

  let i = 0;
  while (i <= SEED_AMOUNT) {
    i += 1;
    writer.write({
      id: i,
      name: Faker.Commerce.productName(),
      slogan: faker.company.catchPhrase(),
      description: Faker.Hipster.sentences(2),
      category: Faker.Commerce.department(1),
      default_price: Faker.Commerce.price({ min: 5, max: 380 }),
      rating: Faker.Number.between(1, 10),
      styles: {
        id: i,
        name: Faker.Hipster.word(),
        style_price: Faker.Commerce.price({ min: 5, max: 380 }),
        sale_price: Faker.Commerce.price({ min: 0, max: 190 }),
        photos: {
          id: i,
          thumbnail_url: Faker.LoremFlickr.image('300x300', ['clothes']),
          photo_url: Faker.LoremFlickr.image('50x50', ['clothes']),
        },
        skus: {
          id: i,
          size: Faker.Random.element(['XXS', 'XS', 'SM', 'MD', 'LG', 'XL', 'XXL']),
          quantity: Faker.Number.number({ min: 0, max: 28 }),
        },
      },
    });
  }

  // stop writing already
  writer.end();
  console.log('COMPUTER: CSV writing complete, what\'s my time coach?');
};

// how long did the CSV take to create?
// time before
seedDataGeneration();
const timeAfter = new Date().getTime();
const timeTaken = timeAfter - timeBefore;
console.log(`COACH: needs to be faster, but it was ${timeTaken / 1000} seconds.`);
