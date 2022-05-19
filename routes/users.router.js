const { users } = require('../helpers/users');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json(user);
});

module.exports = router;
