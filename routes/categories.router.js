const express = require('express');
const CategoriesServices = require('../services/category.service');
const router = express.Router();
const service = new CategoriesServices();



router.get('/', async (req, res) => {
  res.json(await service.readAll());
});

router.get('/:id', async (req, res) => {
  try {
    res.json(await service.readOne(req.params.id));
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    res.status(201).json(await service.create(body));
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json(await service.delete(req.params.id));
  } catch (error) {
    res.status(400).json({
      msg: error.message,
    });
  }
});




module.exports = router;
