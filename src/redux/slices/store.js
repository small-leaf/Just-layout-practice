import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
