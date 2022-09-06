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
    //     state.lat = action.payload.latitude
    //   }
    console.log('the data is getting here or atleast the dispatch is')
  },
  },
});

export const { setLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;

// export const selectLocations = (state: RootState) => state.userLocation;
