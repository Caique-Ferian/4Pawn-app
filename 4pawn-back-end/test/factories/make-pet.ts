import Pet from '@app/entities/pet/pet';
import IPropsPet from '@app/entities/pet/types/index';

type Override = Partial<IPropsPet>;

export default function makePet(override: Override = {}) {
  return new Pet({
    name: 'Luna',
    age: 1,
    image: 'fake-image-path',
    weight: 2,
    color: 'black',
    ...override,
  });
}
