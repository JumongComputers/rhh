import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingService from "../services/bookingService";
import { BookingTypes } from "@/types/booking";

interface BookingState {
  bookings: BookingTypes[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  loading: "idle",
  error: null,
};

// Async thunk for creating a new booking
export const createBooking = createAsyncThunk("booking/createBooking", async (bookingData: BookingTypes, thunkAPI) => {
  try {
    console.log("Creating booking with data:", bookingData);
    const response = await bookingService.createBooking(bookingData);
    console.log("Response from createBooking:", response);
    return response;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
});

export const getAllBookings = createAsyncThunk("booking/getAllBookings", async (_, thunkAPI) => {
  try {
    const response = await bookingService.getAllBookings();
    return response;
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    throw error;
  }
});

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.bookings = [action.payload];
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
      })

      .addCase(getAllBookings.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.bookings = [action.payload];
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default bookingSlice.reducer;
