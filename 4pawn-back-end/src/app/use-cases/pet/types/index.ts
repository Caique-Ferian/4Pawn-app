import Pet from '@app/entities/pet/pet';

export interface CreatePetRequest {
  name: string;
  age: number;
  image: string;
  weight: number;
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
  age?: number;
  image?: string;
  weight?: number;
  adopted?: boolean;
}

export interface UpdatePetResponse {
  pet: Pet;
}
