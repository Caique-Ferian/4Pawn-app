import CreatePet from './create-pet';
import InMemoryPetRepository from '@test/repositories/in-memory-pet-repository';

describe('Testing use-case Create Pet', () => {
  it('should be able to create a new pet', async () => {
    const inMemoryPetRepository = new InMemoryPetRepository();
    const createPet = new CreatePet(inMemoryPetRepository);
    const { pet } = await createPet.execute({
      name: 'Luna',
      age: 1,
      image: 'fake-image-path',
      weight: 2,
      color: 'black',
    });
    expect(inMemoryPetRepository.pets).toHaveLength(1);
    expect(inMemoryPetRepository.pets[0]).toEqual(pet);
  });
});
