import { RootState } from "../store";

export const selectAllProducts = (state: RootState) =>
  state.productSlice.products;

export const selectProducts = (state: RootState) => state.productSlice.product;

export const selectCart = (state: RootState) => state.productSlice.cart;

export const selectPictures = (state: RootState) =>
  state.categorySlice.pictures;

export const selectOpenModal = (state: RootState) =>
  state.categorySlice.openModal;

export const selectUserId = (state: RootState) => state.categorySlice.userId;
