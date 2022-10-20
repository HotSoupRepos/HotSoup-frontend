import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "@apis";
import { SoupKitchenService } from "@services";
import { RootState } from "@store";

export interface SoupKitchenModel {
  readonly name: string;
  readonly address: string;
  readonly phone: string;
  readonly lat: string;
  readonly lng: string;
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
  "soupKitchens/getLocations",
  async () => {
    return new SoupKitchenService(new Api()).getLocations();
  }
);

export const soupKitchensSlice = createSlice({
  name: "soupKitchens",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocationsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLocationsAsync.fulfilled, (state, action) => {
      state.locations = action.payload;
      state.error = undefined;
      state.loading = false;
    });
    builder.addCase(getLocationsAsync.rejected, (state, action) => {
      const { message } = action.error;
      state.error = message;
      state.loading = false;
    });
  },
});

export default soupKitchensSlice.reducer;

export const selectLocations = (state: RootState) => {
  return state.soupKitchens;
};
