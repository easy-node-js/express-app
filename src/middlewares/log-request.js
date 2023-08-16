const onFinished = require('on-finished');

const getMilliseconds = (time) => Math.floor((time[0] * 1e9 + time[1]) / 1e6);

module.exports = ({ app, logger }) => {
  app.use((req, res, next) => {
    req._hrstart = process.hrtime();
    onFinished(res, () => {
      const responseTime = `${getMilliseconds(process.hrtime(req._hrstart))}ms`;
      const status = res.statusCode;
      const data = {
        responseTime,
        status
      };
      const msg = `${req.method} ${req.url}`;
      if (status >= 500) logger.error(data, msg);
      else if (status >= 400) logger.warn(data, msg);
      else if (status >= 200) logger.info(data, msg);
      else logger.debug(data, msg);
    });
    next();
  });
};
