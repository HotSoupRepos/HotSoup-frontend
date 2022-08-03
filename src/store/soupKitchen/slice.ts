import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "@apis";
import { SoupKitchenService } from "@service";
import { RootState } from "@store";

export interface SoupKitchenModel {
  readonly name: string;
  readonly address: string;
  readonly phone: string;
  readonly lat: string;
  readonly long: string;
}

interface SoupKitchenState {
  locations: SoupKitchenModel[];
  error: string | undefined;
  loading: boolean;
}

const initialState: SoupKitchenState = {
  locations: [],
  error: undefined,
  loading: false,
};

export const getLocationsAsync = createAsyncThunk(
  "soupKitchen/getLocations",
  async () => new SoupKitchenService(new Api()).getLocations()
);

export const soupKitchenSlice = createSlice({
  name: "soupKitchen",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocationsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLocationsAsync.fulfilled, (state, action) => {
        state.locations = action.payload;
        state.error = undefined;
        state.loading = false;
      })
      .addCase(getLocationsAsync.rejected, (state, action) => {
        const { message } = action.error;
        state.error = message;
        state.loading = false;
      });
  },
});

export default soupKitchenSlice.reducer;

export const selectLocations = (state: RootState) => state.soupKitchen;
