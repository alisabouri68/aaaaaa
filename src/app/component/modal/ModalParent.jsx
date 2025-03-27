"use client"
import React from 'react'
import { ModalParentHandler } from '@/app/zustand/ModalStoreParent'
function ModalParent({children}) {
    const {isModal , setIsModal}=ModalParentHandler()
  return (
    <div className={`w-screen h-screen items-end justify-center fixed top-0 right-0 bg-[#000000cf]   ${isModal?'flex':'hidden'}`} onClick={setIsModal}>
        
        <div 
                className="flex items-center justify-center bg-background p-5 min-w-full min-h-[50%] rounded-t-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>

    </div>
  )
}

export default ModalParent