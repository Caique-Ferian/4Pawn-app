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
  checked,
  onChange,
}: PropsUserOrPetInput) => {
  return(
    <Label className="col-form-label-lg" content={content} htmlFor={htmlFor}>
      <Input
        formRegister={formRegister}
        id={htmlFor}
        formHook={formHook}
        type={type as string}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder as string}
        className='form-control form-control-lg'
      />
    </Label>
  );
}

export default UserOrPetInput;