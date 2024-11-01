import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import restaurantService from "../services/restaurantService";
import { RestaurantTypes } from "@/types/restaurant";
import { toast } from "react-toastify";

interface BookingState {
  restaurants: RestaurantTypes[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookingState = {
  restaurants: [],
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

export const deleteRestaurantBooking = createAsyncThunk("restaurant/deleteRestaurantBooking", async (bookingId: string, thunkAPI) => {
  try {
    await restaurantService.deleteRestaurantBooking(bookingId);
    return bookingId; // Return the Id so you can remove it from the state
  } catch (error) {
    console.error("Error deleting admin:", error);
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
        state.restaurants = [action.payload];
      })
      .addCase(createRestaurantBooking.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
      })
      .addCase(deleteRestaurantBooking.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteRestaurantBooking.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const deletedBookingId = action.payload;
        // Remove the deleted admin from the state
        state.restaurants = state.restaurants.filter((admin) => admin._id !== deletedBookingId);
      })
      .addCase(deleteRestaurantBooking.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
        toast.error("Failed to Delete Booking");
      })
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
