"use client"
import React from "react";
import Slider from "./component/slider/Slider";
import SliderProduct from "./component/sliderproduct/SliderProduct";
function page() {

  return (
    <main className="grow min-h-screen flex flex-col gap-10 ">
      <Slider />
      <SliderProduct />
    </main>

  )



}

export default page;
