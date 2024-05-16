import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import User from './Components/User'
import About from './Components/About'


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet>
    <Home/>
        <Contact/>
        <About/>
        <User/>
    </Outlet>
        

  

    
   
    </>
  )
}

export default Layout