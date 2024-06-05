import React from 'react'
import CustomerService from '../assets/customer.png'
import ItRelated from '../assets/itrelated.png'
import SocialMed from '../assets/socialmed.png'
import Market from '../assets/market.png'
import Cs from '../assets/Customer3.jpg'
import It from '../assets/IT.jpg'
import Sm from '../assets/Socmed2.jpg'
import M from '../assets/laptop2.jpg'
import Img1 from "../assets/Staffing.jpg";
import Img2 from "../assets/Virtual.jpg";
import Img3 from "../assets/Strategy.jpg";


const ServiceCarousel = [
  {
    title: "Customer Support Roles",
    Img: CustomerService,
    Img1: Cs,
    Jobs:
     <div className='w-full h-full flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 '>
        <ul>Live Chat Customer Service</ul>
        <ul>Technical Assistance</ul>
        <ul>Virtual Administrative Support</ul>
    </div>
  }
]
const ServiceCarousel1 = [
  {
    title: "IT-Related Work",
    Img: ItRelated,
    Img1: It,
    Jobs:
     <div className='w-full h-full flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 '>
        <ul>Software Developer</ul>
     <ul>Programming</ul>
     <ul>Web Developer</ul>
     <ul>Software Engineer</ul>
     <ul>Graphic Design</ul>
     <ul>Data Entry</ul>
    </div>
  }]
  const ServiceCarousel2 = [
  {
    title: "Social Media Management",
    Img: SocialMed,
    Img1: Sm,
    Jobs:
     <div className='w-full h-full flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 '>
       <ul>Social Media Ads</ul>
     <ul>Motion Grahpics</ul>
     <ul>Content Creation</ul>
     <ul>Magazine Layout</ul>
    </div>
  }]
  const ServiceCarousel3 = [
  {
    title: "Sales And Marketing",
    Img: Market,
    Img1: M,
    Jobs:
     <div className='w-full h-full flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 '>
        <ul>Recruiting</ul>
     <ul>Research Assistant</ul>
     <ul>Project Management</ul>
     <ul>Transcription</ul>
    </div>
  }
]

const MoreService = [
  {
    Title: "Staffing Solutions",
    Image: Img1,
    Description: "We specialize in job placement, recruitment services, and both temporary and permanent staffing options."
  }, 
  {
    Title: "Virtual Services",
    Image: Img2,
    Description: "Our virtual services cover administrative support, graphic design, social media management, sales and marketing support, and IT services."
  },
  {
    Title: "Strategy & Consulting",
    Image: Img3,
    Description: "We craft your path to success by fine-tuning your strategy while addressing your unique business challenges."
  }
]

