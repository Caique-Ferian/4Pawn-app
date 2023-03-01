import { Controller, Get } from '@nestjs/common';
import CreatePet from '@app/use-cases/pet/create-pet';
import FindAllPets from '@app/use-cases/pet/find-all-pets';
import UpdatePet from '@app/use-cases/pet/update-pet';
import { PetHTTP } from '../view-module/types';
import PetViewModule from '../view-module/pets-view-module';

@Controller('pets')
export class PetController {
  constructor(
    private createPet: CreatePet,
    private findAllPets: FindAllPets,
    private updatePet: UpdatePet,
  ) {}

  @Get()
  async findAll(): Promise<{ pets: PetHTTP[] }> {
    const { pets } = await this.findAllPets.execute();
    return { pets: pets.map(PetViewModule.toHTTP) };
  }
}
