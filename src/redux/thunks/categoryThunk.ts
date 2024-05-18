import { instance } from "@/instance";
import { ICategory } from "@/types/app";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { SetCategories } from "../reducers/categoryReducers";

export const SetCategoriesThunk = createAsyncThunk(
  "transactions/add",
  async (_, thunkApi) => {
    const response = await instance.get(`/category/get-all`);

    if (response.status === 200) {
      thunkApi.dispatch(SetCategories(response.data as ICategory[]));
      return "access";
    } else {
      return "denied";
    }
  }
);
