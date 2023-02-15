import React from 'react';
import { IFormInfos } from '@atoms/Input/types'
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form'
import IFormProps from './types';

const FormContainer: React.FC<IFormProps> = ({ children }:IFormProps) => {
  const formHook = useForm<IFormInfos>();
  const onSubmit: SubmitHandler<IFormInfos> = (data) => console.log(data);
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React
        .cloneElement<any & UseFormReturn<IFormInfos>>(child, { formHook });
    }
    return child;
  });
    return(
      <form onSubmit={formHook.handleSubmit(onSubmit)}> 
      {childrenWithProps}
    </form> 
  );
}

export default FormContainer;