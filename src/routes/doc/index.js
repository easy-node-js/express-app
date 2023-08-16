const handler = require('../handler');
const suid = require('swagger-ui-dist');

module.exports = handler(() => {
  const a = suid.getAbsoluteFSPath();

  return a;
});
