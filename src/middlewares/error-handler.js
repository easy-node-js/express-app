const createError = require('http-errors');
class NotFound extends Error {}

module.exports = ({ app, logger }) => {
  app.use((req, res, next) => {
    next(new NotFound('Not found'));
  });

  app.use((error, req, res, next) => {
    const { message, stack, statusCode } = error;
    if (statusCode) {
      statusCode >= 500 ? logger.error({ stack }, message) : logger.warn(message);

      res.status(statusCode).send(createError(statusCode, message));
    } else if (error instanceof NotFound) {
      res.status(404).send(createError(404, message));
    } else {
      logger.error({ stack }, message);
      res.status(500).send(createError(500, message));
    }

    next();
  });
};
