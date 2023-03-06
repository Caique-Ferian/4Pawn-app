import { FormInfos, PropsInput } from "../../../atoms/Input/types";

export default interface PropsUserOrPetInput extends Partial<PropsInput>{
  content: string;
  htmlFor: string;
  formRegister: keyof FormInfos;
}