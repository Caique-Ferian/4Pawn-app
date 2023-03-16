import React, { useContext } from 'react';
import { FormInfos } from '@atoms/Input/types'
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form'
import FormProps from './types';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';

const FormContainer: React.FC<FormProps> = ({ endpoint, children }:FormProps) => {
  const formHook = useForm<FormInfos>();
  const { post, patch, user } = useContext(AppContext) as AppContextType
  const onSubmit: SubmitHandler<FormInfos> = async (data) => {
    if(endpoint.includes('users/patch')) {
      await patch(endpoint,{ ...data, username: user.username });
    } 
    if(endpoint.includes('pets/patch')) {
      await patch(endpoint,data);
    } else await post(endpoint, data);
  }
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