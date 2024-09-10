import React from 'react'
import projectImage from './../../../assets/images/home/projects-demand.png'
export default function ProjectInDemand() {

    const Project=()=>{
        return <div className="w-full lg:w-1/3 p-3 ">
            <div className='shadow-sm bg-white rounded-md group cursor-pointer hover:shadow'>
                <div className="overflow-hidden">
                <img src={projectImage} alt="" className='w-full group-hover:scale-105 transition-all duration-200' />
                </div>
                
                <div className='p-4'>
                    <h1 className='font-semibold text-2xl' >Siddhivinayak Signature City</h1>
                    <p className='py-3 text-sm'>1, & 2 Bhk Apartments in Taloja, Navi Mumbai</p>
                    <h1 className='font-semibold text-2xl' >₹ 38 - 53 L</h1>
                </div>
            </div>
        </div> 
    } 

  return (
    <div className='container-xl py-3 md:py-8' >
        <h1 className='text-2xl md:text-3xl font-semibold' >Projects in High Demand</h1>
        <p>The most explored projects in Navi Mumbai</p>
        <div className="flex flex-wrap pt-5">
            <Project/>
            <Project/>
            <Project/>
        </div>
    </div>
  )
}
