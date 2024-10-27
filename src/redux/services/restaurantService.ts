import { RestaurantTypes } from "@/types/restaurant";
import axios from "axios";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const restaurantService = {
  createRestaurantBooking: async (bookingData: RestaurantTypes): Promise<RestaurantTypes> => {
    const response = await axios.post(`${baseApi}/booking/restaurant`, bookingData);
    console.log(response, "rita");

    return response.data;
  },

  getRestaurant: async (): Promise<any[]> => {
    try {
      const response = await axios.get(`${baseApi}/booking/restaurant`);
      console.log("all restaurant:", response);
      return response.data.data.data.booking;
    } catch (error: any) {
      throw new Error(`Failed to get all restaurant: ${error.message}`);
    }
  },

  deleteRestaurantBooking: async (bookingId: string): Promise<void> => {
    try {
      const response = await axios.delete(`${baseApi}/booking/restaurant/${bookingId}`);
    } catch (error: any) {
      throw new Error(`Failed to delete booking: ${error.message}`);
    }
  },
};

export default restaurantService;
