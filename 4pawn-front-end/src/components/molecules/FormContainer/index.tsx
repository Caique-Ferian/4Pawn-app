import React from 'react';
import { FormInfos } from '@atoms/Input/types'
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form'
import FormProps from './types';

const FormContainer: React.FC<FormProps> = ({ children }:FormProps) => {
  const formHook = useForm<FormInfos>();
  const onSubmit: SubmitHandler<FormInfos> = (data) => console.log(data);
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React
        .cloneElement<any & UseFormReturn<FormInfos>>(child, { formHook });
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