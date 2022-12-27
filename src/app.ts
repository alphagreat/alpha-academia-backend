import express from 'express';
import sequelize from './database';

import User from './models/user';
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api', (_req, res) => {
  res.send('hello');
});

app.get('/', async (_req, res) => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  res.json({ users });
});

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
