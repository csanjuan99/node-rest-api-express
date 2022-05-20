const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { globlalErrorHandler, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const app = express();
const port = 3000;

app.use(express.json());
const whiteList = ['http://localhost:8080'];
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

router(app);
app.use(globlalErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
