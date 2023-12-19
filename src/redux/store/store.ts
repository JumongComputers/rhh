import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../slices/bookingSlice";
import adminReducer from "../slices/adminSlice";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    admin: adminReducer,
  },
});
