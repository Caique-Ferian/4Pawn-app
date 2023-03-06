import React from 'react';
import { PropsInput } from './types';

const Input: React.FC<PropsInput> = ({
  type, className, placeholder, formHook, formRegister,id
}: PropsInput) => {
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