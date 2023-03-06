import React, { useState } from 'react';
import AppContextType, { Error, Pets, User } from './types';
import { requestPost, requestGet } from '@utils/request';
import { FormInfos } from '@atoms/Input/types';
import { useNavigate } from 'react-router-dom';
import errorHandler from '@utils/error';
export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [errors,setErrors] = useState<Error[]>([]);
  const [user,setUser] = useState<User>({ username:'', role: '' });
  const [token,setToken] = useState<string>('');
  const [cards,setCards] = useState<Pets[]>([]);
  const navigate = useNavigate();
  const post = async (endpoint: string, data: FormInfos): Promise<void> => {
    try{
      if(endpoint.includes('users')) {
        const { token, role } = await requestPost(endpoint, data);
        setToken(token);
        setUser({username: data.username, role});
        navigate('/home');
      }
    } catch(err: any){
      const { response: { data } } = err;
      setErrors(errorHandler(data));
    }
  }
  const get = async(endpoint:string): Promise<void> => {
    const { pets } = await requestGet(endpoint);
    setCards(pets);
  }
  return(
    <AppContext.Provider value={{ errors, token, user, post, get, cards }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider;