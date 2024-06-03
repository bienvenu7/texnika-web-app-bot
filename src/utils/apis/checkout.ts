import { instance } from "@/instance";
import { ICart, IOrder } from "@/types/app";

export const checkout = async (cart: IOrder) => {
  try {
    const response = await instance.post(`checkout/${cart.userId}`, cart);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createOrder = async (cart: IOrder) => {
  try {
    const response = await instance.post(
      `checkout/create-order/${cart.userId}`,
      cart
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
