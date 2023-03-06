export interface Error {
  type: string;
  message: string;
}

type AppContextType = {
  errors: Error[],
  token: string,
  user: string,
  post: Function;
}

export default AppContextType;