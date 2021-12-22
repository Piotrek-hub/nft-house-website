import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    location: "",
    type: "",
    price: ""
  },
  reducers: {
    setLocation: (state, action) => ({
        location: action.payload,
        type: "",
        price: "",
    }),
    setType: (state, action) => ({
        location: "",
        type: action.payload,
        price: "",
    }),
    setPrice: (state, action) => ({
        location: "",
        type: "",
        price: action.payload,
    }),
    setAll: (state, action) => action.payload
  }
});

// Action creators are generated for each case reducer function
export const { setLocation, setType, setPrice, setAll } = searchSlice.actions;

export default searchSlice.reducer;
