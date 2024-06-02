import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IPicture } from "@/types/app";

export interface Iinitial {
  category: ICategory[];
  pictures: IPicture[];
  openModal: boolean;
  userId: number;
}

const initialState: Iinitial = {
  category: [],
  pictures: [],
  openModal: false,
  userId: 0,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    SetCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.category = action.payload;
    },
    SetPictures: (state, action: PayloadAction<IPicture[]>) => {
      state.pictures = action.payload;
    },
    SetOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    SetuserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  },
});

export const { SetCategories, SetPictures, SetOpenModal, SetuserId } =
  categorySlice.actions;

export default categorySlice.reducer;
