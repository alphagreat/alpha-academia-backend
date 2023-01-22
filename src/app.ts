import express from 'express';
import sequelize from './database';
import mainRouter from './routets';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/alpha-academea/api/v1', mainRouter);

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
