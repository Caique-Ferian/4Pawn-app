import PetRepository from '@app/repositories/pet-repository';
import { CreatePetRequest, CreatePetResponse } from './types';
import Pet from '@app/entities/pet/pet';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class CreatePet {
  constructor(private petRepository: PetRepository) {}

  public async execute(request: CreatePetRequest): Promise<CreatePetResponse> {
    const { name, age, image, weight, color } = request;
    const pet = new Pet({ name, age, image, weight, color });

    await this.petRepository.create(pet);
    return { pet };
  }
}
