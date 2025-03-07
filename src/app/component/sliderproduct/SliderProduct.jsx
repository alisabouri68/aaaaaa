"use client"
import React from 'react'
import { FaPenAlt, FaPenFancy, FaPen, FaMouse, FaPrint } from "react-icons/fa";
import { BsCupHotFill } from "react-icons/bs";
import { TbGoGame } from "react-icons/tb";
import { GiSewingMachine } from "react-icons/gi";
import { GiSewingNeedle } from "react-icons/gi";
import Container from '../header/Container'
import { dbmegamenu } from '../header/db';
import { allproducts } from '../header/db';
import { CiShoppingBasket } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';
function SliderProduct({ styles, i, title, href, colorText, db, ap }) {
    const icons = [<FaPenAlt />, <FaPenFancy />, <FaPen />, <FaMouse />, <FaPrint />, <BsCupHotFill />, <TbGoGame />, <GiSewingMachine />, <GiSewingNeedle />]
    console.log(dbmegamenu[i].length)
    return (
        <section className={`${styles} flex min-h-96 w-full bgimage`}>
            <Container>
                <div className='w-full flex flex-col'>
                    <div className={`${styles} text-white items-center flex gap-5 py-5 px-3`}>
                        <div className='inline-block '><span className='text-3xl'>{icons[i]}</span></div>
                        <div className='text-2xl font-semibold'>{title}</div>
                        <div className=''><Link href={`/category/${href}`} className={`bg-white rounded-lg px-3 py-1 ${colorText}`}><span>مشاهده همه</span></Link></div>
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center justify-evenly'>
                            {dbmegamenu[i] ? dbmegamenu[i].submenu.map((item, index) => {
                                return (
                                  
                                    allproducts ? allproducts.map((val, ix) => {
                                        if (item[1] && item[1] === val.products) {
                                            return (
                                               <div>
                                                ddddd
                                               </div>
                                               
                                            )

                                        }
                                    }) : null
                                )
                            }) : null}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SliderProduct