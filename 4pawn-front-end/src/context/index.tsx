import React, { useState } from 'react';
import AppContextType, { Error, Pets, User } from './types';
import { requestPost, requestGet, setToken as tokenToApi, requestPatch } from '@utils/request';
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
        tokenToApi(token);
        navigate('/home');
      }
      if(endpoint.includes('pets')) {
        await requestPost(endpoint, data);
        await get(endpoint);
        navigate('/home');
      }
    } catch(err: any){
      const { response: { data } } = err;
      setErrors(errorHandler(data));
    }
  }
  const patch = async (endpoint: string, data: FormInfos): Promise<void> => {
    try{
      if(endpoint.includes('users')) {
        await requestPatch(endpoint, data);
      }
      if(endpoint.includes('pets')) {
        await requestPatch(endpoint, data);
        await get('pets');
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
    <AppContext.Provider value={{ errors, setErrors, token, user, post, get, cards, patch }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider;