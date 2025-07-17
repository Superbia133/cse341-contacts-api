const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = setupSwagger;
