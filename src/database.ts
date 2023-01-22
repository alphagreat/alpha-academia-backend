import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const { DEV_DB_STRING } = process.env;

const sequelize = new Sequelize(DEV_DB_STRING as string);
sequelize.addModels([path.join(__dirname, '/models')]);

export default sequelize;
