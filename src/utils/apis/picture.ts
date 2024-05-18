import { instance } from "@/instance";

export const getPictures = async (id: string) => {
  try {
    const response = await instance.get(`/photo/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPicturesAll = async () => {
  try {
    const response = await instance.get(`/photo`);
    return response.data;
  } catch (error) {
    return error;
  }
};
