const express = require('express');
const ProductsServices = require('../services/product.service');
const validateHandler = require('../middlewares/validator.handler');
const {
  getProductsSchema,
  createProductSchema,
  updateProductSchema
} = require('../schemas/product.schema');
const router = express.Router();
const service = new ProductsServices();

router.get('/', async (req, res) => {
  try {
    res.json(await service.readAll());
  } catch (error) {
    res.status(400).json({
      msg: 'Not found'
    });
  }
});

router.post('/',
  validateHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    res.status(201).json(await service.create(body));
  });

router.get('/:id',
  validateHandler(getProductsSchema, 'params'),
  async (req, res, next) => {
    try {
      res.status(200).json(await service.readOne(req.params.id));
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validateHandler(getProductsSchema, 'params'),
  validateHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      res.json(await service.update(req.params.id, req.body));
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id', async (req, res) => {
  res.status(200).json(await service.delete(req.params.id));
});

module.exports = router;
