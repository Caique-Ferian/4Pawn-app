import { PETS_REPOSITORY } from '@infra/database/constants';
import { Pets } from './pets.entity';

export const petsProvider = [
  {
    provide: PETS_REPOSITORY,
    useValue: Pets,
  },
];
