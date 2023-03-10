import axios from 'axios';
import LoginBody,{ PetBody } from './types/';


const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_HOSTNAME || 'localhost'}:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
}

export const requestPost = async (endpoint: string, body: LoginBody | PetBody) => {
  if(endpoint === 'pets') {
    const { name, ageInYears,weightInKg,color,image } = body as PetBody;
    const { data } = await api.post(endpoint, {
      name,
      ageInYears: +ageInYears,
      weightInKg: +weightInKg,
      color,
      image
    });
    return data;
  }
  const { data } = await api.post(endpoint, body);
  return data;
}

export const requestPatch = async (endpoint: string, body: Partial<LoginBody | PetBody>) => {
  if(endpoint.includes('pets')) {
    const { name, ageInYears,weightInKg,color,image } = body as PetBody;
    const { data } = await api.post(endpoint, {
      name,
      ageInYears: +ageInYears,
      weightInKg: +weightInKg,
      color,
      image
    });
    return data;
  }
  const { data } = await api.patch(endpoint, body);
  return data;
}


export const requestGet = async(endpoint:string) => {
  const { data } = await api.get(endpoint);
  return data;
}

export default api;