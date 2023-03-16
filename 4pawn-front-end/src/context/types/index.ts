import { Dispatch, SetStateAction } from 'react'

export interface Error {
  type: string;
  message: string;
}

export interface User {
  username: string;
  email: string;
  role: string;
}

export interface Pets {
  id:string;
  name: string;
  ageInYears: number;
  weightInKg: number;
  color: string;
  image: string;
  adopted:boolean;
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
  goBack: Function;
  setPetId: Dispatch<SetStateAction<string>>;
  setCards: Dispatch<SetStateAction<Pets[]>>;


}

export default AppContextType;