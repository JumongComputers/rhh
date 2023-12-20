import { BookingTypes } from "@/types/booking";
import axios from "axios";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const bookingService = {
  createBooking: async (bookingData: BookingTypes): Promise<BookingTypes> => {
    const response = await axios.post(`${baseApi}/booking`, bookingData);
    return response.data;
  },

  verifyPayment: async (referenceNum: string): Promise<any> => {
    try {
      const response = await axios.get(`${baseApi}/booking/verify-payment/${referenceNum}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to verify payment: ${error.message}`);
    }
  },

  getBooking: async (): Promise<BookingTypes> => {
    const response = await axios.get(`${baseApi}/booking`);
    return response.data;
  },
};

export default bookingService;
