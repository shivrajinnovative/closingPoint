import React from 'react'
import budgetImg from './../../../assets/images/home/budget.png'
export default function Budget() {

    const PriceFilter=()=>{
        return (
            <div className='flex md:w-1/2 my-3 lg:w-1/3 px-2'>
                <div className='font-semibold bg-green-200 rounded-full size-20 flex  justify-center items-center' >
                ₹₹
                </div>
                <div className='px-4'>
                    <h1 className='text-lg md:text-xl font-semibold' >Affordable Projects</h1>
                    <p>₹ 12500 / sq. ft</p>
                </div>
            </div>
        )
    }

  return (
    <div className='container-xl py-3 md:py-8 ' >
         <div className="max-w-6xl  mx-auto">

        <h1 className='text-2xl md:text-3xl font-semibold' >Have a Budget in Mind?</h1>
        <p>Visit these projects and get early bird benefits</p>
        <div className=' p-8 bg-orange-100 my-4'>
            <div className='flex flex-wrap items-center'>
                <img src={budgetImg} alt="" />
                <div className='ps-6'>
                    <h1 className='text-3xl md:text-4xl font-semibold' >Browse by Budget</h1>
                    <p>Project options based on your budget</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center max-w-full bg-white rounded-3xl mt-10 md:rounded-full p-6">
                <PriceFilter/>
                <PriceFilter/>
                <PriceFilter/>
            </div>
        </div>
         </div>
        </div>
  )
}
