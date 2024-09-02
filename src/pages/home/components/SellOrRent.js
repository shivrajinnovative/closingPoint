import React from 'react'
import image from './../../../assets/images/home/sell-rent.png'
import whatsappIcon from './../../../assets/icons/home/whatsapp.svg'
export default function SellOrRent() {
  return (
    <div className='py-3 md:py-28 px-4 md:px-10 mt-72 md:mt-60 lg:mt-0'>
        <h2 className='text-lg font-bold py-4' >Sell Or Rent your Property</h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12">
                <div className="bg-sky-100 p-8 rounded-md">
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-7/12 relative">
                        <h2 className='text-5xl my-8 pe-3' ><span className='text-lime-600' > Register </span>to Post your  Property for </h2>
                            <p>Post your Residential / Commercial Property</p>
                            <button className='bg-black text-white font-light  mt-10 my-20 py-3 px-7 rounded-full' >Post your <span className='font-medium'>Property for Free</span></button>
                            <p className='flex w-screen flex-wrap items-center absolute bottom-0 text-sm' >Or post via <img src={whatsappIcon} className='mx-2' width="20px" alt="" /> WhatsApp, send a Hi, to +91 87579864786</p>
                        </div>
                        <div className="w-full md:w-5/12">
                            <img src={image} className='w-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-4/12"></div>
        </div>
    </div>
  )
}
