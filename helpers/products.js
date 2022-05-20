const { faker } = require('@faker-js/faker');
let products = [];

for (let i = 0; i < 100; i++) {
  const product = {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    description: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
    isVisible: faker.datatype.boolean(),
  };
  products.push(product);
}


module.exports = { products };
