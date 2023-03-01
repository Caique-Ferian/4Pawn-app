import Pet from '@app/entities/pet/pet';
import IPropsPet from '@app/entities/pet/types/index';

type Override = Partial<IPropsPet>;

export default function makePet(override: Override = {}) {
  return new Pet({
    name: 'Luna',
    ageInYears: 1,
    image: 'fake-image-path',
    weightInKg: 2,
    color: 'black',
    ...override,
  });
}
