'use client'
import React from 'react'
import Card from './Card';
import { UseDataStore } from '@/app/zustand/useDataStore';
function CardItemChild({ slug }) {
        const {dataProduct}=UseDataStore()
    return (
        <>
            {dataProduct &&
                dataProduct.map((item) => {
                  if(item.title === slug)
                    return (
                        <Card xxx={item} styleSlide="lg:flex"  key={item.id} darkstyle='shadow shadow-gray-700 dark:shadow-gray-200 '/>
                    );
                })}
        </>
    )
}

export default CardItemChild