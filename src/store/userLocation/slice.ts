import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store";

interface userLocationState {
  coords: {
    readonly lat: string;
    readonly long: string;
    }
  }

const initialState: userLocationState = {
  coords: {
    lat: '',
    long: ''
  }
};

const userLocationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<any>) {
      const geoData = action.payload.coords;
      state.coords.lat = geoData.latitude;
      state.coords.long = geoData.longitude;
    },
  },
});

export const { setLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;
