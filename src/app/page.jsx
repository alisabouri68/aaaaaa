"use client"
import React from "react";
import Slider from "./component/slider/Slider";
import SliderProduct from "./component/sliderproduct/SliderProduct";
import { dbmegamenu } from "./component/header/db";
function page() {
  const color = [
    ['text-red-400','bg-red-400'],
    ['text-sky-400','bg-sky-400'],
    ['text-amber-400','bg-amber-400'],
    ['text-green-400','bg-green-400'],
    ['text-pink-400','bg-pink-400'],
    ['text-yellow-400','bg-yellow-400'],
    ['text-gray-400','bg-gray-400'],
    ['text-purple-400','bg-purple-400']
  ]
  return (
    <main className="grow flex flex-col gap-10 ">
      <Slider />
      {dbmegamenu ? dbmegamenu.map((item , index) => {
        return (
          <SliderProduct key={index}  i={index} styles={color[index][1]} title={item.menu[0]} href={item.menu[1]} colorText={color[index][0]} />

        )
      }): <span>vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</span> }
    </main>

  )



}

export default page;
