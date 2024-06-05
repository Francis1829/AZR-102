import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import Img1 from "../assets/Staffing.jpg";
import Img2 from "../assets/Virtual.jpg";
import Img3 from "../assets/Strategy.jpg";


const Carouselslider = [
  {
    title: "Staffing",
    Img: Img1
  }, 
  {
    title: "Virtual",
    Img: Img2
  },
  {
    title: "Strategy",
    Img: Img3
  }
]
function MoreService() {
  return (
    <>
    <div className='w-full'> 
        <div className='container mx-auto px-4 '>
        <div className="w-full flex flex-col justify-center items-center my-[7rem]">
        <div className='font-[Catamaran] tracking-wider font-bold 2xl:text-[4rem] xl/lg:text-[2.5rem] mb-16'>Most Popular Services</div>          

        <div className="flex justify-center w-full h-[600px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-[45%] h-full"
      >

{Carouselslider.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group w-full h-full overflow-hidden cursor-pointer">
            <div className="absolute rounded-3xl shadow-xl inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.Img})` }}
              />
             <div className="absolute inset-0 rounded-3xl bg-black opacity-10 group-hover:opacity-30 ease-in-out duration-75"  />

             <RxArrowTopRight size={50} className="absolute bottom-5 left-5 text-white group-hover:text-[#b5913a] group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        <div className='flex flex-col ml-5 w-[50%] justify-center gap-5'>
   <div className='border-black/50 hover:border-black ease-in border-b-4 shadow-lg cursor-pointer p-3 font-[Catamaran] flex justify-center items-center'>
     <div className='m-4'>
     <h1 className='text-[2rem] font-bold'>Staffing Solutions</h1>
     <span className='text-2xl'>We specialize in job placement, recruitment services, and both temporary and permanent staffing options.</span>
     </div>
   </div>
   <div className=' border-black/50 hover:border-black ease-in border-b-4 shadow-lg cursor-pointer p-3 font-[Catamaran] flex justify-center items-center relative'>
     <div className='m-4'>
     <h1 className='text-[2rem] font-bold'>Virtual Services</h1>
     <span className='text-2xl'>Our virtual services cover administrative support, graphic design, social media management, sales and marketing support, and IT services.</span>
   </div>
   </div>
   <div className='border-black/50 hover:border-black ease-in border-b-4 shadow-lg cursor-pointer p-3 font-[Catamaran] flex justify-center items-center'>
     <div className='m-4'>
     <h1 className='text-[2rem] font-bold'>Strategy & Consulting</h1>
     <span className='text-2xl'>We craft your path to success by fine-tuning your strategy while addressing your unique business challenges</span>
   </div>
   </div>
 </div>
         
        </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default MoreService