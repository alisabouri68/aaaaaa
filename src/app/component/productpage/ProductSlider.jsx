import React, { useState } from 'react'
import Image from 'next/image'
import img from '../../../../public/img/logo.png'
import { UseDataStore } from '@/app/zustand/useDataStore';
function ProductSlider({product}) {
    const { dataProduct } = UseDataStore()
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    return (
        <div className=''>
            {dataProduct && dataProduct.map(items => {
                const findProduct = items.title+"-"+items.id
                if (findProduct === product) {
                    return (
                        <div key={items.id} className='relative shadow dark:shadow-gray-200 shadow-gray-500 rounded-2xl h-full'>
                            <Image
                                className='w-full h-full object-cover rounded-lg'
                                src={items.img[selectedImageIndex]}
                                width={600}
                                height={600}
                                alt={items.title}
                            />

                            <div className='absolute bottom-4 left-0 right-0 mx-auto max-w-[90%]'>
                                <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
                                    {items.img.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImageIndex(index)}
                                            className={`shrink-0 p-1 rounded-lg transition-all  ${index === selectedImageIndex
                                                    ? 'bg-amber-500 '
                                                    : 'bg-gray-800 hover:bg-amber-600'
                                                }`}
                                        >
                                            <div className='relative w-16 h-16'>
                                                <Image
                                                    src={item || img}
                                                    fill
                                                    sizes="(max-width: 768px) 64px, 96px"
                                                    className='rounded-md object-cover'
                                                    alt={`${items.title} thumbnail ${index + 1}`}
                                                />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }
            }
            )
            }
        </div>
    )
}

export default ProductSlider

