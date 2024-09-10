import React from 'react'
import Slider from 'react-slick/lib/slider';
import artiCle from './../../../assets/images/home/article-dummy.png'
import calender from './../../../assets/icons/home/calender.svg'

export default function TopArticles() {
    let data=[
        {
            text:"Reasons Why You Should Buy a Property in Panvel",
            date:"2024-08-01",
            image:artiCle
        },
        {
            text:"Reasons Why You Should Buy a Property in Panvel",
            date:"2024-08-01",
            image:artiCle
        },
        {
            text:"Reasons Why You Should Buy a Property in Panvel",
            date:"2024-08-01",
            image:artiCle
        },
        {
            text:"Reasons Why You Should Buy a Property in Panvel",
            date:"2024-08-01",
            image:artiCle
        },
        {
            text:"Reasons Why You Should Buy a Property in Panvel",
            date:"2024-08-01",
            image:artiCle
        }
    ]
    
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for tablet devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Breakpoint for mobile devices (landscape)
        settings: {
          slidesToShow: 3,
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
    <div className='container-xl py-3 md:py-8 ' >
        <h1 className='text-2xl md:text-3xl font-semibold'>Top Articles on Home Buying </h1>
        <p>Visit these projects and get early bird benefits</p>
        <div className="py-3 md:py-8">
        <Slider {...settings}>
          {data.map((item, ind) => {
            return <div className='p-4'>
                <div className='shadow'>
                    <img src={item.image} className='w-full'  alt=''/>
                    <div className='p-5'>
                        <h1 className='font-semibold pb-4' >{item.text}</h1>
                        <div className="flex" >
                            <img src={calender} className='me-2' alt="" />
                            <p>{item.date}</p>
                        </div>
                    </div>
                </div>
            </div>
          })}
        </Slider>
      </div>
    </div>
  )
}
