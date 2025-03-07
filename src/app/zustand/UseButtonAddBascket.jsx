import { create } from "zustand";
import { persist } from "zustand/middleware";

export const UseButtonAddBascket = create(
  persist(
    (set) => ({
      shoppingCart: [],
      setShoppingCart: (newProduct) =>
        set((state) => {
          const exists = state.shoppingCart.find(item => item.id === newProduct.id);
          if (!exists) {
            return {
              shoppingCart: [...state.shoppingCart, newProduct],
            };
          }
          return state;
        }),
      removeFromCart: (id) =>
        set((state) => ({
            shoppingCart: state.shoppingCart.filter(item => item.id !== id),
        })),
    }),
    {
      name: "shoppingCart"  
    }
  )
);