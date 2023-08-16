const express = require('express');
const swaggerUi = require('swagger-ui-express');

const router = express.Router();

router.use('/health-check', require('./health-check'));
router.use('/doc/openapi.json', require('./doc/openapi'));

const options = {
  swaggerOptions: {
    validatorUrl: null,
    url: '/doc/openapi.json'
  }
};

router.use('/doc/ui', swaggerUi.serve);
router.get('/doc/ui', swaggerUi.setup(null, options));

module.exports = router;
