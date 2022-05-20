const {
  getUID
} = require('../helpers/utils');

class CategoriesServices {

  constructor() {
    this.categories = [];
  }

  create(body) {
    const {
      name
    } = body;
    const category = {
      id: getUID(),
      name
    };
    this.categories.push(category);
    return {
      msg: 'Category created successfully',
      category
    };
  }

  async readAll() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 3000);
    });
  }

  async readOne(id) {
    if (this.categories.findIndex(category => category.id === id) === -1) {
      throw new Error('Category not found')
    } else {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.categories.find(category => category.id === id));
        }, 3000);
      });
    }
  }

  async delete(id) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index === -1) {
      throw new Error('Category not found')
    } else {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          this.categories.splice(index, 1);
          resolve(this.categories);
        }, 3000);
      });
    }
  }
}

module.exports = CategoriesServices;
