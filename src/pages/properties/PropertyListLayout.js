import React from 'react'
import Navbar from './components/Navbar'
import Footer from '../../components/footer/Footer'
import Filters from './components/Filters'
import PropertyList from './components/PropertyList'

export default function PropertyListLayout() {
  return (
    <div className='bg-slate-100' >
        <Navbar/>
        <div  className='container-2xl pt-28'>
            <div className="flex max-w-7xl mx-auto">
                <div className="fixed lg:relative lg:w-1/4">
                    <Filters/>
                </div>
                <div className="lg:w-3/4 md:px-5">
                    <PropertyList/> 
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
