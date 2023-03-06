import React from "react";
import Label from "@atoms/Label";
import Input from "@atoms/Input";
import PropsUserOrPetInput from "./types";

const UserOrPetInput: React.FC<PropsUserOrPetInput> = ({ 
  formRegister,
  formHook,
  type,
  placeholder,
  content,
  htmlFor,
}: PropsUserOrPetInput) => {
  return(
    <Label className="label-input" content={content} htmlFor={htmlFor}>
      <Input
        formRegister={formRegister}
        id={htmlFor}
        formHook={formHook}
        type={type as string}
        placeholder={placeholder as string}
        className="input-user"
      />
    </Label>
  );
}

export default UserOrPetInput;