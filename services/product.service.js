const {
  products,
} = require('../helpers/products');
const {
  getUID
} = require('../helpers/utils');
const boom = require('@hapi/boom');

class ProductsServices {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    this.products = products;
  }

  create(body) {
    const {
      name,
      price,
      image
    } = body;
    const product = {
      id: getUID(),
      name,
      price,
      image
    };
    this.products.push(product);
    return {
      msg: 'Product created successfully',
      product
    };
  }

  async readAll() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }

  readOne(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (!product.isVisible) {
      throw boom.conflict('Product is not visible');
    }
    return product;
  }

  async update(id, body) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    };
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...body
    };
    return {
      msg: 'Product updated',
      data: this.products[index]
    };
  }

  delete(id) {
    const product = products.find(product => product.id === id);
    if (!product) return {
      msg: 'Product not found'
    };
    products.splice(products.indexOf(product), 1);
    return {
      msg: 'Product deleted',
      data: product
    };
  }

}

module.exports = ProductsServices;
