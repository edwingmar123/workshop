import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'

import Landing from './components/Landing'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />


          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
