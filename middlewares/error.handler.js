function globlalErrorHandler(error, req, res, next) {
  console.error(error);
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    msg: error.message,
    stack: error.stack
  });
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    res.status(error.output.statusCode).json(error.output.payload);
  }
  next(error);
}


module.exports = {
  globlalErrorHandler,
  errorHandler,
  boomErrorHandler
};
