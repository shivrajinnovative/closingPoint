import React from 'react'
import buyBtn from './../../../assets/icons/home/buy-button.svg'
import rentBtn from './../../../assets/icons/home/rent-button.svg'
import rightArrow from './../../../assets/icons/home/rightLongArrow.svg'
export default function ExplorePopularLocality() {

    const Localiti=()=>{
        return (
            <div className='bg-blue-500 rounded-lg lg:w-[380px]'>
            <div className='bg-white  mt-2 rounded-lg text-black'>
                <div className='border-b-2 p-5'>
                    <h1>Kharghar, Navi Mumbai</h1>
                    <p className='text-blue-600 text-sm'>191 projects</p>  
                </div>
                <div className='px-5 flex'>
                    <div className="w-1/2 py-3  border-e-2 pe-3 ">
                        <div className='flex align-center'>
                            <img src={buyBtn} width="20px" className='me-3' alt="" /><p className='text-sm' > Buy </p>
                        </div>
                        <p className='text-sm py-3'> ₹ 9973/ sq.ft</p>
                        <div className='flex' >
                            <p className='text-xs text-blue-600' >3361 Property for Sale in Kharghar, Navi Mumbai </p>
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                    <div className="w-1/2 py-3 ps-3 ">
                        <div className='flex align-center'>
                            <img src={rentBtn} width="20px" className='me-3' alt="" /><p className='text-sm' >  Rent </p>
                        </div>
                        <p className='text-sm py-3'> ₹ 30/ sq.ft</p>
                        <div className='flex' >
                            <p className='text-xs text-blue-600' >3361 Property for Sale in Kharghar, Navi Mumbai </p>
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }


  return (
    <div className='container-xl text-white py-3 md:py-10'>
       <h1 className='font-semibold text-xl md:text-2xl'>Explore Popular Localities in Navi Mumbai</h1>
        <p className='font-normal text-slate-400' >Visit these projects and get early bird benefits</p>
        <div className="flex flex-wrap gap-x-8 gap-y-8 mt-5 py-3">
            <Localiti/>
            <Localiti/>
            <Localiti/>
        </div> 
    </div>
  )
}
