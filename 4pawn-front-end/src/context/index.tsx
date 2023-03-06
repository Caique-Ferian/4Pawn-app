import React, { useState } from 'react';
import AppContextType, { Error } from './types';
import { requestPost } from '@utils/request';
import { FormInfos } from '@atoms/Input/types';
import { useNavigate } from 'react-router-dom';
import errorHandler from '@utils/error';
export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [errors,setErrors] = useState<Error[]>([]);
  const [user,setUser] = useState<string>('');
  const [token,setToken] = useState<string>('');
  const navigate = useNavigate();
  const post = async (endpoint: string, data: FormInfos): Promise<void> => {
    try{
      if(endpoint.includes('users')) {
        const { token } = await requestPost(endpoint, data);
        setToken(token);
        setUser(data.username);
        navigate('/home');
      }
    } catch(err: any){
      const { response: { data } } = err;
      setErrors(errorHandler(data));
    }
  }
  return(
    <AppContext.Provider value={{ errors, token, user, post }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider;