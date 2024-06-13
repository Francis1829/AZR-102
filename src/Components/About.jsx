import React from 'react'
import Job from '../assets/Job.png'
import Work from '../assets/Aboutpic.png'
import { Link } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx";

function About() {
  return (
    <>
    <div className='w-full'>
    <div className='container mx-auto px-4 rounded-xl'>
<div className='w-full flex flex-col justify-center items-center'>
    <div className='w-full h-[600px] bg-[#bea260] relative rounded-3xl  px-10  flex flex-col justify-center items-center text-start shadow-xl '>
<div className='relative z-10 text-white'>
    <div className='text-[4rem] font-[Catamaran] font-semibold tracking-wider text-start '>Why Work with AZR?</div>

    <div className='font-[Roboto] text-[1.8rem] tracking-wide leading-16 my-5  w-[65%] ml-7'>At AZR, our goal is to make outsourcing easy.
            Forget wading through pages of spam and unqualified freelancers on UpWork and other freelancing platforms.
            We take the guesswork out of offshore staffing with a bespoke process to find you the right agents to work with your business.</div>  
            <div className='w-[300px] ml-10 rounded-xl border bg-white hover:bg-[#b5913a] border-[#b5913a] flex text-center justify-start items-center group'>
            <button  className='text-[2rem] py-3 px-2 font-[Catamaran]  text-[#b5913a] group-hover:text-white'>
              <Link to="www.face.com">Read more</Link></button>
              <RxArrowRight size={50} className="text-[#b5913a] ml-3 group-hover:text-white group-hover:ml-10 duration-100" />
              </div>
</div>
        <div className='absolute w-[45%] right-0 bottom-0'>
          <img src={Work} alt="" className='rounded-br-3xl' />
        </div>
      </div>

      <div className='w-full h-[600px] bg-[#bea260] relative mt-10 rounded-3xl  flex flex-col justify-center items-end px-10'>
        <div className='relative z-10 w-[65%] text-end text-white'>
      <div className='text-[4rem] font-[Roboto]'>How do I apply to AZR?</div>

      <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider  mr-7 mt-5'>Discovery Call</div>
  <div className='font-[Roboto] 2xl:text-[1.8rem] xl/lg:text-2xl tracking-wide leading-16 mr-7'>We know that every business is different which is why we take the time to understand your goals and resourcing requirements with a one-on-one Discovery Call, providing consultation and advice on getting the most out of your offshore team.</div>

  <div className='w-[300px] ml-10 rounded-xl border bg-white hover:bg-[#b5913a] border-[#b5913a] flex text-center justify-start items-center group'>
            <button  className='text-[2rem] py-3 px-2 font-[Catamaran]  text-[#b5913a] group-hover:text-white'>
              <Link to="www.face.com">Read more</Link></button>
              <RxArrowRight size={50} className="text-[#b5913a] ml-3 group-hover:text-white group-hover:ml-10 duration-100" />
              </div>

  </div>
        <div className='absolute w-[45%] left-0 bottom-0'>
          <img src={Job} alt="" className='rounded-bl-3xl' />
        </div>

        
      </div>
      {/* <div className='w-[800px] h-[700px] flex justify-center items-center relative group [perspective:1000px]'>
      <div className='w-full h-full bg-[#bea260]  mt-5 rounded-3xl absolute flex flex-col justify-center items-center shadow-xl  shadow-black/40 cursor-pointer transition-all duration-1000 [transform-style-preserve-3d] group-hover:[transform:rotateY(180deg)] '>
      <div className='relative z-10 text-end text-white group-hover:hidden  transition-all duration-1000  '>
      <div className='text-[4rem] font-[Catamaran] font-semibold tracking-wider text-start '>Why Work with AZR?</div>
      </div>
      <div className='absolute w-[65%] left-0 bottom-0'>
          <img src={Work} alt="" className='rounded-bl-3xl' />
        </div>
        <div className='absolute w-full h-full bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]'></div>
      </div>


      </div> */}
      </div>
      </div>
    </div>
    </>
  )
}

export default About


