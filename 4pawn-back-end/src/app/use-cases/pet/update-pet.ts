import PetRepository from '@app/repositories/pet-repository';
import PetNotFound from './error/petNotFound';
import { UpdatePetRequest, UpdatePetResponse } from './types';
import Pet from '@app/entities/pet/pet';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UpdatePet {
  constructor(private petRepository: PetRepository) {}

  public async execute(request: UpdatePetRequest): Promise<UpdatePetResponse> {
    const { id, ageInYears, image, weightInKg, adopted } = request;
    const hasPet = await this.petRepository.findPet(id);
    let updatedPet: Pet;
    if (!hasPet) throw new PetNotFound();
    if (ageInYears) {
      updatedPet = new Pet(
        {
          name: hasPet.name,
          ageInYears,
          image: hasPet.image,
          weightInKg: hasPet.weightInKg,
          color: hasPet.color,
        },
        hasPet.id,
      );
    }
    if (image) {
      updatedPet = new Pet(
        {
          name: hasPet.name,
          ageInYears: hasPet.ageInYears,
          image,
          weightInKg: hasPet.weightInKg,
          color: hasPet.color,
        },
        hasPet.id,
      );
    }
    if (weightInKg) {
      updatedPet = new Pet(
        {
          name: hasPet.name,
          ageInYears: hasPet.ageInYears,
          image: hasPet.image,
          weightInKg: weightInKg,
          color: hasPet.color,
        },
        hasPet.id,
      );
    }
    if (adopted || adopted === false) {
      updatedPet = new Pet(
        {
          name: hasPet.name,
          ageInYears: hasPet.ageInYears,
          image: hasPet.image,
          weightInKg: hasPet.weightInKg,
          color: hasPet.color,
          adopted,
        },
        hasPet.id,
      );
    }
    await this.petRepository.save(updatedPet);
    return { pet: updatedPet };
  }
}
