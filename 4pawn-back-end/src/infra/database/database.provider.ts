import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import { SEQUELIZE } from './constants';
import { Users } from './entities/users/users.entity';
import { Pets } from './entities/pets/pets.entity';

export const databaseProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(databaseConfig);
      sequelize.addModels([Users, Pets]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
