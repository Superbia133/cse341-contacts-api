// swagger.js
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json'); // If this file is in the root

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = setupSwagger;
