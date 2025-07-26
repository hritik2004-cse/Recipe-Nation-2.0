import React from 'react'
import breakFast from '../assets/categories/breakfast.svg'
import chocolate from '../assets/categories/chocolate.svg'
import dessert from '../assets/categories/dessert.svg'
import lunch from '../assets/categories/lunch.svg'
import meat from '../assets/categories/meat.svg'
import vegan from '../assets/categories/vegan.svg'

export const Categories = () => {
  return (
    <div className='container mx-auto'>
      <div className="w-[90%] h-auto"></div>
      <div className='flex justify-between items-center '>
        <h3 className='text-[35px] md:text-[45px] lg:text-[55px] font-bold text-black'>Categories</h3>
        <button className='bg-[#e7fafe] text-[12px] px-[10px] md:text-[15px] capitalize font-semibold lg:text-[20px] py-[15px] md:px-[30px] rounded-lg lg:py-[20px] lg:px-[40px]'>view all categories</button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] px-[10px] py-[20px] mt-[20px] flex-wrap lg:flex-nowrap'>
        <div className='grid-cols-2 mx-auto gap-[20px] md:gap-[15px] cursor-pointer hover:translate-y-[-10px] duration-300 capitalize py-[50px] px-[25px] rounded-2xl bg-[linear-gradient(to_bottom,#fff,#f4f5f0)]'>
          <img src={breakFast} className='h-full' alt="" />
          <h4 className='text-[22px] lg:text-[20px] text-center mt-[10px] font-bold'>breakfast</h4>
        </div>
        <div className='grid-cols-2 mx-auto gap-[20px] md:gap-[15px] cursor-pointer hover:translate-y-[-10px] duration-300 capitalize py-[50px] px-[25px] rounded-2xl bg-[linear-gradient(to_bottom,#fff,#f4faf0)]'>
          <img src={vegan} className='h-full' alt="" />
          <h4 className='text-[22px] lg:text-[20px] text-center mt-[10px] font-bold'>vegan</h4>
        </div>
        <div className='grid-cols-2 mx-auto gap-[20px] md:gap-[15px] cursor-pointer hover:translate-y-[-10px] duration-300 capitalize py-[50px] px-[25px] rounded-2xl bg-[linear-gradient(to_bottom,#fff,#fdf4f5)]'>
          <img src={meat} className='h-full' alt="" />
          <h4 className='text-[22px] lg:text-[20px] text-center mt-[10px] font-bold'>meat</h4>
        </div>
        <div className='grid-cols-2 mx-auto gap-[20px] md:gap-[15px] cursor-pointer hover:translate-y-[-10px] duration-300 capitalize py-[50px] px-[25px] rounded-2xl bg-[linear-gradient(to_bottom,#fff,#fef8f1)]'>
          <img src={dessert} className='h-full' alt="" />
          <h4 className='text-[22px] lg:text-[20px] text-center mt-[10px] font-bold'>dessert</h4>
        </div>
        <div className='grid-cols-2 mx-auto gap-[20px] md:gap-[15px] cursor-pointer hover:translate-y-[-10px] duration-300 capitalize py-[50px] px-[25px] rounded-2xl bg-[linear-gradient(to_bottom,#fff,#f7f7f7)]'>
          <img src={lunch} className='h-full' alt="" />
          <h4 className='text-[22px] lg:text-[20px] text-center mt-[10px] font-bold'>lunch</h4>
        </div>
        <div className='grid-cols-2 mx-auto gap-[20px] md:gap-[15px] cursor-pointer hover:translate-y-[-10px] duration-300 capitalize py-[50px] px-[25px] rounded-2xl bg-[linear-gradient(to_bottom,#fff,#f5f5f5)]'>
          <img src={chocolate} className='h-full' alt="" />
          <h4 className='text-[22px] lg:text-[20px] text-center mt-[10px] font-bold'>chocolate</h4>
        </div>
      </div> 
    </div>
  )
}
