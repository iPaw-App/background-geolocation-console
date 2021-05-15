import path from 'path'; import Sequelize from 'sequelize';

import {
  isPostgres, pgConnectionString, firebaseURL,
} from '../config';

export default !firebaseURL || isPostgres
new Sequelize(pgConnectionString, {})
