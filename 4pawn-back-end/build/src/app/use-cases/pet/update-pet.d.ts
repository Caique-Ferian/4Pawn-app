import PetRepository from '@app/repositories/pet-repository';
import { UpdatePetRequest, UpdatePetResponse } from './types';
export default class UpdatePet {
    private petRepository;
    constructor(petRepository: PetRepository);
    execute(request: UpdatePetRequest): Promise<UpdatePetResponse>;
}
