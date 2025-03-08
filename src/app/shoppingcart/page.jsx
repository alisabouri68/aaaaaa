'use client'
import React from 'react'
import { UseButtonAddBascket } from '../zustand/UseButtonAddBascket'
import Image from 'next/image'
import { RiDeleteBin6Line } from "react-icons/ri";
import Container from '../component/header/Container'
import img from '../../../public/img/logo.png'
function ShoppingCart() {
    const { shoppingCart, removeFromCart } = UseButtonAddBascket()
    return (

        <main className='flex grow h-[70vh] overflow-y-scroll scrollbar-hide'>
            <Container>
                <div className=''>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        تصویر
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        محصول
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        تعداد
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        تخفیف
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        قیمت
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        حذف
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {shoppingCart&&shoppingCart.length>0 ? shoppingCart.map((product, index) => (

                                    <tr key={product.id} className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="p-4">
                                            <Image
                                                className="w-16 md:w-32 max-w-full max-h-full rounded-lg"
                                                src={product.img && product.img[0] ? product.img[0] :img}
                                                alt={product.title || "logo"}
                                                width={200}
                                                height={200}
                                                quality={1}
                                            />

                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {product.desc}
                                        </td>
                                        <td className="px-6 py-4">
xxxxxxxxxxxxxxxxx
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {product.discount ? product.discount + "%" : "-"}
                                        </td>
                                        <td className="px-6 py-4 h-full font-semibold text-gray-900 dark:text-white">
                                            <span className="">{product.discount ? Math.abs((product.price * (product.discount / 100)) - product.price) : product.price}</span>
                                            <span className="">تومان</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button href="#" className="font-medium text-amber-600 text-3xl hover:underline cursor-pointer" onClick={() => removeFromCart(product.id)}>
                                                <RiDeleteBin6Line />
                                            </button>
                                        </td>
                                    </tr>
                                )) : <tr>
                                <td colSpan="6" className="text-center h-[65vh]">سبد خرید خالی است</td>
                            </tr>

                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </main>

    )
}

export default ShoppingCart