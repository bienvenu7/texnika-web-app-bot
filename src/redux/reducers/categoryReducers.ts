import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IPicture } from "@/types/app";

export interface Iinitial {
  category: ICategory[];
  pictures: IPicture[];
}

const initialState: Iinitial = {
  category: [],
  pictures: [],
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
  },
});

export const { SetCategories, SetPictures } = categorySlice.actions;

export default categorySlice.reducer;
