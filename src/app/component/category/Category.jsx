"use client";
import React, { useRef, useState} from "react";
import { dbmegamenu } from "@/app/component/header/db";
import Container from "../header/Container";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useContainerSize } from "@/app/zustand/UseContainerSiza";
function Category({ id }) {
    const {size} = useContainerSize()
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
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
    return (
        <section className="my-3 mx-4">
            <Container>
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
                            dbmegamenu.map((item, index) => {
                                if (item.menu?.[1] === id) {
                                    return item.submenu?.map((val, i) => (
                                        <div
                                            className="p-3 flex"
                                            key={i}
                                            style={{minWidth:size/6 + "px"}}
                                        >
                                            <div className="w-full rounded-lg gap-1 grid overflow-hidden bg-gray-200 dark:bg-gray-600 shadow shadow-gray-500 dark:shadow-gray-400 p-2">
                                                <img
                                                    src={val[2]}
                                                    alt={val[0]}
                                                    className="rounded-lg w-full h-full"
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
            </Container>
        </section>
    );
}

export default Category;