import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import IPropsUserInput from "./types";

const UserInput: React.FC<IPropsUserInput> = ({ 
  formRegister,
  formHook,
  type,
  placeholder,
  content,
  htmlFor,
  validation,
}: IPropsUserInput) => {
  return(
    <Label className="label-input" content={content} htmlFor={htmlFor}>
      <Input
        formRegister={formRegister}
        validation={validation}
        id={htmlFor}
        formHook={formHook}
        type={type as string}
        placeholder={placeholder as string}
        className="input-user"
      />
    </Label>
  );
}

export default UserInput;