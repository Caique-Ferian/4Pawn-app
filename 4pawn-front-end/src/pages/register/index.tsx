import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import validate from '../../utils';

const RegisterPage: React.FunctionComponent = () => {
  const [username,setUsername] = useState<string>('')
  const [fullname,setFullname] = useState<string>('')
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const navigate = useNavigate();
  return(
    <div>
      <form>
      <label htmlFor="nome-input">
          <input 
            type="text"
            value={fullname}
            onChange={ ({ target:{ value } }) => setFullname(value) }
            placeholder='Nome Completo'
          />
        </label>
        <label htmlFor="usuário-input">
          <input 
            type="text"
            value={email}
            onChange={ ({ target:{ value } }) => setEmail(value) }
            placeholder='Email'
          />
        </label>
        <label htmlFor="usuário-input">
          <input 
            type="text"
            value={username}
            onChange={ ({ target:{ value } }) => setUsername(value) }
            placeholder='Usuário'
          />
        </label>
        <label htmlFor="password-input">
          <input 
            type="password"
            value={password}
            onChange={ ({ target:{ value } }) => setPassword(value) }
            placeholder='Senha'
          />
        </label>
        <button
          type='button'
          disabled={ !validate(username,password) }
          onClick={ () => navigate('/home') }
        >
          Registrar
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;