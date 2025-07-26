import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from '../assets/logo/logo.svg'
import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import '../App.css'

// full responsive nav bar
export const Header = () => {
  let[modalStatus,setmodalStatus] = useState(false);
  return (
    <div className='container max-w-full shadow-lg h-[80px] lg:h-[100px]'>
      <div className="mx-auto w-[90%]">
        <div className='container-fluid flex align-items-center mx-auto justify-between'>
            <div className="w-[50%] md:w-[20%]">
                <img src={logo} alt="a black text in which recipe nation is written" className="h-[70px] lg:h-[90px]"/>
            </div>
            <div className="hidden md:flex w-[70%] justify-between items-center">
              <ul className="flex justify-center items-center gap-[20px] md:gap-[24px] lg:gap-[27px] xl:gap-[35px]">
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">Home</li>
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">Recipes</li>
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">Blog</li>
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">Contact</li>
              <li className="lg:cursor-pointer text-[15px] font-bold md:text-[17px] lg:text-[20px] lg:font-medium lg:hover:translate-y-[-5px] text-black">About Us</li>
            </ul>
            <div className="flex justify-center items-center gap-[20px]">
              <FaFacebookF className="text-[15px] md:text-[18px] lg:text-[25px] text-black cursor-pointer md:hover:translate-y-[-5px]" title="Facebook"/>
              <FaInstagram className="text-[15px] md:text-[18px] lg:text-[25px] text-black cursor-pointer md:hover:translate-y-[-5px]" title="Instagram" />
              <FaTwitter   className="text-[15px] md:text-[18px] lg:text-[25px] text-black cursor-pointer md:hover:translate-y-[-5px]" title="Twitter"/>
            </div>
            </div>
            <div className="md:hidden flex justify-end w-[50%] absolute right-[25px] h-[80px] items-center">
              <button className="text-[30px]" onClick={()=>{setmodalStatus(!modalStatus)}}>
                { modalStatus?
                    <span>&times;</span>
                      :
                    <span>&#9776;</span>
              }
              </button>
            </div>
            <div className={`menu md:hidden ${modalStatus?'activeMenu' : ""}`}>
              <ul className="mt-[70px]">
                <li className="text-[20px] text-center p-[15px] w-full mb-[5px] hover:bg-blue-400 font-bold hover:text-white flex justify-center items-center gap-[10px]"><FaHome /> Home</li>
                <li className="text-[20px] text-center p-[15px] w-full mb-[5px] hover:bg-blue-400 font-bold hover:text-white flex justify-center items-center gap-[10px]"><FaUser /> About Us</li>
                <li className="text-[20px] text-center p-[15px] w-full mb-[5px] hover:bg-blue-400 font-bold hover:text-white flex justify-center items-center gap-[10px]"><MdFastfood /> Recipes</li>
                <li className="text-[20px] text-center p-[15px] w-full mb-[5px] hover:bg-blue-400 font-bold hover:text-white flex justify-center items-center gap-[10px]"><TfiWrite /> Blog</li>
                <li className="text-[20px] text-center p-[15px] w-full mb-[5px] hover:bg-blue-400 font-bold hover:text-white flex justify-center items-center gap-[10px]"><FaPhoneAlt /> Contacts</li>
              </ul>
              <div className="flex justify-center items-center gap-[30px] mt-[20px] absolute bottom-[70px] w-full">
              <FaFacebookF className="text-[28px] active:text-blue-400 text-black" title="Facebook"/>
              <FaInstagram className="text-[28px] active:text-blue-400 text-black" title="Instagram" />
              <FaTwitter   className="text-[28px] active:text-blue-400 text-black" title="Twitter"/>
            </div>
              <p className="absolute bottom-[10px] text-[18px] font-semibold text-black text-center w-full">&copy;Hritik Sharma, all right reserved</p>
            </div>
        </div>
      </div>
    </div>
  )
}
