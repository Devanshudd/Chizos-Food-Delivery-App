import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userLocation",
  initialState: {
    cityName: "Ahmedabad, Gujarat",
    displayName: "Ahmedabad, Gujarat",
    latitude: "23.0225",
    longitude: "72.5714",
  },
  reducers: {
    setUserLocation: (state, action) => {
      state.cityName = action.payload.name;
      state.displayName = action.payload.display_name;
      state.latitude = action.payload.lat;
      state.longitude = action.payload.lon;
    },
  },
});

export const { setUserLocation } = userSlice.actions;
export default userSlice.reducer;
