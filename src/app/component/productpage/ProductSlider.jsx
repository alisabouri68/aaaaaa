import React, { useState } from 'react'
import { allproducts } from '../header/db'
import { UseIndexSliderProductStore } from '@/app/zustand/UseIndexSliderProductStore'
import Image from 'next/image'

function ProductSlider() {
    const { indexImgSliderPruduct } = UseIndexSliderProductStore()
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    
    // Validate product existence
    if (!indexImgSliderPruduct ||
        indexImgSliderPruduct.length !== 2 ||
        !allproducts[indexImgSliderPruduct[0]] ||
        !allproducts[indexImgSliderPruduct[0]].productsitems[indexImgSliderPruduct[1]]) {
        return <div className="w-full h-full flex items-center justify-center text-red-500">
            Product not found
        </div>
    }

    const product = allproducts[indexImgSliderPruduct[0]].productsitems[indexImgSliderPruduct[1]]

    return (
        <div className=''>
            <div className='relative shadow shadow-amber-500 rounded-lg'>
                <Image
                    className='w-full h-full object-cover rounded-lg'
                    src={product.img[selectedImageIndex] }
                    width={600}
                    height={600}
                    alt={product.title}
                    priority
                    quality={1}
                />
                
                <div className='absolute bottom-4 left-0 right-0 mx-auto max-w-[90%]'>
                    <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
                        {product.img.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImageIndex(index)}
                                className={`shrink-0 p-1 rounded-lg transition-all  ${
                                    index === selectedImageIndex 
                                        ? 'bg-amber-400 ' 
                                        : 'bg-gray-800 hover:bg-amber-600'
                                }`}
                            >
                                <div className='relative w-16 h-16'>
                                    <Image
                                        src={item}
                                        fill
                                        sizes="(max-width: 768px) 64px, 96px"
                                        className='rounded-md object-cover'
                                        alt={`${product.title} thumbnail ${index + 1}`}
                                        quality={1}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider

