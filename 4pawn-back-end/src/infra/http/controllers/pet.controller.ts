import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import CreatePet from '@app/use-cases/pet/create-pet';
import FindAllPets from '@app/use-cases/pet/find-all-pets';
import UpdatePet from '@app/use-cases/pet/update-pet';
import { PetHTTP } from '../view-module/types';
import PetViewModule from '../view-module/pets-view-module';
import CreatePetBody from '../dtos/pet/create-pet-body';
import PatchPetAgeBody from '../dtos/pet/patch-pet-age-body';
import PatchPetImageBody from '../dtos/pet/patch-pet-image-body';
import PatchPetWeightBody from '../dtos/pet/patch-pet-weight-body';
import PatchPetAdoptedBody from '../dtos/pet/patch-pet-adopted-body';

@Controller('pets')
export class PetController {
  constructor(
    private createPet: CreatePet,
    private findAllPets: FindAllPets,
    private updatePet: UpdatePet,
  ) {}

  @Post()
  async create(@Body() body: CreatePetBody): Promise<{ pet: PetHTTP }> {
    const { name, ageInYears, image, weightInKg, color } = body;
    const { pet } = await this.createPet.execute({
      name,
      ageInYears,
      image,
      weightInKg,
      color,
    });
    return { pet: PetViewModule.toHTTP(pet) };
  }

  @Get()
  async findAll(): Promise<{ pets: PetHTTP[] }> {
    const { pets } = await this.findAllPets.execute();
    return { pets: pets.map(PetViewModule.toHTTP) };
  }

  @Patch('patch/age')
  async patchAge(@Body() body: PatchPetAgeBody): Promise<{ pet: PetHTTP }> {
    const { id, ageInYears } = body;
    const { pet } = await this.updatePet.execute({ id, ageInYears });
    return { pet: PetViewModule.toHTTP(pet) };
  }
  @Patch('patch/image')
  async patchImage(@Body() body: PatchPetImageBody): Promise<{ pet: PetHTTP }> {
    const { id, image } = body;
    const { pet } = await this.updatePet.execute({ id, image });
    return { pet: PetViewModule.toHTTP(pet) };
  }

  @Patch('patch/weight')
  async patchWeight(
    @Body() body: PatchPetWeightBody,
  ): Promise<{ pet: PetHTTP }> {
    const { id, weightInKg } = body;
    const { pet } = await this.updatePet.execute({ id, weightInKg });
    return { pet: PetViewModule.toHTTP(pet) };
  }

  @Patch('patch/adopted')
  async patchAdopted(
    @Body() body: PatchPetAdoptedBody,
  ): Promise<{ pet: PetHTTP }> {
    const { id, adopted } = body;
    const { pet } = await this.updatePet.execute({ id, adopted });
    return { pet: PetViewModule.toHTTP(pet) };
  }
}
