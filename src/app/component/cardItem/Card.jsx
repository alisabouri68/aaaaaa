'use client'
import React, { useState } from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import img from '../../../../public/img/logo.png'
import { UseButtonAddBascket } from '@/app/zustand/UseButtonAddBascket';
function Card({ xxx, styles, darkstyle, styleSlide }) {
    const { shoppingCart, setShoppingCart } = UseButtonAddBascket();
    const [imageKeys, setImageKeys] = useState({});
    const formatPrice = (price) => 
        new Intl.NumberFormat('fa-IR').format(price);
    
    const handleImageChange = (productId, imageIndex) => {
        setImageKeys(prevKeys => ({
            ...prevKeys,
            [productId]: imageIndex,
        }));
    };
    const currentImageKey = imageKeys[xxx.id] || 0;
    return (
        <div className=" pl-2 pb-2 flex">
            <div className={`flex flex-col grow rounded-lg overflow-hidden ${darkstyle} relative ${xxx.discount ? 'before' : ''} `}>
                <Link href={`/products/${xxx.title +"-"+xxx.id}`} className="flex flex-col justify-evenly  duration-500 h-[85%]">
                    <div className='flex items-center justify-center'>
                        {xxx.img[currentImageKey]?.trim() ? (
                            <Image
                                className="rounded-2xl object-cover lg:w-full lg:h-full"
                                width={150}
                                height={150}
                                src={xxx.img[currentImageKey].trim()}
                                alt={xxx.description}
                                unoptimized={true}
                                onError={(e) => {
                                    e.target.src = img;
                                }}
                            />
                        ) : <span>در حال بارگذاری</span>}


                    </div>

                    <div className='flex p-2'>
                        <p className='h-full w-full ellipsis-2 text-xs'>
                            {xxx.description}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center px-2 mb-8">

                        <span>  {xxx.discount ? <s className="text-gray-400 -translate-y-2">{formatPrice(xxx.price)}</s> : null}</span>

                        <div className='flex items-center gap-2'>
                            <span className="">{formatPrice(xxx.discount ? Math.abs((xxx.price * (xxx.discount / 100)) - xxx.price) : xxx.price)}</span>
                            <span className="">تومان</span>
                        </div>
                    </div>
                </Link>

                <div className={`${xxx.discount ? 'text-white text-sm absolute top-2 left-0.5' : "hidden"} `}>
                    {xxx.discount ? xxx.discount + ' % ' : null}
                </div>
                <div className={`bg-amber-500 h-[15%] ${styles}`}>
                    <div className={`hidden ${styleSlide} w-full items-center justify-center gap-2 absolute lg:top-[50%] xl:top-[55%] h-8 rounded-lg`}>
                        {xxx.img &&
                            xxx.img.map((_, i) => (
                                <span
                                    key={`${xxx.id}-${i}`}
                                    onClick={() => handleImageChange(xxx.id, i)}
                                    className={`${currentImageKey === i
                                        ? "min-w-6 max-w-6 min-h-4 max-h-4 bg-amber-600"
                                        : "min-w-3 max-w-3 min-h-3 max-h-3 bg-amber-500"
                                        } rounded-full flex cursor-pointer duration-500`}
                                ></span>
                            ))}</div>
                    {xxx.select === null ? <button className='flex w-full h-full items-center justify-center cursor-pointer text-4xl text-black' onClick={() => setShoppingCart(xxx)}>
                        <span>
                            <CiShoppingBasket />
                        </span>
                    </button> : <Link href={`/products/${xxx.title+"-"+xxx.id}`} className='flex w-full h-full items-center justify-center cursor-pointer lg:text-lg text-black'>
                     <span>
                    انتخاب گزینه ها
                     </span>
                    </Link>

                    }

                </div>

            </div>
        </div>
    )
}

export default Card