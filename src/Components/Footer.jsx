import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Social = [
  {
    Icon: <FaFacebookF className="2xl:text-[4rem] xl/lg:text-[3rem] text-white p-1 bg-black rounded-md  hover:invert duration-300 ease-in-out border" />,
    Link: "https://www.facebook.com/akofrancisko/",
  },
  {
    Icon: <FaLinkedinIn className="2xl:text-[4rem] xl/lg:text-[3rem] text-white p-1 bg-black rounded-md  hover:invert duration-300 ease-in-out border" />,
    Link: "https://www.linkedin.com/in/francis-mar-subsilica-659b76276/",
  },
  {
    Icon : <FaYoutube className="2xl:text-[4rem] xl/lg:text-[3rem] text-white p-1 bg-black rounded-md  hover:invert duration-300 ease-in-out border" />,
    Link: "https://www.linkedin.com/in/francis-mar-subsilica-659b76276/",
  }
]

function Footer() {
  return (
    <>
    <footer className='w-full bg-black px-16 pt-7 font-[Roboto] text-white/80'>
      <div className='flex justify-between'>
      <div className='flex justify-around '>
        <div className='flex flex-col items-start justify-start p-4 2xl:w-[450px] w-[350px] 2xl:text-2xl xl/lg:text-base'>
          <div className='m-4 flex justify-start items-start'>
          <FaAddressCard size={25} className="text-white/80 mx-2 " />
            <span className='flex-wrap'>Reina Mercedes, Isabela, Philippines</span>
          </div>
          <div className='flex flex-col justify-start items-start gap-1 m-4'>
            <div className='flex justify-center items-center'>
            <MdEmail size={25} className="text-white/80 mx-2 " />
            <span className='text-center'>info@azr-ph.com</span>
            </div>
            <div className='flex justify-center items-center'>
            <FaPhoneAlt size={20} className="text-white/80 mx-2 " />
            <span className='text-center'>+63 920 667 3171</span>
            </div>
          </div>
        </div>
        <div className='p-4 m-4'>
            <div className='flex'>
              {Social.map((list) => (
              <ul className="text-center mb-2 mx-1" key={list.Icon}>
                <li className="">
                  <Link to={list.Link} className="">
                    {list.Icon}
                  </Link>
                </li>
              </ul>
            ))} 
            </div>
          </div>
      </div>
      <div className='p-4 m-4'> 
        <img src={Logo} alt="" />
      </div>
      </div>

      <div className='2xl:text-2xl xl/lg:text-base px-8 p-4 w-full border-t border-white/30 '> 
        <span>© Copyright 2024 - AZR • All rights reserved.</span>
      </div>
    </footer>
    </>
  )
}

export default Footer