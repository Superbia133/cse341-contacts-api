const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Documentation for Contacts API',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './backend/swagger-output.json';
const endpointsFiles = ['./backend/server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
