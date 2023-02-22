import makePet from '@test/factories/make-pet';
import InMemoryPetRepository from '@test/repositories/in-memory-pet-repository';
import FindAllPets from './find-all-pets';

describe('Testing use-case Find All Pets', () => {
  const inMemoryPetRepository = new InMemoryPetRepository();
  const findAllPets = new FindAllPets(inMemoryPetRepository);
  it('should be able to get all pets', async () => {
    inMemoryPetRepository.create(makePet());
    inMemoryPetRepository.create(makePet());
    const { pets } = await findAllPets.execute();
    expect(pets).toHaveLength(2);
    inMemoryPetRepository.pets = [];
  });
  it('if has no pet in DB, return a empty array', async () => {
    const { pets } = await findAllPets.execute();
    expect(pets).toHaveLength(0);
    expect(pets).toEqual([]);
  });
});
