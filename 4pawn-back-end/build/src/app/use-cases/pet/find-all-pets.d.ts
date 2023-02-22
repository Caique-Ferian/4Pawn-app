import PetRepository from '@app/repositories/pet-repository';
import { FindAllPetsResponse } from './types';
export default class FindAllPets {
    private petRepository;
    constructor(petRepository: PetRepository);
    execute(): Promise<FindAllPetsResponse>;
}
