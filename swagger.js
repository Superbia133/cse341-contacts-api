// swagger.js
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json'); // If this file is in the root

function setupSwagger(app) {
  try {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    console.log('✅ Swagger UI mounted at /api-docs');
  } catch (err) {
    console.error('⚠️ Failed to mount Swagger UI:', err.message);
  }
}

module.exports = setupSwagger;
