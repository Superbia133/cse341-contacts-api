const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Documentation for Contacts API',
    version: '1.0.0',
  },
  host: 'cse341-contacts-api-syz7.onrender.com', // 🔁 UPDATED for live Render domain
  schemes: ['https'], // 🔁 Use https for Render
  basePath: '/',
};

const outputFile = './backend/swagger-output.json';
const endpointsFiles = ['./backend/routes/index.js']; // 👈 Adjust if your main route file is elsewhere

swaggerAutogen(outputFile, endpointsFiles, doc);
