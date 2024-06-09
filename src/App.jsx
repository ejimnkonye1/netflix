import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './profile/Login'
import { Mobile } from './profile/mobile';
import { User } from './profile/User';
import { HomePage } from './profile/home';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='mobile' element={<Mobile />} />
        <Route path='User' element={<User />} />
        <Route path='home' element={<HomePage />} />
      </Routes>
    </Router>
  
    </>
  )
}

export default App

