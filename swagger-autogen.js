// swagger-autogen.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts',
  },
  host: 'cse341-contacts-api-sy7z.onrender.com',
  schemes: ['https'],
  tags: [
    {
      name: 'Contacts',
      description: 'Endpoints for managing contacts',
    },
  ],
};

const outputFile = './swagger-output.json';
// ✅ Fix: server.js is in the root directory, not ./backend/
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
