import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './profile/Login'
import { Mobile } from './profile/mobile';
import { User } from './profile/User';
import { HomePage } from './profile/home';
import { Signup } from './profile/Signup';
import { Moviedetails } from './component/Moviedetials'
import { Search } from './component/Search';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='mobile' element={<Mobile />} />
        <Route path='User' element={<User />} />
        <Route path='home' element={<HomePage />} />
        <Route path="/movies/:id"  element={<Moviedetails />} />
        <Route path="/search"  element={<Search />} />
      </Routes>
    </Router>
  
    </>
  )
}

export default App

