import { APIResponse, authDTO } from "@/types";
import axios from "axios";

export const resetPassword = (data: authDTO):Promise<APIResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, data)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
