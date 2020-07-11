const { Faker } = require('fakergem');
const fs = require('fs');

const dataWriter = () => {
  const writeProducts = fs.createWriteStream('products.csv');
  writeProducts.write('id|style_id|name|slogan|description|original_price|photos|sale_price|skus|reviews\n', 'utf8');

  const writeManyProducts = (writer, encoding, callback) => {
    let i = 10000000;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const style_id = id;
        const name = `${Faker.Commerce.productName()}`;
        const slogan = `${Faker.TwinPeaks.quote()}`;
        const description = `${Faker.Cat.breed()} ${Faker.Hipster.paragraph(2, false, 1)}`;
        const original_price = `${Faker.Commerce.price()}`;
        const sale_price = `${Faker.Commerce.price()}`;
        const photos = `{${Faker.LoremFlickr.image('700x500', ['garbage'])},${Faker.LoremFlickr.image('700x500', ['fitness'])},${Faker.LoremFlickr.image('700x500', ['kitten'])},${Faker.LoremFlickr.image('700x500', ['cheese'])},${Faker.LoremFlickr.image('700x500', ['kitten'])}}`;
        const skus = `{{XS: ${Faker.Number.between(1, 10)}},{S: ${Faker.Number.between(1, 10)}},{MD: ${Faker.Number.between(1, 10)}},{LG: ${Faker.Number.between(1, 10)}},{XL: ${Faker.Number.between(1, 10)}},{XXL: ${Faker.Number.between(1, 10)}}}`;
        const reviews = `{{rating: ${Faker.Number.between(1, 5)}},{rating: ${Faker.Number.between(1, 5)}},{rating: ${Faker.Number.between(1, 5)}},{rating: ${Faker.Number.between(1, 5)}},{rating: ${Faker.Number.between(1, 5)}}}`;
        const data = `${id}|${style_id}|${name}|${slogan}|${description}|$${original_price}|${photos}|$${sale_price}|${skus}|${reviews}\n`;
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
