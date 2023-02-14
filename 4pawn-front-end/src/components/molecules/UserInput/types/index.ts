import { RegisterOptions } from "react-hook-form";
import { IFormInfos, IPropsInput } from "../../../atoms/Input/types";

export default interface IPropsUserInput extends Partial<IPropsInput>{
  content: string;
  htmlFor: string;
  formRegister: keyof IFormInfos;
  validation: RegisterOptions
}