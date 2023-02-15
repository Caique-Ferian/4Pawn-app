import React from 'react';
import { IPropsInput } from './types';

const Input: React.FC<IPropsInput> = ({
  type, className, placeholder, formHook, formRegister,id
}: IPropsInput) => {
  return(
    <input 
      type = {type}
      id={id}
      className = {className}
      placeholder = {placeholder}
      {...formHook?.register(formRegister)}
    />
  )
}

export default Input;