import { APIResponse } from "@/types";
import axios from "axios";
import { getToken } from "../token";

export const deleteInterview = (id: string): Promise<APIResponse> => {
  const token=getToken()
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/interview/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};