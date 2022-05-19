const { faker } = require('@faker-js/faker');
let users = [];

for (let i = 0; i < 100; i++) {
  const user = {
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    avatar: faker.image.avatar(),
  };
  users.push(user);
}

module.exports = {
  users,
}
