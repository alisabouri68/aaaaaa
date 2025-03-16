"use client";
import React from "react";
import Nav from "./Nav";
import NavList from "./NavList";
import { FaPenAlt, FaPenFancy, FaPen, FaMouse, FaPrint } from "react-icons/fa";
import { TbGoGame } from "react-icons/tb";
import { GiSewingMachine } from "react-icons/gi";
import Link from "next/link";
import { useContainerSize } from "@/app/zustand/UseContainerSiza";
import { dbmegamenu } from "./db";
function RighHeader({ children }) {
  const { size } = useContainerSize();
  return (
    <div className="grow flex items-center">
      <Nav>
        {dbmegamenu &&
          dbmegamenu.map((item, index) => {
            return (
              <NavList
                href={`/category/${item.menu[1]}`}
                title={item.menu[0]}
                key={index}
                icons={<FaPenAlt />}
              >
                <ul
                  className="border border-gray-500 dark:border-gray-200 h-full duration-300 absolute top-0 flex flex-wrap *:w-[20%] p-3 rounded-l-lg"
                  style={{
                    width: size - size / 5 + "px",
                    right: size / 5 + "px",
                    background: "var(--background)",
                  }}
                >
                  {dbmegamenu[index].submenu.map((items, i) => {
                    return (
                      <li
                        key={i}
                        className="text-sm hover:text-amber-500 duration-300  flex items-center "
                      >
                        <Link href={`/category/${item.menu[1]}/${items[1]}`} className="border-r-4 border-amber-500 pr-3">
                          <span>{items[0]}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </NavList>
            );
          })}
      </Nav>
      {children}
    </div>
  );
}

export default RighHeader;
