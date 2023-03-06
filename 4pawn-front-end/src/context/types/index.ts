export interface Error {
  type: string;
  message: string;
}

type AppContextType = {
  error: Error,
  token: string,
  user: string,
  post: Function;
}

export default AppContextType;