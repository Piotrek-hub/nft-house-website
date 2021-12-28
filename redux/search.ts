import { createSlice } from "@reduxjs/toolkit";
import { SearchInterface } from "../types/interfaces";

const searchInitialState: SearchInterface = {
  location: "",
  type: "",
  price: ""
}

export const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,

  reducers: {
    setLocation: (state: SearchInterface, action) => ({
        location: action.payload,
        type: state.type,
        price: state.price,
    }),
    setType: (state: SearchInterface, action) => ({
        location: state.location,
        type: action.payload,
        price: state.price,
    }),
    setPrice: (state: SearchInterface, action) => ({
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
