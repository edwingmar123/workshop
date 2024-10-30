import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import RegisterBackup from './components/RegisterBackup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <BrowserRouter>
            
            <Routes>
              <Route path='/login'  element={<Login /> } />
              <Route path='/registerb'  element={<RegisterBackup/> } />
              


            </Routes>
          </BrowserRouter>
        </div>
       
    </>
  )
}

export default App
