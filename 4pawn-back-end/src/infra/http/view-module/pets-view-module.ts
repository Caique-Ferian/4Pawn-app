import Pet from '@app/entities/pet/pet';
import { PetHTTP } from './types';

export default class PetViewModule {
  static toHTTP(pet: Pet): PetHTTP {
    return {
      id: pet.id,
      name: pet.name,
      ageInYears: pet.ageInYears,
      image: pet.image,
      weightInKg: pet.weightInKg,
      color: pet.color,
      adopted: pet.adopted,
    };
  }
}
