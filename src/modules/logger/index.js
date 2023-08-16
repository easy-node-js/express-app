const logger = require('pino');

module.exports = ({ level, name }) => logger({ level, name });
