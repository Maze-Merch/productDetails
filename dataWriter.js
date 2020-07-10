const { Faker } = require('fakergem');
const fs = require('fs');

const dataWriter = () => {
  const writeProducts = fs.createWriteStream('products.csv');
  writeProducts.write('id|styleId|name|slogan|description|originalPrice|photos|salePrice|skus|rating\n', 'utf8');

  const writeManyProducts = (writer, encoding, callback) => {
    let i = 100;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const styleId = id;
        const name = `${Faker.Commerce.productName()}`;
        const slogan = `${Faker.TwinPeaks.quote()}`;
        const description = `${Faker.Cat.breed()} ${Faker.Hipster.paragraph(2, false, 1)}`;
        const originalPrice = `${Faker.Commerce.price()}`;
        const salePrice = `${Faker.Commerce.price()}`;
        const photos = `{${Faker.LoremFlickr.image('700x500', ['garbage', 'fitness', 'kitten', 'cheese'])},${Faker.LoremFlickr.image('700x500', ['garbage', 'fitness', 'kitten', 'cheese'])},${Faker.LoremFlickr.image('700x500', ['garbage', 'fitness', 'kitten', 'cheese'])},${Faker.LoremFlickr.image('700x500', ['garbage', 'fitness', 'kitten', 'cheese'])},${Faker.LoremFlickr.image('700x500', ['garbage', 'fitness', 'kitten', 'cheese'])}}`;
        const skus = `{${Faker.Number.between(1, 10)},${Faker.Number.between(1, 10)},${Faker.Number.between(1, 10)},${Faker.Number.between(1, 10)},${Faker.Number.between(1, 10)},${Faker.Number.between(1, 10)}}`;
        const rating = `{${Faker.Number.between(1, 5)},${Faker.Number.between(1, 5)},${Faker.Number.between(1, 5)},${Faker.Number.between(1, 5)},${Faker.Number.between(1, 5)}}`;
        const data = `${id}|${styleId}|${name}|${slogan}|${description}|$${originalPrice}|${photos}|$${salePrice}|${skus}|${rating}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  };
  const timeBefore = new Date().getTime();
  writeManyProducts(writeProducts, 'utf-8', () => {
    writeProducts.end();
    const timeTaken = new Date().getTime() - timeBefore; // run-time difference
    console.log(`TIME: ${timeTaken / 1000} seconds.`);
  });
};
dataWriter();
module.exports = dataWriter;
