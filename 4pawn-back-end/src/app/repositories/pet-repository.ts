import Pet from '@app/entities/pet/pet';

export default abstract class PetRepository {
  abstract create(pet: Pet): Promise<void>;
  abstract save(pet: Pet): Promise<void>;
  abstract findPet(id: string): Promise<Pet>;
  abstract findAllPets(): Promise<Pet[]>;
}
