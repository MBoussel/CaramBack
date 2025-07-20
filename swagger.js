import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Carambar & co By Mattheus - Blagues',
      version: '1.0.0',
      description: 'API pour gérer des blagues chez Carambar & co By Mattheus',
    },
    servers: [
      {
        url: 'http://localhost:3310/api',
      },
    ],
     components: {
      schemas: {
        Joke: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            question: {
              type: 'string',
              example: 'Quelle est la femelle du hamster ?',
            },
            reponse: {
              type: 'string',
              example: "L’Amsterdam",
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
      },
    },
  },
  
  apis: ['./router*.js', './controllers/jokeController*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };