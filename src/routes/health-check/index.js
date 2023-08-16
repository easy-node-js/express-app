const handler = require('../handler');

module.exports = handler(() => ({
  state: 'OK',
  uptime: process.uptime()
}));
