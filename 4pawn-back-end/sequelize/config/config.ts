import { Options } from 'sequelize';
import Envs from '@src/config/config.service';

const config: Options = {
  username: Envs.database().username,
  password: Envs.database().password,
  database: '4pawn_db',
  host: Envs.database().host,
  port: Envs.database().port,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
