import React, { useState } from 'react';
import logo from './../../assets/logo.png';

// Importing Material-UI icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {

    const cityList = [
        { id: 1, label: "Tokyo" },
        { id: 2, label: "New York" },
        { id: 3, label: "London" },
        { id: 4, label: "Paris" },
        { id: 5, label: "Berlin" },
    ];

    const DropDown = ({ label, list }) => {
        const [open, setOpen] = useState(false);
        let timeoutId;

        const handleMouseEnter = () => {
            clearTimeout(timeoutId);
            setOpen(true);
        };
    
        const handleMouseLeave = () => {
            timeoutId = setTimeout(() => {
                setOpen(false);
            }, 150); // 300ms delay before closing
        };
        return (
            <div 
            onMouseEnter={handleMouseEnter}  
            onMouseLeave={handleMouseLeave} 
                className='relative cursor-pointer'
            >
                <div className='flex items-center  p-2 rounded-md'>
                    <p className='mr-2'>{label}</p>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                {open && (
                    <ul className='absolute top-full left-0 z-50 bg-white shadow-md w-[150px] text-center rounded-md mt-1'>
                        {list.map((item, index) => (
                            <li key={index} className='p-2 hover:bg-gray-100'>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    return (
        <div className='fixed w-full z-50'>
            <div className='bg-white font-medium rounded-b-[60px] container-xl  shadow-sm p-4 pt-3 px-7'>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={logo} className='w-16' alt="Logo" />
                        <p className='ps-3 hidden md:block'>Closing Point</p>
                    </div>
                    <div className="hidden md:block relative w-[200px]">
                        <select
                            className="block w-full appearance-none rounded-full border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            required
                        >
                            <option value="" disabled selected>City</option>
                            {cityList.map(city => (
                                <option key={city.id} value={city.label}>{city.label}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                    <ul className='hidden lg:flex space-x-5'>
                        <li><DropDown label="FOR BUY" list={["a", "b", "c"]} /></li>
                        <li><DropDown label="FOR RENT" list={["a", "b", "c"]} /></li>
                        <li><DropDown label="FOR SELL" list={["a", "b", "c"]} /></li>
                    </ul>
                    <button className='bg-[#4492D3] shadow-md text-white py-2 md:py-3 px-4 md:px-7 text-sm rounded-3xl'>Post Property</button>
                    <div className='flex items-center'>
                        <div className='border-r border-slate-700 border-dashed pe-3'>
                            <PhoneOutlinedIcon />
                        </div>
                        <div className='bg-slate-200 p-2 ms-3 rounded-se-xl rounded-es-xl'>
                            <AccountCircleOutlinedIcon />
                            <SignalCellularAltOutlinedIcon className='rotate-90' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
