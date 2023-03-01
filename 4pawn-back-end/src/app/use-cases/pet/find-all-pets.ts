import PetRepository from '@app/repositories/pet-repository';
import { FindAllPetsResponse } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class FindAllPets {
  constructor(private petRepository: PetRepository) {}

  public async execute(): Promise<FindAllPetsResponse> {
    const pets = await this.petRepository.findAllPets();
    return { pets };
  }
}
