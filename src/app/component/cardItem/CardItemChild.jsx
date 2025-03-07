'use client'
import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { UseButtonAddBascket } from '@/app/zustand/UseButtonAddBascket';
function CardItemChild({ filteredProducts, imageKeys, handleImageChange }) {
    const {setShoppingCart } = UseButtonAddBascket()
    return (
        <>
            {filteredProducts.length > 0 &&
                filteredProducts.map((xxx) => {
                    const currentImageKey = imageKeys[xxx.id] || 0;
                    return (
                        <div className="pl-3 pb-3 flex relative" key={xxx.id}>
                            <Link href={`/products/${xxx.title.split(" ").filter(Boolean).join("-") + xxx.id}`}  className="w-full overflow-hidden shadow shadow-amber-500 rounded-lg duration-300 dark:hover:bg-gray-500">
                                <div className="w-full h-full cardp bg-amber-400 "></div>
                                <div
                                    className="absolute top-[50%] left-[50%] bg-amber-200 min-w-56 min-h-56 max-w-56 max-h-56 rounded-full overflow-hidden ring-4 ring-amber-500"
                                    style={{ transform: "translate(-50% , -50%)" }}
                                >
                                    <Image
                                        className="w-full h-full object-cover"
                                        width={300}
                                        height={300}
                                        src={xxx.img[currentImageKey]?.trim() || "/default-image.jpg"}
                                        alt={xxx.desc}
                                    />
                                </div>
                                <div className="absolute ring-4 ring-amber-500 text-black bg-white rounded-full text-xs right-1 top-1 min-w-24 min-h-24 max-w-24 max-h-24 flex flex-wrap *:w-full *:flex *:items-center *:justify-center items-center justify-center">
                                    <span className={`${xxx.discount ? 'bg-red-600 rounded-full max-w-fit max-h-fit text-white px-1 py-1.5 translate-x-8 -translate-y-1 inline-block' : "hidden"}`}>
                                        {xxx.discount ? xxx.discount + '%' : null}
                                    </span>
                                    {xxx.discount ? <s className="text-gray-400 -translate-y-2">{xxx.price}</s> : null}
                                    <span className="-translate-y-2">{xxx.discount ? Math.abs((xxx.price * (xxx.discount / 100)) - xxx.price) : xxx.price}</span>
                                    <span className="-translate-y-2">تومان</span>
                                </div>
                                <div className="absolute top-5 left-5 text-black ">
                                    {xxx.title}
                                </div>
                            </Link>
                            <div className="flex justify-evenly absolute bottom-5 left-3 p-2 w-full">
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

                            </div>
                        </div>
                    );
                })}
        </>
    )
}

export default CardItemChild