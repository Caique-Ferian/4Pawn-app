const MIN_LENGTH_PASSWORD = 8;
const MIN_LENGTH_USERNAME = 5;

const validate = (username:string,password:string): boolean => {
  return (username.length >= MIN_LENGTH_USERNAME 
    && password.length >= MIN_LENGTH_PASSWORD)
}

export default validate;