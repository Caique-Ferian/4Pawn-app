import React, { useState } from 'react';
import AppContextType, { Error } from './types';
import { requestPost } from '@utils/request';
import { FormInfos } from '@atoms/Input/types';
import errorsTypes from './constants';
import { useNavigate } from 'react-router-dom';
export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [error,setError] = useState<Error>({type:'',message:''});
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
      const { response: { data: { error }} } = err;
      const type = errorsTypes.find((e) => error.toLowerCase().includes(e));
      if(type) setError({ type, message: error })
    }
  }
  return(
    <AppContext.Provider value={{ error, token, user, post }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider;