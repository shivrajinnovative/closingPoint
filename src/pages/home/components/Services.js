import React from 'react'
import artiCle from './../../../assets/images/home/article-dummy.png'
import Slider from 'react-slick/lib/slider';

export default function Services() {
    let data=[
        {
            heading:"Buying a Commerical Property",
            text:"Shops, Offices, Lands, Factories Warehouses & More",
            image:artiCle
        },
        {
            heading:"Buying a Commerical Property",
            text:"Shops, Offices, Lands, Factories Warehouses & More",
            image:artiCle
        },
        {
            heading:"Buying a Commerical Property",
            text:"Shops, Offices, Lands, Factories Warehouses & More",
            image:artiCle
        },
        {
            heading:"Buying a Commerical Property",
            text:"Shops, Offices, Lands, Factories Warehouses & More",
            image:artiCle
        },
        {
            heading:"Buying a Commerical Property",
            text:"Shops, Offices, Lands, Factories Warehouses & More",
            image:artiCle
        }
    ]
    
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769, // Breakpoint for mobile devices (landscape)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Breakpoint for mobile devices (portrait)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className='container-xl py-3 md:py-10 md:pb-14' >
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/4">
                <div className="bg-sky-100 rounded-lg h-full flex flex-col justify-center px-7 py-8">
                    <h1 className='text-2xl md:text-4xl font-bold' >Explore</h1>
                    <p>Our Popular Services</p>
                </div>
            </div>
            <div className="w-full lg:w-3/4 p-3">
            <Slider {...settings}>
          {data.map((item, ind) => {
            return <div className='px-4 '>
                <div className='shadow rounded-xl text-white bg-[#3A71B8] p-6'>
                    <img src={item.image} className='size-24'  alt=''/>
                    <h1 className='py-4 text-xl' >{item.heading}</h1>
                    <p className='text-xs' >{item.text}</p>
                    <button className='text-xs bg-black py-2 mt-5 px-5 rounded-full'>Explore Now</button>
                </div>
            </div>
          })}
        </Slider>
            </div>
        </div>
    </div>
  )
}
