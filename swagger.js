const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API documentation for the CSE341 Contacts project',
    },
    servers: [
      {
        url: 'https://your-app-name.onrender.com/api', // replace with your real URL!
      },
    ],
  },
  apis: ['./routes/contacts.js'], // where Swagger will look for comments
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
