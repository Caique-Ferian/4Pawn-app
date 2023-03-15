
import CardsProps from '@organisms/petOrganism/PetsCard/types/index';

export default interface PetDetailsProps extends CardsProps {
  ageInYears: number;
  weightInKg: number;
  color: string;
}