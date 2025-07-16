const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

// Define and export the setupSwagger function
function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
}

module.exports = setupSwagger;
