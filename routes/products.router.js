const {
  products
} = require('../helpers/products');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Product created',
    data: body
  })
});

router.get('/:id', (req, res) => {
  const product = products.find(product => product.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({
    msg: 'Product not found'
  });
  res.json(product);
});

router.patch('/:id', (req, res) => {
  const product = products.find(product => product.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({
    msg: 'Product not found'
  });
  const {
    name,
    price
  } = req.body;
  product.name = name;
  product.price = price;
  res.json({
    message: 'Product updated',
    data: product
  });
});

router.delete('/:id', (req, res) => {
  const product = products.find(product => product.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({
    msg: 'Product not found'
  });
  products.splice(products.indexOf(product), 1);
  res.json({
    message: 'Product deleted',
    data: product
  });
});

module.exports = router;
