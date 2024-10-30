import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../components/Landing'
import Home from '../components/Home';
import NavBar from '../components/NavBar';

const AppRoutes = () => {

  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/home' element={<Home/>} />

        </Routes>        
    </BrowserRouter>
  )
}

export default AppRoutes