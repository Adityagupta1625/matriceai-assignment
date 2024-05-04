import { InterviewDetailsDTO } from "@/types";
import axios from "axios";
import { getToken } from "../token";

export const updateInterviewDetails = (
  data: Partial<InterviewDetailsDTO>,
  id: string
): Promise<InterviewDetailsDTO> => {
  const token = getToken();
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API_URL}/interviewDetails/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
