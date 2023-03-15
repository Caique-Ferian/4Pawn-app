import { UseFormReturn } from "react-hook-form";

export interface PropsInput {
  type: string;
  id:string;
  className: string;
  placeholder: string;
  checked?: boolean;
  onChange?: () => void;
  formHook?: UseFormReturn<FormInfos, object>;
  formRegister: keyof FormInfos;
}

export interface FormInfos {
  id?:string
  username: string;
  password: string;
  fullName: string;
  email: string;
  name: string;
  ageInYears: string; 
  weightInKg: string;
  color: string;
  image: string;
  adopted:boolean;
}