const fs = require('fs/promises');
const path = require('path');
const yaml = require('js-yaml');
const handler = require('../handler');

module.exports = handler(() => fs.readFile(path.resolve(__dirname, './openapi.yaml'), 'utf8').then(yaml.load));
