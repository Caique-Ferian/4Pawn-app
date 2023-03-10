import { Dispatch, SetStateAction } from 'react'

export interface Error {
  type: string;
  message: string;
}

export interface User {
  username: string;
  role: string;
}

export interface Pets {
  name: string;
  ageInYears: number;
  weightInKg: number;
  color: string;
  image: string;
}

type AppContextType = {
  errors: Error[];
  setErrors: Dispatch<SetStateAction<Error[]>>;
  token: string;
  user: User;
  post: Function;
  get: Function;
  cards: Pets[];
  patch: Function;
}

export default AppContextType;