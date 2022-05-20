const boom = require('@hapi/boom');

function validateHandler(schema, prop) {
  return (req, res, next) => {
    const { error } = schema.validate(req[prop], {abortEarly: false});
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validateHandler;
