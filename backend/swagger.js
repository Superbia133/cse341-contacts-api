const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 Contacts API',
    description: 'API for managing contacts for the CSE341 course',
  },
  host: 'localhost:8080',
  schemes: ['http'],
  basePath: '/api',
  tags: [
    {
      name: 'Contacts',
      description: 'Contact management endpoints',
    },
  ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // can include additional files

swaggerAutogen(outputFile, endpointsFiles, doc);
