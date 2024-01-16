import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/addblog' element={<AddBlog/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </>
  )
}

export default App
