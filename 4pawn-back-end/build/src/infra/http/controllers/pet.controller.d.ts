import CreatePet from '@app/use-cases/pet/create-pet';
import FindAllPets from '@app/use-cases/pet/find-all-pets';
import UpdatePet from '@app/use-cases/pet/update-pet';
import { PetHTTP } from '../view-module/types';
import CreatePetBody from '../dtos/pet/create-pet-body';
import PatchPetAgeBody from '../dtos/pet/patch-pet-age-body';
import PatchPetImageBody from '../dtos/pet/patch-pet-image-body';
import PatchPetWeightBody from '../dtos/pet/patch-pet-weight-body';
import PatchPetAdoptedBody from '../dtos/pet/patch-pet-adopted-body';
export declare class PetController {
    private createPet;
    private findAllPets;
    private updatePet;
    constructor(createPet: CreatePet, findAllPets: FindAllPets, updatePet: UpdatePet);
    create(body: CreatePetBody): Promise<{
        pet: PetHTTP;
    }>;
    findAll(): Promise<{
        pets: PetHTTP[];
    }>;
    patchAge(body: PatchPetAgeBody): Promise<{
        pet: PetHTTP;
    }>;
    patchImage(body: PatchPetImageBody): Promise<{
        pet: PetHTTP;
    }>;
    patchWeight(body: PatchPetWeightBody): Promise<{
        pet: PetHTTP;
    }>;
    patchAdopted(body: PatchPetAdoptedBody): Promise<{
        pet: PetHTTP;
    }>;
}
