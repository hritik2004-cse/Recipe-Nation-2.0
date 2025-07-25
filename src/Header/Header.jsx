import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from '../assets/logo/logo.svg'

import React from 'react'

export const Header = () => {
  return (
    <div className='container max-w-full shadow-lg h-[80px] lg:h-[100px]'>
      <div className="mx-auto w-[90%]">
        <div className='container-fluid flex align-items-center mx-auto justify-between'>
            <div>
                <img src={logo} alt="a black text in which recipe nation is written" className="h-[120px]"/>
            </div>
            <ul className="flex justify-center items-center gap-[20px] md:gap-[24px] lg:gap-[27px] xl:gap-[35px]">
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">Home</li>
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">Recipes</li>
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">Blog</li>
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">Contact</li>
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">About Us</li>
            </ul>
            <div className="flex justify-center items-center gap-[20px]">
              <FaFacebookF className="text-[25px] text-black cursor-pointer hover:translate-y-[-5px]" title="Facebook"/>
              <FaInstagram className="text-[25px] text-black cursor-pointer hover:translate-y-[-5px]" title="Instagram" />
              <FaTwitter className="text-[25px] text-black cursor-pointer hover:translate-y-[-5px]" title="Twitter"/>
            </div>
        </div>
      </div>
    </div>
  )
}
