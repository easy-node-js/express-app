const express = require('express');
const config = require('./config');
const logger = require('./modules/logger')(config.logger);
const logRequests = require('./middlewares/log-request');
const errorHandler = require('./middlewares/error-handler');

const app = express();
app.disable('x-powered-by');
logRequests({ app, logger });

app.use('/', require('./routes'));
errorHandler({ app, logger });

app.listen(config.service.port, () => logger.info({ port: config.service.port }, 'Server up and running'));
