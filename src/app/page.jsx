"use client"
import React from "react";
import Slider from "./component/slider/Slider";
import SliderProduct from "./component/sliderproduct/SliderProduct";
import { dbmegamenu } from "./component/header/db";
function page() {
 
  return (
    <main className="grow flex flex-col gap-10 ">
      <Slider />
     {/*  {dbmegamenu ? dbmegamenu.map((item , index) => {
        return (
          <SliderProduct key={index}  i={index} styles={color[index][1]} title={item.menu[0]} href={item.menu[1]} colorText={color[index][0]} />

        )
      }): <span>vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</span> } */}
    </main>

  )



}

export default page;
