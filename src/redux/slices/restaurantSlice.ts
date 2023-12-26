import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { RestaurantTypes } from "@/types/booking";

import restaurantService from "../services/restaurantService";

interface BookingState {
  bookings: RestaurantTypes[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  loading: "idle",
  error: null,
};

// Async thunk for creating a new booking
export const createRestaurantBooking = createAsyncThunk("booking/createRestaurantBooking", async (bookingData: RestaurantTypes, thunkAPI) => {
  try {
    console.log("Creating Restaurant booking with data:", bookingData);
    const response = await restaurantService.createRestaurantBooking(bookingData);
    console.log("Response from createBooking:", response);
    return response;
  } catch (error) {
    console.error("Error creating Restaurant booking:", error);
    throw error;
  }
});





export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRestaurantBooking.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createRestaurantBooking.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.bookings = [action.payload];
      })
      .addCase(createRestaurantBooking.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
      })

  },
});

export default restaurantSlice.reducer;
