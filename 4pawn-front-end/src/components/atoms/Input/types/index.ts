import { UseFormReturn } from "react-hook-form";

export interface PropsInput {
  type: string;
  id:string;
  className: string;
  placeholder: string;
  formHook?: UseFormReturn<FormInfos, object>;
  formRegister: keyof FormInfos;
}

export interface FormInfos {
  username: string;
  password: string;
  fullName: string;
  email: string;
  petName: string;
  petAge: number; 
  petWeight: number;
  petColor: string;
  petImage: string;
}