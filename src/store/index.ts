import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import soupKitchenReducer, {
  selectLocations,
  getLocationsAsync,
  SoupKitchenModel,
} from "./soupKitchen/slice";

export { selectLocations, getLocationsAsync, SoupKitchenModel };

// had to keep this in same file to not get warnings about require cycles...very annoying :P
export const store = configureStore({
  reducer: {
    soupKitchen: soupKitchenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
