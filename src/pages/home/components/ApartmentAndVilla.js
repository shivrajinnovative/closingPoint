import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apartment from "./../../../assets/images/home/categories/aprtment.png";
import land from "./../../../assets/images/home/categories/residential-land.png";
import villa from "./../../../assets/images/home/categories/indepedent-house.png";
import farmHouse from "./../../../assets/images/home/categories/farm-house.png";
export default function ApartmentAndVilla() {
  let data = [
    { name: "Residential Apartment", image: apartment , text:"490+ Properties" },
    { name: "Residential Land / NA Plots", image: land , text:"490+ Properties" },
    { name: "Independent House / Villa ", image: villa , text:"490+ Properties" ,textWhite:true },
    { name: "Independent / Builder Floor", image: apartment , text:"490+ Properties" },
    { name: "Farm House ", image: farmHouse , text:"490+ Properties" },
  ];
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
  
  const CateoryCard = ({ item }) => {
    const { name, image,text,textWhite } = item;
    return (
      <div className={`relative p-3 ${textWhite && 'text-white'} `} >
        <img src={image} className="w-full relative -z-10" alt="" />
        <div className="absolute p-8 px-10 z-auto top-4">
            <h2 className="font-semibold text-xl" >{name}</h2>
            <p className="pt-4" >{text}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="container-xl py-3 md:py-10">
      <h1 className="font-semibold text-2xl md:text-3xl">Apartments, Villas & More...</h1>
      <p>in Navi Mumbai</p>
      <div className="py-3 md:py-10">
        <Slider {...settings}>
          {data.map((item, ind) => {
            return <CateoryCard item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
