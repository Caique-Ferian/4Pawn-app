import React from 'react';
import { IPropsInput } from './types';

const Input: React.FC<IPropsInput> = ({
  type, className, placeholder, formHook, formRegister,id, validation
}: IPropsInput) => {
  return(
    <input 
      type = {type}
      id={id}
      className = {className}
      placeholder = {placeholder}
      {...formHook?.register(formRegister, validation)}
    />
  )
}

export default Input;