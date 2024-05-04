import { InterviewDTO } from "@/types";
import axios from "axios";
import { getToken } from "../token";

export const getAllInterview = (): Promise<InterviewDTO[]> => {
  const token=getToken()
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/interview`,{
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
