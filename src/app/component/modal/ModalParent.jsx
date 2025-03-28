"use client"
import React, { useEffect } from 'react'
import { ModalParentHandler } from '@/app/zustand/ModalStoreParent'
import FilterPrice from "@/app/component/filtering/filterprice/FilterPrice";
import FilterCountry from "@/app/component/filtering/filtercountry/FilterCountry";
import SearchInput from '../header/SearchInput';
function ModalParent() {
  const { isModal, setIsModal, index } = ModalParentHandler()
  useEffect(() => {
    if (isModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isModal]);
  return (
    <div className={`w-screen overflow-hidden items-end justify-center absolute right-0 bg-[#0000008a] dark:bg-[#a5a3a38c] ${index === 3 ?"z-50 top-0 h-screen pt-24":"z-0 top-[103px] h-[90vh]"} ${isModal ? 'flex' : 'hidden'}`} onClick={setIsModal}>

      <div
        className={`flex justify-center bg-background p-5 min-w-full  ${index === 3 ? " min-h-[100%] rounded-t-4xl" : " min-h-[50%] items-center rounded-t-2xl"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {index === 2 ? <FilterPrice /> :
          index === 3 ? <SearchInput /> :
            index === 1 ? <FilterCountry styles="rounded-lg min-w-full grid gap-5" styles2="flex items-center justify-around " /> :
              null}
      </div>

    </div>
  )
}

export default ModalParent