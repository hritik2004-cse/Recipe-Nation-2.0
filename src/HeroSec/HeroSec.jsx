import React from 'react'
import { FaFire } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import heroImg from "../assets/heroImg/heroImg.svg"
import myImg from "../assets/heroImg/myImg.jpg"

export const HeroSec = () => {
  return (
    <div className='h-[100vh] md:h-[90vh] flex w-full justify-center items-center'>
      <div className='h-auto md:h-[500px] 2xl:w-[1280px] xl:w-[1024px] lg:w-[768px] md:w-[600px] w-[400px] flex flex-col md:flex-row '>
        <div className='w-[100%] lg:w-[50%] h-full bg-[#E7FAFE] p-[20px] md:-[25px] lg:p-[30px] xl:p-[40px] 2xl:p-[50px] rounded-b-lg md:rounded-s-2xl relative md:order-1 order-2'>
          <div className='bg-white flex justify-center items-center gap-[5px] rounded-[20vh] py-[8px] lg:py-[10px] h-[30px] md:h-[36px] lg:h-[45px] w-[100px] md:w-[150px] lg:w-[156px] shadow-md'>
            <FaFire className='text-orange-500 text-[12px] md:text-[14px] lg:text-[18px]' />
            <p className='text-[12px] md:text-[14px] lg:text-[18px] font-semibold'>Hot Recipes</p>
          </div>
          <h1 className='2xl:text-[64px] xl:text-[48px] lg:text-[42px] md:text-[36px] text-[30px] text-left font-bold leading-[auto]'>Spicy delicious chicken wings</h1>
          <p className='text-[12px] md:text-[16px] lg:text-[16px] text-black opacity-[60%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          <div className='flex gap-[20px] mt-[20px]'>
            <div className='bg-black/10 flex justify-center items-center gap-[8px] rounded-[20vh] py-[10px] h-[40px] w-[139px] shadow-md'>
              <FaStopwatch className='text-black opacity-[100%] h-[24px] w-[24px]' />
              <p className='text-[14px] text-black/60 font-semibold'>30 Minutes</p>
            </div>
            <div className='bg-black/10 flex justify-center items-center gap-[8px] rounded-[20vh] py-[10px] h-[40px] w-[139px] shadow-md'>
              <PiForkKnifeFill className='text-black h-[24px] w-[24px]' />
              <p className='text-[14px] text-black/60 font-semibold'>Chicken</p>
            </div>
          </div>
          <div className=' absolute bottom-[30px] flex justify-between items-center w-[540px]'>
            <div className='flex gap-[10px]'>
              <img src={myImg} alt="" className='rounded-[50%] h-[50px] w-[50px] object-cover' />
              <div className='flex flex-col'>
                <p className='text-[10px] md:text-[12px] lg:text-[16px] font-bold text-center'>Hritik Sharma</p>
                <p className='text-[8px] md:text-[10px] lg:text-[14px] text-black/60 font-bold text-center'>15 March 2025</p>
              </div>
            </div>
            <div className='bg-black text-white w-[200px] h-[60px] flex justify-center items-center rounded-lg gap-[10px] cursor-pointer shadow-lg'>
              <p className='text-[14px] font-bold'>View Recipe</p>
              <FaPlayCircle className='h-[24px] w-[24px]' />
            </div>
          </div>
        </div>
        <div className='xl:w-[660px] lg:w-[50%] sm:w-full h-full md:order-2 order-1'>
          <img src={heroImg} alt="meat in a white plate" className='h-full w-full rounded-e-2xl object-cover object-center' />
        </div>

      </div>

    </div>
  )
}
