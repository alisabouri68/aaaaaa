import { create } from "zustand";
import { persist } from "zustand/middleware";

export const UseButtonAddBascket = create(
  persist(
    (set, get) => ({
      shoppingCart: [],
      counter: 1,

      // Add or update a product in the shopping cart
      setShoppingCart: (newProduct) =>
        set((state) => {
          const exists = state.shoppingCart.find((item) => item.id === newProduct.id);

          if (exists) {
            // Update quantity if the product already exists
            return {
              shoppingCart: state.shoppingCart.map((item) =>
                item.id === newProduct.id
                  ? { ...item, counter: (item.counter || 1) + 1 }
                  : item
              ),
            };
          }

          // Add new product with counter set to 1
          return {
            shoppingCart: [...state.shoppingCart, { ...newProduct, counter: 1 }],
          };
        }),

      // Remove a product from the shopping cart
      removeShopingCart: (id) =>
        set((state) => ({
          shoppingCart: state.shoppingCart.filter((item) => item.id !== id),
        })),

      // Increase the counter for a specific product
      increaseCounter: (id) =>
        set((state) => ({
          shoppingCart: state.shoppingCart.map((item) =>
            item.id === id && (item.counter || 1) < 10
              ? { ...item, counter: item.counter + 1 }
              : item
          ),
        })),

      // Decrease the counter for a specific product
      decreaseCounter: (id) =>
        set((state) => ({
          shoppingCart: state.shoppingCart.map((item) =>
            item.id === id && (item.counter || 1) > 1
              ? { ...item, counter: item.counter - 1 }
              : item
          ),
        })),
    }),
    {
      name: "shoppingCart", // Name for persisted storage
    }
  )
);