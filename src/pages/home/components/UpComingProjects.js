import React from 'react'
import projectImage from './../../../assets/images/home/upcomming-project.png'
import projectLogo from './../../../assets/images/home/project-logo.png'


export default function UpComingProjects() {
    const Project=()=>{
        return <div className="w-full lg:w-1/2 p-3 ">
            <div className='shadow-md bg-white rounded-md group  cursor-pointer hover:shadow-lg'>
                <div className='overflow-hidden'>
                <img src={projectImage} alt="" className='w-full group-hover:scale-105 transition-all duration-200' />
                </div>
                <div className='p-4 flex flex-wrap justify-between'>
                    <div className='flex'>
                        <div className='border flex items-center content-center p-2 me-3'>
                            <img src={projectLogo} className='w-full' alt="" />
                        </div>
                        <div>
                            <h4 className='font-semibold' >Sai Vrindavan</h4>
                            <p className='text-sm' >New Panvel, Navi Mumbai</p>
                        </div>
                    </div>
                    <button className='border border-sky-700 text-sky-700 text-sm py-3 mt-4 mx-auto md:m-0 px-9 rounded-full' >Get in Touch</button>
                </div>
                <p className='p-4' >Interested in this project by</p>
            </div>
        </div> 
    } 


  return (
    <div className='container-xl py-3 md:py-8' >
        <h1 className='text-2xl md:text-3xl font-semibold' >Upcoming Projects</h1>
        <p>Visit these projects and get early bird benefits</p>
        <div className="flex flex-wrap pt-5">
            <Project/>
            <Project/>
        </div>
    </div>
  )
}
