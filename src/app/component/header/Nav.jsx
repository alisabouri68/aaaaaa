"use client";
import React, {useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { useContainerSize } from '@/app/zustand/UseContainerSiza';

function Nav({ children }) {
    const { size } = useContainerSize();
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    return (
        <nav className="h-full flex items-center px-5">
            <ul className="h-full flex items-center justify-center">
                <li className="relative">
                    <div className="cursor-pointer" onClick={toggleNav}>
                        <span className="text-2xl">
                            <RiMenuFill />
                        </span>
                    </div>
                    <div
                        className={`${
                            navActive 
                                ? "opacity-100 visible translate-y-0" 
                                : "opacity-0 invisible -translate-y-2"
                        } absolute top-full -right-5 mt-2 transition-all duration-300 ease-in-out `}
                    >
                        <ul 
                            className="border border-gray-500 dark:border-gray-200 bg-background h-96 rounded-r-lg" 
                            style={{ width: (size / 5) + "px" }}
                        >
                            {children}
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;