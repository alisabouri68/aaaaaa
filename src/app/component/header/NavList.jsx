
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ModalHandler } from "@/app/zustand/ModalStore";
function NavList({ icons, title, children , href}) {
  const {setModal}= ModalHandler()
  return (
    <li className="w-full px-2 group/set duration-300 group/set ">
      <Link className="flex py-3 duration-300 group-hover/set:text-amber-500" href={href} onClick={setModal} >
        <div className="flex items-center lg:gap-3 lg:mt-0 mt-10 font-semibold grow">
          <span className="hidden lg:flex text-lg text-gray-500">{icons}</span>
          <span className="text-xs lg:text-2xl">{title}</span>
        </div>
        <div className="lg:flex hidden justify-end w-[10%]">
          <span>
            <IoIosArrowBack />
          </span>
        </div>
      </Link>
      <div>{children}</div>
    </li>
  );
}

export default NavList;








