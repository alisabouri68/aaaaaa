import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
function NavList({ icons, title, children , href}) {
  return (
    <li className="w-full px-2 group/set duration-300 group/set">
      <Link className="flex py-3 duration-300 group-hover/set:text-amber-500" href={href} >
        <div className="flex items-center font-semibold gap-3 grow">
          <span className="text-lg text-gray-500">{icons}</span>
          <span>{title}</span>
        </div>
        <div className="flex justify-end w-[10%]">
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