function Services() {
  return (
    <>
    <div className='w-full'> 
        <div className='container mx-auto px-4 '>
        <div className="w-full flex flex-col justify-center items-center pb-16 ">
         <div className='font-[Catamaran] tracking-wider font-bold 2xl:text-3xl xl/lg:text-2xl mt-[7rem]'>AZR's Services Categories</div>
         <div className='mb-4  my-7 font-[Catamaran] font-semibold tracking-wide 2xl:text-xl xl/lg:text-lg '>Azr offers the following services:</div>
         <div className="flex flex-col w-full h-screen justify-center items-center bg-[url('../src/assets/LOGOlap1.png')]  bg-center bg-contain bg-no-repeat">

          <div className='wrap 2xl:w-full xl/lg:w-[85%] w-full 2xl:h-[650px] xl/lg:h-[400px] h-full flex 2xl:flex-row xl/lg:flex-row flex-col gap-2 justify-center items-center'>
               <div className='w-[40%] h-full group overflow-hidden shadow-lg  shadow-black/60 rounded-lg cursor-pointer relative ' >
              <div className="w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../src/assets/Customer3.jpg')] group-hover:scale-125 transition-all ease-out duration-500 ">
              </div>
              <div className='absolute w-full h-full top-0 left-0 bg-black/60 opacity-80 group-hover:opacity-100'></div>
              <div className='text-white 2xl:p-5 xl/lg:p-2 p-5 h-full flex flex-col-reverse justify-start items-start absolute overflow-hidden top-0 font-[Catamaran]'>
                  {ServiceCarousel.map((item) => (
                    <>
                    <div className='2xl:text-2xl xl/lg:text-xl'>{item.title}</div>
                    <div className='my-3'>
                      <img src={item.Img} alt="" className='2xl:h-[75px] h-auto' />
                    </div>
                    </>
                  ))}

                </div>
            </div>
            <div className='w-[25%] h-full group overflow-hidden shadow-lg rounded-lg cursor-pointer relative'>
              <div  className="w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../src/assets/IT.jpg')] rounded-lg group-hover:scale-125 transition-all ease-out duration-500">
              </div>
              <div className='absolute w-full h-full top-0 left-0 bg-black/60 opacity-80 group-hover:opacity-100'></div>

              <div className='text-white 2xl:p-5 xl/lg:p-2 p-5 h-full flex flex-col-reverse justify-start items-start absolute overflow-hidden top-0 font-[Catamaran]'>
                  {ServiceCarousel1.map((item) => (
                    <>
                    <div className='2xl:text-2xl xl/lg:text-xl'>{item.title}</div>
                    <div className='my-3'>
                      <img src={item.Img} alt="" className='2xl:h-[75px] h-auto' />
                    </div>
                    </>
                  ))}

                </div>
            </div>
            <div className='w-[35%] h-full overflow-hidden shadow-lg rounded-lg cursor-pointer flex flex-col gap-2'>
              <div className='group w-full h-full overflow-hidden rounded-lg relative'>
              <div className="w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../src/assets/Socmed2.jpg')] rounded-lg group-hover:scale-125 transition-all ease-out duration-500  ">
              </div>
              <div className='absolute w-full h-full top-0 left-0 bg-black/60 opacity-80 group-hover:opacity-100'></div>

              <div className='text-white 2xl:p-5 xl/lg:p-2 p-5 h-full flex flex-col-reverse justify-start items-start absolute overflow-hidden top-0 font-[Catamaran]'>
                  {ServiceCarousel2.map((item) => (
                    <>
                    <div className='2xl:text-2xl xl/lg:text-xl'>{item.title}</div>
                    <div className='my-3'>
                      <img src={item.Img} alt="" className='2xl:h-[75px] h-auto' />
                    </div>
                    </>
                  ))}

                </div>
              </div>
              <div className='group w-full h-full overflow-hidden rounded-lg relative'>
              <div className="w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../src/assets/laptop2.jpg')] rounded-lg group-hover:scale-125 transition-all ease-out duration-500  ">
              </div>
              <div className='absolute w-full h-full top-0 left-0 bg-black/60 opacity-80 group-hover:opacity-100'></div>

              <div className='text-white 2xl:p-5 xl/lg:p-2 p-5 h-full flex flex-col-reverse justify-start items-start absolute overflow-hidden top-0 font-[Catamaran]'>
                  {ServiceCarousel3.map((item) => (
                    <>
                    <div className='2xl:text-2xl xl/lg:text-xl'>{item.title}</div>
                    <div className='my-3'>
                      <img src={item.Img} alt="" className='2xl:h-[75px] h-auto' />
                    </div>
                    </>
                  ))}

                </div>
              </div>
            </div>
          </div>

        <div className='2xl:w-full xl/lg:w-[85%] 2xl:h-[450px] xl/lg:h-[350px] flex justify-center items-center relative 2xl:my-4 xl/lg:my-2'>
          <div className='absolute flex 2xl:flex-row xl/lg:flex-row flex-col justify-center items-center w-full h-full gap-5'>
          {MoreService.map((item) => (
         <>
          <div className='h-full  w-[33%]  rounded-lg bg-center bg-cover bg-no-repeat relative group text-white'  style={{ backgroundImage: `url(${item.Image})` }}>

          <div className='absolute bg-black/60 opacity-80 rounded-lg group-hover:opacity-100 w-full h-full'></div>

          <div className='text-white p-4 h-full flex flex-col-reverse justify-start items-start absolute overflow-hidden'>
          <div className='h-0 opacity-0 translate-y-6 2xl:group-hover:h-[140px] xl/lg:group-hover:h-[160px]  text-white/60 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-in transition-all 2xl:text-xl xl/lg:text-base font-[Roboto]'>{item.Description}</div>
            <span className='font-[Catamaran] 2xl:text-2xl xl/lg:text-xl tracking-wide group-hover:text-[#ad8d3d] my-2'>{item.Title}</span>
          </div>
          </div>

         
         </>
        ))}
          </div>

        </div>
        </div>
        
    </div>
    </div>
    </div>
    </>
  )
}

export default Services
 