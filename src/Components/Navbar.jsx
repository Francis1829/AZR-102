import React from 'react'
import { useState } from 'react';
import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [scroll, setScroll] = useState(false)
    const ChangeColor = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', ChangeColor)
    
    const MenuList = [
        {
            Name: "Home",
            Paths: "/"
        },
        {
            Name: "Services",
            Paths: "/Services"
        },
        {
            Name: "Pricing",
            Paths: "/Pricing"
        },
        {
            Name: "About us",
            Paths: "/About"
        },
    ]

const [click, setClick] = useState(false);

const handleClick = () => {
    setClick(!click);
  };
  
  const handleclicks = () => {
    setClick(false);
  };

  return (
    <>
    <header className={ scroll ? "fixed flex justify-center w-full z-50 scroll shadow-xl" : "fixed flex justify-center w-full z-50"}>
        <nav className='px-10 2xl:p-4 p-2 my-2 flex justify-between items-center w-[90%] bg-white/80 rounded-2xl '>
        <div className="flex items-center justify-center bg-black   md:cursor-pointer p-2"> 
                    <img src={Logo} alt="" className='lg:w-[95px] md:w-[75px] w-[65px] ' />
            </div>
            <div
              className="r-menu xl:lg:hidden md:hidden block"
              onClick={handleClick}
            >
              {click ? "" : <FaBars size={40} className="text-white" />}
            </div>
            <div className='xl/lg:flex md:flex hidden'>
            <div className='flex justify-center items-center'>
            {MenuList.map((list, i) => (
                <ul className=' xl/lg:mx-6 mx-2 2xl:text-xl xl/lg:text-base text-xl tracking-wide md:cursor-pointer '>
                    <Link to={list.Paths}><li key={i} className='opacity-75  active:font-bold font-medium hover:font-semibold  hover:text-[#ad974f] focus:opacity-100'>
                        {list.Name}
                    </li></Link>
                </ul>   
            ))}        
             </div> 
             </div>
             <div className={`lg:hidden flex flex-col items-center z-50 bg-[url('../src/assets/Bg-theme.png')] bg-[#c6c66f] absolute w-full top-0 pl-3 py-10 h-[660px] overflow-y-auto transition-all ${click ? "left-0" : "left-[-100%]"} duration-500`}>
            {MenuList.map((list, i) => (
                <ul className='text-black my-1 text-xl font-medium tracking-wide md:cursor-pointer '>
                    <Link to={list.Paths}><li onClick={handleclicks} key={i} className='opacity-75 hover:opacity-100 active:opacity-100 '>
                        {list.Name}
                    </li></Link>
                </ul>
            ))}   
             </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar