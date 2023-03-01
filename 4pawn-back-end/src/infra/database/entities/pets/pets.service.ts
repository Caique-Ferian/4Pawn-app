import { Injectable, Inject } from '@nestjs/common';
import PetRepository from '@app/repositories/pet-repository';
import { PETS_REPOSITORY } from '@infra/database/constants';
import { Pets as PetsSequelize } from './pets.entity';
import Pet from '@app/entities/pet/pet';
import SequelizePetMapper from '@infra/database/mapper/sequelize-pet-mapper';

@Injectable()
export class PetsService implements PetRepository {
  constructor(
    @Inject(PETS_REPOSITORY) private petsRepository: typeof PetsSequelize,
  ) {}
  async create(pet: Pet): Promise<void> {
    const { id, name, ageInYears, image, weightInKg, color, adopted } =
      SequelizePetMapper.toSequelize(pet);
    await this.petsRepository.create<PetsSequelize>({
      id,
      name,
      ageInYears,
      image,
      weightInKg,
      color,
      adopted,
    });
  }
  async findPet(id: string): Promise<Pet | null> {
    const pet = await this.petsRepository.findOne({ where: { id } });
    if (!pet) return null;
    return SequelizePetMapper.toDomain(pet);
  }

  async findAllPets(): Promise<Pet[]> {
    const allPets = await this.petsRepository.findAll({ order: ['name'] });
    return allPets.map(SequelizePetMapper.toDomain);
  }

  async save(pet: Pet): Promise<void> {
    const updatedPet = SequelizePetMapper.toSequelize(pet);
    await this.petsRepository.update(
      { ...updatedPet },
      { where: { id: updatedPet.id } },
    );
  }
}
