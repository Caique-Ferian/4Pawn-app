import PetRepository from '@app/repositories/pet-repository';
import { CreatePetRequest, CreatePetResponse } from './types';
export default class CreatePet {
    private petRepository;
    constructor(petRepository: PetRepository);
    execute(request: CreatePetRequest): Promise<CreatePetResponse>;
}
