'use client'
import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import img from '../../../../public/img/logo.png'
import { UseButtonAddBascket } from '@/app/zustand/UseButtonAddBascket';
function CardItemChild({ filteredProducts, imageKeys, handleImageChange }) {
    const { setShoppingCart } = UseButtonAddBascket()
    return (
        <>
            {filteredProducts.length > 0 &&
                filteredProducts.map((xxx) => {
                    const currentImageKey = imageKeys[xxx.id] || 0;
                    return (
                        <div className=" pl-5 pb-5 flex relative" key={xxx.id}>
                            <div className='flex flex-col grow min-h-full rounded-2xl overflow-hidden shadow shadow-gray-700 dark:shadow-gray-200'>
                                <Link href={`/products/${xxx.title.split(" ").filter(Boolean).join("-") + xxx.id}`} className="flex flex-col grow duration-300 dark:hover:bg-gray-500">
                                    <div className='h-full border border-red-700'>
                                        {xxx.img[currentImageKey]?.trim() ? (
                                            <Image
                                                className="w-full h-full object-fit"
                                                width={100}
                                                height={100}
                                                src={xxx.img[currentImageKey].trim()}
                                                alt={xxx.desc}
                                                quality={1}
                                            />
                                        ) : (
                                            <span>تصویر در حال بارگذاری است...</span>
                                        )}


                                    </div>
                                    <div className='h-[10%] flex p-2'>
                                        <p className='  h-full w-full truncate'>
                                            {xxx.desc}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-2 h-[35%] px-2">
                                        <span className={`${xxx.discount ? 'bg-red-500 rounded-full px-2 py-1 text-white w-full flex items-center justify-center' : "hidden"}`}>
                                            {xxx.discount ? xxx.discount + ' % ' + " تخفیف " : null}
                                        </span>
                                        <span>  {xxx.discount ? <s className="text-gray-400 -translate-y-2">{xxx.price}</s> : null}</span>

                                        <div className='flex items-center gap-2'>
                                            <span className="">{xxx.discount ? Math.abs((xxx.price * (xxx.discount / 100)) - xxx.price) : xxx.price}</span>
                                            <span className="">تومان</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className="flex w-full items-center justify-center gap-2  absolute top-[38%] left-[50%]" style={{ transform: 'translate(-50% , -50%' }}>
                                    {xxx.img &&
                                        xxx.img.map((_, i) => (
                                            <span
                                                key={`${xxx.id}-${i}`}
                                                onClick={() => handleImageChange(xxx.id, i)}
                                                className={`${currentImageKey === i
                                                    ? "min-w-6 max-w-6 min-h-4 max-h-4 bg-amber-600"
                                                    : "min-w-3 max-w-3 min-h-3 max-h-3 bg-amber-400"
                                                    } rounded-full flex cursor-pointer duration-500`}
                                            ></span>
                                        ))}</div>
                                <div className='bg-amber-400 flex justify-center text-5xl'>
                                    <button onClick={() => setShoppingCart(xxx)}>
                                        <span>
                                            <CiShoppingBasket />
                                        </span>
                                    </button>
                                </div>
                                {/* <div className="flex justify-evenly absolute bottom-5 left-3 p-2 w-full">
                                <div className=''>
                                    <button className=" min-w-12 min-h-12 ring-4 ring-amber-500 rounded-full bg-white cursor-pointer flex items-center justify-center border-none"
                                        onClick={()=>setShoppingCart(xxx)}
                                    >
                                        <span>
                                            <CiShoppingBasket className="text-4xl text-black" />
                                        </span>
                                    </button>
                                </div>
                                <div className=" flex gap-2 items-center">
                                    {xxx.img &&
                                        xxx.img.map((_, i) => (
                                            <span
                                                key={`${xxx.id}-${i}`}
                                                onClick={() => handleImageChange(xxx.id, i)}
                                                className={`${currentImageKey === i
                                                    ? "min-w-4 max-w-4 min-h-4 max-h-4 bg-amber-400"
                                                    : "min-w-3 max-w-3 min-h-3 max-h-3 bg-amber-200"
                                                    } rounded-full flex cursor-pointer`}
                                            ></span>
                                        ))}</div>

                            </div> */}
                            </div>
                        </div>
                    );
                })}
        </>
    )
}

export default CardItemChild