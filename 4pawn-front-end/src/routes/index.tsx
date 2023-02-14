import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register'
import HomePage from '../pages/home';
import AppProvider from '../context';
const Router: React.FunctionComponent = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppProvider><LoginPage/></AppProvider>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/home' element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router