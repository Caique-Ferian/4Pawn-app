import CreatePet from '@app/use-cases/pet/create-pet';
import FindAllPets from '@app/use-cases/pet/find-all-pets';
import UpdatePet from '@app/use-cases/pet/update-pet';
import CreatePetBody from '../dtos/pet/create-pet-body';
import PatchPetAgeBody from '../dtos/pet/patch-pet-age-body';
import PatchPetImageBody from '../dtos/pet/patch-pet-image-body';
import PatchPetWeightBody from '../dtos/pet/patch-pet-weight-body';
import PatchPetAdoptedBody from '../dtos/pet/patch-pet-adopted-body';
import { CreateOrUpdatePetResponse, FindAllPetsResponse } from './types';
export declare class PetController {
    private createPet;
    private findAllPets;
    private updatePet;
    constructor(createPet: CreatePet, findAllPets: FindAllPets, updatePet: UpdatePet);
    create(body: CreatePetBody): Promise<CreateOrUpdatePetResponse>;
    findAll(): Promise<FindAllPetsResponse>;
    patchAge(body: PatchPetAgeBody): Promise<CreateOrUpdatePetResponse>;
    patchImage(body: PatchPetImageBody): Promise<CreateOrUpdatePetResponse>;
    patchWeight(body: PatchPetWeightBody): Promise<CreateOrUpdatePetResponse>;
    patchAdopted(body: PatchPetAdoptedBody): Promise<CreateOrUpdatePetResponse>;
}
