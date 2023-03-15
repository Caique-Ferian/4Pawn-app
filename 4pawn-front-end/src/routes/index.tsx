import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginPage from '@pages/login';
import RegisterPage from '@pages/register'
import HomePage from '@pages/home';
import PetDetailsPage from '@pages/pet-details';
import AppProvider from '../context';
import AdminPage from '@pages/admin';
import ProfilePage from '@pages/profile';
import UpdatePetPage from '@pages/update-pet';
const Router: React.FunctionComponent = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppProvider><LoginPage/></AppProvider>} />
      <Route path='/register' element={<AppProvider><RegisterPage/></AppProvider>} />
      <Route path='/profile' element={<AppProvider><ProfilePage/></AppProvider>} />
      <Route path='/admin' element={<AppProvider><AdminPage/></AppProvider>} />
      <Route path='/admin/update/:type' element={<AppProvider><UpdatePetPage/></AppProvider>} />
      <Route path='/pet-details/:id' element={<AppProvider><PetDetailsPage/></AppProvider>} />
      <Route path='/home' element={<AppProvider><HomePage/></AppProvider>} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router