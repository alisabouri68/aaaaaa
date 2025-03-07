import { create } from "zustand";
export const UseFilterCountryIndex = create((set)=>({
    countryIndex:null,
    setCountryIndex:(newIndex)=>set({countryIndex:newIndex})
}))