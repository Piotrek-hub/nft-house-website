import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: "",
    metamaskConnection: false,
  },
  reducers: {
    setAccount: (state, action) => ({account: action.payload, metamaskConnection: true}),
  }
});

// Action creators are generated for each case reducer function
export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
