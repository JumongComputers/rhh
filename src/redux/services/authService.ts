import { LoginTypes } from "@/types/auth";
import axios from "axios";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const authService = {
  login: async (loginData: LoginTypes): Promise<LoginTypes> => {
    try {
      const response = await axios.post(`${baseApi}/users/login`, loginData);

      const accessToken = response.data.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      return response.data;
    } catch (error: any) {
      throw new Error(`Login failed: ${error.message}`);
    }
  },
};

export default authService;
