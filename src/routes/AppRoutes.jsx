import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../components/Landing'
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Register from '../components/Register';

const AppRoutes = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
  }, [])

  return (
    <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/home' element={<Home/>} />


        </Routes>        
    </BrowserRouter>
  )
}

export default AppRoutes