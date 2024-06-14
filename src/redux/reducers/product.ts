import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICategory, ILike, IProduct } from "@/types/app";

export interface Iinitial {
  products: IProduct[];
  product: IProduct | null;
  cart: ICart[];
  likes: ILike[];
}

const initialState: Iinitial = {
  products: [],
  product: null,
  cart: [],
  likes: [],
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
    SetLike: (state, action: PayloadAction<ILike[]>) => {
      state.likes = action.payload;
    },
    AddLike: (state, action: PayloadAction<ILike>) => {
      const index = state.likes.findIndex(
        (el) =>
          el.productId === action.payload.productId &&
          el.userId === action.payload.userId
      );

      if (index < -1) {
        state.likes = [...state.likes, action.payload];
      } else {
        state.likes = [
          ...state.likes.filter(
            (el) =>
              el.productId !== action.payload.productId &&
              el.userId !== action.payload.userId
          ),
        ];
      }
    },
    DeleteLike: (state, action: PayloadAction<string>) => {
      state.likes.filter((el) => el.id !== action.payload);
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
  AddLike,
  SetLike,
  DeleteLike,
} = productSlice.actions;

export default productSlice.reducer;
