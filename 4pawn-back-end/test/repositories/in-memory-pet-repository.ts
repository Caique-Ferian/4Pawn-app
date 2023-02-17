import Pet from '@app/entities/pet/pet';
import PetRepository from '@app/repositories/pet-repository';

export default class InMemoryUserRepository implements PetRepository {
  public pets: Pet[] = [];

  public async create(pet: Pet): Promise<void> {
    this.pets.push(pet);
  }

  public async findPet(id: string): Promise<Pet> {
    return this.pets.find((p) => p.id === id);
  }

  public async findAllPets(): Promise<Pet[]> {
    return this.pets;
  }

  public async save(pet: Pet): Promise<void> {
    const petIndex = this.pets.findIndex((p) => p.id === pet.id);
    if (petIndex >= 0) {
      this.pets[petIndex] = pet;
    }
  }
}
