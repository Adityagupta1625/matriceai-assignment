import { InterviewDetailsDTO } from "@/types";
import axios from "axios";
import { getToken } from "../token";

export const getAllInterviewDetails = (interviewId: string): Promise<InterviewDetailsDTO[]> => {
  const token=getToken()
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/interviewDetails?interviewId=${interviewId}`,{
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
