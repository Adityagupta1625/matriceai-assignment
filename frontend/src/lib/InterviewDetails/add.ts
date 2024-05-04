import { APIResponse, InterviewDetailsDTO } from "@/types";
import axios from "axios";
import { getToken } from "../token";

export const addInterviewDetails = (data: Partial<InterviewDetailsDTO>):Promise<APIResponse> => {
  const token=getToken()
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/interviewDetails`, data, {
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
