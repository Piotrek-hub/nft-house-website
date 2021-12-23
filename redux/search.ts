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
        type: state.type,
        price: state.price,
    }),
    setType: (state, action) => ({
        location: state.location,
        type: action.payload,
        price: state.price,
    }),
    setPrice: (state, action) => ({
        location: state.location,
        type: state.type,
        price: action.payload,
    }),
    setAll: (state, action) => (action.payload),
  }
});

// Action creators are generated for each case reducer function
export const { setLocation, setType, setPrice, setAll } = searchSlice.actions;

export default searchSlice.reducer;
