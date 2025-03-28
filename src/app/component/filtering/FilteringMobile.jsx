"use client";
import React, { useEffect} from "react";
import { VscChevronDown } from "react-icons/vsc";
import FilterPrice from "./filterprice/FilterPrice";
import FilteringBrand from "./filteringbrand/FilteringBrand";
import FilterCountry from "./filtercountry/FilterCountry";
import { ModalParentHandler } from "@/app/zustand/ModalStoreParent";
function FilteringMobile() {
  const { isModal, setIsModal,setIndex  } = ModalParentHandler();

  const items = [
    "برند",
    "کشور سازنده",
    "قیمت",
  ];
  const clickHandler =(i)=>{
    setIsModal()
    setIndex(i)
  }

  return (
    <div className="flex items-center justify-evenly w-full mb-3">
      {items.length > 0
        ? items.map((itemm, index) => {
          return (
            <button
              key={index}
              className="shadow-md shadow-gray-200 dark:shadow-gray-700 p-4 rounded-lg"
              onClick={()=>clickHandler(index)}
            >
              <div className="flex items-center gap-5">
                <div>
                  <h4 className="text-xs font-semibold">{itemm}</h4>
                </div>
                <div className="">
                  <span className="">
                    <VscChevronDown />
                  </span>
                </div>
              </div>
            </button>
          );
        })
        : null}
    </div>
  );
}

export default FilteringMobile;