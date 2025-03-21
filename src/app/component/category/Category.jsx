"use client";
import React, { useEffect, useRef, useState } from "react";
import { dbmegamenu } from "@/app/component/header/db";
import Container from "../header/Container";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useContainerSize } from "@/app/zustand/UseContainerSiza";
import Image from "next/image";
import { UseDataStore } from "@/app/zustand/useDataStore";
import Card from "../cardItem/Card";


function Category({ id }) {

    const { dataProduct, SetDataProduct } = UseDataStore()
    const { size } = useContainerSize()
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [dataProductSlice, setDataProductSlice] = useState([])
    const [flagPagination, setFlagPagination] = useState(1)
    const [buttonPagination , setButtonPagination]=useState(0)
    useEffect(() => {
        fetch("https://67cd78d0dd7651e464ee7491.mockapi.io/api/v1/products")
            .then(response => response.json())
            .then(data => SetDataProduct(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [SetDataProduct]);
    useEffect(() => {
        if (dataProduct.length === 0) return;
        const paginationCount = 8;
        const startIndex = (flagPagination - 1) * paginationCount;
        const endIndex = flagPagination * paginationCount;
        setDataProductSlice(dataProduct.slice(startIndex, endIndex));
        setButtonPagination(dataProduct.length / 8)
    }, [flagPagination, dataProduct]);
    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - size);
        setScrollLeft(sliderRef.current.scrollLeft);
        e.preventDefault();
    };

    const whileDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - size;
        const walk = (x - startX) * 0.9;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    const scrollToLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -size,
                behavior: "smooth",
            });
        }
    };
    const scrollToRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: size,
                behavior: "smooth",
            });
        }
    };
    console.log(dataProductSlice)
    return (
        <section className="my-3 mx-4">
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col w-full overflow-hidden bg-gray-200 p-4 dark:bg-gray-600 rounded-lg relative">
                        <div>
                            <h6 className="text-lg font-semibold">دسته بندی ها</h6>
                        </div>
                        <div
                            className="flex overflow-hidden *:shrink-0 cursor-grab select-none"
                            ref={sliderRef}
                            onMouseDown={startDrag}
                            onMouseMove={whileDrag}
                            onMouseUp={endDrag}
                            onMouseLeave={endDrag}
                        >
                            {dbmegamenu && dbmegamenu.length > 0 ? (
                                dbmegamenu.map((item) => {
                                    if (item.menu?.[1] === id) {
                                        return item.submenu?.map((val, i) => (
                                            <div
                                                className="p-3 flex"
                                                key={i}
                                                style={{ minWidth: size / 6 + "px" }}
                                            >
                                                <div className="w-full rounded-lg gap-1 grid overflow-hidden bg-gray-200 dark:bg-gray-600 shadow shadow-gray-500 dark:shadow-gray-400 p-2">
                                                    <Image
                                                        src={val[2]}
                                                        width={300}
                                                        height={300}
                                                        alt={val[0]}
                                                        className="rounded-lg w-[300px] h-[300px]"
                                                        draggable="false"
                                                    />
                                                    <span>{val[0]}</span>
                                                </div>
                                            </div>
                                        ));
                                    }
                                    return null;
                                })
                            ) : (
                                <p>No data available.</p>
                            )}
                        </div>
                        <div className="absolute top-[40%] left-0 overflow-hidden border text-amber-500 bg-gray-200 rounded-r-2xl text-4xl flex items-center justify-center h-24 w-12">
                            <button
                                className="w-full h-full flex items-center justify-center"
                                onClick={scrollToLeft}
                            >
                                <FaAngleLeft />
                            </button>
                        </div>
                        <div className="absolute top-[40%] right-0 overflow-hidden border text-amber-500 bg-gray-200 rounded-l-2xl text-4xl flex items-center justify-center h-24 w-12">
                            <button
                                className="w-full h-full flex items-center justify-center"
                                onClick={scrollToRight}
                            >
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap ">
                        <div className="flex lg:w-[30%]">
                            aaaa
                        </div>
                        <div className="flex flex-wrap lg:w-[70%] *:w-full *:md:w-[50%] *:lg:w-[33%] *:2xl:w-[25%]">
                            {dataProductSlice && dataProductSlice.map(items => {
                                return (
                                    <Card key={items.id} xxx={items} styleSlide="lg:flex" darkstyle="shadow shadow-gray-700 dark:shadow-gray-200" />
                                )

                            })

                            }
                        <div className="flex justify-center items-center gap-4 my-4  min-w-full">
                            <button
                                className={`px-4 py-2 rounded ${flagPagination === 1
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-amber-500 hover:bg-amber-600'
                                    }`}
                                onClick={() => setFlagPagination(prev => Math.max(1, prev - 1))}
                                disabled={flagPagination === 1}
                            >
                                قبلی
                            </button>

                            <div className="flex gap-2">
    {Array.from({ length: Math.ceil(dataProduct.length / 8) }).map(
      (_, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded ${
            flagPagination === index + 1
              ? "bg-amber-600 text-white"
              : "bg-amber-400 hover:bg-amber-500"
          }`}
          onClick={() => setFlagPagination(index + 1)}
        >
          {index + 1}
        </button>
      )
    )}
  </div>
                            <button
                                className={`px-4 py-2 rounded ${dataProductSlice.length < 8
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-amber-500 hover:bg-amber-600'
                                    }`}
                                onClick={() => setFlagPagination(prev => prev + 1)}
                                disabled={dataProductSlice.length < 8}
                            >
                                بعدی
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Category;