// <div className='p-5'>
// <div className='text-center text-[2rem] my-2 font-[Catamaran]'>Our Key Values;</div>
// <div className='py-3 border-b border-3 '>
// <div className='my-1 font-[Roboto] text-2xl font-bold'>Quality Service</div>
// <div className='2xl:text-2xl xl/lg:text-xl text-[#7f6881]'>We take pride in doing excellent work that makes you happy.</div>
// </div>
// <div className='py-3 border-b border-3 '>
// <div className='my-1 font-[Roboto] text-2xl font-bold'>Top-Notch Team</div>
// <div className='2xl:text-2xl xl/lg:text-xl text-[#7f6881]'>Our Team is here to make your projects awesome.</div>
// </div>
// <div className='py-3 border-b border-3 '>
// <div className='my-1 font-[Roboto] text-2xl font-bold'>On-Time Delivery</div>
// <div className='2xl:text-2xl xl/lg:text-xl text-[#7f6881]'>We always meet deadlines, so you can rely on us.</div>
// </div>
// <div className='py-3 border-b border-3 '>
// <div className='my-1 font-[Roboto] text-2xl font-bold'>Out Standing Results</div>
// <div className='2xl:text-2xl xl/lg:text-xl text-[#7f6881]'>We do not just meet goals; we exceedthem.</div>
// </div>
// <div className='py-3 border-b border-3 '>
// <div className='my-1 font-[Roboto] text-2xl font-bold'>Smart Planning</div>
// <div className='2xl:text-2xl xl/lg:text-xl text-[#7f6881]'>We are not just doers; we are planners too, helping you succeed.</div>
// </div>
// <div className='py-3 border-b border-3 '>
// <div className='my-1 font-[Roboto] text-2xl font-bold'>Great Leadership</div>
// <div className='2xl:text-2xl xl/lg:text-xl text-[#7f6881]'>Our expercienced leaders guides us to seccess.</div>
// </div>
// <div className='py-3 border-b border-3 '>
// <div className='my-1 font-[Roboto] text-2xl font-bold'>Positive Work Environment</div>
// <div className='2xl:text-2xl xl/lg:text-xl text-[#7f6881]'>We are a friendly and supportive bunch.</div>
// </div>
// <div className='py-3 border-b border-3 '>
// <div className='my-1 font-[Roboto] text-2xl font-bold'>Contonuous Excellence</div>
// <div className='2xl:text-2xl xl/lg:text-xl text-[#7f6881]'>Our team is top-notch and always improving.</div>
// </div>
// </div>

{/* <div className='w-full flex flex-row-reverse justify-center text-start gap-10 py-16 px-16'>
<div className='flex flex-col w-[60%] my-5'>
  <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Discovery Call</div>
  <div className='font-[Roboto] 2xl:text-2xl xl/lg:text-xl text-[#7f6881] tracking-wide leading-16 pb-3 border-b'>We know that every business is different which is why we take the time to understand your goals and resourcing requirements with a one-on-one Discovery Call, providing consultation and advice on getting the most out of your offshore team.</div>
  <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Candidate Screening and Testing</div>
  <div className='font-[Roboto] 2xl:text-2xl xl/lg:text-xl text-[#7f6881] tracking-wide leading-16 pb-3 border-b'>Based on your requirements, BruntWork’s recruitment team sources and selects for a shortlist of the top qualified candidates. We then perform a technical check of their computer and internet connection, as well as require the candidate to pass standardised English language, logic and numeric aptitude tests.</div>
  <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Client Interview and Testing</div>
  <div className='font-[Roboto] 2xl:text-2xl xl/lg:text-xl text-[#7f6881] tracking-wide leading-16 pb-3 border-b'>Only once we’ve screened and shortlisted the most suitable candidates will we set up a video call for you to interview.</div>
  <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Cultural Awareness Training</div>
  <div className='font-[Roboto] 2xl:text-2xl xl/lg:text-xl text-[#7f6881] tracking-wide leading-16 pb-3 border-b'>We provide a full day training session to ensure awareness of Western communication styles, including working with customers in countries such as in Australia, the US, Canada and the UK.</div>
  <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Timesheet Tracked Hourly Billing</div>
  <div className='font-[Roboto] 2xl:text-2xl xl/lg:text-xl text-[#7f6881] tracking-wide leading-16 pb-3 border-b'>AZR’s Client Services Team will track hours and provide you with fortnightly summaries of timesheets for your reference. You are only billed for the hours agents have logged to work.</div>
  <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Admin & Account Management</div>
  <div className='font-[Roboto] 2xl:text-2xl xl/lg:text-xl text-[#7f6881] tracking-wide leading-16 pb-3 border-b'>We tally up the total timesheet hours and send you one simple invoice for the total time worked each month.</div>
</div>

<div className='w-[40%]'>
  <div className='text-[4rem] font-[Roboto] mb-20 text-[#b5913a]'>How do I apply to AZR?</div>
<div className=" h-[700px] bg-[url('../src/assets/Job.jpg')] bg-center bg-no-repeat bg-cover rounded-md shadow-lg"></div>
</div>
</div> */}

{/* <div className='w-full 2xl:h-[650px] flex 2xl:flex-row xl/lg:flex-row flex-col justify-center items-center bg-[#bea260] relative rounded-3xl'>
          <div className='flex flex-col 2xl:w-[60%] w-full justify-start items-start px-7 2xl:absolute left-5 top-40 z-10 my-4 '>
          <div className='text-[4rem] font-[Catamaran] font-semibold tracking-wider text-start text-white'>Why Work with AZR?</div>
            <div className='font-[Roboto] text-[1.8rem] tracking-wide leading-16 my-5 text-white '>At AZR, our goal is to make outsourcing easy.
            Forget wading through pages of spam and unqualified freelancers on UpWork and other freelancing platforms.
            We take the guesswork out of offshore staffing with a bespoke process to find you the right agents to work with your business.</div>
          </div>

          <div className='2xl:w-[50%] w-full h-full 2xl:absolute right-0 bottom-0 '>
          <img src={Work} alt="" />
          </div>
      </div> */}