import React from "react";
import bgImg from "./../../../assets/images/home-banner.png";
import forBuyIcon from "./../../../assets/icons/for-buy.svg";
import forRentIcon from "./../../../assets/icons/for-rent.svg";
import plotLandIcon from "./../../../assets/icons/plot-land.svg";
import projectsIcon from "./../../../assets/icons/projects.svg";

export default function Banner() {
  const FilterBtn = ({ icon, text }) => {
    return (
      <div className=" bg-white cursor-pointer  rounded-xl w-24 h-24 my-2 text-sm  justify-center items-center  flex flex-col">
        <img src={icon} alt="" width="40px" />
        <p className="mt-3">{text}</p>
      </div>
    );
  };

  return (
    <div className="relative">
      <img src={bgImg} className="min-w-fit" alt="" />
      <div className=" absolute top-52 lg:top-1/3 mt-10 w-full">
        <div className="w-screen  max-w-7xl mx-auto flex flex-wrap">
          <div className="w-full pb-20 text-center lg:text-start px-4 lg:w-6/12">
            <h1 className=" text-4xl md:text-6xl text-sky-600 font-bold">
              Find a Home you'll
            </h1>
            <h1 className="text-9xl py-3 parisienne-regular ">Love</h1>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="bg-gradient-to-r to-[#4492D3] from-[#07518F] mx-auto rounded-2xl w-11/12 p-5 md:py-10 md:px-8 ">
              <div className="flex flex-wrap  justify-around md:justify-between">
                <FilterBtn icon={forBuyIcon} text="For Buy" />
                <FilterBtn icon={forRentIcon} text=" For Rent" />
                <FilterBtn icon={plotLandIcon} text="Plots/ Land" />
                <FilterBtn icon={projectsIcon} text="Projects" />
              </div>
              <div className="mt-2 md:mt-8 bg-white rounded-full p-4">All Res</div>
              <button className="bg-black text-white py-3 px-16 mt-5 md:mt-12   rounded-full ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
