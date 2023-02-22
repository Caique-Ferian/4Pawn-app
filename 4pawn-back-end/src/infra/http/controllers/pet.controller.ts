import { Controller, Get } from '@nestjs/common';
import CreatePet from '@app/use-cases/pet/create-pet';
import FindAllPets from '@app/use-cases/pet/find-all-pets';
import UpdatePet from '@app/use-cases/pet/update-pet';

@Controller('pets')
export class PetController {
  constructor(
    private createPet: CreatePet,
    findAllPets: FindAllPets,
    updatePet: UpdatePet,
  ) {}

  @Get()
  async hello() {
    return 'NEW CONTROLLER';
  }
}
