const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json([{
      id: 1,
      name: 'Category 1',
    },
    {
      id: 2,
      name: 'Category 2',
    },
    {
      id: 3,
      name: 'Category 3',
    }
  ]);
});

router.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: `Category ${req.params.id}`,
  });
});

module.exports = router;
