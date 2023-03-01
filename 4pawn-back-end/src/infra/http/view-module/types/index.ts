export interface UserHTTP {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

export interface PetHTTP {
  id: string;
  name: string;
  ageInYears: number;
  image: string;
  weightInKg: number;
  color: string;
  adopted: boolean;
}
