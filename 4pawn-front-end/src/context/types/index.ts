export interface IError {
  type: string;
  message: string;
}

type AppContextType = {
  error: IError,
  setError: React.Dispatch<React.SetStateAction<IError>>
}

export default AppContextType;