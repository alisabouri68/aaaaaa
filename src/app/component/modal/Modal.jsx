"use client"
import React from 'react'
import { ModalHandler } from '@/app/zustand/ModalStore'
function Modal() {
    const {modal , setModal}=ModalHandler()
  return (
  
<>
<div className={`w-screen h-screen absolute top-0 right-0 bg-gray-900 opacity-80 ${modal?'flex':'hidden'}`} onClick={setModal}>

</div>

</>
)
  
}

export default Modal