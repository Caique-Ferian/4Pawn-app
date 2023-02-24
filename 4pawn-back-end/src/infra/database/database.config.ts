import { Options } from 'sequelize';

export const databaseConfig: Options = {
  username: 'root',
  password: '123456',
  database: '4pawn_db',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};
