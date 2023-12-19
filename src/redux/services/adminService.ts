import axios from "axios";
import { AddAdminTypes } from "@/types/admin";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const adminService = {
  addAdmin: async (adminData: AddAdminTypes): Promise<AddAdminTypes> => {
    try {
      const response = await axios.post(`${baseApi}/users`, adminData);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to add admin: ${error.message}`);
    }
  },
};

export default adminService;
