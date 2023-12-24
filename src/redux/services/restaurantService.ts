import axios from "axios";
import { baseApi } from "./authService";

const restaurantService = {
  getRestaurant: async (): Promise<any[]> => {
    try {
      const response = await axios.get(`${baseApi}/restaurant`);
      console.log("all restaurant:", response);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to get all admins: ${error.message}`);
    }
  },
};

export default restaurantService;
