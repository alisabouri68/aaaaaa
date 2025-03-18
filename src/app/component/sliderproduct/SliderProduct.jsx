"use client"
import React, { useEffect, useRef } from 'react'
import { FaPenAlt } from "react-icons/fa";
import Container from '../header/Container'
import { UseDataStore } from '@/app/zustand/useDataStore';
import Link from 'next/link';
import Card from '../cardItem/Card';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
function SliderProduct() {
    const { SetDataProduct, dataProduct } = UseDataStore();
    useEffect(() => {
        fetch("https://67cd78d0dd7651e464ee7491.mockapi.io/api/v1/products")
            .then(response => response.json())
            .then(data => SetDataProduct(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [SetDataProduct]);
    const slidref = useRef();
    const nextSlideHandler = () => {
        if (!slidref.current) return;
        const slideWidth = slidref.current.children[0]?.children[0]?.offsetWidth || 0;
        slidref.current.scrollBy({
            left: slideWidth,
            behavior: "smooth",
        });
    };
    const prevSlideHandler = () => {
        if (!slidref.current) return;
        const slideWidth = slidref.current.children[0]?.children[0]?.offsetWidth || 0;
        slidref.current.scrollBy({
            left: -slideWidth,
            behavior: "smooth",
        });
    };
    return (
        <Container>
            <section className="w-full bg-rose-700 bgimage rounded-2xl relative">
                <div className='w-full flex flex-col'>
                    <div className="text-white flex items-center gap-5 py-5 px-3">
                        <div className='text-3xl'><FaPenAlt /></div>
                        <h2 className='text-2xl font-semibold'>لوازم تحریر</h2>
                        <Link
                            href="/category/writing-supplies"
                            className="bg-white rounded-lg px-3 py-1 text-rose-700 hover:bg-gray-100 transition-colors"
                        >
                            مشاهده همه
                        </Link>
                    </div>
                    <div className='w-full overflow-x-hidden' ref={slidref}>
                        <div className='flex px-3 flex-nowrap w-max *:w-[180px] *:lg:w-[220px] ' >
                            {dataProduct?.map(item => (
                                <Card
                                    key={item.id}
                                    xxx={item}
                                    styleSlide="min-w-[200px] lg:min-w-[240px] max-h-[260px] shrink-0 "
                                    darkstyle="bg-white text-black"
                                />
                            ))}
                        </div>
                    </div>
                    <div className='absolute top-[50%] left-0 '><button onClick={nextSlideHandler} className='bg-background text-amber-500 p-2 text-2xl rounded-l-lg'><span><FaAngleLeft /></span></button></div>
                    <div className='absolute top-[50%] right-0'><button onClick={prevSlideHandler} className='bg-background text-amber-500 p-2 text-2xl rounded-r-lg'><span><FaAngleRight /></span></button></div>
                </div>
            </section>
        </Container>
    )
}
export default SliderProduct