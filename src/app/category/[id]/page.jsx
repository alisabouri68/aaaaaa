"use client";
import React, { use, useEffect } from "react";
import { allproducts } from "@/app/component/header/db";
function page({ params }) {
  const { id } = use(params);
  return (
    <div className="grid grid-cols-12 p-12">
      {allproducts.length > 0
        ? allproducts.map((items) => {
            const x = items.products.includes(id);
            return (
              x &&
              items.productsitems &&
              items.productsitems.map((xxx) => {
                return (
                  <div
                    key={xxx.id}
                    className="flex flex-col items-center col-span-3 border  p-5"
                  >
                    <img src={xxx.img[0]} alt="" />
                    <div>{xxx.desc}</div>
                    <div>{xxx.price}</div>
                  </div>
                );
              })
            );
          })
        : ""}
    </div>
  );
}

export default page;
