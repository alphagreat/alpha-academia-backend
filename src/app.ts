import express from 'express';
import sequelize from './database';
import mainRouter from './routets';
import cors from 'cors';
import errorHandlerMiddleware from './middleware/error-handler';
import notFoundMiddleWare from './middleware/not-found';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/alpha-academea/api/v1', mainRouter);


app.use(errorHandlerMiddleware);
app.use(notFoundMiddleWare);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};


start();
