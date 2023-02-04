//TODO: CREATE PROD AND TEST DBS
require('dotenv').config(); 

const { DEV_DB_USER, DEV_DB_PASS, DEV_DB, DEV_DB_HOST } = process.env;
console.log('creds', DEV_DB_USER)
module.exports = {
  development: {
    username: DEV_DB_USER,
    password: DEV_DB_PASS,
    database: DEV_DB,
    host: DEV_DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
      rejectUnauthorized: false
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: DEV_DB_USER,
    password: DEV_DB_PASS,
    database: DEV_DB,
    host: DEV_DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
      rejectUnauthorized: false
    }
  }
};
