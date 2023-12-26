import { RestaurantTypes } from "@/types/booking";
import axios from "axios";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const restaurantService = {
  createRestaurantBooking: async (bookingData: RestaurantTypes): Promise<RestaurantTypes> => {
    const response = await axios.post(`${baseApi}/booking/restaurant`, bookingData);
    return response.data;
  }
};

export default restaurantService;
