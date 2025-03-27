"use client";
import React, {useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { useContainerSize } from '@/app/zustand/UseContainerSiza';
import { ModalHandler } from "@/app/zustand/ModalStore";
function Nav({ children}) {
    const { size } = useContainerSize();
    const{modal,setModal}=ModalHandler()

    const toggleNav = () => {
        setModal()
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
                            modal 
                                ? "opacity-100 visible translate-y-0" 
                                : "opacity-0 invisible -translate-y-2"
                        } absolute top-full -right-5 mt-2 transition-all duration-300 ease-in-out `}
                    >
                        <ul 
                            className="shadow-md shadow-gray-200 dark:shadow-gray-500 bg-background min-h-[90vh] rounded-r-lg" 
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