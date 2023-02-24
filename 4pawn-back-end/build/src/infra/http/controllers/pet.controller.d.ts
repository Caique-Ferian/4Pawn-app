import CreatePet from '@app/use-cases/pet/create-pet';
import FindAllPets from '@app/use-cases/pet/find-all-pets';
import UpdatePet from '@app/use-cases/pet/update-pet';
export declare class PetController {
    private createPet;
    private findAllPets;
    private updatePet;
    constructor(createPet: CreatePet, findAllPets: FindAllPets, updatePet: UpdatePet);
    hello(): Promise<string>;
}
