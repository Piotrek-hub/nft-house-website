import { createSlice } from "@reduxjs/toolkit";
import { AccountInterface } from "../types/interfaces";

const accountInitialState: AccountInterface = {
  account: "",
  metamaskConnection: false
}

export const accountSlice = createSlice({
  name: "account",
  initialState: accountInitialState,
  reducers: {
    setAccount: (state:AccountInterface, action) => ({account: action.payload, metamaskConnection: true}),
  }
});

// Action creators are generated for each case reducer function
export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
