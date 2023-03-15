import { FormInfos, PropsInput } from "../../../atoms/Input/types";

export default interface PropsUserOrPetInput extends Partial<PropsInput>{
  content: string;
  htmlFor: string;
  checked?:boolean;
  onChange?: () => void;
  formRegister: keyof FormInfos;
}