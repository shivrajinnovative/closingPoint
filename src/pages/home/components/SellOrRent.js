import React from 'react'
import image from './../../../assets/images/home/sell-rent.png'
import whatsappIcon from './../../../assets/icons/home/whatsapp.svg'
import freeIcon from './../../../assets/icons/home/free.svg'
export default function SellOrRent() {
  return (
    <div className=' container-xl py-3 pt-20 md:pt-60 lg:pt-16   mt-96 md:mt-56 lg:mt-16 '>
        <h2 className='text-2xl md:text-3xl font-semibold py-4' >Sell Or Rent your Property</h2>
            <div className="w-full">
                <div className="bg-sky-100 p-8 rounded-md">
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-7/12 relative">
                        <h2 className="text-3xl  lg:text-6xl my-8 pe-3">
                            <span className="text-lime-600">Register</span> to Post your Property for 
                            <img src={freeIcon} alt="Free Icon" className="inline-block ms-3" />
                        </h2>
                            <p className='text-sm md:text-lg' >Post your Residential / Commercial Property</p>
                            <button className='bg-black text-white font-light  mt-10 mb-28 py-2 md:py-3 px-5 rounded-full lg:px-16' >Post your <span className='font-medium'>Property for Free</span></button>
                            <p className='flex w-full flex-wrap items-center absolute bottom-0  py-5' >Or post via <img src={whatsappIcon} className='mx-2' width="20px" alt="" /> WhatsApp, send a Hi, to +9187579864786</p>
                        </div>
                        <div className="w-full md:w-5/12">
                            <img src={image} className='w-full  lg:w-10/12 ms-auto' alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
