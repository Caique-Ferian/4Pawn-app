import Pet from './pet';

describe('Pet', () => {
  it('should be able to create a pet', () => {
    const pet = new Pet({
      name: 'Luna',
      age: 8,
      image: 'some-image',
      weight: 5,
      color: 'tabby',
      adopted: false,
    });

    expect(pet).toBeInstanceOf(Pet);
  });
});
