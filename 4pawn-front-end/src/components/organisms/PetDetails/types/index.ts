
import CardsProps from '@organisms/PetsCard/types/index';

export default interface PetDetailsProps extends CardsProps {
  ageInYears: number;
  weightInKg: number;
  color: string;
}