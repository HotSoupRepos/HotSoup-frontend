import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// refers to the types of the store is self
export type RootState = ReturnType<typeof store.getState>;

// refers to the types of reducers
export type AppDispatch = typeof store.dispatch;
