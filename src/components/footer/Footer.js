import React, { Children } from 'react'
import list1 from './data/closingPoint'
import { Link } from 'react-router-dom'
import compnay from './data/company'
import partners from './data/ourPartners'
export default function Footer() {


  const List=({items,children})=>{
    return (
      <div>
         
         <h1 className='font-semibold text-2xl mb-9' >{children}</h1>
        {items.map((item, index) =>{
          return (
            <div key={index} className='text-slate-300 text-sm mb-4' >
              <Link  to={item.url}>{item.name}</Link>
            </div>
          )
        }) }
      </div>
    )
  }


  return (
    <footer className='bg-[#090E1B] text-white' >
      <div className='container-xl py-3 md:py-10'>
        <div className="flex flex-wrap">
        <div className="w-full lg:w-5/12 flex flex-wrap">
          <div className="w-full md:w-1/2">
          <List items={list1}>Closing Point</List>
          </div>
          <div className="w-full md:w-1/2">
          <List items={compnay}>Company</List>
          </div>
        </div>
        <div className="w-full lg:w-7/12 flex flex-wrap">
        
        <div className="w-full md:w-1/2">
          <List items={partners}>Our Partners</List>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className='font-semibold text-2xl mb-9' >Contact Us</h1>
          <p><span className='font-medium' >Toll Free </span>+91 87579864786</p>
          <p className='mb-8' >9:30 AM to 6:30 PM (Mon-Sun)</p>


           <p>Email: sale@closingpoint.in</p>
        
          <p className='mb-8' >Connect With us</p>
          <p className='font-medium'>Address</p>
          <p>3rd Floor, Office No.305, Neelkanth
Landmark Plot No. 365/1, Behind Orion Mall,
Mumbai-Pune Expy,
Old Panvel, 410206</p>
        </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
