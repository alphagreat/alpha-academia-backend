import express from 'express';
import sequelize from './database';
import { UserSerive } from './services/user';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', async (_req, res) => {
  const users = await UserSerive.index();
  res.json(users);
});

app.post('/', async (req, res) => {
  console.log(req.body);
  const user = await UserSerive.create(req.body);
  return res.json(user);
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
