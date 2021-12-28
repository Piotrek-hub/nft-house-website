import { configureStore } from "@reduxjs/toolkit";
import accountReucer from "./account";
import searchReducer from "./search";

export default configureStore({
  reducer: {
    account: accountReucer,
    search: searchReducer,
  }
});
