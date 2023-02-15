import React, { useState } from 'react';
import AppContextType, { IError } from './types';

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [error,setError] = useState<IError>({type:'',message:''});
  return(
    <AppContext.Provider value={{ error, setError }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider;