import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Alpha Academia',
    description: 'Alpha Academia API'
  },
  host: 'localhost:5000',
  basePath: '/api/v1',
  schemes: ['http'],
  definitions: {
    //schemas
    UpdateUserBio: {
      gender: '',
      countryOfBirth: '',
      currentNationality: '',
      placeOfResidence: '',
      dateOfBirth: ''
    },

    //Responses
    BadRequest: {
      status: 'bad request',
      details: [{ message: '' }]
    },
    CustomError: {
      status: 'error',
      details: [{ message: '' }]
    },
    InternalServerError: {
      status: 'error',
      details: [{ message: 'Something went wrong. Please try again later' }]
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/api/bioRoutes', './routes/api/userRoutes'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
