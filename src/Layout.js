import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/Home'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <div className=' container-2xl'>
        <Home/>
        </div>
        <Footer/>
    </div>
  )
}
