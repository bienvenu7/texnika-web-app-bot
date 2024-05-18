import { instance } from "@/instance";
import { ICart } from "@/types/app";

export const checkout = async (cart: ICart[]) => {
  try {
    const response = await instance.post("checkout", cart);
    return response.data;
  } catch (error) {
    return error;
  }
};
