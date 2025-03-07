import { create } from "zustand";
export const UseMinePriceStore = create((set)=>({
    minPrice: 0 ,
    maxPrice: 1000000 ,
    changeValueMax:(newVal)=>set({maxPrice:newVal}),
    changeValueMin:(newVal)=>set({minPrice:newVal})
}))