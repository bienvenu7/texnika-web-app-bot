import { instance } from "@/instance";
import { ILike } from "@/types/app";

export const getProducts = async () => {
  try {
    const response = await instance.get("/product/get-all");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProductsById = async (id: string) => {
  try {
    const response = await instance.get(`/product/get-products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getRating = async () => {
  try {
    const response = await instance.get(`/raiting`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addLike = async (data: ILike) => {
  try {
    const response = await instance.post(`/product/add-like`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getLikes = async () => {
  try {
    const response = await instance.get(`/product/get-like`);
    return response.data;
  } catch (error) {
    return error;
  }
};
