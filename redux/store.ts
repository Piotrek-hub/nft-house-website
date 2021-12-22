import { configureStore } from "@reduxjs/toolkit";
import accountReucer from "./account";

export default configureStore({
  reducer: {
    account: accountReucer
  }
});
