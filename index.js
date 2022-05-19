const express = require('express');
const router = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
