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
                icons={
                  index === 0 ? (
                    <FaPenAlt />
                  ) : index === 1 ? (
                    <FaPenFancy />
                  ) : index === 2 ? (
                    <FaPen />
                  ) : index === 3 ? (
                    <FaMouse />
                  ) : index === 4 ? (
                    <TbGoGame />
                  ) : index === 5 ? (
                    <GiSewingMachine />
                  ) : (
                    ""
                  )
                }
              >
                <ul
                  className={`${
                    index === 0 ? "z-10" : ""
                  } border border-gray-700 dark:border-gray-200 h-full duration-300 absolute top-0   flex flex-wrap opacity-100 *:w-[20%] p-3 group-hover/set:z-20 group-hover/set:opacity-100`}
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
                        className="text-sm hover:text-amber-500 duration-300"
                      >
                        <Link href={`/category/${item.menu[1]}/${items[1]}`}>
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
