import path from 'path'; import Sequelize from 'sequelize';

import {
  isPostgres, pgConnectionString, firebaseURL,
} from '../config';

export default !firebaseURL || isPostgres
  ? sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
})
  : null;
