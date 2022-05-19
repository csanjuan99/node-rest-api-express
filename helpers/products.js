const { faker } = require('@faker-js/faker');
let products = [];

for (let i = 0; i < 100; i++) {
  const product = {
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
  };
  products.push(product);
}

module.exports = {
  products,
}
