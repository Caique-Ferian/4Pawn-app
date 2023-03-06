import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginPage from '@pages/login';
import RegisterPage from '@pages/register'
import HomePage from '@pages/home';
import PetDetailsPage from '@pages/pet-details';
import AppProvider from '../context';
import AdminPage from '@pages/admin';
const Router: React.FunctionComponent = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppProvider><LoginPage/></AppProvider>} />
      <Route path='/register' element={<AppProvider><RegisterPage/></AppProvider>} />
      <Route path='/admin' element={<AppProvider><AdminPage/></AppProvider>} />
      <Route path='/home' element={<AppProvider><HomePage/></AppProvider>} />
      <Route path='/pet-details/:id' element={<AppProvider><PetDetailsPage/></AppProvider>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router