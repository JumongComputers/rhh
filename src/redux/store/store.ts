import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../slices/bookingSlice";
import adminReducer from "../slices/adminSlice";
import authReducer from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    admin: adminReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
