"use client"
import React, { useEffect, useRef, useState } from 'react'
import Container from '../header/Container'
import { UseDataStore } from '@/app/zustand/useDataStore';
import Link from 'next/link';
import Card from '../cardItem/Card';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useContainerSize } from '@/app/zustand/UseContainerSiza';

function HomeProduct({ itemss }) {
    const { size } = useContainerSize();
    const { SetDataProduct, dataProduct } = UseDataStore();
    const [showButtons, setShowButtons] = useState(false);
    const slidref = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        fetch("https://67cd78d0dd7651e464ee7491.mockapi.io/api/v1/products")
            .then(response => response.json())
            .then(data => SetDataProduct(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [SetDataProduct]);

    useEffect(() => {
        const checkOverflow = () => {
            if (slidref.current) {
                const hasOverflow = slidref.current.scrollWidth > slidref.current.clientWidth;
                setShowButtons(hasOverflow);
            }
        };
        
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [dataProduct, size]);

    const nextSlideHandler = () => {
        if (!slidref.current) return;
        slidref.current.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    };

    const prevSlideHandler = () => {
        if (!slidref.current) return;
        slidref.current.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    };

    return (
        <Container>
            <section 
                className="w-full shadow-md dark:shadow-gray-500 rounded-2xl relative bg-gray-200 dark:bg-gray-700"
                ref={containerRef}
            >
                <div className='w-full flex flex-col'>
                    <div className="flex items-center justify-between gap-5 py-5 px-3">
                        <h2 className='text-lg font-semibold'>{itemss[0]}</h2>
                        <Link
                            href={`/category/writing-supplies/${itemss[1]}`}
                            className="text-sx rounded-lg px-3 py-1 transition-colors"
                        >
                            مشاهده همه
                        </Link>
                    </div>
                    <div className='w-full overflow-x-hidden' ref={slidref}>
                        <div className='flex px-3 flex-nowrap w-max *:w-[180px] *:lg:w-[220px]'>
                            {dataProduct?.map(item => {
                                if (item.title === itemss[1]) {
                                    return (
                                        <Card
                                            key={item.id}
                                            xxx={item}
                                            styleSlide="min-w-[200px] lg:min-w-[240px] max-h-[260px] shrink-0"
                                            darkstyle="bg-white text-black"
                                        />
                                    )
                                }
                                return null;
                            })}
                        </div>
                    </div>
                    {showButtons && (
                        <>
                            <div className='absolute top-[50%] right-0'>
                                <button 
                                    onClick={prevSlideHandler} 
                                    className='bg-background text-amber-500 p-2 text-2xl rounded-l-lg'
                                >
                                    <FaAngleRight />
                                </button>
                            </div>
                            <div className='absolute top-[50%] left-0'>
                                <button 
                                    onClick={nextSlideHandler} 
                                    className='bg-background text-amber-500 p-2 text-2xl rounded-r-lg'
                                >
                                    <FaAngleLeft />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </Container>
    )
}

export default HomeProduct;