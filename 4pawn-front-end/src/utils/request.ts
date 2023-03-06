import axios from 'axios';
import LoginBody from './types/';


const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_HOSTNAME || 'localhost'}:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestPost = async (endpoint: string, body: LoginBody) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export default api;