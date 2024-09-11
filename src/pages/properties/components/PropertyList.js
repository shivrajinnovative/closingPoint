import React from "react";
import propertyImage from "./../../../assets/images/dummy-property.png";
import CallIcon from '@mui/icons-material/Call';

export default function PropertyList() {
  const Property = () => {
    return (
      <div className="border bg-white my-5 flex flex-wrap rounded-xl">
        <div className="md:w-5/12 h-64 overflow-hidden">
          <img src={propertyImage} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="md:w-7/12">
          <div className="p-3 xl:p-5 relative">
          <span className="bg-slate-200 py-1 px-3 xl:px-4 absolute right-0 before:content-[''] before:absolute before:-left-6 before:top-0 before:border-[15px] before:border-l-transparent before:border-b-transparent before:border-slate-200 after:content-[''] after:absolute after:-left-6 after:bottom-0 after:border-[15px] after:border-t-transparent after:border-l-transparent after:border-slate-200 text-sm xl:text-lg">
          Resale
            </span>
            <h1 className="font-semibold">Twins Hallmark Chs</h1>
            <p>1 BHK Flat in Sector 19 Kopar Khairane, </p>
            <div className="flex py-1 ">
              <div className="border-r-2 py-1 xl:py-2 px-1 md:px-2 xl:px-3">
                <h1 className="text-sm md:text-xl xl:text-2xl font-semibold">
                  ₹ 79.5 Lac
                </h1>
                <p className="text-xs md:text-sm">₹ 18,705/ sqft</p>
              </div>
              <div className="border-r-2 py-1 xl:py-2 px-1 md:px-2 xl:px-3">
                <h1 className="text-sm md:text-xl xl:text-2xl font-semibold">550 sqft</h1>
                <p className="text-xs md:text-sm ">Built-up Area</p>
              </div>
              <div className="py-1 xl:py-2 px-1 md:px-2 xl:px-3">
                <h1 className="text-sm md:text-xl xl:text-2xl font-semibold">
                  1 BHK <span className="font-normal text-xs md:text-base">(2 Baths)</span>
                </h1>
                <p className="text-xs md:text-sm">Ready to Move</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-500">
              Facing garden-Ground, opp. Ranadevi temple, good open parking
              space, all festival celebration and annual fuction in society.
            </p>
          </div>
          <div className="bg-slate-200 flex py-1.5 px-5 justify-between items-center">
            <div>
                <p className="text-sm">2mo ago</p>
                <h1 className="font-semibold text-sm" >Owner</h1>
            </div>
            <button className="bg-[#4492D3] text-white py-1 px-5 rounded-full" > <CallIcon/> Contact</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <p>
        13138 Results | Property in
        <span className="font-semibold"> Navi Mumbai for Sale</span>
      </p>
      <Property/>
      <Property/>
      <Property/>
      <Property/>
      <Property/>
      <Property/>
    </div>
  );
}