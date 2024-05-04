import { InterviewDTO } from "@/types";
import axios from "axios";
import { getToken } from "../token";

export const updateInterview = (data:Partial<InterviewDTO>,id: string): Promise<InterviewDTO> => {
  const token=getToken()
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_API_URL}/interview/${id}`,data,{
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