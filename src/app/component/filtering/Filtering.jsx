"use client";
import React from "react";
import { VscChevronDown } from "react-icons/vsc";
import { useAccordionStore } from "@/app/zustand/UseAccordionStor";
import FilterPrice from "./filterprice/FilterPrice";
import FilteringBrand from "./filteringbrand/FilteringBrand";
import FilterCountry from './filtercountry/FilterCountry'
function Filtering({slug}) {
  const { isOpen, setIsopen } = useAccordionStore();

  const items = [
    "بر اساس برند",
    "بر اساس کشور سازنده",
    "محدوده قیمت",
  ];

  return (
    <div className="sticky flex flex-col top-10 right-0 h-[80vh] shadow shadow-gray-700 dark:shadow-gray-200 min-w-full rounded-2xl overflow-hidden text-foreground bg-background">
      {items.length > 0
        ? items.map((accordion, index) => {
          return (
            <div
              key={index}
              className={`${isOpen === index ? "grow" : "grow-0"
                } shadow shadow-gray-700 dark:shadow-gray-200  px-5 transition-all `}

            >
              <div className="flex items-center justify-between  py-5" onClick={() => setIsopen(index)}>
                <div>
                  <h4 className="text-lg font-semibold">{accordion}</h4>
                </div>
                <div>
                  <span>
                    <VscChevronDown
                      className={`${isOpen === index ? "rotate-180" : "rotate-none"
                        } transition-all text-2xl`}
                    />
                  </span>
                </div>
              </div>
          
              {index === 2 ? <FilterPrice styles={`${isOpen === index ? 'h-auto pt-10' : 'h-0'} overflow-hidden flex flex-col gap-20 duration-500`} /> :
                index === 100000000 ? <FilteringBrand styles={`${isOpen === index ? 'h-auto pt-10' : 'h-0'} overflow-hidden flex flex-col gap-5 duration-500`} /> :
                  index === 1 ? <FilterCountry styles={`${isOpen === index ? 'h-auto pt-10' : 'h-0'} overflow-hidden flex flex-col gap-5 duration-500`} /> :
                    null}
            </div>
          );
        })
        : null}
    </div>
  );
}

export default Filtering;
