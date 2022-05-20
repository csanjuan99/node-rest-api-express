const { faker } = require('@faker-js/faker');

function getUID() {
  return faker.datatype.uuid();
}

module.exports = { getUID };
