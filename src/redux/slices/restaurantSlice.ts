import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../services/adminService";
import { AddAdminTypes } from "@/types/admin";
import { toast } from "react-toastify";
import restaurantService from "../services/restaurantService";

interface AdminState {
  restaurants: AddAdminTypes[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AdminState = {
  restaurants: [],
  loading: "idle",
  error: null,
};

// Async thunk for getting all admins
export const getRestaurantBookings = createAsyncThunk("restaurant/getRestaurantBookings", async (_, thunkAPI) => {
  try {
    const response = await restaurantService.getRestaurant();
    return response;
  } catch (error) {
    console.error("Error getting all admins:", error);
    throw error;
  }
});

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getRestaurantBookings.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getRestaurantBookings.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.restaurants = action.payload;
      })
      .addCase(getRestaurantBookings.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default restaurantSlice.reducer;
