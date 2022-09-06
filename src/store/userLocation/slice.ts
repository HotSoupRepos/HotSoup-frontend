import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store";



interface userLocationState {
    readonly lat: string;
    readonly long: string;
  }

const initialState: userLocationState = {
  lat: '',
  long: ''
};

const userLocationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<any>) {
    const geoData = action.payload;

    console.log('real talk, am I seeing anything?', geoData, geoData.coords)
  },
  },
});

export const { setLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;

// export const selectLocations = (state: RootState) => state.userLocation;
