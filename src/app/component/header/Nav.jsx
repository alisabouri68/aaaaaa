"use client"
import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { useContainerSize } from '@/app/zustand/UseContainerSiza'
function Nav({ children }) {
    const {size} = useContainerSize()
    return (
        <nav className="h-full flex items-center px-5 group/menu">
      <ul className="h-full flex items-center justify-center">
        <li >
          <div>
            <span className="text-2xl">
            <RiMenuFill />
            </span>
          </div>
          <div className="invisible duration-300 absolute top-84px opacity-0 -right-5 group-hover/menu:visible group-hover/menu:right-0 group-hover/menu:opacity-100">
            <ul className="border border-gray-700 dark:border-gray-200 rounded-r-2xl bg-background" style={{width:(size/5) + "px"}}>{children}</ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
