import React from 'react';
import { PropsInput } from './types';

const Input: React.FC<PropsInput> = ({
  type, className, placeholder, formHook, formRegister,id, checked,onChange
}: PropsInput) => {
  return(
    <input 
      type = {type}
      id={id}
      className = {className}
      checked={checked}
      onChange={onChange}
      placeholder = {placeholder}
      {...formHook?.register(formRegister)}
    />
  )
}

export default Input;