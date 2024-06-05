import React from 'react'
import {Link} from 'react-router-dom'
import Icon1 from '../assets/nsarrows.png'
import Icon2 from '../assets/Prime.png'

function Banner() {
  return (
    <div className='w-full'> 
    <div className='container mx-auto px-4 '>
    <div className="w-full 2xl:h-[500px] xl/lg:h-[350px] flex flex-col justify-center items-center my-[7rem]">

      <div className="2xl:w-full xl/lg:w-[90%] h-full shadow-lg bg-center bg-cover bg-no-repeat bg-[url('../src/assets/Buildings2.jpg')] rounded-3xl relative flex justify-center" >
        <div className='absolute bg-black/50 w-full h-full rounded-3xl'></div>
        <div className='py-4 flex flex-col justify-center items-center h-full absolute text-center'>
          
         <div className='2xl:text-[4.5rem] xl/lg:text-[2.5rem] font-[Anton] tracking-wide text-[#e8ebf7]  uppercase drop-shadow-md'> We Work With The Best Partners</div>
          <div className='font-[catamaran] 2xl:text-[2rem] xl/lg:text-[1.4rem] text-[#b5913a] font-semibold tracking-wide drop-shadow-2xl capitalize'>Discover the power of our partnerships at AZR, and together, let's forge a path to success.</div>

          <div className='flex justify-center gap-10 items-center w-full mt-10'>
              <button className='bg-white rounded-2xl border-2 hover:bg-black hover:border-black ease-in-out duration-100'>
                <Link to="https://www.instagram.com/cisciretsit/">
                <img src={Icon1} alt="" className='rounded-2xl w-[90px] h-[90px]' />
                </Link>
              </button>
              <button className='bg-black rounded-2xl border-2 border-black hover:invert  ease-in-out duration-100'>
              <Link to="https://www.instagram.com/cisciretsit/">
                <img src={Icon2} alt="" className='rounded-2xl w-[90px] h-[90px]' />
                </Link>
              </button>
          </div>
          </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Banner