import Pet from '@app/entities/pet/pet';
import { Pets as PetSequelize } from '../entities/pets/pets.entity';

export default class SequelizePetMapper {
  static toSequelize(pet: Pet) {
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

  static toDomain(pet: PetSequelize) {
    return new Pet(
      {
        name: pet.name,
        ageInYears: pet.ageInYears,
        image: pet.image,
        weightInKg: pet.weightInKg,
        color: pet.color,
        adopted: pet.adopted,
      },
      pet.id,
    );
  }
}
