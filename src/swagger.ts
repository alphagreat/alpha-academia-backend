import swaggerAutogen from 'swagger-autogen';


const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:5000',
  basePath: '/api/v1',
  schemes: ['http'],
  definitions: {
    UpdateBio: {
      gender : '',
      countryOfBirth: '',
      currentNationality: '',
      placeOfResidence: '',
      dateOfBirth: ''
    }
  }, 
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/api/bioRoutes', './routes/api/userRoutes'];


swaggerAutogen()(outputFile, endpointsFiles, doc);
