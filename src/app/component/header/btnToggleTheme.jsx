"use client"
import React from 'react'
import { IoSunnyOutline , IoMoonOutline  } from "react-icons/io5";
import { useThemestore } from '@/app/zustand/useThemeStore';
function BtnToggleTheme() {
    const {isDark,toggleTheme} = useThemestore()
  return (
    <div className='h-full flex items-center px-2 lg:px-5'>
        <button onClick={toggleTheme}>
            <span className='text-2xl'>
                {isDark ? <IoSunnyOutline />: <IoMoonOutline />}
            </span>
        </button>

    </div>
  )
}

export default BtnToggleTheme