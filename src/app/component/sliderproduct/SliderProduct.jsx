"use client"
import React from 'react'
import { FaPenAlt, FaPenFancy, FaPen, FaMouse, FaPrint } from "react-icons/fa";
import { TbGoGame } from "react-icons/tb";
import { GiSewingMachine } from "react-icons/gi";
import { GiSewingNeedle } from "react-icons/gi";
import Container from '../header/Container'
import { dbmegamenu } from '../header/db';
import { allproducts } from '../header/db';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../../../public/img/logo.png'

function SliderProduct({ styles, i, title, href, colorText, }) {
    const icons = [<FaPenAlt />, <FaPenFancy />, <FaPen />, <FaMouse />, <FaPrint />, <TbGoGame />, <GiSewingMachine />, <GiSewingNeedle />]
    return (
        <section className={`${styles} flex min-h-full w-full bgimage`}>
            <Container>
                <div className='w-full h-full flex flex-col'>
                    <div className={`${styles} text-white items-center flex gap-5 py-5 px-3`}>
                        <div className='inline-block '><span className='text-3xl'>{icons[i]}</span></div>
                        <div className='text-2xl font-semibold'>{title}</div>
                        <div className=''><Link href={`/category/${href}`} className={`bg-white rounded-lg px-3 py-1 ${colorText}`}><span>مشاهده همه</span></Link></div>
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center justify-evenly py-3 *:shrink-0'>
                            {dbmegamenu[i] ? dbmegamenu[i].submenu.map((item, index) => {
                                return (

                                    allproducts ? allproducts.map((val, ix) => {
                                        if (item[1] && item[1] === val.products) {
                                            return (
                                                <div key={val.productsitems[3].id} className='px-4 max-w-sm *:w-full'>
                                                    <div  className="max-w-sm p-5 bg-white  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                                        <Link href="#" className='flex items-center justify-center '>
                                                            <Image
                                                                className="rounded-lg"
                                                                src={val.productsitems[3].img[0] || img }
                                                                alt={val.productsitems[3].desc}
                                                                width={250}
                                                                height={250}
                                                                quality={1}
                                                                 />

                                                        </Link>
                                                        <div className="px-5 pb-5">
                                                            <Link className='py-2' href="#">
                                                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{val.productsitems[3].desc}</h5>
                                                            </Link>
                                                            <div className="flex items-center mt-2.5 mb-5">
                                                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                    </svg>
                                                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                    </svg>
                                                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                    </svg>
                                                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                    </svg>
                                                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                                    </svg>
                                                                </div>
                                                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{val.productsitems[3].price}</span>
                                                                <Link href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>




                                            )

                                        }
                                    }) : <span>wwwwwwwwwwwwwwwwww</span>
                                )
                            }) : <span>fffffffffffffffffffffffff</span>}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SliderProduct