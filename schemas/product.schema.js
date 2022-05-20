const joi = require('joi');

const id = joi.string().guid();
const name = joi.string().min(3).max(50);
const price = joi.number().integer().min(10);
const image = joi.string().uri();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = joi.object({
  name,
  price,
  image
});

const getProductsSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductsSchema,
};
