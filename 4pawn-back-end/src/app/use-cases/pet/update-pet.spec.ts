import InMemoryPetRepository from '@test/repositories/in-memory-pet-repository';
import makePet from '@test/factories/make-pet';
import PetNotFound from './error/petNotFound';
import UpdatePet from './update-pet';

describe('Testing use-case Update Pet', () => {
  const inMemoryPetRepository = new InMemoryPetRepository();
  inMemoryPetRepository.create(makePet());
  const updatePet = new UpdatePet(inMemoryPetRepository);

  it('should be able to update a pet age with a existent pet', async () => {
    const { pet } = await updatePet.execute({
      id: inMemoryPetRepository.pets[0].id,
      age: 2,
    });
    expect(inMemoryPetRepository.pets[0]).toEqual(pet);
  });
  it('should be able to update a pet image with a existent pet', async () => {
    const { pet } = await updatePet.execute({
      id: inMemoryPetRepository.pets[0].id,
      image: 'fake-image-2',
    });
    expect(inMemoryPetRepository.pets[0]).toEqual(pet);
  });
  it('should be able to update a pet weight with a existent pet', async () => {
    const { pet } = await updatePet.execute({
      id: inMemoryPetRepository.pets[0].id,
      weight: 4,
    });
    expect(inMemoryPetRepository.pets[0]).toEqual(pet);
  });
  it('should be able to update a pet adopted status with a existent pet', async () => {
    const { pet } = await updatePet.execute({
      id: inMemoryPetRepository.pets[0].id,
      adopted: true,
    });
    expect(inMemoryPetRepository.pets[0]).toEqual(pet);
    inMemoryPetRepository.pets = [];
  });
  it('should not be able to update a pet info with a inexistent pet', async () => {
    expect(() =>
      updatePet.execute({
        id: '12345s6788',
        age: 2,
      }),
    ).rejects.toThrow(PetNotFound);
  });
});
