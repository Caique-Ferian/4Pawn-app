import { RegisterOptions, UseFormReturn } from "react-hook-form";

export interface IPropsInput {
  type: string;
  id:string;
  className: string;
  placeholder: string;
  formHook?: UseFormReturn<IFormInfos, object>;
  formRegister: keyof IFormInfos;
  validation: RegisterOptions;
}

export interface IFormInfos {
  username: string;
  password: string;
  fullName: string;
  email: string;
}