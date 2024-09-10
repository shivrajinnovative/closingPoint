import React from 'react'
import bhkChoiseImage from './../../../assets/images/home/bhkchoice.png'
import buildingY from './../../../assets/icons/home/building-yellow.svg'
import buildingB from './../../../assets/icons/home/building-blue.svg'

export default function BHKChoise() {
    

    const Property=({image,text,textColor,count})=>{
        return (
            
            <div className='text-center md:mx-4 mb-4'>
                <div className='bg-white size-28 rounded-full flex justify-center items-center'>
                    <img src={image} alt="" width="60px" />
                </div>
                <h1 className={`${textColor} text-xl font-semibold pt-3`} >{text}</h1>
                <p className='text-sm' >{count} Properties</p>
            </div>
        )
    }

  return (  
    <div className='container-xl py-3 md:py-8 ' >
        <div className=' p-8 bg-sky-100 max-w-6xl mx-auto'>

        <div className="flex flex-wrap items-center justify-center md:justify-normal">
            <img src={bhkChoiseImage} alt="" />
            <div className='my-3 md:my-0 md:ps-7'>
                <h1 className='text-2xl md:text-4xl font-semibold'>BHK Choice in Mind?</h1>
                <p>Browse by no. of bedrooms in the house   </p>
            </div>
        </div>
        <div className="flex flex-wrap mt-14  md:gap-6 justify-between">
            <Property image={buildingY} text="1 RK" count="4,700+" textColor="text-orange-400" />
            <Property image={buildingB} text="2 BHK" count="4,700+" textColor="text-blue-700" />
            <Property image={buildingY} text="3 BHK" count="4,700+" textColor="text-orange-400" />
            <Property image={buildingB} text="4 BHK" count="4,700+" textColor="text-blue-700" />
        </div>
        </div>
    </div>
  )
}
