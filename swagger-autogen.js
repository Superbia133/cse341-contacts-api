const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts',
  },
  host: 'cse341-contacts-api-sy7z.onrender.com', // ✅ REPLACED with your live URL
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./backend/server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
