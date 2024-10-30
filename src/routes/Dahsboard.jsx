import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home';
import Collection from '../components/Collection';
import Profile from '../components/Profile';

const Dahsboard = ({}) => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default Dahsboard