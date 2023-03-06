export default interface LoginBody {
  fullName?: string;
  username: string;
  email?: string;
  password: string;
}

export interface PetBody {
  name: string;
  ageInYears: string;
  weightInKg: string;
  color: string;
  image: string;
}