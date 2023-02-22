import { USERS_REPOSITORY } from '@infra/database/constants';
import { Users } from './users.entity';

export const usersProvider = [
  {
    provide: USERS_REPOSITORY,
    useValue: Users,
  },
];
