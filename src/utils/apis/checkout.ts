import { instance } from "@/instance";

export const checkout = async () => {
  try {
    const response = await instance.post(
      "checkout",
      {},
      {
        headers: {
          "Access-Control-Allow-Origin": "https://localhost:8181/",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
