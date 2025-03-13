"use client"
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { allproducts } from '../header/db'
import { UseIndexSliderProductStore } from '@/app/zustand/UseIndexSliderProductStore'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { UseButtonAddBascket } from '@/app/zustand/UseButtonAddBascket';
function ProductInfo() {
  const { shoppingCart, setShoppingCart, removeShopingCart, increaseCounter, decreaseCounter } = UseButtonAddBascket();
  const [flag ,setFlag] = useState(true)
  console.log(shoppingCart[0].counter)
  const { indexImgSliderPruduct } = UseIndexSliderProductStore()
  if (!indexImgSliderPruduct ||
    indexImgSliderPruduct.length !== 2 ||
    !allproducts[indexImgSliderPruduct[0]] ||
    !allproducts[indexImgSliderPruduct[0]].productsitems[indexImgSliderPruduct[1]]) {
    return <div className="w-full h-full flex items-center justify-center text-red-500">
      Product not found
    </div>
  }
  const product = allproducts[indexImgSliderPruduct[0]].productsitems[indexImgSliderPruduct[1]]
  const xxxxx = () => {
    setShoppingCart(product)
    setFlag(false)
  }
  return (
    <div className='p-5'>
      <div className='shadow dark:shadow-gray-200 shadow-gray-500 flex flex-col gap-5 w-full h-full p-5'>
        <div>
          <div className='flex items-center border-b border-gray-400'>
            <div >
              <span className='text-5xl text-amber-500'>
                <MdOutlineKeyboardArrowLeft />
              </span>
            </div>
            <div>
              <h3 className='text-lg lg:text-2xl'>
                {product.desc}
              </h3>
            </div>
          </div>
        </div>
        <div className='grow'>
          <div className='flex flex-col gap-3'>
            <div>
              <h6 className='text-lg'>
                ویژگی های محصول  :
              </h6>
            </div>
            <div className='flex flex-col gap-3 text-sm'>
              {product.feature.length > 0 ? product.feature.map((item, index) => {
                return (
                  <span key={index}>{item}</span>
                )
              }) : <span>---</span>}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <h4> رنگ : </h4>
            {product.color.length > 0 ? product.color.map((item, index) => {
              return (
                <div key={index}>{item}</div>
              )
            }) : <span>---</span>}
          </div>
          <div>
            <h4>کشور سازنده : {product.country}</h4>
          </div>
        </div>
        <div className='flex flex-col items-center text-xl gap-5 py-10'>
          <div>
            <span>
              {product.price} تومان
            </span>
          </div>
          <div className='flex items-center gap-5'>
            {
              flag ? <div>
                <button className='ring-2 ring-foreground hover:ring-amber-600 transition-all rounded-lg p-3 flex items-center gap-3 cursor-pointer' onClick={xxxxx}>
                  <div><span><CiShoppingCart className='text-4xl border-l border-l-foreground pl-1 text-amber-500' />
                  </span></div>
                  <div><span className='text-sm lg:text-2xl'>افزودن به سبد خرید</span></div>
                </button>
              </div> :
               <div className='flex items-center gap-5'>
                <div>
                  <button className='px-3 py-2 ring-2 ring-foreground hover:ring-amber-600 transition-all rounded-lg shadow dark:shadow-gray-200 shadow-gray-500' onClick={() => increaseCounter(product.id)}>
                    <FaPlus />
                  </button>
                </div>
                <div className='min-w-2.5 max-w-2.5'><span className='text-2xl'>
                  {
                    shoppingCart && shoppingCart.map(item => {
                      if (item.id === product.id) {
                        return (
                          item.counter
                        )
                      }
                    })
                  }</span></div>
                <div>
                  <button className='px-3 py-2 ring-2 ring-foreground hover:ring-amber-600 transition-all rounded-lg shadow dark:shadow-gray-200 shadow-gray-500' onClick={() => decreaseCounter(product.id)}>
                    <FaMinus />
                  </button>
                </div>
              </div>
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo