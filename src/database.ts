import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const { DEV_DB } = process.env;

const sequelize = new Sequelize(DEV_DB as string);

export default sequelize;
