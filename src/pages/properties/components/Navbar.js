import React, { useState } from "react";
import logo from "./../../../assets/logo-white.png";
import navbar_bg from "./../../../assets/images/navbar-bg.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";

export default function Navbar() {
  return (
    <div className="fixed w-full z-50">
      <div className={`font-medium rounded-b-[60px] max-w-7xl mx-auto  shadow-sm p-4 pt-3 px-7`}
      style={{
        backgroundImage: `url(${navbar_bg})`,
        backgroundColor: '#3A71B8', 
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} className="w-16" alt="Logo" />
            <p className="ps-3 text-white hidden md:block">Closing Point</p>
          </div>
          <div className="border rounded-xl overflow-hidden w-44 md:w-96 flex p-3 bg-white">
            <select name="" id="" className="border-r-2 bg-transparent">
              <option value="">Buy</option>
              <option value="">Rent</option>
            </select>
            <input
              type="text"
              placeholder="Enter Locality / Project / Society / Landmark"
              className="w-full text-xs ms-4 focus:outline-none"
            />
          </div>

          <div className="hidden lg:flex items-center">
          <button className="border border-white   me-5 text-white py-2 md:py-3 px-4 md:px-7 text-sm rounded-3xl hover:bg-white hover:text-blue-400">
            Post Property
          </button>
            <div className="border-r border-white  border-dashed pe-3">
              <PhoneOutlinedIcon className="text-white" />
            </div>
            <div className="bg-slate-200 p-2 ms-3 rounded-se-xl rounded-es-xl">
              <AccountCircleOutlinedIcon />
              <SignalCellularAltOutlinedIcon className="rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
