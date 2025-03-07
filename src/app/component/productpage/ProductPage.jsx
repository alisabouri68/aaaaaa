"use client"
import React, { useEffect, useState } from 'react'
import Container from '../header/Container'
import { allproducts } from '../header/db'
import ProductTop from './ProductTop'
import ProductMain from './ProductMain'
import ProductButtom from './ProductButtom'
import { UseIndexSliderProductStore } from '@/app/zustand/UseIndexSliderProductStore'
function ProductPage({ product, children }) {
    const { indexImgSliderPruduct, setIndexImgSliderPruduct } = UseIndexSliderProductStore()
    const decodedUrl = decodeURIComponent(product)
    const item = decodedUrl.split('-').filter(Boolean).join(" ")
    const [productsItemsIndex, setProductsItemsIndex] = useState([])

    useEffect(() => {
        let found = false
        allproducts.map((a, b) => {
            a.productsitems.map((c, d) => {
                const e = c.title + c.id
                if (e === item) {
                    setProductsItemsIndex([b, d])
                    setIndexImgSliderPruduct([b, d])
                    found = true
                }
            })
        })
        if (!found) {
            setProductsItemsIndex([-1, -1])
        }
    }, [item])

    if (productsItemsIndex[0] === -1 || productsItemsIndex[1] === -1) {
        return <main className='w-screen h-screen flex items-center justify-center text-yellow-500'>Product not found</main>
    }

    return (
        <main className='flex items-center justify-center grow'>
            <Container>
                <div className='flex flex-col items-center'>
                    <ProductTop />
                    <ProductMain />
                    <ProductButtom />
                </div>

            </Container>
            {children}
        </main>
    )
}

export default ProductPage

