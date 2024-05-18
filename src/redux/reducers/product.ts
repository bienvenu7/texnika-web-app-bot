import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICategory, IProduct } from "@/types/app";

export interface Iinitial {
  products: IProduct[];
  product: IProduct | null;
  cart: ICart[];
}

const initialState: Iinitial = {
  products: [],
  product: null,
  cart: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    SetAllProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    SetProduct: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
    AddToCart: (state, action: PayloadAction<ICart>) => {
      const index = state.cart.findIndex((el) => el.id === action.payload.id);

      if (index === -1) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart[index].items = action.payload.items;
        state.cart = [...state.cart];
      }
    },
    IncrimentCart: (state, action: PayloadAction<ICart>) => {
      const index = state.cart.findIndex((el) => el.id === action.payload.id);
      state.cart[index].items += 1;
      state.cart = [...state.cart];
    },
    DecrimentCart: (state, action: PayloadAction<ICart>) => {
      const index = state.cart.findIndex((el) => el.id === action.payload.id);
      if (index !== -1) {
        if (state.cart[index].items > 1) {
          state.cart[index].items -= 1;
          state.cart = [...state.cart];
        } else {
          state.cart = [
            ...state.cart.filter((el) => el.id !== action.payload.id),
          ];
        }
      }
    },
    DeleteItemToCart: (state, action: PayloadAction<ICart>) => {
      state.cart.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const {
  SetAllProducts,
  SetProduct,
  AddToCart,
  DeleteItemToCart,
  DecrimentCart,
  IncrimentCart,
} = productSlice.actions;

export default productSlice.reducer;
