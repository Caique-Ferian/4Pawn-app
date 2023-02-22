import { Module } from '@nestjs/common';
import { petsProvider } from './pets.provider';
import PetRepository from '@app/repositories/pet-repository';
import { PetsService } from './pets.service';

@Module({
  providers: [
    ...petsProvider,
    {
      provide: PetRepository,
      useClass: PetsService,
    },
  ],
  exports: [...petsProvider, PetRepository],
})
export class PetsModule {}
