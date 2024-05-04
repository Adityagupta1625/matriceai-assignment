import { APIResponse, InterviewDTO } from "@/types";
import axios from "axios";
import { getToken } from "../token";

export const addInterview = (data: Partial<InterviewDTO>):Promise<APIResponse> => {
  const token=getToken()
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/interview`, data, {
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
