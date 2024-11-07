import { instance } from "@/instance";

export const getCategories = async () => {
  try {
    const response = await instance.get("category/get-all");
    return response.data;
  } catch (error) {
    return error;
  }
};
