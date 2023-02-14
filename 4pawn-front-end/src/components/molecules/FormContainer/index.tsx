import React, { useContext } from 'react';
import { IFormInfos } from '../../atoms/Input/types'
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form'
import IFormProps from './types';
import { AppContext } from '../../../context';
import AppContextType from '../../../context/types';

const FormContainer: React.FC<IFormProps> = ({ children }:IFormProps) => {
  const formHook = useForm<IFormInfos>();
  const { setError } = useContext(AppContext) as AppContextType;
  const onSubmit: SubmitHandler<IFormInfos> = (data) => console.log(data);
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React
        .cloneElement<any & UseFormReturn<IFormInfos>>(child, { formHook });
    }
    return child;
  });
  if (formHook?.formState.errors) {
    const { username, password, email, fullName} = formHook.formState.errors;
    if(username) {
      setError((prev) => ({
        ...prev,
        type:'username',
        message: username.message as string,
      }));
    }
    else if(password) {
      setError((prev) => ({
        ...prev,
        type:'password',
        message: password.message as string,
      }));

    }
    else if(email) {
      setError((prev) => ({
        ...prev,
        type:'email',
        message: email.message as string,
      }));

    }
    else if (fullName) {
      setError((prev) => ({
        ...prev,
        type:'fullName',
        message: fullName.message as string,
      }));

    }
  }
    return(
      <form onSubmit={formHook.handleSubmit(onSubmit)}> 
      {childrenWithProps}
    </form>
  );
}

export default FormContainer;