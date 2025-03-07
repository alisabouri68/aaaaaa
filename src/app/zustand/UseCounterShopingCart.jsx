import { create } from "zustand";
export const UseCounterShopingCart = create((set)=>({
    counter:1,
    increaseCounter:()=>set((state)=>({counter:state.counter+1})),
    decreaseCounter:()=>set((state)=>({counter:state.counter-1}))
}))