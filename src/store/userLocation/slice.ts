import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store";

// not sure i need an interfce that exports, atleast not from wht the documentions shows me. This implementation seems pretty stratigh forward..
// export interface SoupKitchenModel {
//   readonly name: string;
//   readonly address: string;
//   readonly phone: string;
//   readonly lat: string;
//   readonly long: string;
// }

interface userLocationState {
    readonly lat: string;
    readonly long: string;
  }

const initialState: userLocationState = {
  lat: '',
  long: ''
};

// I dont thing there is any async requirements here.. I think
// export const getLocationsAsync = createAsyncThunk(
//   "soupKitchen/getLocations",
//   async () => new SoupKitchenService(new Api()).getLocations()
// );

const userLocationSlice = createSlice({
  name: "useLocation",
  initialState,
  reducers: {
    SET_LOCATION: state => {
    //     state.lat = action.payload.latitude
    //   }
    console.log('the data is getting here or atleast the dispatch is')
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getLocationsAsync.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getLocationsAsync.fulfilled, (state, action) => {
//         state.locations = action.payload;
//         state.error = undefined;
//         state.loading = false;
//       })
//       .addCase(getLocationsAsync.rejected, (state, action) => {
//         const { message } = action.error;
//         state.error = message;
//         state.loading = false;
//       });
  },
});

export default userLocationSlice.reducer;

// export const selectLocations = (state: RootState) => state.userLocation;
