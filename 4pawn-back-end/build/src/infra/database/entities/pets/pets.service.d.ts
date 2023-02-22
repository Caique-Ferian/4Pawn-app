import PetRepository from '@app/repositories/pet-repository';
import { Pets as PetsSequelize } from './pets.entity';
import Pet from '@app/entities/pet/pet';
export declare class PetsService implements PetRepository {
    private petsRepository;
    constructor(petsRepository: typeof PetsSequelize);
    create(pet: Pet): Promise<void>;
    findPet(id: string): Promise<Pet | null>;
    findAllPets(): Promise<Pet[]>;
    save(pet: Pet): Promise<void>;
}
