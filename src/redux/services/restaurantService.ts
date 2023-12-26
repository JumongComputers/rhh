import axios from "axios";
import { baseApi } from "./authService";

const restaurantService = {
  getRestaurant: async (): Promise<any[]> => {
    try {
      const response = await axios.get(`${baseApi}/booking/restaurant`);
      console.log("all restaurant:", response);
      return response.data.data.data.booking;
    } catch (error: any) {
      throw new Error(`Failed to get all admins: ${error.message}`);
    }
  },
};

export default restaurantService;
