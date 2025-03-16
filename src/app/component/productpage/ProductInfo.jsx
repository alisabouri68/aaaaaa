"use client"
import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { UseButtonAddBascket } from '@/app/zustand/UseButtonAddBascket';
import { UseDataStore } from '@/app/zustand/useDataStore';

function ProductInfo({ product }) {
  const { dataProduct } = UseDataStore();
  const { shoppingCart, setShoppingCart, removeShopingCart, increaseCounter, decreaseCounter } = UseButtonAddBascket();

  // Find product using more efficient method
  const selectedProduct = dataProduct.find(item => 
    `${item.title}-${item.id}` === product
  );

  // Check if product is in cart
  const isInCart = shoppingCart.some(item => item.id === selectedProduct?.id);

  // Handle price display
  const formatPrice = (price) => 
    new Intl.NumberFormat('fa-IR').format(price);

  if (!selectedProduct) {
    return <div className="p-5">محصول یافت نشد</div>;
  }

  return (
    <div className='p-5'>
      <div className='shadow dark:shadow-gray-200 shadow-gray-500 flex flex-col gap-5 w-full h-full p-5'>
        {/* Header Section */}
        <div className='flex items-center border-b border-gray-400 pb-2'>
          <MdOutlineKeyboardArrowLeft className='text-5xl text-amber-500' />
          <h3 className='text-lg lg:text-2xl pr-2'>
            {selectedProduct.description}
          </h3>
        </div>

        {/* Price Section */}
        <div className='flex items-center gap-10'>
          {selectedProduct.discount && (
            <s className="text-gray-400 text-lg">
              {formatPrice(selectedProduct.price)} تومان
            </s>
          )}
          <div className='flex items-center gap-2'>
            <span className="text-2xl text-amber-500">
              {formatPrice(
                selectedProduct.discount 
                  ? selectedProduct.price * (1 - selectedProduct.discount/100)
                  : selectedProduct.price
              )}
            </span>
            <span className="text-2xl">تومان</span>
          </div>
        </div>

        {/* Product Features */}
        <div className='flex flex-col gap-3'>
          <h6 className='text-lg'>ویژگی های محصول:</h6>
          <div className='flex flex-col gap-2 text-sm'>
            {selectedProduct.Feature?.length > 0 ? (
              selectedProduct.Feature.map((item, index) => (
                <span key={index}>• {item}</span>
              ))
            ) : <span>---</span>}
          </div>
        </div>

        {/* Color Selection */}
        <div className='flex items-center gap-3'>
          <h4>رنگ:</h4>
          <div className="flex gap-2">
            {selectedProduct.color?.length > 0 ? (
              selectedProduct.color.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))
            ) : <span>---</span>}
          </div>
        </div>

        {/* Country of Origin */}
        <div>
          <h4>کشور سازنده: {selectedProduct.country}</h4>
        </div>

        {/* Product Options */}
        {selectedProduct.select && (
          <select className="mt-4 p-2 border rounded-lg">
            <option value="">یک گزینه انتخاب کنید</option>
            {selectedProduct.select.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        )}

        {/* Cart Controls */}
        <div className='flex flex-col items-center text-xl gap-5 py-10'>
          <div className='flex items-center gap-5'>
            {isInCart ? (
              <>
                <button 
                  className='px-3 py-2 ring-2 ring-foreground hover:ring-amber-600 rounded-lg shadow'
                  onClick={() => increaseCounter(selectedProduct.id)}
                >
                  <FaPlus />
                </button>
                <span className="text-2xl min-w-[30px] text-center">
                  {shoppingCart.find(item => item.id === selectedProduct.id)?.counter || 0}
                </span>
                <button 
                  className='px-3 py-2 ring-2 ring-foreground hover:ring-amber-600 rounded-lg shadow'
                  onClick={() => decreaseCounter(selectedProduct.id)}
                >
                  <FaMinus />
                </button>
                <button 
                  className='px-3 py-2 ring-2 ring-foreground hover:ring-amber-600 rounded-lg shadow text-amber-500'
                  onClick={() => removeShopingCart(selectedProduct.id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </>
            ) : (
              <button 
                className='ring-2 ring-foreground hover:ring-amber-600 rounded-lg p-3 flex items-center gap-3'
                onClick={() => setShoppingCart(selectedProduct)}
              >
                <CiShoppingCart className='text-4xl border-l pl-1 text-amber-500' />
                <span className='text-sm lg:text-2xl'>افزودن به سبد خرید</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo