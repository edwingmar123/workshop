import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../components/Landing'
import Home from '../components/Home'

const AppRoutes = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>        
    </BrowserRouter>
  )
}

export default AppRoutes