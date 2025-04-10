import React from 'react'
import { RiShuffleLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { FaVolumeUp } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const Menu = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-10 bg-[#536D7B] py-3 px-3 rounded-2xl'>
        <button><RiShuffleLine /></button>
        <button><CiMenuBurger /></button>
        <button><FaVolumeUp /></button>
        <button><VscDebugRestart /></button>
      
    </div>
  )
}

export default Menu
