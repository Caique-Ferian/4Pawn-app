import PetRepository from '@app/repositories/pet-repository';
import PetNotFound from './error/petNotFound';
import { UpdatePetRequest, UpdatePetResponse } from './types';
import Pet from '@app/entities/pet/pet';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UpdatePet {
  constructor(private petRepository: PetRepository) {}

  public async execute(request: UpdatePetRequest): Promise<UpdatePetResponse> {
    const { id, age, image, weight, adopted } = request;
    const hasPet = await this.petRepository.findPet(id);
    let updatedPet: Pet;
    if (!hasPet) throw new PetNotFound();
    if (age) {
      updatedPet = new Pet(
        {
          name: hasPet.name,
          age,
          image: hasPet.image,
          weight: hasPet.weight,
          color: hasPet.color,
        },
        hasPet.id,
      );
    }
    if (image) {
      updatedPet = new Pet(
        {
          name: hasPet.name,
          age: hasPet.age,
          image,
          weight: hasPet.weight,
          color: hasPet.color,
        },
        hasPet.id,
      );
    }
    if (weight) {
      updatedPet = new Pet(
        {
          name: hasPet.name,
          age: hasPet.age,
          image: hasPet.image,
          weight,
          color: hasPet.color,
        },
        hasPet.id,
      );
    }
    if (adopted) {
      updatedPet = new Pet(
        {
          name: hasPet.name,
          age: hasPet.age,
          image: hasPet.image,
          weight: hasPet.weight,
          color: hasPet.color,
        },
        hasPet.id,
        adopted,
      );
    }
    await this.petRepository.save(updatedPet);
    return { pet: updatedPet };
  }
}
