import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/product";
import categorySlice from "./reducers/categoryReducers";

export const store = configureStore({
  reducer: {
    productSlice,
    categorySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
