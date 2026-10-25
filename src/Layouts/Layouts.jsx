import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Layouts = () => {
  return (
   <>
   <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
   </>
  )
}

export default Layouts