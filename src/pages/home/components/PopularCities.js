import React from 'react'
import puneImage from './../../../assets/images/home/popular/pune.png'
import bangloreImage from './../../../assets/images/home/popular/Banglore.png'
import chennaiImage from './../../../assets/images/home/popular/Chennai.png'
import delhiImage from './../../../assets/images/home/popular/delhi.png'
import kolkattaImage from './../../../assets/images/home/popular/Kolkata.png'
export default function PopularCities() {

    const data=[
        {
            image:puneImage,
            name:"Pune",
            number:"27,0000"
        },
        {
            image:chennaiImage,
            name:"Chennai",
            number:"27,0000"
        },
        {
            image:bangloreImage,
            name:"Banglore",
            number:"27,0000"
        },
        {
            image:kolkattaImage,
            name:"Kolkata",
            number:"27,0000"
        },
        {
            image:kolkattaImage,
            name:"Kolkata",
            number:"27,0000"
        },
        {
            image:delhiImage,
            name:"Delhi/NCR",
            number:"27,0000"
        },
]
    
  return (
    <div className='py-3 md:py-10' >
        <div className="container-xl">
            <p>Top Cities</p>
            <h1 className='text-2xl font-semibold mb-5 md:text-3xl' >Explore Real Estate in Popular Indian Cities</h1>
            <div className="flex flex-wrap">
                {data.map((item, index) => (
                    <div key={index} className='flex lg:m-4 cursor-pointer mb-6'>
                       <div>
                             <img src={item.image} height="140px" width="140px" alt="" />
                       </div>
                        <div className='p-6 flex justify-center flex-col'>
                            <h3 className='font-semibold text-xl text-blue-900'>{item.name}</h3>
                            <p>{item.number} Properties</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
