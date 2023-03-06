import { Error } from '@context/types';
import errorsTypes from '../constants/index';

const errorHandler = (data: any): Error[] => {
  const result: Error[] = [];
  let type: string;
  if(data.message) {
    data.message.forEach((e:string) => {
      type = errorsTypes
        .find((t:string) => e.toLowerCase().includes(t)) as string;
      result.push({ type, message: e });
    })
  } else {
    type = errorsTypes
    .find((t:string) => data.error.toLowerCase().includes(t)) as string;
    result.push({ type, message: data.error });
  }
  return result;
}

export default errorHandler;