"use client";
import React, { useState, useEffect } from "react";
import { allproducts } from "@/app/component/header/db";
import { notFound } from "next/navigation";
import { UseMinePriceStore } from "@/app/zustand/UseMinePriceStore";
import { UseFilterBrandIndex } from "@/app/zustand/UseFilterBrandIndex";
import { UseFilterBrandStore } from "@/app/zustand/UseFilterBrandStore";
import { UseFilterCountryStore } from "@/app/zustand/UseFilterCountryStore";
import { UseFilterCountryIndex } from "@/app/zustand/UseFilterCountryIndex";
import CardItemChild from "./CardItemChild";
function CardItems({ slug }) {
  const { setCountryIndex } = UseFilterCountryIndex();
  const { countryValue } = UseFilterCountryStore();
  const { setBrandIndex } = UseFilterBrandIndex();
  const { brandValue } = UseFilterBrandStore();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [numberIndeex, setNumberIndeex] = useState(null);
  const { minPrice, maxPrice } = UseMinePriceStore();
  const [imageKeys, setImageKeys] = useState({});
  useEffect(() => {
    const foundIndex = allproducts.findIndex(item => item.products.includes(slug));
    if (foundIndex === -1) notFound();
    setNumberIndeex(foundIndex);
    setBrandIndex(foundIndex);
    setCountryIndex(foundIndex);
  }, [slug]);
  useEffect(() => {
    if (numberIndeex !== null) {
      const initialProducts = allproducts[numberIndeex] || [];
      let result = initialProducts.productsitems;
      if (brandValue && brandValue !== "تمام برند ها") result = result.filter(p => p.brand === brandValue);
      if (countryValue && countryValue !== "تمام کشور ها") result = result.filter(p => p.country === countryValue);
      if (minPrice) result = result.filter(p => p.price >= Number(minPrice));
      if (maxPrice) result = result.filter(p => p.price <= Number(maxPrice));
      setFilteredProducts(result);
    }
  }, [numberIndeex, minPrice, maxPrice, brandValue, countryValue]);
  if (!allproducts[0].productsitems) return <div>Loading...</div>;
  const handleImageChange = (productId, imageIndex) => {
    setImageKeys(prevKeys => ({
      ...prevKeys,
      [productId]: imageIndex,
    }));
  };
  return (
  <>
  <CardItemChild 
  filteredProducts={filteredProducts} 
  imageKeys={imageKeys}
  handleImageChange={handleImageChange}/>
  </>
  );
}
export default CardItems;