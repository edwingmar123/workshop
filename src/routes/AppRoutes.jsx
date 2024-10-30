import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Landing from '../components/Landing'

import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Register from '../components/Register';

import Dahsboard from './Dahsboard';
import Private from './Private';
import Footers from '../components/Footers';

const AppRoutes = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
  }, [])

  return (
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={!isLoggedIn ? (<Login setIsLoggedIn={setIsLoggedIn} />) : (<Navigate to='/home' />)} />
        <Route path='/register' element={<Register />} />

        {/* Rutas Privadas */}
        <Route path='/*' element={<Private isAuthenticated={isLoggedIn}>
          <Dahsboard /></Private>}>
        </Route>
      </Routes>
      <Footers/> 
    </BrowserRouter>
  )
}

export default AppRoutes