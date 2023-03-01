import Pet from '@app/entities/pet/pet';

export interface CreatePetRequest {
  name: string;
  ageInYears: number;
  image: string;
  weightInKg: number;
  color: string;
}

export interface CreatePetResponse {
  pet: Pet;
}

export interface FindAllPetsResponse {
  pets: Pet[];
}

export interface UpdatePetRequest {
  id: string;
  ageInYears?: number;
  image?: string;
  weightInKg?: number;
  adopted?: boolean;
}

export interface UpdatePetResponse {
  pet: Pet;
}
