import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../services/adminService";
import { AddAdminTypes } from "@/types/admin";

interface AdminState {
  admins: AddAdminTypes[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AdminState = {
  admins: [],
  loading: "idle",
  error: null,
};

// Async thunk for adding a new admin
export const addAdmin = createAsyncThunk("admin/addAdmin", async (adminData: AddAdminTypes, thunkAPI) => {
  try {
    console.log("Adding admin with data:", adminData);
    const response = await adminService.addAdmin(adminData);
    console.log("Response from addAdmin:", response);
    return response;
  } catch (error) {
    console.error("Error adding admin:", error);
    throw error;
  }
});

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAdmin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addAdmin.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.admins = [action.payload];
      })
      .addCase(addAdmin.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default adminSlice.reducer;
